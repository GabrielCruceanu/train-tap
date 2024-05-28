import { Database } from "../supabase";

export type Price = Database["public"]["Tables"]["prices"]["Row"];
export type PriceType = Database["public"]["Enums"]["pricing_type"];
export type PricingPlanInterval =
  Database["public"]["Enums"]["pricing_plan_interval"];
export type SubscriptionStatus =
  Database["public"]["Enums"]["subscription_status"];
