import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdSlot from "./AdSlot";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  if (title) {
    document.title = `${title} | Hand Held Mastery`;
  }

  return (
    <div className="min-h-screen bg-[#0B1829] text-white">
      {/* Popunder ad — invisible */}
      <AdSlot type="popunder" />

      {/* Sticky navbar */}
      <Navbar />

      {/* Top banner ad (desktop only) */}
      <div className="pt-20 sm:pt-24">
        <AdSlot type="banner-728" />
      </div>

      {/* Main page content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Bottom banner ad (desktop only) */}
      <AdSlot type="banner-728" />

      {/* Footer */}
      <Footer />

      {/* Social bar — sticky bottom */}
      <AdSlot type="social-bar" />
    </div>
  );
}
