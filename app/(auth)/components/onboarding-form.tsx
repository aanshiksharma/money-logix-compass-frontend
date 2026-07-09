"use client";

import { useState, SubmitEvent, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { FormHeader, SelectField, TextField } from "./form-fields";

import { useLogin } from "../hooks/useLogin";
import { GOALS } from "../data/goals";
import {
  BriefcaseBusiness,
  Building2,
  Calendar,
  IndianRupee,
  MapPin,
  Phone,
  User,
} from "lucide-react";

import { useUser } from "@/hooks/use-user";

export function OnboardingForm() {
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [goal, setGoal] = useState<string>("");

  const [age, setAge] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [income, setIncome] = useState<string>("");

  const { user } = useUser();
  const { handleOnboarding } = useLogin();

  useEffect(() => {
    if (user) setName(user.name);
    if (user?.age) setAge(user.age);
    if (user?.city) setCity(user.city);
    if (user?.occupation) setOccupation(user.occupation);
    if (user?.phone) setPhone(user.phone);
  }, [user]);

  const handleSubmit: (event: SubmitEvent<HTMLFormElement>) => void = async (
    event,
  ) => {
    event.preventDefault();

    const body = {
      name,
      city,
      occupation,
      goal,
      age,
      phone,
      income,
      email: user ? user.email : "",
    };
    await handleOnboarding(body);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FieldGroup>
        <FormHeader
          heading="Onboarding"
          body="
            Complete Your Profile We use this information to personalize your
            financial guidance, risk assessment, and investment recommendations."
        />

        <FieldGroup className="grid sm:grid-cols-2">
          <Field>
            <FieldLabel>Full Name</FieldLabel>
            <TextField
              value={name}
              setValue={setName}
              addon={<User />}
              placeholder="John Doe"
            />
          </Field>

          <Field>
            <FieldLabel>Age</FieldLabel>
            <TextField
              value={age}
              setValue={setAge}
              addon={<Calendar />}
              placeholder="24"
            />
          </Field>
        </FieldGroup>

        <FieldGroup className="grid sm:grid-cols-2">
          <Field>
            <FieldLabel>Phone</FieldLabel>
            <TextField
              value={phone}
              setValue={setPhone}
              addon={<Phone />}
              placeholder="9876543210"
            />
          </Field>

          <Field>
            <FieldLabel>City of Residence</FieldLabel>
            <TextField
              value={city}
              setValue={setCity}
              addon={<MapPin />}
              placeholder="Noida"
            />
          </Field>
        </FieldGroup>

        <FieldGroup className="grid sm:grid-cols-2">
          <Field>
            <FieldLabel>Occupation</FieldLabel>
            <TextField
              value={occupation}
              setValue={setOccupation}
              addon={<BriefcaseBusiness />}
              placeholder="Software Developer"
            />
          </Field>

          <Field>
            <FieldLabel>Monthly Income</FieldLabel>
            <TextField
              value={income}
              setValue={setIncome}
              addon={<IndianRupee />}
              placeholder="100000"
            />
          </Field>
        </FieldGroup>

        <Field>
          <FieldLabel>Financial Goal</FieldLabel>
          <SelectField
            values={GOALS}
            label="Goals"
            placeholder="Choose your primary financial goal"
            value={goal}
            setValue={setGoal}
          />
          <FieldDescription>
            This helps us personalize your investment recommendations.
          </FieldDescription>
        </Field>

        <FieldGroup className="sticky bottom-6">
          <Field>
            <Button size="lg" type="submit">
              Finish Onboarding
            </Button>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
}
