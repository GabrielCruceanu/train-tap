import Pricing from "@/components/marketing/pricing";
import { getSEOTags } from "../../../libs/seo";

/**
 * Metadata for the pricing page.
 */
export const metadata = getSEOTags({
  title: "Pricing",
  canonicalUrlRelative: "/pricing",
});

/**
 * Renders the PricingPage component.
 *
 * @returns The rendered PricingPage component.
 */
export default function PricingPage() {
  return <>
    <Pricing />;
  </>
}
