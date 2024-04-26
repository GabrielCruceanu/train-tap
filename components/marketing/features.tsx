import { Spacer } from "@nextui-org/spacer";
import { sectionWrapper } from "../primitives";
import { Content } from "@/types/maketing/content";
import RenderSpotlightCards from "../shared/render-spotlight-card";

/**
 * Array of objects representing the content for the "Features" section.
 */
export const CONTENT: Content = [
  {
    title: "Streamlined Scheduling",
    image: "/images/features/scheduling.jpg",
    description:
      "Say goodbye to manual scheduling. Our intuitive calendar view lets your clients book their own sessions based on your real-time availability.",
  },

  {
    title: "Effortless Client Management",
    image: "/images/features/client-management.jpg",
    description:
      "Manage all client information, progress, and session notes in one place. Tailor workouts and track progress with ease.",
  },

  {
    title: "Customizable Workout Plans",
    image: "/images/features/workout.jpg",
    description:
      "Access a vast library of workouts or create your own. Design personalized training programs that align with your clients' goals.",
  },

  {
    title: "Direct Communication Tools",
    image: "/images/features/comunication.jpg",
    description:
      "Stay connected with your clients through in-app messaging. Provide timely feedback and keep them motivated.",
  },
];

/**
 * Represents the Features component.
 */
const Features = () => {
  return (
    <section
      className={sectionWrapper({
        class: "flex flex-col items-center my-16 lg:my-44 ",
      })}
    >
      <div className="max-w-screen-2xl flex flex-col gap-8 mx-4 lg:mx-auto">
        <div className="flex max-w-xl flex-col text-center mx-auto">
          <h2 className="font-medium leading-7 text-primary">Features</h2>
          <h1 className="text-4xl font-medium tracking-tight">
            Discover the TrainTap Difference
          </h1>
          <Spacer y={4} />
          <h2 className="text-large text-default-500">
            Elevating Your Training Experience Beyond Expectations
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <RenderSpotlightCards content={CONTENT} />
        </div>
      </div>
    </section>
  );
};

export default Features;
