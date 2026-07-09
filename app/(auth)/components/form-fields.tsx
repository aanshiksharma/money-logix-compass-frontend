"use client";

import { useState, Dispatch, SetStateAction, ReactNode } from "react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";

type FieldControls = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
};

export function EmailField({ value, setValue }: FieldControls) {
  return (
    <InputGroup>
      <InputGroupAddon>
        <Mail />
      </InputGroupAddon>
      <InputGroupInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="email"
        placeholder="name@example.com"
        required
      />
    </InputGroup>
  );
}

export function PasswordField({ value, setValue, placeholder }: FieldControls) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <InputGroup>
      <InputGroupAddon>
        <Lock />
      </InputGroupAddon>

      <InputGroupInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder ? placeholder : "Enter your password"}
        required
      />

      <InputGroupAddon align="inline-end">
        <Tooltip>
          <TooltipTrigger asChild>
            <InputGroupButton
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? <Eye /> : <EyeOff />}
            </InputGroupButton>
          </TooltipTrigger>

          <TooltipContent>
            {showPassword ? "Hide Password" : "Show Password"}
          </TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  );
}

export function SelectField({
  placeholder,
  values,
  label,
  value,
  setValue,
}: {
  placeholder?: string;
  values: string[];
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Select value={value} onValueChange={(val) => setValue(val)}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder || "Select a value"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {values.map((value) => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function TextField({
  addon,
  placeholder,
  value,
  setValue,
}: {
  addon?: ReactNode | string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <InputGroup>
      {addon && <InputGroupAddon>{addon}</InputGroupAddon>}
      <InputGroupInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
    </InputGroup>
  );
}

export function FormHeader({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h1 className="text-2xl font-bold">{heading}</h1>
      <p className="text-sm text-balance text-muted-foreground">{body}</p>
    </div>
  );
}

export function GoogleButton({
  disabled,
  children,
}: {
  disabled: boolean;
  children: ReactNode;
}) {
  return (
    <Button
      type="button"
      size="lg"
      className="w-full"
      variant="outline"
      disabled={disabled}
      onClick={() =>
        signIn("google", {
          callbackUrl: "/compass",
        })
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-google"
        viewBox="0 0 16 16"
      >
        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
      </svg>
      {children}
    </Button>
  );
}
