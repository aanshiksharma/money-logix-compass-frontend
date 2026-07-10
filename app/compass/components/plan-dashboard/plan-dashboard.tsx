"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { SidebarGroup, SidebarMenuButton } from "@/components/ui/sidebar";
import { ChartNoAxesGantt, IndianRupee } from "lucide-react";

import { usePlan } from "../../hooks/use-plan";
import { useProfile } from "../../hooks/use-profile";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import PlanHeader from "./plan-header";
import AllocationChart from "./allocation-chart";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { useSimulation } from "../../hooks/use-simulation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Stats from "./stats";
import SimulationCard from "./simulation-card";
import Milestones from "./milestones";

export default function PlanDashbord() {
  const { plan } = usePlan();
  const { profile } = useProfile();
  const isMobile = useIsMobile();

  useEffect(() => {}, [plan, profile]);

  return (
    <Sheet>
      <SidebarGroup>
        <SidebarMenuButton asChild tooltip="View Plan">
          <SheetTrigger>
            <ChartNoAxesGantt />
            <span>View Plan</span>
          </SheetTrigger>
        </SidebarMenuButton>
      </SidebarGroup>

      <SheetContent
        side={isMobile ? "bottom" : "right"}
        className={!isMobile ? "max-w-lg!" : ""}
      >
        <PlanHeader />

        <ScrollArea className="h-3/4 rounded-md">
          <div className="flex flex-col gap-8 px-4 py-6">
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-2xl">{plan?.templateName}</h3>
              <p>{plan?.tagline}</p>
            </div>

            <Stats />

            <div className="w-full">
              <AllocationChart />

              <h3 className="font-medium text-center">Allocation Chart</h3>
            </div>

            <SimulationCard />

            <p className="text-center -mt-4 text-pretty max-w-xs mx-auto text-muted-foreground">
              Estimates use assumed long-term average returns and are not
              guaranteed.
            </p>

            <Milestones />
          </div>
        </ScrollArea>

        <SheetFooter className="text-center text-pretty text-xs text-muted-foreground">
          {plan?.disclaimer}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
