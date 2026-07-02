export type ChatRequest = {
  conversationId?: string;
  message: string;
  thinkMode?: boolean;
};

export type ChatResponse = {
  response_text: string;
  detected_emotion: string;
  risk_signal: string;
  confidence: Number;
  profile_updates: Object;
  onboarding_complete: boolean;
  _raw: string;
  _mock: boolean;
};
