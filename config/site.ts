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
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Workouts",
      href: "/workouts",
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
    social: {
      twitter: {
        label: "Twitter",
        href: "https://twitter.com/",
      },
      facebook: {
        label: "Facebook",
        href: "https://facebook.com/",
      },
      instagram: {
        label: "Instagram",
        href: "https://instagram.com/",
      },
    },
    static: {
      home: {
        label: "Home",
        href: "/",
      },
      problem: {
        label: "Problem",
        href: "/problem",
      },
      features: {
        label: "Features",
        href: "/features",
      },
      pricing: {
        label: "Pricing",
        href: "/pricing",
      },
      testimonials: {
        label: "Testimonials",
        href: "/testimonials",
      },
      support: {
        label: "Support",
        href: "/support",
      },
    },
    auth: {
      login: {
        label: "Login",
        href: "/login",
      },
      signup: {
        label: "Sign Up",
        href: "/signup",
      },
      forgotPassword: {
        label: "Forgot password",
        href: "/forgot-password",
      },
      resetPassword: {
        label: "Reset password",
        href: "/reset-password",
      },
    },
    application: {
      onboarding: {
        label: "Onboarding",
        href: "/onboarding",
      },
      dashboard: {
        label: "Dashboard",
        href: "/dashboard",
      },
      calendar: {
        label: "Calendar",
        href: "/calendar",
      },
      workouts: {
        label: "Workouts",
        href: "/workouts",
      },
      nutrition: {
        label: "Nutrition",
        href: "/nutrition",
      },
      profile: {
        label: "Profile",
        href: "/profile",
      },
      clients: {
        label: "Clients",
        href: "/clients",
      },
      settings: {
        label: "Settings",
        href: "/settings",
      },
      helpFeedback: {
        label: "Help & Feedback",
        href: "/help-feedback",
      },
      logout: {
        label: "Logout",
        href: "/logout",
      },
    },

    legal: {
      tos: {
        label: "Terms of Service",
        href: "/terms-of-service",
      },
      privacyPolicy: {
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
    },
  },
};
