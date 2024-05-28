"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "usehooks-ts";
import SidebarDrawer from "../app/shared/navigation/sidebar-drawer";
import { cn } from "@/utils/cn";
import { AcmeIcon } from "../icons/social";
import Sidebar from "../app/shared/navigation/sidebar";
import { trainerSidebarItems } from "../app/shared/navigation/items";
import { useDisclosure } from "@nextui-org/use-disclosure";
import { Link } from "@nextui-org/link";
import { Spacer } from "@nextui-org/spacer";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useSignOut } from "@/hooks/auth";
import { TrainerTypeList } from "@/data/trainer-data";

/**
 * This example requires installing the `usehooks-ts` and `lodash` packages.
 * `npm install usehooks-ts lodash`
 *
 * import {useMediaQuery} from "usehooks-ts";
 * import {isEqual, uniqWith} from "lodash";
 *
 *
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */

type AppLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle: string;
};

export default function AppLayout({
  children,
  title,
  subtitle,
}: AppLayoutProps) {
  const { isOpen, onOpenChange } = useDisclosure();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const pathname = usePathname();
  const currentPath = pathname.split("/")?.[1];
  const { handleSignOut } = useSignOut();

  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  return (
    <div className="flex h-dvh w-full gap-4">
      {/* Sidebar */}
      <SidebarDrawer
        className={cn("min-w-[288px] rounded-lg", {
          "min-w-[76px]": isCollapsed,
        })}
        hideCloseButton={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <div
          className={cn(
            "will-change relative flex h-full w-72 flex-col bg-default-100 p-6 transition-width",
            {
              "w-[83px] items-center px-[6px] py-6": isCollapsed,
            }
          )}
        >
          <div
            className={cn("flex items-center gap-3 pl-2", {
              "justify-center gap-0 pl-0": isCollapsed,
            })}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
              <AcmeIcon className="text-background" />
            </div>
            <span
              className={cn(
                "w-full text-small font-bold uppercase opacity-100",
                {
                  "w-0 opacity-0": isCollapsed,
                }
              )}
            >
              {siteConfig.name}
            </span>
            <div className={cn("flex-end flex", { hidden: isCollapsed })}>
              <Icon
                className="cursor-pointer dark:text-primary-foreground/60 [&>g]:stroke-[1px]"
                icon="solar:round-alt-arrow-left-line-duotone"
                width={24}
                onClick={isMobile ? onOpenChange : onToggle}
              />
            </div>
          </div>
          <Spacer y={6} />
          <div className="flex items-center gap-3 px-3">
            <Avatar
              isBordered
              size="sm"
              src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/e1b8ec120710c09589a12c0004f85825.jpg"
            />
            <div
              className={cn("flex max-w-full flex-col", {
                hidden: isCollapsed,
              })}
            >
              <p className="text-small font-medium text-foreground">
                Kate Moore
              </p>
              <p className="text-tiny font-medium text-default-400">
                {TrainerTypeList[0]}
              </p>
            </div>
          </div>

          <Spacer y={6} />

          <Sidebar
            defaultSelectedKey="dashboard"
            selectedKeys={[currentPath]}
            iconClassName="group-data-[selected=true]:text-default-50"
            isCompact={isCollapsed}
            itemClasses={{
              base: "px-3 rounded-large data-[selected=true]:!bg-foreground",
              title: "group-data-[selected=true]:text-default-50",
            }}
            items={trainerSidebarItems}
          />

          <Spacer y={8} />

          <div
            className={cn("mt-auto flex flex-col", {
              "items-center": isCollapsed,
            })}
          >
            {isCollapsed && (
              <Button
                isIconOnly
                className="flex h-10 w-10 text-default-600"
                size="sm"
                variant="light"
              >
                <Icon
                  className="cursor-pointer dark:text-primary-foreground/60 [&>g]:stroke-[1px]"
                  height={24}
                  icon="solar:round-alt-arrow-right-line-duotone"
                  width={24}
                  onClick={onToggle}
                />
              </Button>
            )}
            <Tooltip
              content="Support"
              isDisabled={!isCollapsed}
              placement="right"
            >
              <Button
                fullWidth
                as={Link}
                href="/support"
                className={cn(
                  "justify-start truncate text-default-600 data-[hover=true]:text-foreground",
                  {
                    "justify-center": isCollapsed,
                  }
                )}
                isIconOnly={isCollapsed}
                startContent={
                  isCollapsed ? null : (
                    <Icon
                      className="flex-none text-default-600"
                      icon="solar:info-circle-line-duotone"
                      width={24}
                    />
                  )
                }
                variant="light"
              >
                {isCollapsed ? (
                  <Icon
                    className="text-default-500"
                    icon="solar:info-circle-line-duotone"
                    width={24}
                  />
                ) : (
                  "Support"
                )}
              </Button>
            </Tooltip>
            <Tooltip
              content="Log Out"
              isDisabled={!isCollapsed}
              placement="right"
            >
              <Button
                onClick={handleSignOut}
                className={cn(
                  "justify-start text-default-500 data-[hover=true]:text-foreground",
                  {
                    "justify-center": isCollapsed,
                  }
                )}
                isIconOnly={isCollapsed}
                startContent={
                  isCollapsed ? null : (
                    <Icon
                      className="flex-none rotate-180 text-default-500"
                      icon="solar:minus-circle-line-duotone"
                      width={24}
                    />
                  )
                }
                variant="light"
              >
                {isCollapsed ? (
                  <Icon
                    className="rotate-180 text-default-500"
                    icon="solar:minus-circle-line-duotone"
                    width={24}
                  />
                ) : (
                  "Log Out"
                )}
              </Button>
            </Tooltip>
          </div>
        </div>
      </SidebarDrawer>

      {/*  Content */}
      <div className="w-full max-w-screen-2xl flex-1 p-4">
        {/* Title */}
        <div className="flex items-center gap-x-3">
          <Button
            isIconOnly
            className="sm:hidden"
            size="sm"
            variant="flat"
            onPress={onOpenChange}
          >
            <Icon
              className="text-default-500"
              icon="solar:sidebar-minimalistic-linear"
              width={20}
            />
          </Button>
          <h1 className="text-3xl font-bold leading-9 text-default-foreground">
            {title}
          </h1>
        </div>
        <h2 className="mt-2 text-small text-default-500">{subtitle}</h2>
        <>{children}</>
      </div>
    </div>
  );
}
