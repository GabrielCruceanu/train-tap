import { Database } from "../supabase";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type ProfileType = Database["public"]["Enums"]["profile_type"];
