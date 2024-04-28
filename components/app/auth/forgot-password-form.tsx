"use client";

import config from "@/config";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import React from "react";
import { useForm } from "react-hook-form";
import { ForgotPasswordSchema } from "@/libs/validation/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import {
  AuthErrorMessage,
  checkErrorMessage,
} from "@/libs/validation/error-check";

type FormData = z.infer<typeof ForgotPasswordSchema>;

const ForgotPasswordForm = () => {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const validateEmail = (email: string) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalidEmail = React.useMemo(() => {
    if (email === "") return false;
    return !validateEmail(email);
  }, [email]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(ForgotPasswordSchema) });

  async function onSubmit(data: FormData) {
    const email = data.email.toLowerCase();
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: siteConfig.links.auth.resetPassword.href,
      });

      setIsLoading(false);

      if (!error) {
        return toast({
          title: AuthErrorMessage.ResetPassword.title,
          description: AuthErrorMessage.ResetPassword.description,
          variant: AuthErrorMessage.ResetPassword.variant,
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

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 p-4">
      <div className="w-full text-left">
        <p className="pb-2 text-xl font-medium">
          Reset Password to {config.appName}{" "}
        </p>
        <p className="text-small text-default-500">
          Fill in your email address to reset your password
        </p>
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
        <Button color="primary" disabled={isLoading} type="submit">
          {isLoading && (
            <span className="loading loading-spinner loading-xs"></span>
          )}
          {siteConfig.links.auth.resetPassword.label}
        </Button>
      </form>

      <p className="text-center text-small">
        Do you have an account?&nbsp;
        <Link href={siteConfig.links.auth.login.href} size="sm">
          {siteConfig.links.auth.login.label}
        </Link>
      </p>
      <p className="text-center text-small">
        Need to create an account?&nbsp;
        <Link href={siteConfig.links.auth.signup.href} size="sm">
          {siteConfig.links.auth.signup.label}
        </Link>
      </p>
    </div>
  );
};

export default ForgotPasswordForm;
