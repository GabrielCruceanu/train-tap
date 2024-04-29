import { Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import { type SidebarItem } from "@/ts/types/sidebar";

/**
 * Please check the https://nextui.org/docs/guide/routing to have a seamless router integration
 */

export const trainerSidebarItems: SidebarItem[] = [
  {
    key: "dashboard",
    href: "/dashboard",
    icon: "solar:home-2-outline",
    title: "Home",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  {
    key: "calendar",
    href: "/calendar",
    icon: "solar:calendar-outline",
    title: "Calendar",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  {
    key: "clients",
    href: "/clients",
    icon: "solar:users-group-two-rounded-outline",
    title: "Clients",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
    // endContent: (
    //   <Icon
    //     className="text-default-400"
    //     icon="solar:add-circle-line-duotone"
    //     width={24}
    //   />
    // ),
  },
  {
    key: "messaging",
    href: "/messaging",
    icon: "solar:chat-line-outline",
    title: "Messaging",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  // {
  //   key: "analytics",
  //   href: "#",
  //   icon: "solar:chart-outline",
  //   title: "Analytics",
  // },
  {
    key: "workout",
    href: "/workout",
    icon: "solar:dumbbell-small-outline",
    title: "Workout",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  {
    key: "nutrition",
    href: "/nutrition",
    icon: "solar:chef-hat-outline",
    title: "Nutrition",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  {
    key: "settings",
    href: "/settings",
    icon: "solar:settings-outline",
    title: "Settings",
  },
];

export const clientSidebarItems: SidebarItem[] = [
  {
    key: "dashboard",
    href: "#",
    icon: "solar:home-2-outline",
    title: "Home",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  {
    key: "calendar",
    href: "/calendar",
    icon: "solar:calendar-outline",
    title: "Calendar",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  {
    key: "trainer",
    href: "/trainer",
    icon: "solar:users-group-two-rounded-outline",
    title: "Trainer",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
    // endContent: (
    //   <Icon
    //     className="text-default-400"
    //     icon="solar:add-circle-line-duotone"
    //     width={24}
    //   />
    // ),
  },
  {
    key: "messaging",
    href: "/messaging",
    icon: "solar:chat-line-outline",
    title: "Messaging",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  // {
  //   key: "analytics",
  //   href: "#",
  //   icon: "solar:chart-outline",
  //   title: "Analytics",
  // },
  {
    key: "workout",
    href: "/workout",
    icon: "solar:dumbbell-small-outline",
    title: "Workout",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  {
    key: "nutrition",
    href: "/nutrition",
    icon: "solar:chef-hat-outline",
    title: "Nutrition",
    endContent: (
      <Chip size="sm" variant="flat">
        Come soon
      </Chip>
    ),
  },
  {
    key: "settings",
    href: "#",
    icon: "solar:settings-outline",
    title: "Settings",
  },
];
