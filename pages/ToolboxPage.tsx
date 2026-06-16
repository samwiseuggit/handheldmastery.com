import { useState, useMemo } from "react";
import { softwareTools } from "@/data/products";
import AdSlot from "@/components/AdSlot";
import { ExternalLink, Wrench, Settings, Monitor, Wifi, CircleCheckBig, Cpu } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Emulation: <Monitor className="w-4 h-4" />,
  Utility: <Settings className="w-4 h-4" />,
  Performance: <Cpu className="w-4 h-4" />,
  Streaming: <Wifi className="w-4 h-4" />,
  Compatibility: <CircleCheckBig className="w-4 h-4" />,
};

const categoryFilters = ["All", "Emulation", "Performance", "Streaming", "Utility", "Compatibility"];

export default function ToolboxPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTools = useMemo(() => {
    if (activeFilter === "All") return softwareTools;
    return softwareTools.filter((t) => t.category === activeFilter);
  }, [activeFilter]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: softwareTools.length };
    softwareTools.forEach((t) => {
      counts[t.category] = (counts[t.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
          <Wrench className="w-6 h-6 text-cyan-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Gamer's Toolbox</h1>
          <p className="text-slate-400 max-w-2xl">
            Essential software tools to supercharge your handheld gaming experience — from emulation to streaming.
          </p>
        </div>
      </div>

      {/* Inline 300x250 Ad */}
      <div className="mb-8">
        <AdSlot size="300x250" />
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "bg-slate-900 text-slate-400 border border-slate-700 hover:border-slate-500 hover:text-white"
            }`}
          >
            {filter} ({categoryCounts[filter] || 0})
          </button>
        ))}
      </div>

      {/* Tool Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {filteredTools.map((tool) => (
          <div
            key={tool.name}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-slate-600 transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400">{categoryIcons[tool.category] || <Settings className="w-4 h-4" />}</span>
                <h3 className="text-white font-semibold">{tool.name}</h3>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  tool.free
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-amber-500/10 text-amber-400"
                }`}
              >
                {tool.free ? "Free" : tool.price || "Paid"}
              </span>
            </div>
            <span className="text-xs text-slate-500 mb-2 uppercase tracking-wide">{tool.category}</span>
            <p className="text-sm text-slate-400 mb-4 flex-1">{tool.description}</p>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500/20 transition-colors border border-cyan-500/20"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Get
            </a>
          </div>
        ))}
      </div>

      {/* Native Ad at Bottom */}
      <AdSlot type="native" />
    </div>
  );
}
