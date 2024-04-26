import { getSEOTags } from "@/libs/seo";
import Cta from "@/components/marketing/cta";
import { Spacer } from "@nextui-org/spacer";
import Faqs from "@/components/marketing/faqs";

/**
 * Metadata for the support page.
 */
export const metadata = getSEOTags({
  title: "Support",
  canonicalUrlRelative: "/support",
});

/**
 * Renders the SupportPage component.
 *
 * @returns JSX.Element representing the SupportPage component.
 */
export default function SupportPage() {
  return (
    <>
      <Faqs />
      <Cta />
      <Spacer y={12} />
    </>
  );
}
