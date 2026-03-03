"use client";
import { useState } from "react";
import { tools } from "@/data/tools";

export default function ToolsSlider() {
  const [paused, setPaused] = useState(false);
  const doubled = [...tools, ...tools];

  return (
    <div className="mt-8 md:mt-12 mb-8">
      <p className="text-center text-gray-400 text-base md:text-lg mb-6">
        Built with open source. Here are some of them
      </p>
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex gap-10 md:gap-14 w-max"
            style={{
              animation: "scroll-left 40s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {doubled.map((t, i) => (
              <a
                key={`${t.name}-${i}`}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 shrink-0 opacity-60 hover:opacity-100 transition-opacity"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-[#FFD700]">
                  <path d={t.path} />
                </svg>
                <span className="text-gray-400 text-sm md:text-base whitespace-nowrap">{t.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
