"use client";

import { useState, useRef, useEffect } from "react";

import Container from "@/components/shared/container";
import { Chat, NewChat } from "./components/chat/chat";

import { useChat } from "./hooks/use-chat";

export default function Dashboard() {
  const [chatStarted, setChatStarted] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { messages, isSending, sendMessage } = useChat();

  const handleSubmit = async (prompt?: string) => {
    const trimmed = prompt ? prompt.trim() : value.trim();

    if (!trimmed) return;

    setChatStarted(true);
    sendMessage(trimmed);
    setValue("");
  };

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isSending]);

  return (
    <>
      <Container>
        <div
          ref={chatContainerRef}
          id="chat-container"
          className={`
          max-w-2xl w-full min-h-[calc(100dvh-96px)]
          ${
            chatStarted
              ? "grid grid-rows-[1fr_auto] gap-4"
              : "flex flex-col items-center justify-center gap-8"
          }
        `}
        >
          {chatStarted ? (
            <Chat
              value={value}
              setValue={setValue}
              messages={messages}
              handleSubmit={handleSubmit}
            />
          ) : (
            <NewChat
              value={value}
              setValue={setValue}
              handleSubmit={handleSubmit}
            />
          )}
        </div>
      </Container>
    </>
  );
}
