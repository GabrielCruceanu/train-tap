"use client";

import React from "react";
import { useMediaQuery } from "usehooks-ts";

import ScrollingBanner from "./scrolling-banner";
import UserReview from "./user-review";
import testimonials from "./testimonials-content";
import { Spacer } from "@nextui-org/spacer";

export type Testimonial = {
  avatar: string;
  name: string;
  role: string;
  content: string;
};

/**
 *  This example requires installing the `usehooks-ts` package:
 * `npm install usehooks-ts`
 *
 * import {useMediaQuery} from "usehooks-ts";
 */
export default function Testimonials() {
  const testimonials1 = testimonials.slice(0, 4);
  const testimonials2 = testimonials.slice(4, 8);
  const testimonials3 = testimonials.slice(8, 12);
  const testimonials4 = testimonials.slice(12, 16);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const fistColumn = React.useMemo(
    () => (isMobile ? testimonials : testimonials1),
    [isMobile, testimonials1],
  );

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
      <div className="flex max-w-xl flex-col text-center mx-auto">
        <h2 className="font-medium leading-7 text-primary">Testimonials</h2>
        <h1 className="text-4xl font-medium tracking-tight">
          Discover the TrainTap Difference
        </h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Elevating Your Training Experience Beyond Expectations
        </h2>
      </div>
      {/* <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4"> */}
      <div className="columns-1 sm:columns-2">
        <ScrollingBanner
          isVertical
          duration={isMobile ? 200 : 120}
          shouldPauseOnHover={false}
        >
          {fistColumn.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>
        <ScrollingBanner
          isVertical
          className="hidden sm:flex"
          duration={200}
          shouldPauseOnHover={false}
        >
          {testimonials2.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>
        {/* <ScrollingBanner
          isVertical
          className="hidden md:flex"
          duration={200}
          shouldPauseOnHover={false}
        >
          {testimonials3.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>
        <ScrollingBanner
          isVertical
          className="hidden lg:flex"
          duration={200}
          shouldPauseOnHover={false}
        >
          {testimonials4.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner> */}
      </div>
    </section>
  );
}
