import create from "zustand";

interface UserProfile {
  id: string;
  custormer_id: string;
  price_id: string;
  has_access: boolean;
  email: string;
  updated_at: string;
  username: string;
  full_name: string;
  avatar_url: string;
  age: number;
  website: string;
}
