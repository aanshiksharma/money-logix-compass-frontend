"use client";

import { useRef, useEffect } from "react";

import Container from "@/components/shared/container";
import { Chat, NewChat } from "./components/chat/chat";

import { useChat } from "./hooks/use-chat";
import ChatContainer from "./components/chat/chat-container";

export default function Dashboard() {
  const { newChat } = useChat();

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
