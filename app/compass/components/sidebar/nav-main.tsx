"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { navLinks } from "../../data/navLinks";
import { Button } from "@/components/ui/button";

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {navLinks.map((link, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton
              asChild={link.url ? true : false}
              tooltip={link.title}
            >
              {link.url ? (
                <a href={link.url}>
                  {link.icon}
                  <span>{link.title}</span>
                </a>
              ) : (
                <>
                  {link.icon}
                  <span>{link.title}</span>
                </>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
