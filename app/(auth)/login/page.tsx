"use client";

import { signIn } from "next-auth/react";

import Container from "@/components/shared/container";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <Container className="min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
          <CardAction>
            <Button asChild variant="secondary">
              <a href="/register">Signup</a>
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent className="space-y-2">
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" placeholder="johndoe12@example.com" />
              </Field>

              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input type="password" placeholder="********" />
              </Field>

              <Field>
                <Button type="submit">Login</Button>
              </Field>
            </FieldGroup>
          </form>

          <Button
            className="w-full"
            variant="outline"
            onClick={() =>
              signIn("google", {
                callbackUrl: "/dashboard",
              })
            }
          >
            Continue with google
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
