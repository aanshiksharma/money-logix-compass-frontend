"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function ChatContainer({
  newChat,
  children,
}: {
  newChat?: boolean;
  children: ReactNode;
}) {
  const chatContainerRef = useRef(null);

  useEffect(() => {}, [chatContainerRef.current]);

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
