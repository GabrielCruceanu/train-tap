import type { Frequency, Tier } from "./pricing-types";

import { FrequencyEnum, TiersEnum } from "./pricing-types";

export const frequencies: Array<Frequency> = [
  { key: FrequencyEnum.Yearly, label: "Pay Yearly", priceSuffix: "per year" },
  {
    key: FrequencyEnum.Mountly,
    label: "Pay Mountly",
    priceSuffix: "per mountly",
  },
];

export const tiers: Array<Tier> = [
  {
    key: TiersEnum.Starter,
    title: "Starter",
    price: {
      yearly: "$192",
      mountly: "$19",
    },
    priceId: {
      yearly: "price_1P2788LakK4gTK7Zrz7Ch4FU",
      mountly: "price_1P2788LakK4gTK7ZizmGdkEP",
    },
    featured: false,
    mostPopular: false,
    description: "Ideal for new trainers starting to grow.",
    features: [
      "Basic scheduling and booking system",
      "Client management for up to 10 clients",
      "Help center access",
      "Email support",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Pro",
    description: "Perfect for established trainers looking for efficiency.",
    mostPopular: true,
    price: {
      yearly: "$480",
      mountly: "$49",
    },
    priceId: {
      yearly: "price_1P29vfLakK4gTK7ZilXM5GR0",
      mountly: "price_1P29uaLakK4gTK7ZambyEfn9",
    },
    featured: false,
    features: [
      "All the features of the Starter Plan",
      "Advanced scheduling options",
      "Client management for up to 50 clients",
      "In-app messaging",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Elite,
    title: "Elite",
    featured: true,
    mostPopular: false,
    description:
      "The ultimate solution for trainers aiming to scale their business.",
    price: {
      yearly: "$960",
      mountly: "$99",
    },
    priceId: {
      yearly: "price_1P2ASsLakK4gTK7ZywCtgTyT",
      mountly: "price_1P2ASFLakK4gTK7ZPWBAUh1W",
    },
    features: [
      "Includes everything in the Pro Plan",
      "Unlimited client management",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];
