export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Train Tap",
  description:
    "Elevate Your Training Business With TrainTap! Streamline scheduling, enhance client engagement, and focus on what you do best—transforming lives through fitness.",
  navItems: [
    {
      label: "Problem",
      href: "/problem",
    },
    {
      label: "Features",
      href: "/features",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Testimonials",
      href: "/testimonials",
    },
    {
      label: "Support",
      href: "/support",
    },
  ],
  navMenuItems:

  [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    auth: "/signin",
    pricing: "/pricing",
  },
};
