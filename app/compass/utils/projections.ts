// Rough long-term annual return assumptions per asset class (educational only).
export function assetAnnualReturn(asset: string = "") {
  asset = asset.toLowerCase();

  if (asset.includes("small")) return 0.14;
  if (asset.includes("mid")) return 0.13;
  if (asset.includes("flexi") || asset.includes("multi")) return 0.12;
  if (
    asset.includes("international") ||
    asset.includes("us ") ||
    asset.includes("global")
  )
    return 0.12;
  if (
    asset.includes("large") ||
    asset.includes("index") ||
    asset.includes("equity")
  )
    return 0.11;
  if (asset.includes("reit") || asset.includes("real")) return 0.09;
  if (asset.includes("gold")) return 0.08;
  if (
    asset.includes("debt") ||
    asset.includes("bond") ||
    asset.includes("fixed")
  )
    return 0.07;
  if (asset.includes("liquid") || asset.includes("cash")) return 0.055;
  return 0.1;
}

// Future value of a monthly SIP compounded monthly.
export function sipFutureValue(
  monthly: number,
  annualRate: number,
  years: number,
) {
  const r = annualRate / 12;
  const n = years * 12;
  if (monthly <= 0 || n <= 0) return 0;
  return monthly * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
}
