import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeader from "../components/SectionHeader";
import TiltCard from "../components/TiltCard";
import { articles } from "../data/portfolio";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles — Bharath K" },
      { name: "description", content: "Articles and writing by Bharath K on React, Spring Boot, and full-stack development." },
      { property: "og:title", content: "Articles — Bharath K" },
      { property: "og:description", content: "Lessons from building real-world web apps." },
    ],
  }),
  component: Articles,
});

function Articles() {
  return (
    <PageTransition variant="blur">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="// writing" title="Articles & Insights" subtitle="What I've been thinking and learning lately." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="block"
            >
              <TiltCard intensity={6}>
                <div className="glass-strong rounded-3xl p-6 h-full flex flex-col glow-hover group">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-4">
                    <Tag className="h-3.5 w-3.5 text-primary" /> {a.tag}
                    <span>·</span>
                    <Calendar className="h-3.5 w-3.5" /> {a.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">{a.description}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
