import Image from "next/image";
import {
  ArrowRight,
  Phone,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  Headphones,
  ChevronDown,
} from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          VERBASCORE
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-sm text-muted transition-colors hover:text-foreground">
            About
          </a>
          <a href="#features" className="text-sm text-muted transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#metrics" className="text-sm text-muted transition-colors hover:text-foreground">
            Metrics
          </a>
          <a href="#how-it-works" className="text-sm text-muted transition-colors hover:text-foreground">
            How It Works
          </a>
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#contact"
            className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Get Started
          </a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80"
          alt="Modern office"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Introducing
          </p>
          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Never Lose
            <br />
            A Lead{" "}
            <span className="text-accent">Again</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Automated QA that monitors every call, coaches every rep, and shows
            you exactly where revenue is won or lost.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              Request a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-muted" />
      </div>
    </section>
  );
}

function Announcement() {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
          Verbascore
        </p>
        <p className="max-w-3xl text-3xl font-semibold leading-snug tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          We bridge the gap between your marketing spend and closed revenue — so
          every lead gets the treatment it deserves.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-muted">
            (About Verbascore)
          </p>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            Verbascore is an automated Quality Assurance manager built to
            maximize the ROI of ad-generated and organic leads for local
            businesses. It seamlessly integrates into existing phone systems to
            analyze inbound and outbound calls, ensuring receptionists adhere to
            sales scripts and effectively handle objections.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            By providing real-time, actionable coaching for sales reps and
            high-level performance metrics for business owners, Verbascore
            bridges the gap between marketing spend and closed revenue.
          </p>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    {
      icon: Phone,
      label: "Calls Analyzed",
      value: "120K+",
      sublabel: "And counting →",
    },
    {
      icon: TrendingUp,
      label: "Revenue Recovered",
      value: "$4.2M+",
      sublabel: "For our clients →",
    },
    {
      icon: BarChart3,
      label: "Script Adherence",
      value: "94%",
      sublabel: "Average improvement →",
    },
  ];

  return (
    <section id="metrics" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group rounded-2xl border border-border bg-background p-8 transition-colors hover:border-accent/40"
            >
              <div className="mb-6 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  {stat.label}
                </p>
                <stat.icon className="h-5 w-5 text-muted transition-colors group-hover:text-accent" />
              </div>
              <p className="mb-2 text-xs text-muted">{stat.sublabel}</p>
              <p className="text-5xl font-bold tracking-tight text-foreground lg:text-6xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesBanner() {
  return (
    <section className="overflow-hidden border-b border-border bg-background py-20 lg:py-28">
      <div className="flex animate-[scroll_20s_linear_infinite] items-center gap-6 whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl"
          >
            QA — Coaching — Analytics —{" "}
          </span>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: Phone,
      title: "Call Monitoring",
      description:
        "Automatically record and analyze every inbound and outbound call with AI-powered transcription and scoring.",
    },
    {
      icon: Shield,
      title: "Script Adherence",
      description:
        "Ensure reps follow proven sales scripts. Get instant alerts when objections are mishandled or steps are skipped.",
    },
    {
      icon: Zap,
      title: "Real-Time Coaching",
      description:
        "Deliver actionable feedback to reps immediately after each call so they can improve on the next one.",
    },
    {
      icon: BarChart3,
      title: "Owner Dashboard",
      description:
        "High-level metrics that show call volume, conversion rates, and revenue attribution at a glance.",
    },
    {
      icon: TrendingUp,
      title: "ROI Tracking",
      description:
        "Connect your ad spend to actual closed revenue. See which campaigns drive the best leads.",
    },
    {
      icon: Headphones,
      title: "Seamless Integration",
      description:
        "Plug into your existing phone system in minutes. No hardware changes, no workflow disruption.",
    },
  ];

  return (
    <section id="features" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything you need to close more leads
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-background p-8 transition-colors hover:border-accent/40"
            >
              <feature.icon className="mb-4 h-6 w-6 text-accent" />
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Connect Your Phone System",
      description:
        "Verbascore integrates with all major VoIP and phone providers. Setup takes less than 10 minutes.",
    },
    {
      step: "02",
      title: "Upload Your Sales Scripts",
      description:
        "Define the ideal call flow, key phrases, and objection-handling responses your team should follow.",
    },
    {
      step: "03",
      title: "Get Real-Time QA Reports",
      description:
        "Every call is scored automatically. Reps get coaching, owners get dashboards, and revenue goes up.",
    },
  ];

  return (
    <section id="how-it-works" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
            alt="Team working"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
            How It Works
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Integration to Insights in Minutes
          </h2>
          <div className="space-y-8">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="mt-0.5 text-sm font-bold text-accent">
                  {item.step}
                </span>
                <div>
                  <h3 className="mb-1 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Expansion() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="flex flex-col justify-center lg:order-2">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built for Local Businesses That Rely on Every Call
          </h2>
          <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
            In industries where every phone call is a potential sale — dental
            offices, home services, legal firms, med spas — Verbascore ensures
            no opportunity slips through the cracks. We help you understand the
            full picture from ad click to closed deal.
          </p>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent transition-colors hover:text-accent-dark"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
            alt="Office space"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
          alt="Abstract tech background"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-28 text-center lg:py-36">
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-accent">
          Get Started
        </p>
        <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Stop Losing Revenue on Missed Opportunities
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-lg leading-relaxed text-muted">
          See how Verbascore can improve your team&apos;s call performance and
          help you close more leads. Book a free demo today.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@verbascore.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:border-foreground/30"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted">
          VERBASCORE &copy;{new Date().getFullYear()}
        </p>
        <p className="text-sm text-muted">All Rights Reserved.</p>
        <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">
          Back To Top &uarr;
        </a>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Announcement />
        <About />
        <Stats />
        <FeaturesBanner />
        <Features />
        <HowItWorks />
        <Expansion />
        <CTA />
      </main>
      <Footer />
    </>
  );
}