import { useState, useMemo } from "react";
import {
  Search,
  BookOpen,
  Wrench,
  Scale,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
} from "lucide-react";
import { articles } from "@/data/articles";
import AdSlot from "@/components/AdSlot";

type ArticleCategory = "All" | "Blog" | "How-To" | "Versus";

const categoryIcons: Record<string, React.ElementType> = {
  All: BookOpen,
  Blog: BookOpen,
  "How-To": Wrench,
  Versus: Scale,
};

const categoryBadgeColors: Record<string, string> = {
  Blog: "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  "How-To": "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  Versus: "bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-400",
};

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ArticleCategory>("All");

  const featuredArticles = useMemo(
    () => articles.filter((a) => a.featured).slice(0, 3),
    []
  );

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: articles.length };
    articles.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredArticles = useMemo(() => {
    let result = [...articles];

    if (activeCategory !== "All") {
      result = result.filter((a) => a.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [search, activeCategory]);

  const categories: ArticleCategory[] = ["All", "Blog", "How-To", "Versus"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Hand Held Mastery Blog
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Expert guides, in-depth comparisons, and the latest news in handheld
            PC gaming. Level up your portable setup.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Leaderboard Ad */}
        <div className="mb-8">
          <AdSlot type="banner-728" id="blog-leaderboard-top" />
        </div>

        {/* Featured Articles */}
        <section className="mb-10">
          <div className="mb-6 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">
              Featured Articles
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => {
              const Icon = categoryIcons[article.category] || BookOpen;
              return (
                <a
                  key={article.slug}
                  href={`./articles/${article.slug}.html`}
                  className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/50"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        categoryBadgeColors[article.category] || "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon className="h-3 w-3" />
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime} read
                    </span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug text-card-foreground group-hover:text-primary">
                    {article.title}
                    <ArrowRight className="ml-1 inline-block h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Inline Ad */}
        <div className="mb-8 flex justify-center">
          <AdSlot type="banner-300" id="blog-inline-mid" />
        </div>

        {/* Category Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const Icon = categoryIcons[cat];
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow"
                    : "border bg-card text-card-foreground hover:bg-accent"
                }`}
              >
                <Icon className="h-4 w-4" />
                {cat}
                <span
                  className={
                    isActive
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }
                >
                  ({categoryCounts[cat] || 0})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles by title, description, or tags..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredArticles.length} article
          {filteredArticles.length !== 1 ? "s" : ""}
          {search.trim() && ` for "${search}"`}
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </div>

        {/* Article Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => {
            const Icon = categoryIcons[article.category] || BookOpen;
            return (
              <a
                key={article.slug}
                href={`./articles/${article.slug}.html`}
                className="group flex flex-col rounded-xl border bg-card p-5 shadow-sm transition hover:shadow-md hover:border-primary/50"
              >
                {/* Category Badge */}
                <div className="mb-3 flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      categoryBadgeColors[article.category] ||
                      "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-3 w-3" />
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold leading-snug text-card-foreground group-hover:text-primary">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {article.description}
                </p>

                {/* Meta */}
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      <Tag className="h-2.5 w-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="rounded-xl border bg-card p-12 text-center">
            <Search className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <p className="text-lg font-medium text-foreground">
              No articles found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Bottom Native Ad */}
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <AdSlot type="native" id="blog-native-bottom" />
      </div>
    </div>
  );
}
