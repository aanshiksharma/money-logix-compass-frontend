"use client";

import { NavMain } from "./nav-main";
import { SidebarUser } from "./sidebar-user";
import { SidebarChats } from "./sidebar-chats";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  GalleryVerticalEndIcon,
  SquarePen,
  Search,
  PanelLeft,
} from "lucide-react";

export default function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { open, setOpen } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props} className="group">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center justify-between w-full">
            <span
              className={`
                flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground
                ${!open && "group-hover:hidden"}
              `}
            >
              <GalleryVerticalEndIcon size={16} />
            </span>

            <SidebarMenuButton
              tooltip="Toggle Sidebar"
              className={`w-fit ${!open && "hidden group-hover:flex"}`}
              onClick={() => setOpen(open ? false : true)}
            >
              <PanelLeft />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
        <SidebarChats />
      </SidebarContent>

      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
