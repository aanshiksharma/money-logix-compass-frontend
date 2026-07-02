import { ReactNode } from "react";
import DashboardSidebar from "./components/sidebar/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/components/layout/header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SidebarProvider>
        <DashboardSidebar />

        <div className="w-full">
          <Header size="sm" />
          <main>{children}</main>
        </div>
      </SidebarProvider>
    </>
  );
}
