import { ReactNode } from "react";
import DashboardSidebar from "./components/sidebar/dashboard-sidebar";
import { Header } from "@/components/layout/header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ChatProvider } from "./contexts/chat-context";
import { PlanProvider } from "./contexts/plan-context";
import { ProfileProvider } from "./contexts/profile-context";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <ChatProvider>
        <ProfileProvider>
          <PlanProvider>
            <SidebarProvider>
              <DashboardSidebar />

              <div className="w-full">
                <Header size="sm" />
                <main>{children}</main>
              </div>
            </SidebarProvider>
          </PlanProvider>
        </ProfileProvider>
      </ChatProvider>
    </>
  );
}
