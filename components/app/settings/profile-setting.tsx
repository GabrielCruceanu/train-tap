"use client";

import * as React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Icon } from "@iconify/react";
import { cn } from "@/utils/cn";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Spacer } from "@nextui-org/spacer";
import { Input, Textarea } from "@nextui-org/input";
import {
  ExperienceList,
  TrainerLocation,
  TrainerTypeList,
} from "@/data/trainer-data";
import { Select, SelectItem, Switch } from "@nextui-org/react";
import { CitiesData } from "@/data/location-data";

interface ProfileSettingCardProps {
  className?: string;
}

const ProfileSetting = React.forwardRef<
  HTMLDivElement,
  ProfileSettingCardProps
>(({ className, ...props }, ref) => {
  const [isSelected, setIsSelected] = React.useState(true);

  let countries: string[];
  let currentCounties: string[] = [];
  let currentCites: string[] = [];
  const duplicateCountries = CitiesData.map((city) => city.country);
  const duplicateCounties = CitiesData.map((city) => {
    // if (city.country === onboardingDetails.country) {
    //   return city.county;
    // } else {
    //   return "";
    // }
    return city.county;
  });
  const duplicateCities = CitiesData.map((city) => {
    // if (city.county === onboardingDetails.county) {
    //   return city.name;
    // } else {
    //   return "";
    // }
    return city.name;
  });

  // @ts-ignore
  currentCounties = [...new Set(duplicateCounties)].sort();

  // @ts-ignore
  currentCites = [...new Set(duplicateCities)].sort();
  return (
    <div ref={ref} className={cn("p-2", className)} {...props}>
      {/* Profile */}
      <div className="max-w-2xl">
        <p className="text-base font-medium text-default-700">Profile</p>
        <p className="mt-1 text-sm font-normal text-default-400">
          This displays your public profile on the site.
        </p>
        <Card className="mt-4 bg-default-100" shadow="none">
          <CardBody>
            <div className="flex items-center gap-4">
              <Badge
                disableOutline
                classNames={{
                  badge: "w-5 h-5",
                }}
                content={
                  <Button
                    isIconOnly
                    className="h-5 w-5 min-w-5 bg-background p-0 text-default-500"
                    radius="full"
                    size="sm"
                    variant="bordered"
                  >
                    <Icon className="h-[9px] w-[9px]" icon="solar:pen-linear" />
                  </Button>
                }
                placement="bottom-right"
                shape="circle"
              >
                <Avatar
                  className="h-16 w-16"
                  src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg"
                />
              </Badge>
              <div>
                <p className="text-sm font-medium text-default-600">
                  Kate Moore
                </p>
                <p className="text-xs text-default-400">{TrainerTypeList[0]}</p>
                <p className="mt-1 text-xs text-default-400">
                  kate.moore@acme.com
                </p>
                <div className="flex flex-col gap-2 mt-3">
                  <p className="text-xs text-default-400">Profile type:</p>
                  <Switch isSelected={isSelected} onValueChange={setIsSelected}>
                    <span className="text-small text-default-500 inline-block">
                      {isSelected ? "Public" : "Anonymous"}
                    </span>
                  </Switch>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <Spacer y={4} />
      {/* Biography */}
      <div>
        <p className="text-base font-medium text-default-700">Biography</p>
        <p className="mt-1 text-sm font-normal text-default-400">
          Specify your present whereabouts.
        </p>
        <Textarea
          className="mt-2"
          classNames={{
            input: cn("min-h-[115px]"),
          }}
          placeholder="e.g., 'Kate Moore - Acme.com Support Specialist. Passionate about solving tech issues, loves hiking and volunteering."
        />
      </div>
      <Spacer y={4} />
      <div className="md:flex gap-4">
        {/* Trainer Type */}
        <div className="mt-2 md:w-4/12">
          <p className="text-base font-medium text-default-700">Trainer Type</p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Set your trainer type.
          </p>
          <Select className="mt-2" defaultSelectedKeys={TrainerTypeList[0]}>
            {TrainerTypeList.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </Select>
        </div>
        {/* Trainer Experience */}
        <div className="mt-2 md:w-4/12">
          <p className="text-base font-medium text-default-700">
            Trainer Experience
          </p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Set your trainer experience.
          </p>
          <Select className="mt-2" defaultSelectedKeys={TrainerTypeList[0]}>
            {ExperienceList.map((experience) => (
              <SelectItem key={experience} value={experience}>
                {experience}
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* Trainer Location */}
        <div className="mt-2 md:w-4/12">
          <p className="text-base font-medium text-default-700">
            Trainer Location
          </p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Set where you can training.
          </p>
          <Select className="mt-2" defaultSelectedKeys={TrainerTypeList[0]}>
            {TrainerLocation.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <Spacer y={4} />

      {/* Location */}
      <div>
        <p className="text-base font-medium text-default-700">Location</p>
        <p className="mt-1 text-sm font-normal text-default-400">
          Set your current location where can you train.
        </p>
        <div className="md:flex gap-4">
          {/* Country */}
          <div className="mt-2 md:w-4/12">
            <p className="text-base font-medium text-default-700">Country</p>
            <Select
              defaultSelectedKeys={duplicateCountries[0]}
              placeholder="Country"
            >
              {duplicateCountries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* County */}
          <div className="mt-2 md:w-4/12">
            <p className="text-base font-medium text-default-700">County</p>
            <Select
              defaultSelectedKeys={duplicateCounties[0]}
              placeholder="Country"
            >
              {duplicateCounties.map((county) => (
                <SelectItem key={county} value={county}>
                  {county}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* City */}
          <div className="mt-2 md:w-4/12">
            <p className="text-base font-medium text-default-700">City</p>
            <Select
              defaultSelectedKeys={duplicateCities[0]}
              placeholder="Country"
            >
              {duplicateCities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>

      <Spacer y={4} />

      {/* Social */}
      <div className="md:flex gap-4">
        {/* Instagram */}
        <div className="mt-2 md:w-4/12">
          <p className="text-base font-medium text-default-700">Instagram</p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Your Instagram username.
          </p>
          <Input className="mt-2" placeholder="@kate.moore" />
        </div>

        {/* Facebook */}
        <div className="mt-2 md:w-4/12">
          <p className="text-base font-medium text-default-700">Facebook</p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Your Facebook username.
          </p>
          <Input className="mt-2" placeholder="Kate Moore" />
        </div>

        {/* Twitter */}
        <div className="mt-2 md:w-4/12">
          <p className="text-base font-medium text-default-700">Twitter</p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Your Twitter username.
          </p>
          <Input className="mt-2" placeholder="@kate.moore" />
        </div>
      </div>

      <Spacer y={4} />

      {/* Contact */}
      <div className="md:flex gap-4">
        {/* Phone Number */}
        <div className="mt-2 md:w-6/12">
          <p className="text-base font-medium text-default-700">Phone number</p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Your phone number.
          </p>
          <Input className="mt-2" placeholder="+40770219473" />
        </div>

        {/* Email */}
        <div className="mt-2 md:w-6/12">
          <p className="text-base font-medium text-default-700">Email</p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Your email address.
          </p>
          <Input className="mt-2" placeholder="kattie@gmail.com" />
        </div>

        {/* Website */}
        <div className="mt-2 md:w-6/12">
          <p className="text-base font-medium text-default-700">Website</p>
          <p className="mt-1 text-sm font-normal text-default-400">
            Your website address.
          </p>
          <Input className="mt-2" placeholder="kattie.com" />
        </div>
      </div>

      <Spacer y={4} />
      <Button className="mt-4 bg-default-foreground text-background" size="sm">
        Update Profile
      </Button>
    </div>
  );
});

ProfileSetting.displayName = "ProfileSetting";

export default ProfileSetting;
