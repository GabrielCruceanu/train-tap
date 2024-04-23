import Problem from "@/components/marketing/problem";
import { getSEOTags } from "@/libs/seo";
import Cta from "@/components/marketing/cta";
import { Spacer } from "@nextui-org/spacer";

export const metadata = getSEOTags({
  title: "Problem",
  canonicalUrlRelative: "/problem",
});

export default function ProblemPage() {
  return (
    <>
      <Problem />
      <Cta />
      <Spacer y={12} />
    </>
  );
}
