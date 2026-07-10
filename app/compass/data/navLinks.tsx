import { SquarePen, Search } from "lucide-react";
import { ReactNode } from "react";

export const navLinks: {
  title: string;
  icon: ReactNode;
  url: string;
}[] = [
  {
    title: "New Chat",
    url: "/compass",
    icon: <SquarePen />,
  },
  {
    title: "Search Chats",
    url: "#",
    icon: <Search />,
  },
];
