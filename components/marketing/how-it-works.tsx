import { Spacer } from "@nextui-org/spacer";
import { sectionWrapper } from "../primitives";
import SpotlightCard from "../shared/spotlight-card";

type HowItWorksProps = {};
export const joyOfTrainingCard = [
  {
    title: "Sign Up",
    image:
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png",
    description: "Join the TrainTap community in just a few clicks.",
  },

  {
    title: "Set Your Availability",
    image:
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png",
    description: "Easily input your schedule and set your available slots.",
  },

  {
    title: "Connect With Clients",
    image:
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png",
    description:
      "Let your clients book their next session online, hassle-free.",
  },
];
const HowItWorks = ({}: HowItWorksProps) => {
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
            {joyOfTrainingCard.map((item) => (
              <SpotlightCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HowItWorks;
