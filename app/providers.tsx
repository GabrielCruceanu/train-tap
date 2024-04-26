"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Analytics } from "@vercel/analytics/react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

/**
 * Renders the Providers component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered.
 * @param {Object} props.themeProps - The theme props for NextThemesProvider.
 * @returns {ReactNode} The rendered Providers component.
 */
export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        {children}
        <Analytics />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
