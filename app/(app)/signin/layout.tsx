import { ReactNode } from "react";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `Sign-in`,
  canonicalUrlRelative: "/auth/signin",
});

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
