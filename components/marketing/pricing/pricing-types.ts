import type { ButtonProps } from "@nextui-org/react";

export enum FrequencyEnum {
  Yearly = "yearly",
  Mountly = "mountly",
}

export enum TiersEnum {
  Starter = "starter",
  Pro = "pro",
  Elite = "elite",
}

export type Frequency = {
  key: FrequencyEnum;
  label: string;
  priceSuffix: string;
};

export type Tier = {
  key: TiersEnum;
  title: string;
  price:
    | {
        [FrequencyEnum.Yearly]: string;
        [FrequencyEnum.Mountly]: string;
      }
    | string;
  priceSuffix?: string;
  priceId: {
    [FrequencyEnum.Yearly]: string;
    [FrequencyEnum.Mountly]: string;
  };
  description?: string;
  mostPopular?: boolean;
  featured?: boolean;
  features?: string[];
  buttonText: string;
  buttonColor?: ButtonProps["color"];
  buttonVariant: ButtonProps["variant"];
};
