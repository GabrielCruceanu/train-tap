import { Database } from "../supabase";

export type Location = Database["public"]["Tables"]["locations"]["Row"];
