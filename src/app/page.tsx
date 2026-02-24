"use client";
import { useState, useEffect } from "react";
import WaveAnimation from "@/components/WaveAnimation";
export default function Home() {
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solutions = [
    {
      title: "Web Apps",
      desc: "Custom web applications built with modern frameworks including Next.js, Astro, and React. Fast, scalable, and tailored to your needs.",
    },
    {
      title: "APIs",
      desc: "RESTful and GraphQL APIs, third-party integrations, and webhooks. Connecting your systems and automating data flow.",
    },
    {
      title: "Mobile",
      desc: "Cross-platform mobile applications and progressive web apps. Responsive, performant, and ready for any device.",
    },
    {
      title: "WP/Woo Custom",
      desc: "Custom themes, plugins, and integrations for WP and Woo. Extending functionality beyond out-of-the-box solutions.",
    },
    {
      title: "DevOps",
      desc: "CI/CD pipelines, Docker, infrastructure automation, and monitoring. Streamlining your development and deployment workflow.",
    },
    {
      title: "Server Administration",
      desc: "Linux server setup, hardening, maintenance, and monitoring. Keeping your infrastructure secure and running smoothly.",
    },
    {
      title: "MVP",
      desc: "Minimum viable products built fast. Validate your idea, get to market quickly, and iterate based on real feedback.",
    },
    {
      title: "Legacy Modernization",
      desc: "Updating outdated systems, migrating to modern stacks, and refactoring code. Bringing old projects back to life.",
    },
    {
      title: "Self-hosted Solutions",
      desc: "Nextcloud, mailcow, and other self-hosted alternatives to M365 and Google Workspace. Full control over your data and infrastructure.",
    },
  ];
  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      desc: "We start by understanding your project inside and out. You can bring a ready design, an existing MVP, or just an idea. We analyze requirements, define scope, and plan the approach together.",
    },
    {
      num: "02",
      title: "Implementation",
      desc: "Once everything is agreed upon, we get to work. We build, test, and deliver — keeping you in the loop at every stage.",
    },
    {
      num: "03",
      title: "Ongoing Support",
      desc: "After deployment, we provide continued support, maintenance, and improvements. Your project stays healthy and up to date.",
    },
  ];
  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-[#0a0a1a]/80 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight">ViewSmash</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-gray-400 hover:text-white transition">Start</a>
            <a href="#what-we-build" className="text-sm text-gray-400 hover:text-white transition">What We Build</a>
            <a href="#how-we-work" className="text-sm text-gray-400 hover:text-white transition">How We Work</a>
            <a href="#contact" className="text-sm bg-[#00d4ff] text-[#0a0a1a] px-4 py-2 rounded-lg font-semibold hover:bg-[#00bfe0] transition">Get in Touch</a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex items-center gap-2 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white transition">
            <span className="text-lg leading-none">☰</span>Menu
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
            <a href="/" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-white transition">Start</a>
            <a href="#what-we-build" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-white transition">What We Build</a>
            <a href="#how-we-work" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-white transition">How We Work</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm bg-[#00d4ff] text-[#0a0a1a] px-4 py-2 rounded-lg font-semibold hover:bg-[#00bfe0] transition text-center">Get in Touch</a>
          </div>
        )}
      </nav>
      {/* Hero */}
      <section id="start" className="max-w-6xl mx-auto px-6 py-16 md:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Open source web development, APIs &amp; integrations</h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl">We build modern, scalable solutions using open source technologies. From custom web apps to self-hosted infrastructure — we help businesses take full control of their digital stack.</p>
          <a href="#contact" className="inline-block mt-8 bg-[#00d4ff] text-[#0a0a1a] px-6 py-3 rounded-lg font-semibold hover:bg-[#00bfe0] transition">Get in Touch</a>
        </div>
        <div className="select-none" aria-hidden="true">
          <WaveAnimation />
        </div>
      </section>
      {/* What We Build */}
      <section id="what-we-build" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">What We Build</h2>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">From web applications and APIs to self-hosted infrastructure — here is what we can deliver for you.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="bg-[#111128] border border-gray-800 rounded-lg p-6 hover:border-[#00d4ff]/40 transition">
              <h3 className="text-lg font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* How We Work */}
      <section id="how-we-work" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">How We Work</h2>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">A straightforward process built around your project and your pace.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#111128] border border-gray-800 rounded-lg p-6">
              <span className="text-[#00d4ff] text-sm font-mono font-bold">{s.num}</span>
              <h3 className="text-lg font-semibold mt-3 mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">Contact</h2>
        <p className="mt-4 text-xl text-center text-gray-300">Have a project in mind?</p>
        <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">Send us a message and we will review your project. Depending on scope and complexity, we may schedule a call to discuss details before providing an estimate.</p>
        <div className="mt-8 text-center">
          <a href="mailto:hello@viewsmash.com" className="text-[#00d4ff] hover:text-[#00bfe0] text-lg font-semibold transition">hello@viewsmash.com</a>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ViewSmash. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/" className="text-sm text-gray-500 hover:text-white transition">Start</a>
            <a href="#what-we-build" className="text-sm text-gray-500 hover:text-white transition">What We Build</a>
            <a href="#how-we-work" className="text-sm text-gray-500 hover:text-white transition">How We Work</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-white transition">Get in Touch</a>
          </div>
        </div>
      </footer>
      {/* Back to top */}
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 bg-[#00d4ff] text-[#0a0a1a] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#00bfe0] transition" aria-label="Back to top">↑</button>
      )}
    </div>
  );
}
