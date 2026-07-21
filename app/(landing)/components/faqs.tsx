import { FAQS } from "../data/faq";
import Container from "@/components/shared/container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQs() {
  return (
    <Container className="py-20">
      <div className="section-header">
        <h2 className="section-heading">Questions, Answered!</h2>
        <p className="section-subheading">
          Everything you need to know before starting your first investment
          conversation with Compass.
        </p>
      </div>

      <Accordion type="multiple" className="max-w-xl">
        {FAQS.map((faq, index) => (
          <AccordionItem key={index} value={faq.question} className="">
            <AccordionTrigger className="text-base items-center">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

export default FAQs;
