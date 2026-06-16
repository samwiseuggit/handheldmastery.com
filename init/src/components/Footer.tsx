import React from "react";

const quickLinks = [
  { label: "Home", href: "index.html" },
  { label: "Compare", href: "compare.html" },
  { label: "Blog", href: "blog.html" },
  { label: "Toolbox", href: "toolbox.html" },
  { label: "Monetization", href: "monetization.html" },
  { label: "Sitemap", href: "sitemap.html" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1829] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo + Tagline */}
          <div className="flex flex-col items-start">
            <a href="index.html" className="mb-4">
              <img
                src="./logo.png"
                alt="Hand Held Mastery"
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate resource for handheld gaming PC reviews, guides, and comparisons.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Affiliate Disclosure */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Affiliate Disclosure</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hand Held Mastery participates in affiliate programs. We may earn a commission
              when you purchase through links on our site — at no extra cost to you. This
              helps support our independent reviews and guides.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Hand Held Mastery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
