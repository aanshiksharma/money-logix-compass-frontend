"use client";

import React, { useRef } from "react";

import Hero from "./components/hero-section";
import ProductShowcase from "./components/product-showcase";
import WhyUs from "./components/why-us";
import Workflow from "./components/workflow";
import FAQs from "./components/faqs";
import Footer from "./components/landing-footer";
import ClosingCTA from "./components/closing-cta";

export default function Landing() {
  const landingRef = useRef(null);

  return (
    <div className="relative isolate landing" ref={landingRef}>
      <Hero />
      <Workflow />
      <ProductShowcase />
      <WhyUs />
      <FAQs />
      <ClosingCTA />
      <Footer />
    </div>
  );
}
