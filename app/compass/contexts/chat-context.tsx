"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

import { ChatContextType } from "../types";
import { Message, Emotion, Conversation } from "../types";

import { toast } from "sonner";

import {
  fetchAllConversations,
  sendMessage as sendMessageRequest,
  deleteConversation as removeConversation,
} from "../lib/chat-api";

import { useUser } from "@/hooks/use-user";

export const ChatContext = createContext<ChatContextType | null>(null);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newChat, setNewChat] = useState<boolean>(true);
  const [conversationId, setConversationId] = useState<string>("");
  const [isSending, setIsSending] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { user } = useUser();

  useEffect(() => {
    getAllConversations();
  }, [user]);

  const getAllConversations = async () => {
    setLoading(true);

    try {
      const response = await fetchAllConversations();
      const allConversations = response.conversations.filter(
        (conversation) => conversation.userId === user?._id,
      );

      setConversations(allConversations);
    } catch (err) {
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteConversation = async (conversationId: string) => {
    await removeConversation(conversationId);
  };

  const appendMessage: (
    message: string,
    role: "assistant" | "user",
    emotion?: Emotion | null,
  ) => void = (message, role, emotion) => {
    const id: string = Math.random().toString();

    let newMessage: Message = {
      id,
      role,
      content: message,
    };

    if (emotion) {
      newMessage = {
        ...newMessage,
        emotion: {
          triggeredBy: emotion.triggeredBy,
          confidence: emotion.confidence,
          detected: emotion.detected,
          panicMode: emotion.panicMode,
        },
      };
    }

    setMessages((prev) => [...prev, newMessage]);
  };

  const handleError = (err: any | unknown) => {};

  const sendMessage: ChatContextType["sendMessage"] = async (
    prompt: string,
  ) => {
    appendMessage(prompt, "user");

    try {
      setIsSending(true);

      const response = await sendMessageRequest({
        email: user ? user.email : null,
        conversationId,
        message: prompt,
        thinkMode: true,
      });

      console.log(response);

      if (!conversationId.trim()) setConversationId(response.conversationId);

      appendMessage(response.reply, "assistant", response.emotion);
    } catch (err) {
      handleError(err);
    } finally {
      setIsSending(false);
    }
  };

  const setCurrentChatMessages = (slug: string) => {
    const currentConversation = conversations.find(
      (conversation) => conversation.slug === slug,
    );

    if (currentConversation) {
      setConversationId(currentConversation._id);
      setMessages(currentConversation.messages);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        conversations,
        conversationId,
        messages,
        isSending,
        error,
        newChat,

        setNewChat,
        setMessages,
        setIsSending,
        sendMessage,
        deleteConversation,
        setCurrentChatMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
