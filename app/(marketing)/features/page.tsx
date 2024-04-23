import Features from "@/components/marketing/features";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Features",
  canonicalUrlRelative: "/features",
});

export default function FeaturesPage() {
  return (
    <>
      <Features />
    </>
  );
}
