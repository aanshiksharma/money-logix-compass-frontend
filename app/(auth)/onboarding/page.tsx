"use client";

import Container from "@/components/shared/container";
import { OnboardingForm } from "../components/onboarding-form";

export default function Register() {
  return (
    <Container className="min-h-screen">
      <div className="max-w-xl w-full py-20">
        <OnboardingForm />
      </div>
    </Container>
  );
}
