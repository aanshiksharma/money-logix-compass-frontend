import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ChartNoAxesGantt } from "lucide-react";

export default function PlanHeader() {
  return (
    <SheetHeader>
      <SheetTitle>
        <div className="flex items-center gap-3">
          <ChartNoAxesGantt size={16} />
          <h2>Your financial dashboard</h2>
        </div>
      </SheetTitle>
    </SheetHeader>
  );
}
