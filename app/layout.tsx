import "@/styles/globals.css";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import config from "@/config";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/layouts/layout-client";
import { Inter, Inter_Tight } from "next/font/google";
const interTight = Inter_Tight({
  weight: ["500"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter-tight",
});

const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-inter",
});

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {config.domainName && (
        <head>
          <PlausibleProvider domain={config.domainName} />
        </head>
      )}
      <body
        className={clsx(
          "min-h-screen bg-background lime-dark font-sans antialiased text-paragraph font-medium md:text-body",
          inter.variable,
        )}
      >
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            {children}
          </Providers>
        </ClientLayout>
      </body>
    </html>
  );
}
