import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProfile } from "../../hooks/use-profile";
import { usePlan } from "../../hooks/use-plan";
import { useSimulation } from "../../hooks/use-simulation";
import { assetAnnualReturn, sipFutureValue } from "../../utils/projections";
import {
  Item,
  ItemDescription,
  ItemHeader,
  ItemContent,
  ItemTitle,
  ItemMedia,
  ItemGroup,
} from "@/components/ui/item";
import { Slider } from "@/components/ui/slider";

import { compact, inr } from "../../utils/formatters";
import { IndianRupee } from "lucide-react";

export default function SimulationCard() {
  const { profile } = useProfile();
  const { plan } = usePlan();
  const {
    amounts,
    baseSIP,
    horizon,
    totalMonthly,
    totalInvested,
    totalCorpus,
    setAmounts,
  } = useSimulation();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adjust and Simulate</CardTitle>
        <CardDescription>
          Drag a sector to see how its monthly amount could grow over{" "}
          {profile?.horizonYears} years.
        </CardDescription>

        <CardAction>
          <Button variant="outline">Reset</Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <ItemGroup>
          {plan?.allocation.map((allocation, index) => {
            const amount = amounts[allocation.asset] || 0;
            const rate = assetAnnualReturn(allocation.asset);
            const futureValue = sipFutureValue(amount, rate, horizon);

            const sliderMax = Math.max(
              baseSIP,
              Math.round((baseSIP * allocation.percent) / 1000) * 3,
              5000,
            );

            return (
              <Item key={index}>
                <ItemMedia variant="icon">
                  <div
                    className={`w-4 h-4 bg-chart-4 aspect-square rounded-full`}
                  />
                </ItemMedia>

                <ItemContent>
                  <ItemTitle>{allocation.asset}</ItemTitle>
                  <ItemDescription>
                    {allocation.examples.map(
                      (example, index) =>
                        example +
                        (index < allocation.examples.length - 1 && " | "),
                    )}
                  </ItemDescription>

                  <Slider
                    className="my-2"
                    defaultValue={[amounts[allocation.asset]]}
                    value={[amount]}
                    max={sliderMax}
                    min={0}
                    step={100}
                    onValueChange={([value]) =>
                      setAmounts((prev) => ({
                        ...prev,
                        [allocation.asset]: value,
                      }))
                    }
                  />

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div>
                      <span className="proj-amt">{inr(amount)}/mo</span>
                      <span className="proj-arrow">→</span>
                      <span className="proj-fv">{compact(futureValue)}</span>
                    </div>
                    <div>@{allocation.percent}%</div>
                  </div>
                </ItemContent>
              </Item>
            );
          })}
        </ItemGroup>
      </CardContent>

      <CardFooter>
        <ItemGroup className="flex-row">
          <Item className="flex-1">
            <ItemContent className="items-center">
              <ItemTitle>{inr(totalMonthly)}</ItemTitle>
              <ItemDescription>Total per month</ItemDescription>
            </ItemContent>
          </Item>

          <Item className="flex-1">
            <ItemContent className="items-center">
              <ItemTitle>{compact(totalInvested)}</ItemTitle>
              <ItemDescription>Your investment</ItemDescription>
            </ItemContent>
          </Item>

          <Item className="flex-1">
            <ItemContent className="items-center">
              <ItemTitle>{compact(totalCorpus)}</ItemTitle>
              <ItemDescription className="text-center">
                Projected in {horizon} years
              </ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </CardFooter>
    </Card>
  );
}
