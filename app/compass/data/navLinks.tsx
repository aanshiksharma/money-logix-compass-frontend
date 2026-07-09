import { SquarePen, Search } from "lucide-react";
import { ReactNode } from "react";

export const navLinks: { title: string; url: string; icon: ReactNode }[] = [
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
