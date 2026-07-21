"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { MoreHorizontalIcon, Trash2Icon } from "lucide-react";

import { useChat } from "../../hooks/use-chat";

export function SidebarChats() {
  const { isMobile } = useSidebar();
  const { conversationId, conversations, deleteConversation } = useChat();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>
        {conversations.length > 0 && "Chats"}
      </SidebarGroupLabel>
      <SidebarMenu>
        {conversations.toReversed().map((conversation, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton asChild>
              <a href={`/compass/${conversation.slug}`} className="h-auto">
                {conversation.title}
              </a>
            </SidebarMenuButton>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction
                  showOnHover
                  className="aria-expanded:bg-muted"
                >
                  <MoreHorizontalIcon />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-fit"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => deleteConversation(conversationId)}
                >
                  <Trash2Icon />
                  <span>Delete Chat</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
