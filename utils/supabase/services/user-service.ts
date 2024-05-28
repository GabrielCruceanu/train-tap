import { User } from "@/ts/types/user";
import { User as AuthUser } from "@supabase/auth-helpers-nextjs";
import { createClient } from "../client";
import { checkErrorMessage, UserMessage } from "@/libs/validation/error-check";
import { toast } from "@/components/ui/use-toast";

// Create UserName
export const createUserName = async ({
  user,
  username,
}: {
  user: AuthUser;
  username: string;
}) => {
  const supabase = createClient();

  const { error } = await supabase.from("usernames").upsert([
    {
      id: user.id,
      username,
    },
  ]);

  if (error) {
    console.log("Error thrown:", error.message);

    const errorToast = checkErrorMessage(error);
    return toast(errorToast);
  }
  return toast({
    title: UserMessage.UserName.Success.title,
    description: UserMessage.UserName.Success.description,
    variant: UserMessage.UserName.Success.variant,
  });
};

// Update UserName
export const updateUserName = async ({
  user,
  username,
}: {
  user: AuthUser;
  username: string;
}) => {
  const supabase = createClient();

  const { error } = await supabase.from("usernames").upsert([
    {
      id: user.id,
      username,
    },
  ]);

  if (error) {
    console.log("Error thrown:", error.message);

    const errorToast = checkErrorMessage(error);
    return toast(errorToast);
  }
  return toast({
    title: UserMessage.UserName.Update.title,
    description: UserMessage.UserName.Update.description,
    variant: UserMessage.UserName.Update.variant,
  });
};

// Update User
export const updateUser = async ({ user }: { user: User }) => {
  const supabase = createClient();

  const { error } = await supabase.from("users").upsert([
    {
      id: user.id,
    },
  ]);

  if (error) {
    console.log("Error thrown:", error.message);

    const errorToast = checkErrorMessage(error);
    return toast(errorToast);
  }
  return toast({
    title: UserMessage.UserName.Update.title,
    description: UserMessage.UserName.Update.description,
    variant: UserMessage.UserName.Update.variant,
  });
};

// Delete User
export const deleteUser = async ({ user }: { user: User }) => {
  const supabase = createClient();

  const { error } = await supabase.from("users").delete().eq("id", user.id);

  if (error) {
    console.log("Error thrown:", error.message);

    const errorToast = checkErrorMessage(error);
    return toast(errorToast);
  }
};
