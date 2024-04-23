import Pricing from "../marketing/pricing";
import Features from "../marketing/features";
import HowItWorks from "../marketing/how-it-works";
import Problem from "../marketing/problem";
import Main from "../marketing/main";
import Faqs from "../marketing/faqs";
import Testimonials from "../marketing/testimonials";

export default function HomePage() {
  return (
    <>
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
