import Pricing from "@/components/marketing/pricing";
import { getSEOTags } from "../../../libs/seo";

export const metadata = getSEOTags({
  title: "Pricing",
  canonicalUrlRelative: "/pricing",
});

export default function PricingPage() {
  return <Pricing />;
}
