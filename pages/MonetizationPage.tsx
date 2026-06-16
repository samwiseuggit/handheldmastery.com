import AdSlot from "@/components/AdSlot";
import {
  DollarSign,
  ShoppingCart,
  ExternalLink,
  TrendingUp,
  Tag,
  Gift,
} from "lucide-react";

const affiliateNetworks = [
  {
    name: "Amazon Associates",
    commission: "1-10%",
    description: "The world's largest affiliate program with millions of products. Best for handheld consoles, accessories, and games.",
    cookieDuration: "24 hours",
    url: "https://affiliate-program.amazon.com",
  },
  {
    name: "ShareASale",
    commission: "5-20%",
    description: "Massive network with 4,500+ merchants. Great for gaming peripherals, accessories, and specialty brands.",
    cookieDuration: "30-90 days",
    url: "https://www.shareasale.com",
  },
  {
    name: "CJ Affiliate",
    commission: "3-15%",
    description: "Enterprise-grade network with top brands. Ideal for tech retailers and hardware manufacturers.",
    cookieDuration: "7-120 days",
    url: "https://www.cj.com",
  },
  {
    name: "Rakuten Advertising",
    commission: "3-12%",
    description: "Global network with strong presence in electronics. Good for international audience monetization.",
    cookieDuration: "30 days",
    url: "https://rakutenadvertising.com",
  },
  {
    name: "Newegg Affiliate",
    commission: "1-5%",
    description: "Tech-focused retailer with gaming-savvy audience. Perfect for PC components and handheld accessories.",
    cookieDuration: "7 days",
    url: "https://www.newegg.com/affiliate",
  },
];

const priceComparisonTools = [
  { name: "Keepa", description: "Amazon price history tracker with drop alerts", url: "https://keepa.com", free: true },
  { name: "CamelCamelCamel", description: "Amazon price charts and deal notifications", url: "https://camelcamelcamel.com", free: true },
  { name: "PriceRunner", description: "Multi-retailer price comparison engine", url: "https://www.pricerunner.com", free: true },
  { name: "Honey", description: "Auto-applies coupon codes at checkout", url: "https://www.joinhoney.com", free: true },
];

const revenueTips = [
  {
    icon: <Tag className="w-5 h-5 text-cyan-400" />,
    title: "Deep Linking",
    description: "Link directly to product pages instead of homepages. Deep links convert 3x better than generic referrals.",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
    title: "Seasonal Content",
    description: "Publish buying guides 2-3 weeks before Black Friday, Prime Day, and holiday seasons for peak traffic.",
  },
  {
    icon: <Gift className="w-5 h-5 text-violet-400" />,
    title: "Deal Roundups",
    description: "Weekly deal roundups drive repeat visits. Curate 5-10 best deals with direct affiliate links.",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-amber-400" />,
    title: "High-Ticket Items",
    description: "Focus on $500+ handhelds and premium accessories. A single console sale can earn $15-40 in commission.",
  },
];

export default function MonetizationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-emerald-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Affiliate Hub</h1>
          <p className="text-slate-400 max-w-2xl">
            Monetize your handheld gaming content with the best affiliate networks, price tools, and revenue strategies.
          </p>
        </div>
      </div>

      {/* Inline 300x250 Ad */}
      <div className="mb-8">
        <AdSlot size="300x250" />
      </div>

      {/* Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Left: Affiliate Networks */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-cyan-400" />
            Affiliate Networks
          </h2>
          <div className="space-y-4">
            {affiliateNetworks.map((network) => (
              <div
                key={network.name}
                className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-semibold">{network.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium whitespace-nowrap">
                    {network.commission}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{network.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Cookie: {network.cookieDuration}
                  </span>
                  <a
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Join
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Price Comparison Tools + Revenue Tips */}
        <div className="space-y-8">
          {/* Price Comparison Tools */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-violet-400" />
              Price Comparison Tools
            </h2>
            <div className="space-y-3">
              {priceComparisonTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-600 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {tool.name}
                      </h3>
                      {tool.free && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">
                          Free
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-400">{tool.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Revenue Tips */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Revenue Tips
            </h2>
            <div className="space-y-3">
              {revenueTips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {tip.icon}
                    <h3 className="text-white font-medium">{tip.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Native Ad at Bottom */}
      <AdSlot type="native" />
    </div>
  );
}
