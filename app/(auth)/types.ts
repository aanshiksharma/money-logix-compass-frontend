import { User } from "@/types/user";

export type LoginSignupRequest = {
  email: string;
  password: string;
};

export type OnboardingRequest = {
  email?: string;
  name: string;
  city: string;
  occupation: string;
  goal: string;
  age: string;
  phone: string;
  income: string;
};

export type LoginSignupResponse = {
  user: User;
};

export type OnboardingResponse = {
  user: User;
};
