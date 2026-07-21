import Container from "@/components/shared/container";

import { GENERAL_AI, COMPASS } from "../data/why-us";

function WhyUs() {
  return (
    <Container className="py-20" id="why">
      <div className="section-header">
        <h2 className="section-heading">Built with a different goal.</h2>
        <p className="section-subheading max-w-3xl!">
          Most AI assistants help you understand investing. Compass is designed
          to help you move from uncertainty to a structured investment strategy.
        </p>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-6">
        <ul className="grid grid-rows-[1fr_2fr_2fr_2fr_2fr] gap-6 text-end">
          <h3 className="text-xl font-medium leading-normal mb-2">
            General AI Models
          </h3>

          {GENERAL_AI.map((item) => (
            <li key={item.title} className="group">
              <h4 className="font-medium mb-1 transition ease-out duration-300">
                {item.title}
              </h4>

              <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition ease-out duration-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="h-full w-px gradient-text bg-clip-content! rounded"></div>

        <ul className="grid grid-rows-[1fr_2fr_2fr_2fr_2fr] gap-6">
          <h3 className="text-xl font-medium leading-normal mb-2">
            MoneyLogix Compass
          </h3>

          {COMPASS.map((item) => (
            <li key={item.title} className="group">
              <h4 className="font-medium mb-1 transition ease-out duration-300">
                {item.title}
              </h4>

              <p className="text-xs text-muted-foreground/70 group-hover:text-muted-foreground transition ease-out duration-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default WhyUs;
