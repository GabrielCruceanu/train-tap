"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { Spacer } from "@nextui-org/spacer";
import { trackEvent } from "@/utils/va";

const Cta = () => {
  return (
    <div className="text-center px-4">
      <h3 className="text-2xl">Ready for Change?</h3>
      <Spacer y={2} />
      <strong className="text-4xl font-medium tracking-tight">
        Embrace Efficiency with TrainTap
      </strong>
      <Spacer y={4} />
      <p className="text-large text-default-500">
        Transform your training business today. Join TrainTap and focus on what
        you do best—inspiring fitness journeys.
      </p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <Button
          color="primary"
          radius="sm"
          as={Link}
          href={siteConfig.links.pricing}
          onPress={() => {
            trackEvent("Cta - Start for free", {
              name: "Handel cta",
              action: "click",
              category: "cta",
              data: "Cta",
            });
          }}
        >
          Start for free
        </Button>
      </div>
    </div>
  );
};

export default Cta;
