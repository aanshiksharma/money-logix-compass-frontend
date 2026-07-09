import { useEffect, useEffectEvent, useState } from "react";

import { LoginSignupRequest, OnboardingRequest } from "../types";

import { login, register, onboarding } from "../lib/auth-api";

import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export function useLogin() {
  const [busy, setBusy] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { user, setUser } = useUser();
  const router = useRouter();

  const handleLogin = async (data: LoginSignupRequest) => {
    setBusy(true);
    setError("");

    try {
      const response = await login(data);

      setUser(response.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setBusy(false);
      if (user?.basicInfoComplete) router.replace("/compass");
      else router.replace("/onboarding");
    }
  };

  const handleRegister = async (data: LoginSignupRequest) => {
    setBusy(true);
    setError("");

    try {
      const response = await register(data);

      setUser(response.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed.");
    } finally {
      setBusy(false);
      router.replace("/onboarding");
    }
  };

  const handleOnboarding = async (data: OnboardingRequest) => {
    setBusy(true);
    setError("");

    try {
      const response = await onboarding(data);

      setUser(response.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Onboarding failed.");
    } finally {
      setBusy(false);
      router.replace("/compass");
    }
  };

  return { busy, handleLogin, handleRegister, handleOnboarding };
}
