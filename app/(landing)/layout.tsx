import { ReactNode } from "react";

import MainContainer from "@/components/layout/main-container";
import LandingNavigation from "./components/landing-navigation";
import Footer from "./components/landing-footer";

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <LandingNavigation />

      <MainContainer className="landing">{children}</MainContainer>
      <Footer />
    </>
  );
}
