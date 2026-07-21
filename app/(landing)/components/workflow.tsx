"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Container from "@/components/shared/container";
import { WORKFLOW } from "../data/workflow";

function Workflow() {
  return (
    <>
      <Container className="" id="how">
        <div className="section-header">
          <h2 className="section-heading">From conversation to confidence</h2>

          <p className="section-subheading">
            Compass transforms a simple conversation into a structured
            investment plan you can continue exploring long after the chat ends.
          </p>
        </div>
      </Container>

      <Container className="border-y p-0!">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl px-4 md:px-6">
          {WORKFLOW.map((work) => (
            <div
              key={work.id}
              className={`
                max-md:border-r max-md:not-last:border-b
                max-lg:first:border-b max-lg:nth-[2]:border-b max-lg:even:border-r
                grid grid-rows-[0.7fr_1fr]
                border-l lg:last:border-r 
                px-4 md:px-6 py-8
              `}
            >
              <h3 className="text-xl font-medium">{work.title}</h3>
              <p className="text-muted-foreground">{work.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Workflow;
