import themes from "daisyui/src/theming/themes.js";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "Train Tap",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Elevate Your Training Business With TrainTap! Streamline scheduling, enhance client engagement, and focus on what you do best—transforming lives through fitness.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "traintap.io",
  crisp: {
    // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.
    id: "561ec32b-e0d4-4ca4-a92e-a652d1217c63",
    // Hide Crisp by default, except on route "/". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId
    plans: [
      // STARTED -------------------
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId: "price_1P2788LakK4gTK7ZizmGdkEP",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Starter Plan",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Ideal for new trainers starting to grow",
        // The price you want to display, the one user will be charged on Stripe.
        price: 19.99,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: undefined,
        features: [
          {
            name: "Basic scheduling and booking system",
          },
          { name: "Client management for up to 10 clients" },
          { name: "Access to the workout plan library" },
          { name: "In-app messaging" },
          { name: "Email support" },
        ],
      },
      // {
      //   priceId: "price_1P2788LakK4gTK7Zrz7Ch4FU",
      //   // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
      //   isFeatured: false,
      //   // The price for annual
      //   isAnnual: true,
      //   name: "Starter Plan",
      //   // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
      //   description: "Ideal for new trainers starting to grow",
      //   // The price you want to display, the one user will be charged on Stripe.
      //   price: 191.9,
      //   // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
      //   priceAnchor: 239.88,
      //   features: [
      //     {
      //       name: "Basic scheduling and booking system",
      //     },
      //     { name: "Client management for up to 10 clients" },
      //     { name: "Access to the workout plan library" },
      //     { name: "In-app messaging" },
      //     { name: "Email support" },
      //   ],
      // },
      // PRO -------------------
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId: "price_1P29uaLakK4gTK7ZambyEfn9",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Pro Plan",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description: "Perfect for established trainers looking for efficiency",
        // The price you want to display, the one user will be charged on Stripe.
        price: 49.99,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: undefined,
        features: [
          {
            name: "All the features of the Starter Plan, plus",
          },
          { name: "Advanced scheduling options" },
          { name: "Client management for up to 50 clients" },
          { name: "Customizable workout templates" },
          { name: "Performance tracking" },
        ],
      },
      // {
      //   priceId: "price_1P29vfLakK4gTK7ZilXM5GR0",
      //   // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
      //   isFeatured: false,
      //   // The price for annual
      //   isAnnual: true,
      //   name: "Pro Plan",
      //   // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
      //   description: "Ideal for new trainers starting to grow",
      //   // The price you want to display, the one user will be charged on Stripe.
      //   price: 479.9,
      //   // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
      //   priceAnchor: 599.88,
      //   features: [
      //     {
      //       name: "All the features of the Starter Plan, plus",
      //     },
      //     { name: "Advanced scheduling options" },
      //     { name: "Client management for up to 50 clients" },
      //     { name: "Customizable workout templates" },
      //     { name: "Performance tracking" },
      //   ],
      // },
      // ELITE -------------------
      {
        // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
        priceId: "price_1P2ASFLakK4gTK7ZPWBAUh1W",
        //  REQUIRED - Name of the plan, displayed on the pricing page
        name: "Elite Plan",
        // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
        description:
          "The ultimate solution for trainers aiming to scale their business",
        // The price you want to display, the one user will be charged on Stripe.
        price: 99.99,
        // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
        priceAnchor: undefined,
        features: [
          {
            name: "Includes everything in the Pro Plan, plus",
          },
          { name: "Unlimited client management" },
          { name: "Priority support" },
          { name: "Advanced analytics and reporting" },
        ],
      },
      // {
      //   priceId: "price_1P2ASsLakK4gTK7ZywCtgTyT",
      //   // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true
      //   isFeatured: false,
      //   // The price for annual
      //   isAnnual: true,
      //   name: "Elite Plan",
      //   // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others
      //   description:
      //     "The ultimate solution for trainers aiming to scale their business",
      //   // The price you want to display, the one user will be charged on Stripe.
      //   price: 959.9,
      //   // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty
      //   priceAnchor: 1199.88,
      //   features: [
      //     {
      //       name: "Includes everything in the Pro Plan, plus",
      //     },
      //     { name: "Unlimited client management" },
      //     { name: "Priority support" },
      //     { name: "Advanced analytics and reporting" },
      //   ],
      // },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg.eu",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `TrianTap <noreply@mg.eu.traintap.io>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Gabriel at TrainTap <gabriel@mg.eu.traintap.io>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "gabriel@mg.eu.traintap.io",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "kaapo.studio@gmail.com",
  },
  colors: {
    // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.
    theme: "light",
    // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after "data-theme=")
    // OR you can just do this to use a custom color: main: "#f37055". HEX only.
    main: themes[`[data-theme=light]`]["primary"],
  },
  auth: {
    // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API
    loginUrl: "/api/auth/signin",
    // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
