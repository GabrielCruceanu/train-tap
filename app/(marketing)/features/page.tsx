import { Spacer } from "@nextui-org/spacer";
import { getSEOTags } from "@/libs/seo";
import Features from "@/components/marketing/features";
import Cta from "@/components/marketing/cta";

/**
 * Metadata for the Features page.
 */
export const metadata = getSEOTags({
  title: "Features",
  canonicalUrlRelative: "/features",
});

/**
 * Renders the FeaturesPage component.
 *
 * @returns JSX.Element
 */
export default function FeaturesPage() {
  return (
    <>
      <Features />
      <Cta />
      <Spacer y={12} />
    </>
  );
}
