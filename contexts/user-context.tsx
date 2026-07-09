"use client";

import { useState, createContext, ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { User, UserContextType } from "@/types/user";
import { syncUser } from "@/lib/user";

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  const { data, status } = useSession();

  useEffect(() => {
    if (!user) return;

    if (!user.basicInfoComplete) router.replace("/onboarding");
  }, [user]);

  useEffect(() => {
    if (status !== "authenticated") return;

    async function sync() {
      try {
        if (!data) return;

        const response = await syncUser(data?.user);
        setUser(response.user);
      } catch (err) {
        console.log(err);
      }
    }

    sync();
  }, [status, data]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
