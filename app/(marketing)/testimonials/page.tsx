import { getSEOTags } from "@/libs/seo";
import Cta from "@/components/marketing/cta";
import { Spacer } from "@nextui-org/react";
import Testimonials from "@/components/marketing/testimonials";

export const metadata = getSEOTags({
  title: "Testimonials",
  canonicalUrlRelative: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <Cta />
      <Spacer y={12} />
    </>
  );
}
