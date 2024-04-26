import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/marketing/navbar";
import Footer from "@/components/shared/footer";

/**
 * Metadata for the layout.
 */
export const metadata: Metadata = {
  /**
   * The title of the layout.
   * @default siteConfig.name
   * @template `%s - ${siteConfig.name}`
   */
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  /**
   * The description of the layout.
   */
  description: siteConfig.description,
  /**
   * The theme color options for the layout.
   */
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  /**
   * The icons for the layout.
   */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

/**
 * The root layout component.
 * @param children - The children components.
 * @returns The rendered layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
