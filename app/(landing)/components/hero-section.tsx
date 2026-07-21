import Container from "@/components/shared/container";

import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <Container className={`hero min-h-screen overflow-x-hidden text-center`}>
      <div className="space-y-6 py-30">
        <h1 className="leading-none text-4xl lg:text-6xl font-semibold text-balance">
          Invest with <span className="gradient-text animate">confidence,</span>
          <br />
          not confusion
        </h1>

        <p className="leading-relaxed text-muted-foreground max-w-xl">
          Have a conversation about your financial goals. Leave with a
          personalized investment plan designed around your future.
        </p>

        <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
          <Button asChild>
            <a href="/register" className="landing-btn sweep-effect ">
              <span>Start Now</span>
            </a>
          </Button>

          <Button asChild variant="outline">
            <a href="#how" className="landing-btn">
              Explore Compass
            </a>
          </Button>
        </div>
      </div>

      <div className="border px-6 py-7 w-full max-w-5xl flex items-center justify-center rounded-2xl bg-background">
        <div className="bg-accent w-full aspect-video rounded-lg"></div>
      </div>
    </Container>
  );
}

export default Hero;
