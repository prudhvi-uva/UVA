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
      className="min-h-screen bg-paper text-ink selection:bg-ink selection:text-paper"
      style={productStyle(product)}
    >
      <SectionWrapper className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="reveal-item">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[var(--accent)]">
              {product.eyebrow}
            </p>
            <h1 className="font-heading text-6xl font-extrabold uppercase leading-none tracking-wide text-ink md:text-8xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-xl leading-9 text-ink/80">
              {product.thesis}
            </p>
            <Link
              href="/#contact"
              className="mt-9 inline-flex items-center rounded-full border border-ink bg-ink px-8 py-4 font-body text-sm font-bold uppercase tracking-widest text-paper transition-colors hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {product.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="reveal-item">
            {product.id === "pardha" ? (
              <div className="relative aspect-[4/3] lg:aspect-square w-full overflow-hidden rounded-3xl bg-ink shadow-[0_32px_100px_rgba(20,22,28,0.08)]">
                <video 
                  src="/pardha.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="h-full w-full object-cover" 
                />
              </div>
            ) : (
              <SignalWaveform
                variant={product.signal}
                color={product.accent}
                size="hero"
                className="shadow-[0_32px_100px_rgba(20,22,28,0.08)]"
              />
            )}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-y border-ink/10 py-20 md:py-24">
        <div className="mb-10 flex max-w-3xl flex-col gap-3">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
            Highlights
          </p>
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
                className="rounded-3xl border border-ink/10 bg-paper p-6"
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-ink/5 text-[var(--accent)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-ink">
                  {highlight.title}
                </h3>
                <p className="mt-3 font-body text-base leading-7 text-ink/75">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      {product.solutions && product.solutions.length > 0 && (
        <SectionWrapper className="border-b border-ink/10 pb-20 md:pb-24">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
              Solutions
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
              Two Solutions. One Powerful Platform.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            {product.solutions.map((solution) => (
              <div key={solution.name} className="rounded-3xl border border-ink/10 bg-paper p-8">
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-ink">{solution.name}</h3>
                <p className="font-mono text-xs font-bold tracking-widest text-[var(--accent)] mt-2">{solution.subtitle}</p>
                <p className="mt-4 font-body text-base leading-7 text-ink/75">{solution.description}</p>
                
                <div className="mt-8">
                  <p className="mb-3 font-body text-xs font-bold uppercase tracking-widest text-ink">Ideal For</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.idealFor.map((item) => (
                      <span key={item} className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1.5 font-body text-xs font-bold text-ink">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="mb-4 font-body text-xs font-bold uppercase tracking-widest text-ink">Key Features</p>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start font-body text-sm text-ink/80">
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
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
              Capabilities
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
              One layer deeper
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {product.capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3 border-b border-ink/10 pb-4"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span className="font-body text-base leading-7 text-ink/80">
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>

        {product.useCases && (
          <div className="mt-16 border-t border-ink/10 pt-12">
            <p className="mb-5 font-body text-xs font-bold uppercase tracking-widest text-mist">
              {product.id === "aura" ? "Future Applications" : "Use Cases"}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.useCases.map((useCase) => (
                <span
                  key={useCase}
                  className="rounded-full border border-ink/10 bg-ink/3 px-3 py-2 font-body text-[11px] font-bold uppercase tracking-widest text-mist"
                >
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        )}
      </SectionWrapper>

      <SectionWrapper className="border-y border-ink/10 py-20 md:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.44fr_0.56fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
              Perfect For
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
              Where {product.name} fits
            </h2>
          </div>
          <div className="flex flex-wrap content-start gap-3">
            {product.perfectFor.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ink/10 bg-ink/3 px-4 py-3 font-body text-xs font-bold uppercase tracking-widest text-mist"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-20 md:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--accent)]">
            Why {product.name}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-wide md:text-5xl">
            The signal behind the system
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {product.why.map((reason) => (
            <div
              key={reason}
              className="flex min-h-28 items-start gap-4 rounded-3xl border border-ink/10 bg-paper p-5"
            >
              <span className="font-mono text-lg font-bold text-[var(--accent)]">
                0
              </span>
              <p className="font-body text-base font-semibold leading-7 text-ink/80">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="border-t border-ink/10 py-16 md:py-20">
        <div className="mb-6 flex items-end justify-between gap-6">
          <h2 className="font-heading text-2xl font-extrabold uppercase tracking-wide md:text-4xl">
            Explore the throughline
          </h2>
          <Link
            href="/#products"
            className="hidden font-body text-xs font-bold uppercase tracking-widest text-mist transition-colors hover:text-ink md:inline-flex"
          >
            All products
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              href={`/product/${related.id}`}
              className="group rounded-3xl border border-ink/10 bg-paper p-6 transition-colors hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <p className="font-body text-xs font-bold uppercase tracking-widest text-mist">
                {related.eyebrow}
              </p>
              <div className="mt-4 flex items-center justify-between gap-4">
                <span className="font-heading text-3xl font-extrabold uppercase tracking-wide text-ink">
                  Explore {related.name}
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <section className="border-t border-ink/10 bg-paper py-20 md:py-32">
        <SectionWrapper>
          <div className="reveal-item mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-4xl font-extrabold uppercase tracking-wide text-ink md:text-6xl">
              Why Choose UVA Products?
            </h2>
            <p className="mt-8 font-body text-xl leading-9 text-ink/80">
              At UVA, we don't build standalone software—we engineer intelligent platforms that grow with your business. 
              Our products are designed to integrate seamlessly, enabling organizations to adopt AI, automation, and intelligent decision-making without rebuilding their technology stack.
            </p>
            <p className="mt-12 font-mono text-lg font-bold uppercase tracking-widest text-[var(--accent)]">
              One Vision. Three Intelligent Platforms. Unlimited Possibilities.
            </p>
            
            <div className="mt-16 grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-3xl border border-ink/10 p-6 transition-colors hover:border-[var(--accent)]">
                <h3 className="font-heading text-xl font-bold uppercase text-ink">DP360</h3>
                <p className="mt-2 font-body text-sm text-ink/75">Transform Commerce with AI.</p>
              </div>
              <div className="rounded-3xl border border-ink/10 p-6 transition-colors hover:border-[var(--accent)]">
                <h3 className="font-heading text-xl font-bold uppercase text-ink">Pardha</h3>
                <p className="mt-2 font-body text-sm text-ink/75">Build Your AI Workforce.</p>
              </div>
              <div className="rounded-3xl border border-ink/10 p-6 transition-colors hover:border-[var(--accent)]">
                <h3 className="font-heading text-xl font-bold uppercase text-ink">AURA</h3>
                <p className="mt-2 font-body text-sm text-ink/75">Bring Intelligence into the Physical World.</p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </main>
  );
}
