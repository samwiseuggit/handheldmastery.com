import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "index.html" },
  { label: "Compare", href: "compare.html" },
  { label: "Blog", href: "blog.html" },
  { label: "Toolbox", href: "toolbox.html" },
  { label: "Monetization", href: "monetization.html" },
  { label: "Sitemap", href: "sitemap.html" },
];

function getCurrentPage(): string {
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf("/") + 1) || "index.html";
  return page;
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPage = getCurrentPage();

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1829]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a href="index.html" className="flex items-center shrink-0">
            <img
              src="./logo.png"
              alt="Hand Held Mastery"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMobile}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B1829]/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
