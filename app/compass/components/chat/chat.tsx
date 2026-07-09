"use client";

import { Dispatch, SetStateAction } from "react";

import { Button } from "@/components/ui/button";

import PromptBox from "./prompt-box";
import { UserMessage, AssistantMessage, MessageLoading } from "./message";

import { useChat } from "../../hooks/use-chat";
import { useUser } from "@/hooks/use-user";

import { SUGGESTIONS } from "@/app/compass/data/defaultPrompts";
import Composer from "./composer";

export function Chat() {
  const { messages, isSending, sendMessage } = useChat();

  const handleSubmit = async (prompt: string) => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    sendMessage(trimmed);
  };

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

        {isSending && <MessageLoading />}
      </div>

      <Composer handleSubmit={handleSubmit} />
    </>
  );
}

export function NewChat() {
  const { user } = useUser();
  const { setNewChat, sendMessage } = useChat();

  const handleSubmit = async (prompt: string) => {
    const trimmed = prompt.trim();
    if (!trimmed) return;

    setNewChat(false);
    sendMessage(trimmed);
  };

  return (
    <>
      <h1 className="text-2xl">Good to see you, {user?.name}.</h1>

      <Composer handleSubmit={handleSubmit} />

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
        {SUGGESTIONS.map((prompt, index) => (
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
