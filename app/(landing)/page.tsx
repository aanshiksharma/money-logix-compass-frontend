"use client";

import { useEffect } from "react";

import Hero from "./components/hero-section";
import ProductShowcase from "./components/product-showcase";
import WhyUs from "./components/why-us";
import Workflow from "./components/workflow";
import FAQs from "./components/faqs";
import ClosingCTA from "./components/closing-cta";

export default function Landing() {
  return (
    <>
      <div className="fixed inset-0 w-screen overflow-hidden">
        <div className="landing-grid" />
      </div>

      <Hero />
      <Workflow />
      <ProductShowcase />
      <WhyUs />
      <FAQs />
      <ClosingCTA />
    </>
  );
}
