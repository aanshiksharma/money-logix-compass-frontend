import { ReactNode } from "react";

import MainContainer from "@/components/layout/main-container";
import LandingNavigation from "./components/landing-navigation";

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <LandingNavigation />

      <MainContainer>{children}</MainContainer>
    </>
  );
}
