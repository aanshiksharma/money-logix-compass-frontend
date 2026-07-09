import { api } from "./client";
import { SyncUserRequest, SyncUserResponse } from "@/types/user";

export async function syncUser(
  user: SyncUserRequest,
): Promise<SyncUserResponse> {
  return api("/auth/sync-user", {
    method: "POST",
    body: JSON.stringify(user),
  });
}
