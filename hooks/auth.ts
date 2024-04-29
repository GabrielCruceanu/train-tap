import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export function useSignOut() {
  const supabase = createClientComponentClient();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };
  return { handleSignOut };
}
