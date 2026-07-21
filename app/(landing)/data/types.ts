import { ReactNode } from "react";

export interface ProductShowcaseType {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export interface WorkflowType {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Step {
  n: string;
  title: string;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Allocation {
  name: string;
  value: number;
  color: string;
}

export interface DifferenceType {
  title: string;
  description: string;
}
