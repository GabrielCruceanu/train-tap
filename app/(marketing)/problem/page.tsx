import Problem from "@/components/marketing/problem";
import { getSEOTags } from "@/libs/seo";
import Cta from "@/components/marketing/cta";
import { Spacer } from "@nextui-org/spacer";

/**
 * Metadata for the "Problem" page.
 */
export const metadata = getSEOTags({
  title: "Problem",
  canonicalUrlRelative: "/problem",
});

/**
 * Renders the ProblemPage component.
 *
 * @returns JSX.Element
 */
export default function ProblemPage() {
  return (
    <>
      <Problem />
      <Cta />
      <Spacer y={12} />
    </>
  );
}
