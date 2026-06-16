import { Map, MapPin, FileText, BarChart3, Wrench, DollarSign, Gamepad2, Zap, HardDrive, Monitor, ExternalLink } from "lucide-react";
import { articles } from "@/data/articles";
import { products, categories } from "@/data/products";
import AdSlot from "@/components/AdSlot";

const mainPages = [
  { href: "./index.html", label: "Home", desc: "Featured products, stats, and quick links" },
  { href: "./compare.html", label: "Compare Products", desc: "50 products with filters, search, and sorting" },
  { href: "./blog.html", label: "Blog — 30 Articles", desc: "Technical articles, how-tos, and comparisons" },
  { href: "./toolbox.html", label: "Gamer's Toolbox", desc: "10 essential software tools" },
  { href: "./monetization.html", label: "Affiliate Hub", desc: "Commission rates and revenue strategies" },
  { href: "./sitemap.html", label: "Sitemap", desc: "Full site navigation (this page)" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  console: <Gamepad2 className="w-5 h-5 text-cyan-400" />,
  power: <Zap className="w-5 h-5 text-amber-400" />,
  storage: <HardDrive className="w-5 h-5 text-emerald-400" />,
  dock: <Monitor className="w-5 h-5 text-blue-400" />,
  peripheral: <Gamepad2 className="w-5 h-5 text-fuchsia-400" />,
};

const stats = [
  { label: "Total Pages", value: 37, color: "text-cyan-400" },
  { label: "Products", value: products.length, color: "text-violet-400" },
  { label: "Articles", value: 30, color: "text-emerald-400" },
  { label: "Categories", value: categories.length, color: "text-amber-400" },
];

export default function SitemapPage() {
  const blogArticles = articles.filter((a) => a.category === "blog");
  const howToGuides = articles.filter((a) => a.category === "howto");
  const versusComparisons = articles.filter((a) => a.category === "versus");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <Map className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Site Map</h1>
          <p className="text-slate-400">
            Navigate all pages, product categories, articles, and resources on Hand Held Mastery.
          </p>
        </div>
      </div>

      {/* Inline 300x250 Ad */}
      <div className="mb-8">
        <AdSlot size="300x250" />
      </div>

      {/* Two-Column: Main Pages + Product Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Main Pages */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-white">Main Pages</h2>
          </div>
          <div className="space-y-3">
            {mainPages.map((page) => (
              <a
                key={page.href}
                href={page.href}
                className="flex items-start gap-3 group"
              >
                <FileText className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 mt-0.5 transition-colors" />
                <div>
                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                    {page.label}
                  </div>
                  <div className="text-xs text-slate-500">{page.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Product Categories */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-violet-400" />
            <h2 className="text-lg font-semibold text-white">Product Categories</h2>
          </div>
          <div className="space-y-3">
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat.id).length;
              return (
                <a
                  key={cat.id}
                  href="./compare.html"
                  className="flex items-center gap-3 group"
                >
                  <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {categoryIcons[cat.id] || <Gamepad2 className="w-4 h-4" />}
                  </span>
                  <div>
                    <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                      {cat.label}
                    </div>
                    <div className="text-xs text-slate-500">{count} products</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Three-Column Article Lists */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Blog Articles */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h2 className="text-lg font-semibold text-white">Blog Articles</h2>
            <span className="text-xs text-slate-500">({blogArticles.length})</span>
          </div>
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {blogArticles.map((article) => (
              <a
                key={article.slug}
                href={`./articles/${article.slug}.html`}
                className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {article.title}
              </a>
            ))}
          </div>
        </div>

        {/* How-To Guides */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-emerald-400" />
            <h2 className="text-lg font-semibold text-white">How-To Guides</h2>
            <span className="text-xs text-slate-500">({howToGuides.length})</span>
          </div>
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {howToGuides.map((article) => (
              <a
                key={article.slug}
                href={`./articles/${article.slug}.html`}
                className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {article.title}
              </a>
            ))}
          </div>
        </div>

        {/* Versus Comparisons */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-violet-400" />
            <h2 className="text-lg font-semibold text-white">Versus Comparisons</h2>
            <span className="text-xs text-slate-500">({versusComparisons.length})</span>
          </div>
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {versusComparisons.map((article) => (
              <a
                key={article.slug}
                href={`./articles/${article.slug}.html`}
                className="block text-sm text-slate-300 hover:text-cyan-400 transition-colors"
              >
                {article.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Native Ad at Bottom */}
      <AdSlot type="native" />
    </div>
  );
}
