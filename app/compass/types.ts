import { Dispatch, SetStateAction } from "react";

export type ChatRequest = {
  email: string | null;
  conversationId: string;
  message: string;
  thinkMode?: boolean;
};

export type ChatResponse = {
  conversationId: string;
  checkIn: boolean;
  emotion: Emotion;

  meta: {
    mock: boolean;
    model: string;
    provider: string;
  };

  phase: string;
  planBuilt: boolean;

  profile: RiskProfile;

  reply: string;
};

export type Emotion = {
  confidence: Number;
  detected: string;
  fomo: boolean;
  matched: string[];
  panicMode: boolean;
  riskSignal: string;
  triggeredBy: string | null;
};

export type RiskProfile = {
  complete: boolean;
  fearTolerance: string | null;
  goals: string[] | null;
  horizonYears: Number | null;
  lifeStage: string | null;
  monthlyIncome: Number | null;
  monthlyInvestable: Number | null;
  riskCategory: string | null;
  riskScore: Number | null;
};

export type Message = {
  id: string;
  role: "assistant" | "user";
  content: string; // Markdown
  emotion?: {
    detected: Emotion["detected"];
    triggeredBy: Emotion["triggeredBy"];
    confidence: Emotion["confidence"];
    panicMode: Emotion["panicMode"];
  };
};

export type BackendMessages = {
  role: "user" | "assistant";
  content: string;
  detectedEmotion: string | null;
  riskSignal: string;
  confidence: number;
  panicMode: boolean;
  triggeredBy: string | null;
}[];

export type Conversation = {
  _id: string;
  userId: string;
  slug: string;
  title: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ChatContextType = {
  conversations: Conversation[];
  conversationId: string;
  messages: Message[];
  isSending: boolean;
  error: string | null;
  newChat: boolean;
  sendMessage: (prompt: string) => void;
  setNewChat: Dispatch<SetStateAction<boolean>>;
  setMessages: Dispatch<SetStateAction<Message[]>>;
  setIsSending: Dispatch<SetStateAction<boolean>>;
  setCurrentChatMessages: (slug: string) => void;
};
