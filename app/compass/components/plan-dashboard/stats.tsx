import { useProfile } from "../../hooks/use-profile";
import { usePlan } from "../../hooks/use-plan";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";
import { IndianRupee } from "lucide-react";

export default function Stats() {
  const { plan } = usePlan();
  const { profile } = useProfile();

  return (
    <div className="flex items-start gap-4">
      <Item className="flex-1">
        <ItemContent className="items-center">
          <ItemTitle className="text-xl">{profile?.riskScore}</ItemTitle>
          <ItemDescription>Risk Score</ItemDescription>
        </ItemContent>
      </Item>

      <Item className="flex-1">
        <ItemContent className="items-center">
          <ItemTitle className="text-xl">{plan?.expectedReturn}</ItemTitle>
          <ItemDescription>Target Return</ItemDescription>
        </ItemContent>
      </Item>

      <Item className="flex-1">
        <ItemContent className="items-center">
          <ItemTitle className="text-xl gap-0">
            <IndianRupee size={20} />
            {plan?.monthlySIP}
          </ItemTitle>
          <ItemDescription>Monthly SIP</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  );
}
