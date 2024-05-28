import { va } from '@vercel/analytics';
import { AuthResponseError, ToastVariant } from "@/ts/enum";

export const AuthErrorMessage = {
  CheckTheEmail: {
    title: "Check your email",
    description: "Check your email for the confirmation link",
    variant: ToastVariant.default,
  },
  ResetPassword: {
    title: "Reset password",
    description: "The password reset link has been sent to your email",
    variant: ToastVariant.default,
  },
  SuccessSignUp: {
    title: "Sign up success",
    description: "Check your email for the confirmation link",
    variant: ToastVariant.default,
  },
  DifferentPassword: {
    title: "Different passwords",
    description: "The passwords do not match",
    variant: ToastVariant.destructive,
  },
  InvalidLoginCredentials: {
    title: "Credentials invalid",
    description: "Email or password is incorrect",
    variant: ToastVariant.destructive,
  },
  EmailNotConfirmed: {
    title: "Email not confirmed",
    description: "Email address has not been confirmed",
    variant: ToastVariant.destructive,
  },
  EmailUsedToMuch: {
    title: "Multiple requests",
    description:
      "Email has been used to much, please try again later or contact support",
    variant: ToastVariant.destructive,
  },
};

export const OnboardingMessage = {
  Client: {
    Success: {
      title: "Client profile",
      description: "Profile created successfully",
      variant: ToastVariant.default,
    },
    Error: {
      title: "Error",
      description: "Sorry, an error occurred",
      variant: ToastVariant.destructive,
    },
  },
  Trainer: {
    Success: {
      title: "Trainer profile",
      description: "Profile created successfully",
      variant: ToastVariant.default,
    },
    Error: {
      title: "Error",
      description: "Sorry, an error occurred",
      variant: ToastVariant.destructive,
    },
  },
};

export const UserMessage = {
  UserName: {
    Success: {
      title: "Username",
      description: "Username created successfully",
      variant: ToastVariant.default,
    },
    Update: {
      title: "Username",
      description: "Username updated successfully",
      variant: ToastVariant.default,
    },
    Error: {
      title: "Error",
      description: "Sorry, an error occurred",
      variant: ToastVariant.destructive,
    },
  },
  User: {
    Success: {
      title: "User",
      description: "User created",
      variant: ToastVariant.default,
  }
};
export function checkErrorMessage(error: any) {
  console.log("error?.message", error?.message);
  switch (error?.message) {
    case AuthResponseError.InvalidLoginCredentials:
      return {
        title: AuthErrorMessage.InvalidLoginCredentials.title,
        description: AuthErrorMessage.InvalidLoginCredentials.description,
        variant: AuthErrorMessage.InvalidLoginCredentials.variant,
      };
    case AuthResponseError.EmailNotConfirmed:
      return {
        title: AuthErrorMessage.EmailNotConfirmed.title,
        description: AuthErrorMessage.EmailNotConfirmed.description,
        variant: AuthErrorMessage.EmailNotConfirmed.variant,
      };
    default:
      return {
        title: error.name,
        description: error.message,
        variant: ToastVariant.destructive,
      };
  }
}
