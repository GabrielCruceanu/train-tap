import { getSEOTags } from "@/libs/seo";
import Cta from "@/components/marketing/cta";
import { Spacer } from "@nextui-org/spacer";
import Testimonials from "@/components/marketing/testimonials";

/**
 * Metadata for the testimonials page.
 */
export const metadata = getSEOTags({
  title: "Testimonials",
  canonicalUrlRelative: "/testimonials",
});

/**
 * Renders the Testimonials page.
 *
 * @returns JSX.Element
 */
export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <Cta />
      <Spacer y={12} />
    </>
  );
}
