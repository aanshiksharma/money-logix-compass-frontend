import { api } from "@/lib/client";
import { Profile } from "../types/profile";

export async function fetchProfile(
  conversationId: string,
): Promise<{ profile: Profile }> {
  return api(`/profile/${conversationId}`);
}
