import { useContext } from "react";
import { ChatContext } from "../contexts/chat-context";
import { ChatContextType } from "../types";

export function useChat(): ChatContextType {
  const context = useContext(ChatContext);
  if (!context) throw new Error("useChat must be used inside ChatProvider");

  return context;
}
