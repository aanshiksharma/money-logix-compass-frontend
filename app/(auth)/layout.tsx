import { ReactNode } from "react";

import AuthNavigation from "./components/auth-navigation";
import MainContainer from "@/components/layout/main-container";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthNavigation />

      <MainContainer>{children}</MainContainer>
    </>
  );
}
