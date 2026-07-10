"use client";

import { Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

import { usePlan } from "../../hooks/use-plan";

export const description = "A pie chart with a label";

export const chartConfig = {
  allocation: {
    label: "Allocation",
  },
  largeCap: {
    label: "Large Cap",
    color: "var(--chart-1)",
  },
  midCap: {
    label: "Mid Cap",
    color: "var(--chart-2)",
  },
  smallCap: {
    label: "Small Cap",
    color: "var(--chart-3)",
  },
  debt: {
    label: "Debt",
    color: "var(--chart-4)",
  },
  gold: {
    label: "Gold",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export default function AllocationChart() {
  const { plan } = usePlan();
  if (!plan) return null;

  const chartData = plan.allocation.map((asset, index) => ({
    asset: asset.asset,
    allocation: asset.percent,
    fill: `var(--chart-${(index % 5) + 1})`,
  }));

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto min-h-36 w-full h-full aspect-video pb-0 [&_.recharts-pie-label-text]:fill-foreground"
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent labelClassName="" />} />
        <Pie data={chartData} dataKey="allocation" nameKey="asset" label />
      </PieChart>
    </ChartContainer>
  );
}
