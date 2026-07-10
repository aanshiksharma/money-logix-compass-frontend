export type Plan = {
  _id: string;
  conversationId: string;

  templateId: string;
  templateName: string;

  tagline: string;
  disclaimer: string;

  monthlySIP: number;
  expectedReturn: string;

  allocation: {
    asset: string;
    percent: number;
    examples: string[];
  }[];
  milestones: {
    label: string;
    targetAmount: number;
    targetYear: number;
    done: boolean;
  }[];
};

export type PlanContextType = {
  plan: Plan | null;
};
