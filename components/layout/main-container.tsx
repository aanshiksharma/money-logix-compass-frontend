import { ReactNode } from "react";

export default function MainContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <main className={className}>{children}</main>;
}
