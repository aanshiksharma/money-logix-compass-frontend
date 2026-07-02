"use client";

import { ReactNode, useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ children }: { children?: ReactNode }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      size={children ? "default" : "icon"}
      variant="outline"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      {resolvedTheme === "light" ? <Moon /> : <Sun />}
      {children}
    </Button>
  );
}
