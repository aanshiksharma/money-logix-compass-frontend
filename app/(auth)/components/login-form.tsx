"use client";

import { useState, SubmitEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";

import { EmailField, GoogleButton, PasswordField } from "./form-fields";

import { useLogin } from "../hooks/useLogin";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { busy, handleLogin } = useLogin();

  const handleSubmit: (event: SubmitEvent<HTMLFormElement>) => void = async (
    event,
  ) => {
    event.preventDefault();

    if (!email.trim()) return alert("Please enter email.");
    if (!password.trim()) return alert("Please enter password.");

    await handleLogin({ email, password });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>

        <Field>
          <FieldLabel>Email</FieldLabel>
          <EmailField value={email} setValue={setEmail} />
        </Field>

        <Field>
          <FieldLabel>Password</FieldLabel>
          <PasswordField value={password} setValue={setPassword} />
        </Field>

        <Field>
          <Button type="submit" size="lg" disabled={busy}>
            Login
          </Button>
        </Field>

        <FieldSeparator>or</FieldSeparator>

        <Field>
          <GoogleButton disabled={busy}>Continue with Google</GoogleButton>
        </Field>

        <p className="mt-4 text-muted-foreground text-center text-xs">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-link hover:underline transition ease-out duration-300"
          >
            Signup
          </a>
        </p>
      </FieldGroup>
    </form>
  );
}
