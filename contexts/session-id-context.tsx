"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

import { getSessionId } from "@/lib/session-id";

export type SessionIdContextType = {
  sessionId: string;
  setSessionId: (sessionId: string) => void;
};

export const SessionIdContext = createContext<SessionIdContextType | null>(
  null,
);

export function SessionIdProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState("");

  useEffect(() => setSession(getSessionId), []);

  const setSessionId = (sessionId: string) => {
    setSession(sessionId);
  };

  return (
    <SessionIdContext.Provider value={{ sessionId: session, setSessionId }}>
      {children}
    </SessionIdContext.Provider>
  );
}
