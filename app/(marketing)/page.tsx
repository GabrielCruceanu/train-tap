import { getSEOTags, renderSchemaTags } from "@/libs/seo";
import Main from "@/components/marketing/main";
import Problem from "@/components/marketing/problem";
import Features from "@/components/marketing/features";
import HowItWorks from "@/components/marketing/how-it-works";
import Testimonials from "@/components/marketing/testimonials";
import Faqs from "@/components/marketing/faqs";
import Pricing from "@/components/marketing/pricing";

/**
 * Retrieves the SEO metadata for the home page.
 *
 * @returns The SEO metadata for the home page.
 */
export const metadata = getSEOTags({
  title: "Home",
  canonicalUrlRelative: "/",
});

/**
 * Renders the home page.
 *
 * @returns The JSX elements for the home page.
 */
export default function Home() {
  return (
    <>
      {renderSchemaTags()}
      <Main />
      <Problem />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Faqs />
    </>
  );
}
