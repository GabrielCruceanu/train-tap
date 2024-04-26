"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/shared/theme-switch";

import { Logo } from "@/components/ui/icons";
import config from "../../config";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

type NavItems = NavItem[];

export const Navbar = () => {
  const pathname = usePathname();

  const renderNavItems = (navItems: NavItems) => {
    return navItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link
          color={pathname === item.href ? "primary" : "foreground"}
          href={item.href}
          size="lg"
        >
          {item.label}
        </Link>
      </NavbarMenuItem>
    ));
  };

  return (
    <NextUINavbar maxWidth="2xl" position="sticky" className="z-[100001]">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">{config.appName}</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden lg:flex">
        <ul className="lg:flex gap-4 justify-start mx-auto">
          {renderNavItems(siteConfig.navItems)}
        </ul>
      </NavbarContent>
      <NavbarContent
        className="hidden lg:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ThemeSwitch />
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            color="primary"
            href={siteConfig.links.auth}
            radius="sm"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {renderNavItems(siteConfig.navItems)}
          <NavbarMenuItem className="mt-5">
            <Button
              as={Link}
              color="primary"
              href={siteConfig.links.auth}
              radius="sm"
            >
              Sign Up
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
