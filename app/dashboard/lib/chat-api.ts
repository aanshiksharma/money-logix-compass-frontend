import { api } from "@/lib/client";

import { Messages } from "@/app/types/Message";

import { ChatRequest, ChatResponse } from "../types";

export async function sendMessage(body: ChatRequest): Promise<ChatResponse> {
  return api("/chat", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
