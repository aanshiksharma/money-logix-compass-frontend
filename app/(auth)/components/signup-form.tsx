"use client";

import { useState, SubmitEvent } from "react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";

import { GoogleButton, EmailField, PasswordField } from "./form-fields";

import { useLogin } from "../hooks/useLogin";

export function SignupForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const { busy, handleRegister } = useLogin();

  const handleSubmit: (event: SubmitEvent<HTMLFormElement>) => void = async (
    event,
  ) => {
    event.preventDefault();

    if (password !== confirmPassword)
      return alert("Password and Confirm Password do not match");

    await handleRegister({ email, password });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-balance text-muted-foreground">
            Fill in the form below to create your account
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
          <FieldLabel>Confirm Password</FieldLabel>
          <PasswordField
            value={confirmPassword}
            setValue={setConfirmPassword}
            placeholder="Confirm Password"
          />
        </Field>

        <FieldGroup>
          <Field>
            <Button size="lg" type="submit">
              Create Account
            </Button>
          </Field>

          <FieldSeparator>or</FieldSeparator>

          <Field>
            <GoogleButton disabled={busy}>Signup with Google</GoogleButton>
          </Field>

          <p className="mt-4 text-muted-foreground text-center text-xs">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-link hover:underline transition ease-out duration-300"
            >
              Login
            </a>
          </p>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
}
