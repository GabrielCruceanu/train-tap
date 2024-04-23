"use client";

import React from "react";
import { Accordion, AccordionItem, Spacer } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { Button } from "@nextui-org/button";

import faqs from "./faqs-content";
import { Link } from "@nextui-org/link";
import { sectionWrapper } from "../../primitives";

export default function Faqs() {
  return (
    <section
      className={sectionWrapper({
        class: "flex flex-col items-center my-16 lg:my-44 px-4",
      })}
    >
      <div className="max-w-screen-2xl flex flex-col gap-8 mx-4 lg:mx-auto">
        <div className="flex max-w-xl flex-col text-center mx-auto">
          <h2 className="font-medium leading-7 text-primary">Support</h2>
          <h1 className="text-4xl font-medium tracking-tight">
            Frequently asked questions
          </h1>
          <Spacer y={4} />
          <h2 className="text-large text-default-500">
            Your Questions, Answered: Everything You Need to Know About TrainTap
          </h2>
          <Spacer y={4} />
          <div>
            <Button as={Link} color="primary" href="mailto:contact@traintap.io">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="max-w-2xl">
        <Accordion
          fullWidth
          keepContentMounted
          itemClasses={{
            base: "px-0 md:px-2 md:px-6",
            title: "font-medium",
            trigger: "py-6 flex-row-reverse",
            content: "pt-0 pb-6 text-base text-default-500",
            indicator: "rotate-0 data-[open=true]:-rotate-45",
          }}
          items={faqs}
          selectionMode="multiple"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={
                <Icon className="text-primary" icon="lucide:plus" width={24} />
              }
              title={item.title}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
