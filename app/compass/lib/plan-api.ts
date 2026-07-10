import { api } from "@/lib/client";
import { Plan } from "../types/plan";

export async function fetchPlan(
  conversationId: string,
): Promise<{ plan: Plan }> {
  return api(`/plan/${conversationId}`);
}
