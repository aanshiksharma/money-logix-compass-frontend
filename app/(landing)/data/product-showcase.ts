import { ProductShowcaseType } from "./types";

export const PRODUCT_SHOWCASE: ProductShowcaseType[] = [
  {
    id: "dashboard",
    title: "A complete investment plan.",
    description:
      "Everything from your conversation comes together in a single dashboard built to help you invest with confidence.",
    image: "/images/showcase/dashboard-overview.png",
    imageAlt: "Investment dashboard overview",
    imagePosition: "right",
  },

  {
    id: "simulation",
    title: "Explore before you invest.",
    description:
      "Adjust portfolio allocations and immediately understand how those decisions shape long-term outcomes.",
    image: "/images/showcase/portfolio-simulation.png",
    imageAlt: "Investment simulation dashboard",
    imagePosition: "left",
  },

  {
    id: "milestones",
    title: "Know what's next.",
    description:
      "Milestones transform a one-time recommendation into a roadmap you can continue to follow.",
    image: "/images/showcase/investment-milestones.png",
    imageAlt: "Investment milestones and roadmap",
    imagePosition: "right",
  },
];
