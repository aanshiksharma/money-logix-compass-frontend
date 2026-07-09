"use client";

import { Header } from "@/components/layout/header";
import { signOut } from "next-auth/react";

export default function AuthNavigation() {
  return <Header className="fixed! left-0 right-0" />;
}
