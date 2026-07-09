import { useState } from "react";

import PromptBox from "./prompt-box";

export default function Composer({
  handleSubmit,
}: {
  handleSubmit: (prompt: string) => void;
}) {
  const [value, setValue] = useState<string>("");
  const [thinkMode, setThinkMode] = useState<boolean>(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(value);
        setValue("");
      }}
      className="w-full sticky bottom-8 after:bg-background after:[content:''] after:h-8 after:absolute -after:bottom-full after:w-full after:-z-10"
    >
      <PromptBox
        value={value}
        setValue={setValue}
        thinkMode={thinkMode}
        setThinkMode={setThinkMode}
        handleSubmit={handleSubmit}
      />
    </form>
  );
}
