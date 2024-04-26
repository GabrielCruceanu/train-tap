"use client";

import React from "react";
import { Icon } from "@iconify/react";

import { frequencies, tiers } from "./pricing-tiers";
import { FrequencyEnum } from "./pricing-types";
import { cn } from "../../../utils/cn";
import ButtonCheckout from "./button-checkout";
import { Spacer } from "@nextui-org/spacer";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Chip } from "@nextui-org/chip";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { trackEvent } from "../../../utils/va";

export default function Pricing() {
  const [selectedFrequency, setSelectedFrequency] = React.useState(
    frequencies[0],
  );

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex((f) => f.key === selectedKey);

    setSelectedFrequency(frequencies[frequencyIndex]);
  };

  return (
    <div className="relative flex max-w-4xl flex-col items-center py-24 mx-auto px-4">
      {/* <div
        aria-hidden="true"
        className="px:5 absolute inset-x-0 top-3 z-0 h-full w-full transform-gpu overflow-hidden blur-3xl md:right-20 md:h-auto md:w-auto md:px-36"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#2CEEF0] to-[#d7f9fa] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="font-medium leading-7 text-primary">Pricing</h2>
        <h1 className="text-4xl font-medium tracking-tight">
          Choose Your Plan
        </h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">
          Empower Your Training Journey: Flexible Plans Tailored to Your Success
        </h2>
      </div>
      <Spacer y={8} />
      <Tabs
        classNames={{
          tabList: "bg-default-100/70",
          cursor: "bg-background dark:bg-default-200/30",
          tab: "data-[hover-unselected=true]:opacity-90",
        }}
        radius="md"
        onSelectionChange={onFrequencyChange}
      >
        <Tab
          key={FrequencyEnum.Mountly}
          title="Pay Mountly"
          onClick={() => {
            trackEvent("Pricing - Tabs", {
              name: "Pay Mountly",
              action: "click",
              category: "pricing",
              data: "Pay Mountly",
            });
          }}
        />
        <Tab
          key={FrequencyEnum.Yearly}
          aria-label="Pay Yearly"
          className="pr-0.5"
          title={
            <div className="flex items-center gap-2">
              <p>Pay Yearly</p>
              <Chip color="primary" variant="faded">
                Save 25%
              </Chip>
            </div>
          }
          onClick={() => {
            trackEvent("Pricing - Tabs", {
              name: "Pay Yearly",
              action: "click",
              category: "pricing",
              data: "Pay Yearly",
            });
          }}
        />
      </Tabs>
      <Spacer y={12} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card
            key={tier.key}
            isBlurred
            className={cn("bg-background/60 p-3 dark:bg-default-100/50", {
              "!border-small border-primary/50": tier.mostPopular,
            })}
            shadow="md"
          >
            {tier.mostPopular ? (
              <Chip
                className="absolute right-4 top-4"
                color="primary"
                variant="flat"
              >
                Most Popular
              </Chip>
            ) : null}
            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{tier.title}</h2>
              <p className="text-medium text-default-500">{tier.description}</p>
            </CardHeader>
            <Divider />
            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-4xl font-semibold leading-7 tracking-tight text-transparent">
                  {typeof tier.price === "string"
                    ? tier.price
                    : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== "string" ? (
                  <span className="text-small font-medium text-default-400">
                    {tier.priceSuffix
                      ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                      : `/${selectedFrequency.priceSuffix}`}
                  </span>
                ) : null}
              </p>
              <ul className="flex flex-col gap-2">
                {tier.features?.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon className="text-primary" icon="ci:check" width={24} />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter>
              <ButtonCheckout
                priceId={
                  selectedFrequency.key === FrequencyEnum.Yearly
                    ? tier.priceId[FrequencyEnum.Yearly]
                    : tier.priceId[FrequencyEnum.Mountly]
                }
                buttonText={tier.buttonText}
                buttonVariant={tier.buttonVariant}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
      <Spacer y={12} />
      {/* <div className="flex py-2">
        <p className="text-default-400">
          Are you an open source developer?&nbsp;
          <Link color="foreground" href="#" underline="always">
            Get a discount
          </Link>
        </p>
      </div> */}
    </div>
  );
}
