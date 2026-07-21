import Container from "@/components/shared/container";

import { PRODUCT_SHOWCASE } from "../data/product-showcase";

import { useTheme } from "next-themes";

function ProductShowcase() {
  const { theme } = useTheme();

  return (
    <>
      <Container className="gap-0! p-0! border-b ">
        <div className="max-w-7xl w-full px-4 md:px-6">
          <div className="section-header">
            <h2 className="section-heading">
              Every session ends with a direction.
            </h2>

            <p className="section-subheading">
              MoneyLogix Compass doesn't stop after answering your questions.
              Every conversation is transformed into a structured investment
              plan you can review, adjust and explore.
            </p>
          </div>

          <div className="h-125 w-full rounded-t-2xl border-t border-x  bg-linear-to-t from-accent to-transparent to-50%">
            background
          </div>
        </div>
      </Container>

      <Container className="p-0! border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid sm:grid-cols-3 w-full">
            {PRODUCT_SHOWCASE.map((showcase) => (
              <div
                className="relative max-sm:nth-[2]:border-y first:border-l max-sm:border-l border-r  pt-12 sm:pt-20 pl-4 grid gap-8 sm:gap-12 bg-background"
                key={showcase.id}
              >
                <div className="space-y-6 w-9/10 ml-auto">
                  <h3 className="text-xl md:text-2xl font-medium">
                    {showcase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {showcase.description}
                  </p>
                </div>

                <div className="relative border-t border-l w-9/10 ml-auto rounded-tl-xl overflow-hidden self-end">
                  <img
                    src={showcase.image}
                    alt={showcase.imageAlt}
                    className="w-full h-full"
                  />

                  <div className="absolute inset-0 bg-linear-to-tl from-background to-40% to-transparent pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductShowcase;
