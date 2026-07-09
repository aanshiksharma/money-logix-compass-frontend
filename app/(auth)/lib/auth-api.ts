import { api } from "@/lib/client";
import {
  LoginSignupRequest,
  LoginSignupResponse,
  OnboardingRequest,
  OnboardingResponse,
} from "../types";

export async function login({
  email,
  password,
}: LoginSignupRequest): Promise<LoginSignupResponse> {
  return api("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function register({
  email,
  password,
}: LoginSignupRequest): Promise<LoginSignupResponse> {
  return api("/auth/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function onboarding(
  data: OnboardingRequest,
): Promise<OnboardingResponse> {
  return api("/auth/basic-info", {
    method: "POST",
    body: JSON.stringify(data),
  });
}
