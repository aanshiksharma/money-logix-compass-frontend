import { Button } from "@/components/ui/button";

import PromptBox from "./prompt-box";
import { UserMessage, AssistantMessage } from "./message";

import defaultPrompts from "@/app/dashboard/data/defaultPrompts.data.json";
import { Dispatch, SetStateAction } from "react";
import { Messages } from "@/app/types/Message";

type PropTypes = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  messages?: Messages;
  handleSubmit: (prompt?: string) => void;
};

export function Chat({
  value,
  setValue,
  messages = [],
  handleSubmit,
}: PropTypes) {
  return (
    <>
      <div className="h-full flex flex-col gap-4 overflow-x-auto">
        {messages.map((message, index) =>
          message.role === "user" ? (
            <UserMessage key={index} content={message.content} />
          ) : (
            <AssistantMessage key={index} content={message.content} />
          ),
        )}
      </div>

      <form
        className="bg-background pb-6 sticky bottom-0"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <PromptBox value={value} setValue={setValue} />
      </form>
    </>
  );
}

export function NewChat({ value, setValue, handleSubmit }: PropTypes) {
  return (
    <>
      <h1 className="text-2xl">Good to see you, Aanshik.</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className="w-full"
      >
        <PromptBox value={value} setValue={setValue} />
      </form>

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
        {defaultPrompts.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            onClick={() => handleSubmit(prompt)}
          >
            {prompt}
          </Button>
        ))}
      </div>
    </>
  );
}
