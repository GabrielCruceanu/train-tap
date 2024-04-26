import { Spacer } from "@nextui-org/spacer";
import { sectionWrapper } from "../primitives";
import { Content } from "@/types/maketing/content";
import RenderSpotlightCards from "../shared/render-spotlight-card";

/**
 * Array of objects representing the content for the "How It Works" section.
 */
export const CONTENT: Content = [
  {
    title: "Sign Up",
    image: "/images/how-it-works/sign-up.jpg",
    description: "Join the TrainTap community in just a few clicks.",
  },
  {
    title: "Set Your Availability",
    image: "/images/how-it-works/set-availability.jpg",
    description: "Easily input your schedule and set your available slots.",
  },
  {
    title: "Connect With Clients",
    image: "/images/how-it-works/connect-with-clients.jpg",
    description:
      "Let your clients book their next session online, hassle-free.",
  },
];

/**
 * Component that displays the "How It Works" section.
 */
const HowItWorks = () => {
  return (
    <>
      <section
        className={sectionWrapper({
          class: "flex flex-col items-center my-16 lg:my-44",
        })}
      >
        <div className="max-w-screen-2xl flex flex-col gap-8 mx-4">
          <div className="flex max-w-xl flex-col text-center mx-auto">
            <h2 className="font-medium leading-7 text-primary">How It Works</h2>
            <h1 className="text-4xl font-medium tracking-tight">
              Simplify Your Success
            </h1>
            <Spacer y={4} />
            <h2 className="text-large text-default-500">
              A Step-by-Step Guide to Unleashing Your Training Potential with
              TrainTap
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {<RenderSpotlightCards content={CONTENT} />}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
