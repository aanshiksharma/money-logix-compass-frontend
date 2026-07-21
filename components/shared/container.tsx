import { ReactNode } from "react";

function Container({
  children,
  className,
  id,
}: {
  children?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`
        py-6 px-4 lg:px-6 [@media(hover:none)]:lg:px-6 flex flex-col items-center justify-center
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default Container;
