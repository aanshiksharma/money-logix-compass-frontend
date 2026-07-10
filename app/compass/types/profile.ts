export type Profile = {
  goals: string[];
  horizonYears: number;

  monthlyIncome: number;
  monthlyInvestable: number;

  fearTolerance: string;
  lifeStage: string;

  riskScore: number;
  riskCategory: string;

  complete: boolean;
};

export type ProfileContextType = {
  profile: Profile | null;
};
