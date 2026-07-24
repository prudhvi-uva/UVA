import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentType, CSSProperties } from "react";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Brain,
  Check,
  Eye,
  Home,
  Link2,
  MessageCircle,
  Move,
  Plug,
  Rocket,
  Store,
  TrendingUp,
  Workflow,
  Zap,
} from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SignalWaveform } from "@/components/ui/SignalWaveform";
import {
  getProduct,
  products,
  type Product,
  type ProductHighlight,
} from "@/lib/products";
import { cn } from "@/lib/utils";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const highlightIcons: Record<ProductHighlight["icon"], ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  store: Store,
  chart: BarChart3,
  zap: Zap,
  link: Link2,
  bot: Bot,
  brain: Brain,
  workflow: Workflow,
  trending: TrendingUp,
  plug: Plug,
  eye: Eye,
  message: MessageCircle,
  home: Home,
  move: Move,
  blocks: Blocks,
};

function productStyle(product: Product): CSSProperties {
  return {
    "--accent": product.accent,
  } as CSSProperties;
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} | UVA Products`,
    description: product.thesis,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.id !== product.id);

  return (
    <main
      className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background"
      style={productStyle(product)}
    >
      <SectionWrapper className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="reveal-item">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 shadow-md mb-4">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                {product.eyebrow}
              </span>
            </div>
            <h1 className="font-heading text-6xl font-extrabold uppercase leading-none tracking-wide text-foreground md:text-8xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-xl leading-9 text-foreground/80">
              {product.thesis}
            </p>
            <div
              className="mt-9 inline-flex items-center rounded-full border border-foreground bg-foreground px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-background transition-colors hover:bg-transparent hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {product.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>

          <div className="reveal-item">
            {product.id === "pardha" ? (
              <div className="relative w-full aspect-video overflow-hidden rounded-3xl bg-zinc-900 shadow-[0_24px_80px_rgba(20,22,28,0.12)] border border-foreground/10">
                <video
                  src="/pardha.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ) : product.id === "dp360" ? (
              <div className="relative w-full aspect-video overflow-hidden rounded-3xl bg-zinc-900 shadow-[0_24px_80px_rgba(20,22,28,0.12)] border border-foreground/10">
                <video
                  src="/Dp360_glimpse.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-video overflow-hidden rounded-3xl bg-zinc-900 shadow-[0_24px_80px_rgba(20,22,28,0.12)] border border-foreground/10">
                <img
                  src="/Aura_glimpse.png"
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-y border-foreground/10 py-20 md:py-24">
        <div className="mb-10 flex max-w-3xl flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 shadow-md">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              Highlights
            </span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
            Built for the work that matters
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {product.highlights.map((highlight) => {
            const Icon = highlightIcons[highlight.icon];

            return (
              <div
                key={highlight.title}
                className="rounded-3xl border border-foreground/10 bg-background p-6"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-foreground">
                  {highlight.title}
                </h3>
                <p className="mt-3 font-body text-base leading-7 text-foreground/75">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {product.solutions && product.solutions.length > 0 && (
        <SectionWrapper className="border-b border-foreground/10 pb-20 md:pb-24">
          <div className="mb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 shadow-md mb-3">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                Solutions
              </span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
              Two Solutions. One Powerful Platform.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            {product.solutions.map((solution) => (
              <div key={solution.name} className="rounded-3xl border border-foreground/10 bg-background p-8">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground">{solution.name}</h3>
                <p className="font-mono text-xs font-bold tracking-widest text-[var(--accent)] mt-2">{solution.subtitle}</p>
                <p className="mt-4 font-body text-base leading-7 text-foreground/75">{solution.description}</p>

                <div className="mt-8">
                  <p className="mb-3 font-body text-xs font-bold uppercase tracking-widest text-foreground">Ideal For</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.idealFor.map((item) => (
                      <span key={item} className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 font-body text-xs font-bold text-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-4 font-body text-xs font-bold uppercase tracking-widest text-foreground">Key Features</p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start font-body text-sm text-foreground/80">
                        <Check className="mr-2 mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      )}

      <SectionWrapper className="py-20 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 shadow-md mb-3">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                Capabilities
              </span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
              One layer deeper
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {product.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3 border-b border-foreground/10 pb-4"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span className="font-body text-base leading-7 text-foreground">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>

        {product.useCases && (
          <div className="mt-16 border-t border-foreground/10 pt-12">
            <p className="mb-5 font-body text-xs font-bold uppercase tracking-widest text-muted">
              {product.id === "aura" ? "Future Applications" : "Use Cases"}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-full border border-foreground/10 bg-foreground/3 px-3 py-2 font-body text-[11px] font-bold uppercase tracking-widest text-muted"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper className="border-y border-foreground/10 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.44fr_0.56fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 shadow-md mb-3">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
                Perfect For
              </span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
              Where {product.name} fits
            </h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {product.perfectFor.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-foreground/10 bg-foreground/3 px-4 py-3 font-body text-xs font-bold uppercase tracking-widest text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-20 md:py-24">
        <div className="mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-1.5 shadow-md mb-3">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white">
              Why {product.name}
            </span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
            The signal behind the system
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {product.why.map((reason, index) => (
            <div
              key={reason}
              className="flex min-h-28 items-start gap-4 rounded-3xl border border-foreground/10 bg-background p-5 shadow-xs hover:border-[var(--accent)]/30 transition-colors"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] font-mono text-xs font-bold text-white shadow-md">
                0{index + 1}
              </span>
              <p className="font-body text-base font-semibold leading-7 text-foreground/80">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>


    </main>
  );
}
