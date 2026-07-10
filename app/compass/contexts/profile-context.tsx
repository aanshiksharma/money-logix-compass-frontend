"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

import { ProfileContextType, Profile } from "../types/profile";
import { fetchProfile } from "../lib/profile-api";

import { useChat } from "../hooks/use-chat";

export const ProfileContext = createContext<ProfileContextType | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string>("");

  const { conversationId } = useChat();

  useEffect(() => {
    if (!conversationId.trim()) return;

    getProfile();
  }, [conversationId]);

  const getProfile = async () => {
    try {
      const response = await fetchProfile(conversationId);
      setProfile(response.profile);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error fetching profile");
    }
  };

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
}
