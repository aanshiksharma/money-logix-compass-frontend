import { api } from "@/lib/client";

import { ChatRequest, ChatResponse, Conversation } from "../types";

export async function sendMessage(body: ChatRequest): Promise<ChatResponse> {
  return api("/chat", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function fetchAllConversations(): Promise<{
  conversations: Conversation[];
}> {
  return api("/chat");
}

export async function fetchConversationByConversationId(
  conversationId: string,
): Promise<Conversation> {
  return api(`/chat/${conversationId}`);
}
