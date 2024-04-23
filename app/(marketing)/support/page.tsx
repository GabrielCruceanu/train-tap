import { getSEOTags } from "@/libs/seo";
import Cta from "@/components/marketing/cta";
import { Spacer } from "@nextui-org/spacer";
import Faqs from "@/components/marketing/faqs";

export const metadata = getSEOTags({
  title: "Support",
  canonicalUrlRelative: "/support",
});

export default function SupportPage() {
  return (
    <>
      <Faqs />
      <Cta />
      <Spacer y={12} />
    </>
  );
}
