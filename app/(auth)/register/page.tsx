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
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function Register() {
  return (
    <Container className="min-h-screen">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>Enter your details and signup.</CardDescription>
          <CardAction>
            <Button asChild variant="secondary">
              <a href="/login">Login</a>
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent className="space-y-2">
          <form>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input placeholder="John Doe" />
                </Field>

                <Field>
                  <FieldLabel>Age</FieldLabel>
                  <Input type="number" placeholder="24" />
                </Field>
              </FieldGroup>

              <FieldGroup>
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input type="email" placeholder="Enter your email here" />
                </Field>

                <Field>
                  <FieldLabel>Password</FieldLabel>
                  <Input
                    type="password"
                    placeholder="Enter your password here"
                  />
                </Field>

                <Field>
                  <Button type="submit">Signup</Button>
                </Field>
              </FieldGroup>
            </FieldSet>
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
