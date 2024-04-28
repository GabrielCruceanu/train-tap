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
import { SignUpSchema } from "@/libs/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import {
  AuthErrorMessage,
  checkErrorMessage,
} from "@/libs/validation/error-check";
import { AuthProvider } from "@/ts/enum";
import { useRouter } from "next/navigation";

type FormData = z.infer<typeof SignUpSchema>;

const SignUpForm = () => {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  } = useForm<FormData>({ resolver: zodResolver(SignUpSchema) });

  async function onSubmit(data: FormData) {
    const { email, password, confirmPassword } = data;
    setIsLoading(true);

    try {
      if (password !== confirmPassword) {
        setIsLoading(false);
        return toast({
          title: AuthErrorMessage.DifferentPassword.title,
          description: AuthErrorMessage.DifferentPassword.description,
          variant: AuthErrorMessage.DifferentPassword.variant,
        });
      }

      const {
        data: { user },
        error,
      } = await supabase.auth.signUp({
        email: email.toLowerCase(),
        password,
        options: {
          emailRedirectTo: `${location.origin}/api/auth/callback`,
        },
      });

      setIsLoading(false);

      if (!error && user) {
        router.replace(siteConfig.links.application.dashboard.href);

        return toast({
          title: AuthErrorMessage.SuccessSignUp.title,
          description: AuthErrorMessage.SuccessSignUp.description,
          variant: AuthErrorMessage.SuccessSignUp.variant,
        });
      }

      if (error) {
        const errorToast = checkErrorMessage(error);
        return toast(errorToast);
      }
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
        <p className="pb-2 text-xl font-medium">Sign up to {config.appName} </p>
        <p className="text-small text-default-500">
          Sign up to {config.appName} to get started with your journey.
        </p>
      </div>

      <div className="flex w-full flex-col gap-2">
        <Button
          startContent={<Icon icon="flat-color-icons:google" width={24} />}
          variant="bordered"
          disabled={isLoading}
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
          disabled={isLoading}
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
          value={password}
          placeholder="Enter your password"
          type={isVisible ? "text" : "password"}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect="off"
          variant="bordered"
          disabled={isLoading}
          {...register("password")}
          onChange={(e) => setPassword(e.target.value)}
          color={errors?.password ? "danger" : "default"}
          errorMessage={errors?.password?.message}
        />
        {/*Confirm Password*/}
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
          value={confirmPassword}
          {...register("confirmPassword")}
          onChange={(e) => setConfirmPassword(e.target.value)}
          color={errors?.password ? "danger" : "default"}
          errorMessage={errors?.password?.message}
        />
        <p className="text-center text-small px-1 py-2">
          By signing up, you agree to our&nbsp;
          <Link
            className="text-default-500"
            href={siteConfig.links.legal.tos.href}
            size="sm"
          >
            {siteConfig.links.legal.tos.label}
          </Link>{" "}
          and{" "}
          <Link
            className="text-default-500"
            href={siteConfig.links.legal.privacyPolicy.href}
            size="sm"
          >
            {siteConfig.links.legal.privacyPolicy.label}
          </Link>
        </p>
        <Button color="primary" disabled={isLoading} type="submit">
          {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          {siteConfig.links.auth.signup.label}
        </Button>
      </form>

      <p className="text-center text-small">
        Do you have an account?&nbsp;
        <Link href={siteConfig.links.auth.login.href} size="sm">
          {siteConfig.links.auth.login.label}
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
