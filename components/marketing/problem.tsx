import { Spacer } from "@nextui-org/react";
import { sectionWrapper, subtitle, title, titleWrapper } from "../primitives";
import SpotlightCard from "../shared/spotlight-card";

type ProblemProps = {};
export const joyOfTrainingCard = [
  {
    title: "Drowning in Admin?",
    image:
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png",
    description:
      "Your passion for fitness shouldn't be buried under paperwork and scheduling nightmares. Rediscover the joy of personal training, free from the tangles of administrative tasks.",
  },

  {
    title: "More Screen Time Than Client Time?",
    image:
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png",
    description:
      "Endless emails, scheduling conflicts, and manual workout planning eat into your energy and passion. It's time for a change, to shift focus from admin to what truly matters—your clients.",
  },

  {
    title: "Simplify Your Success",
    image:
      "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png",
    description:
      "With TrainTap, streamline your scheduling, effortlessly manage client information, and personalize training plans with just a few clicks. Say goodbye to administrative hassles and hello to more meaningful client interactions.",
  },
];
const Problem = ({}: ProblemProps) => {
  return (
    <>
      <section
        className={sectionWrapper({
          class: "flex flex-col items-center my-16 lg:my-44",
        })}
      >
        <div className="max-w-screen-2xl flex flex-col gap-8 mx-4">
          <div className="flex max-w-xl flex-col text-center mx-auto">
            <h2 className="font-medium leading-7 text-primary">Problem</h2>
            <h1 className="text-4xl font-medium tracking-tight">
              Are Administrative Tasks Draining Your Energy and Time?
            </h1>
            <Spacer y={4} />
            <h2 className="text-large text-default-500">
              Rediscover the Joy of Training
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
export default Problem;