import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import Link from "next/link";

const navbarLinks = [
  {
    url: "#howItWorks",
    label: "How it Works",
  },
  {
    url: "#whyUs",
    label: "Why us?",
  },
];

export default function LandingNavigation() {
  return (
    <Header links={navbarLinks}>
      <Button asChild variant="secondary">
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/register">Get Started</Link>
      </Button>
    </Header>
  );
}
