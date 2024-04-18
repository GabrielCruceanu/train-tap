import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { getSEOTags, renderSchemaTags } from "@/libs/seo";
import { Button } from "@nextui-org/button";
import { Suspense } from "react";
import Hero from "../../components/Hero";
import Problem from "../../components/Problem";
import Header from "../../components/Header";
import FeaturesAccordion from "../../components/FeaturesAccordion";
import Pricing from "../../components/Pricing";
import FAQ from "../../components/FAQ";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

export const metadata = getSEOTags({ canonicalUrlRelative: "/" });

export default function Home() {
  return (
    <>
      {renderSchemaTags()}
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
