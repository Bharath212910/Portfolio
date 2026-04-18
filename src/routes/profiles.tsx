import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeader from "../components/SectionHeader";
import TiltCard from "../components/TiltCard";
import { codingProfiles } from "../data/portfolio";

export const Route = createFileRoute("/profiles")({
  head: () => ({
    meta: [
      { title: "Coding Profiles — Bharath K" },
      { name: "description", content: "GitHub, LeetCode, HackerRank and LinkedIn profiles of Bharath K." },
      { property: "og:title", content: "Coding Profiles — Bharath K" },
      { property: "og:description", content: "Where I build, solve and share." },
    ],
  }),
  component: Profiles,
});

function Profiles() {
  return (
    <PageTransition variant="zoom">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="// coding profiles" title="Where I Build & Compete" subtitle="My presence across the developer ecosystem." />

        <div className="grid md:grid-cols-2 gap-6">
          {codingProfiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="block"
            >
              <TiltCard intensity={10}>
                <div className="glass-strong rounded-3xl p-7 relative overflow-hidden group glow-hover">
                  <div className={`absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br ${p.color} blur-3xl opacity-30 group-hover:opacity-60 transition-opacity`} />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{p.name}</h3>
                        <p className="text-sm font-mono text-muted-foreground">{p.handle}</p>
                      </div>
                      <ArrowUpRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <p className="text-muted-foreground mb-6">{p.description}</p>
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full glass text-sm font-bold gradient-text">
                      {p.stat}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.a>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
