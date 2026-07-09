"use client";

import { ReactNode } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { TooltipProvider } from "@/components/ui/tooltip";

import { SessionProvider } from "next-auth/react";
import { SessionIdProvider } from "@/contexts/session-id-context";
import { UserProvider } from "@/contexts/user-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <SessionIdProvider>
        <UserProvider>
          <NextThemesProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </NextThemesProvider>
        </UserProvider>
      </SessionIdProvider>
    </SessionProvider>
  );
}
