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
  SidebarGroup,
} from "@/components/ui/sidebar";
import { GalleryVerticalEndIcon, PanelLeft } from "lucide-react";
import PlanDashbord from "../plan-dashboard/plan-dashboard";

export default function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { open, toggleSidebar } = useSidebar();

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
              onClick={toggleSidebar}
            >
              <PanelLeft />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain />
        <PlanDashbord />
        <SidebarChats />
      </SidebarContent>

      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
