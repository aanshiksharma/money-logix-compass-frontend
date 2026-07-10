import { useState, useCallback, useMemo, useEffect } from "react";

import { usePlan } from "./use-plan";
import { useProfile } from "./use-profile";

import { sipFutureValue, assetAnnualReturn } from "../utils/projections";

interface Amount {
  [assetName: string]: number;
}

export function useSimulation() {
  const { plan } = usePlan();
  const { profile } = useProfile();

  const horizon = Number(profile?.horizonYears);
  const baseSIP = Number(plan?.monthlySIP);

  const [amounts, setAmounts] = useState<Amount>({});

  useEffect(() => resetAmounts, []);

  const resetAmounts = useCallback(() => {
    if (!plan || !plan?.allocation) return;

    const init: Amount = {};

    for (const allocation of plan.allocation) {
      init[allocation.asset] = Math.round((baseSIP * allocation.percent) / 100);
    }

    setAmounts(init);
  }, [plan?.templateId, baseSIP]);

  const totalMonthly = useMemo(
    () =>
      (plan?.allocation || []).reduce(
        (sum, allocation) => sum + (amounts[allocation.asset] || 0),
        0,
      ),
    [plan?.allocation, amounts],
  );

  const pieData = useMemo(
    () =>
      (plan?.allocation || []).map((allocation) => ({
        name: allocation.asset,
        value: allocation.percent,
      })),
    [plan?.allocation],
  );

  const totalCorpus = useMemo(
    () =>
      (plan?.allocation || []).reduce(
        (sum, allocation) =>
          sum +
          sipFutureValue(
            amounts[allocation.asset] || 0,
            assetAnnualReturn(allocation.asset),
            horizon,
          ),
        0,
      ),
    [plan?.allocation, amounts, horizon],
  );

  const totalInvested = totalMonthly * horizon * 12;

  return {
    horizon,
    baseSIP,
    amounts,
    totalMonthly,
    pieData,
    totalCorpus,
    totalInvested,
    resetAmounts,
    setAmounts,
  };
}
