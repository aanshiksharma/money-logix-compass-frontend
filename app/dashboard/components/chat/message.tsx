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
    <article id="assistant-message" className="space-y-2">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </article>
  );
}
