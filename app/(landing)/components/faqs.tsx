import faqs from "../data/faq.data.json";

import Container from "@/components/shared/container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQs() {
  return (
    <Container className="min-h-screen">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="sub-heading">Frequently Asked Questions</h2>
        <p className="heading">Everything you need before you start.</p>
      </div>

      <Accordion type="multiple" className="max-w-xl">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={faq.value}>
            <AccordionTrigger>{faq.title}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}

export default FAQs;
