import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeader from "../components/SectionHeader";
import TiltCard from "../components/TiltCard";
import { projects } from "../data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Bharath K" },
      { name: "description", content: "Featured React, Spring Boot, Java and full-stack projects by Bharath K." },
      { property: "og:title", content: "Projects — Bharath K" },
      { property: "og:description", content: "MovieHub, Recipe App, Travel site, Auth System and more." },
    ],
  }),
  component: Projects,
});

const categories = ["All", "Frontend", "Full Stack", "Backend"] as const;

function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <PageTransition variant="rotate">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="// my work" title="Featured Projects" subtitle="Real-world apps I designed, built and shipped." />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === c ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full gradient-bg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <TiltCard intensity={8}>
                  <div className="glass-strong rounded-3xl p-6 h-full flex flex-col glow-hover group">
                    <div
                      style={{ transform: "translateZ(40px)" }}
                      className="h-40 w-full rounded-2xl mb-5 gradient-bg animate-gradient flex items-center justify-center text-5xl font-bold text-primary-foreground/30 relative overflow-hidden"
                    >
                      <span className="relative z-10 text-primary-foreground/80">
                        {p.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                      </span>
                      <div className="absolute inset-0 animate-shimmer" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-primary mb-2">
                      {p.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full glass font-mono">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-5">
                      {p.demo && p.demo !== "#" && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl gradient-bg px-3 py-2 text-sm font-semibold text-primary-foreground glow-hover"
                        >
                          <ExternalLink className="h-3.5 w-3.5" /> Live
                        </a>
                      )}
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl glass px-3 py-2 text-sm font-semibold glow-hover"
                      >
                        <Github className="h-3.5 w-3.5" /> Code
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </PageTransition>
  );
}
