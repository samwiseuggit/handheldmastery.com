import { useMemo } from "react";
import {
  ArrowRight,
  Star,
  BookOpen,
  Wrench,
  Scale,
  Gamepad2,
  Zap,
  HardDrive,
  Monitor,
  Gamepad,
} from "lucide-react";
import { products, softwareTools, categories, getBestPrice } from "@/data/products";
import AdSlot from "@/components/AdSlot";

const iconMap: Record<string, React.ElementType> = {
  Gamepad2,
  Zap,
  HardDrive,
  Monitor,
  Gamepad,
};

const featuredSlugs = [
  "state-of-handheld-gaming-2026",
  "steam-deck-oled-vs-rog-ally-x",
  "how-to-install-emudeck",
  "best-budget-handhelds-under-400",
  "ultimate-windows-11-debloat-guide",
  "z2-extreme-vs-intel-core-ultra-200v",
];

const featuredArticles = [
  {
    slug: "state-of-handheld-gaming-2026",
    title: "State of Handheld Gaming 2026",
    description: "A comprehensive look at the handheld gaming landscape in 2026, from Steam Deck successors to new Windows handhelds.",
    date: "2026-01-15",
    readTime: "12 min",
    tags: ["Industry", "Trends"],
  },
  {
    slug: "steam-deck-oled-vs-rog-ally-x",
    title: "Steam Deck OLED vs ROG Ally X: Which Should You Buy?",
    description: "The two flagship handhelds go head-to-head in performance, battery life, display quality, and value.",
    date: "2026-02-20",
    readTime: "10 min",
    tags: ["Versus", "Buying Guide"],
  },
  {
    slug: "how-to-install-emudeck",
    title: "How to Install EmuDeck on Your Handheld",
    description: "Step-by-step guide to setting up EmuDeck for emulation on Steam Deck, ROG Ally, and other handhelds.",
    date: "2026-03-05",
    readTime: "8 min",
    tags: ["How-To", "Emulation"],
  },
  {
    slug: "best-budget-handhelds-under-400",
    title: "Best Budget Handhelds Under $400",
    description: "Our top picks for affordable handheld gaming including refurbished Steam Decks and entry-level options.",
    date: "2026-03-18",
    readTime: "9 min",
    tags: ["Buying Guide", "Budget"],
  },
  {
    slug: "ultimate-windows-11-debloat-guide",
    title: "The Ultimate Windows 11 Debloat Guide for Handhelds",
    description: "Optimize Windows 11 on your ROG Ally or Legion Go for better performance, battery life, and responsiveness.",
    date: "2026-04-01",
    readTime: "15 min",
    tags: ["How-To", "Optimization"],
  },
  {
    slug: "z2-extreme-vs-intel-core-ultra-200v",
    title: "Z2 Extreme vs Intel Core Ultra 200V: Chip Showdown",
    description: "AMD's newest handheld APU faces off against Intel's latest Core Ultra chips for portable gaming dominance.",
    date: "2026-04-22",
    readTime: "11 min",
    tags: ["Versus", "Hardware"],
  },
];

export default function HomePage() {
  const featuredConsoles = useMemo(
    () => products.filter((p) => p.category === "console").slice(0, 5),
    []
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const toolboxTools = useMemo(() => softwareTools.slice(0, 6), []);

  const stats = [
    { label: "Products", value: "50+", icon: Gamepad2 },
    { label: "Articles", value: "30", icon: BookOpen },
    { label: "Software Tools", value: "10+", icon: Wrench },
    { label: "Retailer Networks", value: "5", icon: Scale },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-background to-muted px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="bg-gradient-to-r from-primary via-primary to-muted-foreground bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Hand Held Mastery
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Your ultimate guide to handheld PC gaming. Compare 50+ products,
            read expert articles, and build the perfect portable setup.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="compare.html"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
            >
              Compare Products
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="blog.html"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground shadow-sm hover:bg-accent"
            >
              Read 30 Articles
              <BookOpen className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="border-b px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border bg-card p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <Icon className="mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold text-card-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Consoles */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Featured Consoles
              </h2>
              <p className="mt-2 text-muted-foreground">
                The best handheld gaming PCs, compared and reviewed
              </p>
            </div>
            <a
              href="compare.html"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              View all <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredConsoles.map((product) => (
              <a
                key={product.id}
                href="compare.html"
                className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {product.subcategory}
                  </span>
                  {product.rating && (
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium text-foreground">
                        {product.rating}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {product.bestFor}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">
                    ${getBestPrice(product)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    from{" "}
                    {Object.values(product.retailerLinks).filter(Boolean).length}{" "}
                    retailers
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="border-t bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Browse by Category
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Gamepad2;
              return (
                <a
                  key={cat.id}
                  href="compare.html"
                  className="group flex flex-col items-center rounded-xl border bg-card p-6 text-center shadow-sm transition hover:shadow-md hover:border-primary/50"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground">
                    {cat.label}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {categoryCounts[cat.id] || 0} products
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Latest Articles
              </h2>
              <p className="mt-2 text-muted-foreground">
                Guides, reviews, and insights from handheld gaming experts
              </p>
            </div>
            <a
              href="blog.html"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              All articles <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <a
                key={article.slug}
                href={`./articles/${article.slug}.html`}
                className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-base font-semibold leading-snug text-card-foreground group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {article.description}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <span>·</span>
                  <span>{article.readTime} read</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gamer's Toolbox */}
      <section className="border-t bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Gamer&apos;s Toolbox
              </h2>
              <p className="mt-2 text-muted-foreground">
                Essential software for your handheld gaming setup
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolboxTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-card-foreground group-hover:text-primary">
                    {tool.name}
                  </h3>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tool.free
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                        : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                    }`}
                  >
                    {tool.free ? "Free" : tool.price || "Paid"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
                <span className="mt-3 text-xs text-muted-foreground">
                  {tool.category}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to master your handheld setup?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Compare all 50+ products side-by-side and find the perfect gear for
            your portable gaming needs.
          </p>
          <div className="mt-8">
            <a
              href="compare.html"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90"
            >
              Start Comparing
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Native Ad */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <AdSlot type="native" id="home-native-bottom" />
      </div>
    </div>
  );
}
