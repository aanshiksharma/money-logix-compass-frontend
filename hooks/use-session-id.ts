import { useContext } from "react";
import { SessionIdContext } from "@/contexts/session-id-context";

export function useSessionId() {
  const context = useContext(SessionIdContext);

  if (!context) {
    throw new Error("useSession must be used insied SessionProvider");
  }

  return context;
}
