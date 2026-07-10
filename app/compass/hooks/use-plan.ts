import { useContext } from "react";
import { PlanContext } from "../contexts/plan-context";
import { PlanContextType } from "../types/plan";

export function usePlan(): PlanContextType {
  const context = useContext(PlanContext);
  if (!context) throw new Error("usePlan must be used inside PlanProvider");

  return context;
}
