import { Spacer } from "@nextui-org/spacer";
import { sectionWrapper } from "../primitives";
import RenderSpotlightCards from "../shared/render-spotlight-card";
import { Content } from "../../types/maketing/content";

/**
 * Array containing information about different problems faced by personal trainers.
 * Each object in the array represents a specific problem and includes a title, image path, and description.
 */
export const CONTENT: Content = [
  {
    title: "Drowning in Admin?",
    image: "/images/problem/admin.jpg",
    description:
      "Your passion for fitness shouldn't be buried under paperwork and scheduling nightmares. Rediscover the joy of personal training, free from the tangles of administrative tasks.",
  },

  {
    title: "More Screen Time Than Client Time?",
    image: "/images/problem/screen-time.jpg",
    description:
      "Endless emails, scheduling conflicts, and manual workout planning eat into your energy and passion. It's time for a change, to shift focus from admin to what truly matters—your clients.",
  },

  {
    title: "Simplify Your Success",
    image: "/images/problem/success.jpg",
    description:
      "With TrainTap, streamline your scheduling, effortlessly manage client information, and personalize training plans with just a few clicks. Say goodbye to administrative hassles and hello to more meaningful client interactions.",
  },
];

/**
 * Represents the Problem section of the marketing page.
 * This component displays information about the problem that the product solves.
 */
const Problem = () => {
  return (
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
          {<RenderSpotlightCards content={CONTENT} />}
        </div>
      </div>
    </section>
  );
};
export default Problem;
