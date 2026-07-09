"use client";

import { Dispatch, SetStateAction, useState } from "react";

import {
  InputGroup,
  InputGroupTextarea,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Toggle } from "@/components/ui/toggle";

import { ArrowUp, Lightbulb } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type PropTypes = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  thinkMode?: boolean;
  setThinkMode: Dispatch<SetStateAction<boolean>>;
  handleSubmit: (prompt: string) => void;
};

export default function PromptBox({
  value,
  setValue,
  thinkMode = true,
  setThinkMode,
  handleSubmit,
}: PropTypes) {
  return (
    <InputGroup className="backdrop-blur-md">
      <InputGroupTextarea
        value={value}
        placeholder="Ask anything"
        className="min-h-8 max-h-50 w-full resize-none overflow-y-auto"
        onChange={(e) => {
          if (e.target.value !== "\n") setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            handleSubmit(value);
            setValue("");
          }
        }}
      />
      <InputGroupAddon
        align={value.trim() ? "block-end" : "inline-end"}
        className={`flex justify-between ${value.trim() && "mt-4"}`}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              aria-label="Toggle Think mode"
              defaultPressed={thinkMode}
              onClick={(e) =>
                setThinkMode(!(e.currentTarget.ariaPressed === "true"))
              }
              className="text-foreground"
            >
              <Lightbulb /> Think
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Toggle Think Mode</TooltipContent>
        </Tooltip>

        <InputGroupButton type="submit" variant="default" size="icon-sm">
          <ArrowUp />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}
