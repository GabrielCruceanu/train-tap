import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { siteConfig } from "./config/site";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  let { data: usersProfile, error } = await supabase
    .from("users")
    .select("hasOnboarding")
    .eq("id", user?.id);

  console.log("user", user);
  console.log("req.nextUrl.pathname", req.nextUrl.pathname);
  console.log(
    "req.nextUrl.pathname === siteConfig.links.auth.login.href",
    req.nextUrl.pathname === siteConfig.links.auth.login.href
  );
  // if user is signed in and the current path is / redirect the user to /account
  if (
    (user && req.nextUrl.pathname === siteConfig.links.auth.login.href) ||
    (user && req.nextUrl.pathname === siteConfig.links.auth.signup.href) ||
    (user && req.nextUrl.pathname === siteConfig.links.auth.forgotPassword.href)
  ) {
    return NextResponse.redirect(
      new URL(siteConfig.links.application.dashboard.href, req.url)
    );
  }

  // if user is signed in and hasOnboarding redirect to /dashboard
  if (
    user &&
    usersProfile?.length &&
    usersProfile[0].hasOnboarding &&
    req.nextUrl.pathname === siteConfig.links.application.onboarding.href
  ) {
    return NextResponse.redirect(
      new URL(siteConfig.links.application.dashboard.href, req.url)
    );
  }
  console.log("usersProfile", usersProfile);
  if (
    user &&
    usersProfile?.length &&
    !usersProfile[0].hasOnboarding &&
    (req.nextUrl.pathname === siteConfig.links.application.dashboard.href ||
      req.nextUrl.pathname === siteConfig.links.application.calendar.href ||
      req.nextUrl.pathname === siteConfig.links.application.settings.href ||
      req.nextUrl.pathname === siteConfig.links.application.clients.href ||
      req.nextUrl.pathname === siteConfig.links.application.clients.href ||
      req.nextUrl.pathname === siteConfig.links.application.nutrition.href)
  ) {
    return NextResponse.redirect(
      new URL(siteConfig.links.application.onboarding.href, req.url)
    );
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (
    (!user &&
      req.nextUrl.pathname === siteConfig.links.application.onboarding.href) ||
    (!user &&
      req.nextUrl.pathname === siteConfig.links.application.dashboard.href) ||
    (!user &&
      req.nextUrl.pathname === siteConfig.links.application.calendar.href) ||
    (!user &&
      req.nextUrl.pathname === siteConfig.links.application.profile.href) ||
    (!user &&
      req.nextUrl.pathname === siteConfig.links.application.settings.href) ||
    (!user &&
      req.nextUrl.pathname === siteConfig.links.application.clients.href) ||
    (!user &&
      req.nextUrl.pathname === siteConfig.links.application.workouts.href) ||
    (!user &&
      req.nextUrl.pathname === siteConfig.links.application.nutrition.href)
  ) {
    return NextResponse.redirect(
      new URL(siteConfig.links.auth.login.href, req.url)
    );
  }

  return res;
}

export const config = {
  matcher: [
    "/login",
    "/sign-up",
    "/reset-password",
    "/update-password",
    "/dashboard",
    "/progress",
    "/profile",
    "/messages",
    "/notifications",
    "/settings",
    "/onboarding",
  ],
};
