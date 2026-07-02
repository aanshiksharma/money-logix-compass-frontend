import { Message, Messages } from "@/app/types/Message";
import { useState, useEffect } from "react";
import { sendMessage as sendMessageRequest } from "../lib/chat-api";

import { ChatResponse } from "../types";

type UseChatReturn = {
  messages: Messages;
  isSending: boolean;
  error: string | null;

  sendMessage: (prompt: string) => void;
};

export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<Messages>([]);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const appendMessage: (message: string, role: "assistant" | "user") => void = (
    message,
    role,
  ) => {
    const id: string = Math.random().toString();

    const newMessage: Message = {
      id,
      chatId: id,
      role,
      content: message,
      metadata: {},
      createdAt: new Date(),
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
  };

  const handleError = (err: any | unknown) => {};

  const sendMessage: UseChatReturn["sendMessage"] = async (prompt: string) => {
    appendMessage(prompt, "user");

    try {
      setIsSending(true);
      const response: ChatResponse = await sendMessageRequest(messages);

      appendMessage(response.response_text, "assistant");
    } catch (err) {
      handleError(err);
    } finally {
      setIsSending(false);
    }
  };

  return { messages, isSending, error, sendMessage };
}
