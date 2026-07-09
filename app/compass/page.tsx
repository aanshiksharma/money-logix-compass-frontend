"use client";

import { useRef, useEffect } from "react";

import Container from "@/components/shared/container";
import { Chat, NewChat } from "./components/chat/chat";

import { useChat } from "./hooks/use-chat";
import ChatContainer from "./components/chat/chat-container";

export default function Dashboard() {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const { newChat, messages, isSending, sendMessage } = useChat();

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight + 100,
      behavior: "smooth",
    });
  }, [messages, isSending]);

  return (
    <>
      <Container>
        <ChatContainer newChat={newChat}>
          {newChat ? <NewChat /> : <Chat />}
        </ChatContainer>
      </Container>
    </>
  );
}
