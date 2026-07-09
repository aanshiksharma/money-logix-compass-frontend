import { Spinner } from "@/components/ui/spinner";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Proptype = { content: string };

export function UserMessage({ content }: Proptype) {
  return (
    <p className="px-3 py-2.5 bg-primary text-primary-foreground rounded-xl self-end max-w-4/5">
      {content}
    </p>
  );
}

export function AssistantMessage({ content }: Proptype) {
  return (
    <article
      id="assistant-message"
      className="mb-4 text-secondary-foreground last:mb-50"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}

export function MessageLoading() {
  return (
    <div className="mb-4 flex items-center gap-2 text-muted-foreground">
      <Spinner className="w-5 h-5" />
    </div>
  );
}
