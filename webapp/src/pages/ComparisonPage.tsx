import { useState, useMemo, useCallback } from "react";
import {
  Search,
  Star,
  ExternalLink,
  X,
  Filter,
} from "lucide-react";
import { products, categories, getBestPrice, type Product } from "@/data/products";
import AdSlot from "@/components/AdSlot";

type SortOption = "price-asc" | "price-desc" | "rating" | "name";

const categoryFilterMap: Record<string, string> = {
  All: "all",
  Consoles: "console",
  "Power Solutions": "power",
  Storage: "storage",
  "Docks & Hubs": "dock",
  Peripherals: "peripheral",
};

const categoryCounts: Record<string, number> = {
  All: products.length,
  Consoles: products.filter((p) => p.category === "console").length,
  "Power Solutions": products.filter((p) => p.category === "power").length,
  Storage: products.filter((p) => p.category === "storage").length,
  "Docks & Hubs": products.filter((p) => p.category === "dock").length,
  Peripherals: products.filter((p) => p.category === "peripheral").length,
};

function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const bestPrice = getBestPrice(product);
  const retailerEntries = Object.entries(product.retailerLinks).filter(
    ([, url]) => !!url
  );
  const priceEntries = Object.entries(product.price).filter(
    ([key, val]) => key !== "msrp" && typeof val === "number" && val > 0
  );
  const specEntries = Object.entries(product.keySpecs);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border bg-background p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <span className="mb-1 inline-block rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              {product.subcategory}
            </span>
            <h2 className="text-2xl font-bold text-foreground">
              {product.name}
            </h2>
          </div>
          {product.rating && (
            <div className="flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-1.5 dark:bg-amber-950">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-amber-700 dark:text-amber-400">
                {product.rating}
              </span>
            </div>
          )}
        </div>

        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground">Best for:</span>{" "}
          {product.bestFor}
        </p>

        {/* Full Specs Grid */}
        <div className="mb-6">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Specifications
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {specEntries.map(([key, value]) => (
              <div
                key={key}
                className="flex items-start gap-2 rounded-lg border bg-muted/30 px-3 py-2"
              >
                <span className="text-xs font-medium capitalize text-muted-foreground">
                  {key}:
                </span>
                <span className="text-sm font-medium text-foreground">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Comparison Table */}
        {priceEntries.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Price Comparison
            </h3>
            <div className="overflow-hidden rounded-lg border">
              <table className="w-full text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-muted-foreground">
                      Retailer
                    </th>
                    <th className="px-4 py-2 text-right font-medium text-muted-foreground">
                      Price
                    </th>
                    <th className="px-4 py-2 text-right font-medium text-muted-foreground">
                      Savings
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {priceEntries.map(([retailer, price]) => (
                    <tr
                      key={retailer}
                      className={`${
                        price === bestPrice
                          ? "bg-emerald-50 dark:bg-emerald-950/30"
                          : ""
                      }`}
                    >
                      <td className="px-4 py-2.5 font-medium capitalize text-foreground">
                        {retailer === "jsaux" ? "JSAUX" : retailer}
                      </td>
                      <td className="px-4 py-2.5 text-right font-semibold text-foreground">
                        ${price as number}
                        {price === bestPrice && (
                          <span className="ml-2 text-xs font-normal text-emerald-600 dark:text-emerald-400">
                            Best
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-2.5 text-right text-muted-foreground">
                        {product.price.msrp > (price as number)
                          ? `Save $${product.price.msrp - (price as number)}`
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Retailer Links */}
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Where to Buy
          </h3>
          <div className="flex flex-wrap gap-3">
            {retailerEntries.map(([retailer, url]) => (
              <a
                key={retailer}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-4 py-2 text-sm font-medium text-card-foreground shadow-sm transition hover:border-primary hover:text-primary"
              >
                {retailer === "jsaux" ? "JSAUX" : retailer === "direct" ? "Direct" : retailer === "amazon" ? "Amazon" : retailer === "bestbuy" ? "Best Buy" : retailer === "walmart" ? "Walmart" : retailer}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComparisonPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("price-asc");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(q);
        const subMatch = p.subcategory.toLowerCase().includes(q);
        const bestForMatch = p.bestFor.toLowerCase().includes(q);
        const specMatch = Object.values(p.keySpecs).some((v) =>
          v.toLowerCase().includes(q)
        );
        return nameMatch || subMatch || bestForMatch || specMatch;
      });
    }

    // Sort
    result.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return getBestPrice(a) - getBestPrice(b);
        case "price-desc":
          return getBestPrice(b) - getBestPrice(a);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return result;
  }, [search, sort, activeCategory]);

  const handleProductClick = useCallback((product: Product) => {
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  const filterLabels = Object.keys(categoryFilterMap);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Product Comparison
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Search, filter, and compare all handheld gaming products side by
            side. Click any product for full details.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Search + Sort Row */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products, specs, features..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded-lg border bg-background px-3 py-2.5 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
            >
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name: A-Z</option>
            </select>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="mb-6 flex flex-wrap gap-2">
          {filterLabels.map((label) => {
            const key = categoryFilterMap[label];
            const isActive = activeCategory === key;
            return (
              <button
                key={label}
                onClick={() => setActiveCategory(key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow"
                    : "border bg-card text-card-foreground hover:bg-accent"
                }`}
              >
                {label}{" "}
                <span
                  className={
                    isActive ? "text-primary-foreground/70" : "text-muted-foreground"
                  }
                >
                  ({categoryCounts[label]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Inline Ad */}
        <div className="mb-8 flex justify-center">
          <AdSlot type="banner-300" id="compare-inline-mid" />
        </div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-muted-foreground">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? "s" : ""}
          {search.trim() && ` for "${search}"`}
          {activeCategory !== "all" &&
            ` in ${categories.find((c) => c.id === activeCategory)?.label || activeCategory}`}
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const bestPrice = getBestPrice(product);
            const topSpecs = Object.entries(product.keySpecs).slice(0, 3);
            const retailerCount = Object.values(product.retailerLinks).filter(
              Boolean
            ).length;

            return (
              <button
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="flex flex-col rounded-xl border bg-card p-5 text-left shadow-sm transition hover:shadow-md hover:border-primary/50"
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

                <h3 className="text-base font-semibold text-card-foreground">
                  {product.name}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {product.bestFor}
                </p>

                <div className="mt-3 space-y-1.5">
                  {topSpecs.map(([key, value]) => (
                    <div key={key} className="flex items-start gap-2 text-xs">
                      <span className="shrink-0 font-medium capitalize text-muted-foreground">
                        {key}:
                      </span>
                      <span className="truncate text-foreground">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-3">
                  <span className="text-lg font-bold text-primary">
                    ${bestPrice}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {retailerCount} retailer{retailerCount !== 1 ? "s" : ""}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-xl border bg-card p-12 text-center">
            <Search className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
            <p className="text-lg font-medium text-foreground">
              No products found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
