"use client";

import config from "@/config";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Provider } from "@supabase/supabase-js";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/libs/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import {
  AuthErrorMessage,
  checkErrorMessage,
} from "@/libs/validation/error-check";
import { AuthProvider } from "@/ts/enum";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalidEmail = React.useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(LoginSchema) });

  async function onSubmit(data: FormData) {
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email: data.email.toLowerCase(),
        password: data.password,
      });

      console.log("user", user);
      if (user) {
        const { data: users, error } = await supabase.from("users").select("*");

        // TODO - Add user to context
        // if (users) {
        //   const user = users[0] as TypedUserDetails;
        //   console.log("userDetails", user);
        //   setUser(user);
        // }
      }
      setIsLoading(false);

      if (!error && !user) {
        return toast({
          title: AuthErrorMessage.CheckTheEmail.title,
          description: AuthErrorMessage.CheckTheEmail.description,
          variant: AuthErrorMessage.CheckTheEmail.variant,
        });
      }

      if (error) {
        const errorToast = checkErrorMessage(error);
        return toast(errorToast);
      }

      location.replace(siteConfig.links.application.dashboard.href);
    } catch (error: any) {
      console.log("Error thrown:", error.message);

      const errorToast = checkErrorMessage(error);
      return toast(errorToast);
    }
  }

  async function loginWithProvider(provider: AuthProvider) {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider as Provider,
        options: {
          queryParams: {
            access_type: "offline",
            prompt: "consent",
          },
        },
      });
      if (error) {
        return toast({
          title: error.name,
          description: error.message,
          variant: "destructive",
        });
      }
      router.refresh();
    } catch (error: any) {
      console.log("Error thrown:", error.message);

      return toast({
        title: error.title,
        description: error.message,
        variant: "destructive",
      });
    }
  }

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
      <div className="w-full text-left">
        <p className="pb-2 text-xl font-medium">Sign-in to {config.appName} </p>
        <p className="text-small text-default-500">
          Log in to your account to continue
        </p>
      </div>

      <div className="flex w-full flex-col gap-2">
        <Button
          startContent={<Icon icon="flat-color-icons:google" width={24} />}
          variant="bordered"
          disabled={isLoading || isDisabled}
          onClick={() => {
            loginWithProvider(AuthProvider.Google);
          }}
        >
          {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          Continue with Google
        </Button>
        <Button
          startContent={
            <Icon
              className="text-default-500"
              icon="devicon:apple"
              width={24}
            />
          }
          variant="bordered"
          disabled={isLoading || isDisabled}
          onClick={() => {
            loginWithProvider(AuthProvider.Apple);
          }}
        >
          {" "}
          {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          Continue with Apple
        </Button>
      </div>

      <div className="flex w-full items-center gap-4 py-2">
        <Divider className="flex-1" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <Divider className="flex-1" />
      </div>

      <form
        className="flex w-full flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*Email*/}
        <Input
          id="email"
          label="Email Address"
          placeholder="Enter your email"
          autoComplete="email"
          type="email"
          value={email}
          autoCorrect="off"
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
          required
          color={isInvalidEmail ? "danger" : "default"}
          isInvalid={isInvalidEmail}
          variant="bordered"
          errorMessage={errors?.email?.message}
        />
        {/*Password*/}
        <Input
          endContent={
            <button type="button" onClick={toggleVisibility}>
              {isVisible ? (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-closed-linear"
                />
              ) : (
                <Icon
                  className="pointer-events-none text-2xl text-default-400"
                  icon="solar:eye-bold"
                />
              )}
            </button>
          }
          label="Password"
          id="password"
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect="off"
          variant="bordered"
          disabled={isLoading}
          value={password}
          {...register("password")}
          onChange={(e) => setPassword(e.target.value)}
          color={errors?.password ? "danger" : "default"}
          errorMessage={errors?.password?.message}
        />
        <div className="flex items-center justify-between px-1 py-2">
          {/* <Checkbox name="remember" size="sm">
            Remember for 15 days
          </Checkbox> */}
          <p className="text-center text-small">
            Do you lost your password?&nbsp;
          </p>{" "}
          <Link
            className="text-default-500"
            href={siteConfig.links.auth.forgotPassword.href}
            size="sm"
          >
            {siteConfig.links.auth.forgotPassword.label}
          </Link>
        </div>
        <Button
          color="primary"
          disabled={isLoading || isDisabled}
          type="submit"
        >
          {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          {siteConfig.links.auth.login.label}
        </Button>
      </form>

      <p className="text-center text-small">
        Need to create an account?&nbsp;
        <Link href={siteConfig.links.auth.signup.href} size="sm">
          {siteConfig.links.auth.signup.label}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
