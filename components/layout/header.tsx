"use client";

import { ReactNode } from "react";
import Link from "next/link";

import ThemeToggle from "../shared/theme-toggle";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetFooter,
} from "../ui/sheet";
import { Menu, Sidebar } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

interface PropTypes {
  links?: {
    url: string;
    label: string;
  }[];
  size?: "default" | "sm";
  className?: string;
  sidebarToggle?: boolean;
  children?: ReactNode;
}

export function Header({
  links,
  size = "default",
  sidebarToggle = false,
  className,
  children,
}: PropTypes) {
  let open;

  if (sidebarToggle) {
    const { toggleSidebar } = useSidebar();
    open = toggleSidebar;
  }

  return (
    <header
      className={`
        sticky top-0 min-h-12 z-2
        flex items-center justify-between
        bg-transparent backdrop-blur-md
        w-full px-4 ${size === "sm" ? "py-2" : "py-4"}
        ${className}
    `}
    >
      <div className="flex items-center gap-3">
        {sidebarToggle && (
          <Button
            size="icon"
            variant="ghost"
            className={`md:hidden`}
            onClick={open}
          >
            <Sidebar />
          </Button>
        )}

        <a href="/">Compass</a>
      </div>

      {/* 
        links && mobile: hidden; desktop: flex;
        !links && mobile: flex; desktop: flex;
      */}

      <nav
        className={`
          [@media(hover:hover)]:flex ${links ? "hidden" : "flex"}
          items-center gap-6
        `}
      >
        {links && (
          <ul className="flex items-center gap-6 text-sm text-muted-foreground">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="hover:text-foreground transition ease-out duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {children}
        </div>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className={`
              [@media(hover:hover)]:hidden ${links ? "flex" : "hidden"}
            `}
          >
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Compass</SheetTitle>
          </SheetHeader>

          <nav className="[@media(hover:hover)]:hidden">
            {links && (
              <ul className="grid place-items-stretch ">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="px-4 py-2 block text-sm [@media(hover:hover)]:text-muted-foreground text-foreground hover:text-foreground transition ease-out duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>

          <SheetFooter>
            <ThemeToggle>Toggle Theme</ThemeToggle>
            <div className="flex flex-col items-stretch gap-2">{children}</div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}
