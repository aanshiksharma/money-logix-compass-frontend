"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useChat } from "../../hooks/use-chat";

export default function ChatContainer({
  newChat,
  children,
}: {
  newChat?: boolean;
  children: ReactNode;
}) {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { messages, isSending } = useChat();

  useEffect(() => {
    if (!chatContainerRef.current) return;

    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatContainerRef.current, messages, isSending]);

  return (
    <div
      ref={chatContainerRef}
      id="chat-container"
      className={`
          max-w-2xl w-full min-h-[calc(100dvh-96px)]
          ${
            newChat
              ? "flex flex-col items-center justify-center gap-8"
              : "grid grid-rows-[1fr_auto] gap-4"
          }
        `}
    >
      {children}
    </div>
  );
}
