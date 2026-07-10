import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

import { usePlan } from "../../hooks/use-plan";
import { Circle } from "lucide-react";

export default function Milestones() {
  const { plan } = usePlan();

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-xl">Milestones</h3>

      <ItemGroup className="">
        {plan?.milestones.map((milestone, index) => (
          <Item key={index}>
            <ItemMedia variant="icon">
              <Circle />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{milestone.label}</ItemTitle>
              <ItemDescription>by {milestone.targetYear}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
