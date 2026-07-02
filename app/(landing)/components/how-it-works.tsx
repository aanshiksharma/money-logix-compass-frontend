import Container from "@/components/shared/container";
import howItWorks from "../data/howItWorks.data.json";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function HowItWorks() {
  return (
    <Container className="min-h-[80vh]">
      <div className="text-center grid gap-3">
        <h2 className="sub-heading">How it Works</h2>
        <p className="heading">
          Every investment begins with understanding you
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl w-full">
        {howItWorks.map((data, index) => (
          <Card
            key={index}
            className="[--card-spacing:--spacing(6)] hover:-translate-y-1 transition ease-out duration-300 shadow hover:shadow-xl shadow-shadow"
          >
            <CardHeader>
              <p className="text-muted-foreground font-medium font-mono">
                {data.id}
              </p>
              <CardTitle className="mb-2">{data.title}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default HowItWorks;
