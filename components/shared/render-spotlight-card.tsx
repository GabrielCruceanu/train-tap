import { Content } from "../../types/maketing/content";
import SpotlightCard from "./spotlight-card";

/**
 * Renders the spotlight cards based on the provided content.
 * @param content The content to render.
 * @returns The rendered spotlight cards.
 */
const RenderSpotlightCards = ({ content }: { content: Content }) => {
  return content.map(({ title, image, description }) => (
    <SpotlightCard
      key={title}
      image={image}
      title={title}
      description={description}
    />
  ));
};

export default RenderSpotlightCards;
