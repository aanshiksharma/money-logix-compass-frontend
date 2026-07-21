"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

import { PlanContextType, Plan } from "../types/plan";
import { fetchPlan } from "../lib/plan-api";

import { useChat } from "../hooks/use-chat";

export const PlanContext = createContext<PlanContextType | null>(null);

export function PlanProvider({ children }: { children: ReactNode }) {
  const [plan, setPlan] = useState<Plan | null>(null);
  const [error, setError] = useState<string>("");

  const { messages, conversationId } = useChat();

  useEffect(() => {
    if (!conversationId.trim()) return;

    getPlan();
  }, [conversationId, messages]);

  const getPlan = async () => {
    try {
      const response = await fetchPlan(conversationId);

      setPlan(response.plan);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching plan");
    }
  };

  return (
    <PlanContext.Provider value={{ plan }}>{children}</PlanContext.Provider>
  );
}
