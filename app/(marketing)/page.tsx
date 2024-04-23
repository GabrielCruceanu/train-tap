import { getSEOTags, renderSchemaTags } from "@/libs/seo"
import HomePage from "@/components/templates/homepage";

export const metadata = getSEOTags({
  title: "Home",
  canonicalUrlRelative: "/",
});

export default function Home() {
  return (
    <>
      {renderSchemaTags()}
      <HomePage />
    </>
  );
}
