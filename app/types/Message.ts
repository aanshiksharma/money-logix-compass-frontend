export type Message = {
  id: string;
  chatId: string;
  role: "assistant" | "user";
  content: string; // Markdown
  metadata: {
    emotion?: string;
    risk?: string;
    confidence?: number;
  };
  createdAt?: Date;
};

export type Messages = Message[];
