"use client";

import { Card, CardBody, CardProps, CardHeader } from "@nextui-org/card";

import React from "react";
import { Image } from "@nextui-org/image";
import {
  m,
  useMotionValue,
  domAnimation,
  LazyMotion,
  useMotionTemplate,
} from "framer-motion";
interface SpotlightCardProps extends CardProps {
  image: string;
  title: string;
  description: string;
}
export default function SpotlightCard(props: SpotlightCardProps) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const cardRef = React.useRef<HTMLDivElement>(null);

  function onMouseMove({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!cardRef?.current) return;

    let { left, top } = cardRef.current?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <Card
      {...props}
      ref={cardRef}
      className="group relative w-full shadow-large bg-background"
      radius="md"
      onMouseMove={onMouseMove}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-250 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              450px circle at ${mouseX}px ${mouseY}px,
              rgba(186, 229, 1, 0.1),
              transparent 80%
            )
          `, // <- Add your own color here
          }}
        />
      </LazyMotion>
      <CardHeader className="relative h-60 p-0">
        <Image
          removeWrapper
          alt={props.title}
          className="w-full object-cover"
          src={props.image}
          style={{
            // @ts-ignore
            "-webkit-mask-image":
              "linear-gradient(to bottom, #000 70%, transparent 100%)",
          }}
        />
      </CardHeader>
      <CardBody className="px-6 pb-8 pt-4">
        <div className="flex flex-col gap-2">
          <p className="text-xl ">{props.title}</p>
          <p className="text-small text-neutral-400">{props.description}</p>
        </div>
      </CardBody>
    </Card>
  );
}
