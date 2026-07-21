import Container from "@/components/shared/container";
import { Button } from "@/components/ui/button";

function ClosingCTA() {
  return (
    <Container className="py-10">
      <div className="gradient-background text-primary-foreground max-w-5xl rounded-4xl section-header">
        <h2 className="section-heading">
          Start with a conversation <br />
          Leave with a plan
        </h2>

        <p className="section-subheading text-primary-foreground!">
          Compass helps first-time investors move from uncertainty to a
          structured investment strategy through a simple, guided conversation.
        </p>

        <Button
          asChild
          className="bg-primary-foreground hover:bg-primary-foregroun hover:-translate-y-1 text-primary"
        >
          <a href="/register" className="landing-btn">
            Get Started
          </a>
        </Button>
      </div>
    </Container>
  );
}

export default ClosingCTA;
