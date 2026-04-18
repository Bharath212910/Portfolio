import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeader from "../components/SectionHeader";
import { skills } from "../data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Bharath K" },
      { name: "description", content: "Frontend, backend, database and tools — Bharath K's full technical skill set." },
      { property: "og:title", content: "Skills — Bharath K" },
      { property: "og:description", content: "React, Spring Boot, Java, MySQL, Firebase and more." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <PageTransition variant="zoom" duration={1.4}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="// my toolkit" title="Skills & Technologies" subtitle="A blend of frontend craftsmanship and backend engineering." />

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, list], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
              className="glass-strong rounded-3xl p-7 glow-hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-2 w-12 rounded-full gradient-bg" />
                <h3 className="text-xl font-bold">{category}</h3>
              </div>
              <ul className="space-y-5">
                {list.map((s, i) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{s.name}</span>
                      <span className="font-mono text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                        className="h-full gradient-bg rounded-full relative"
                      >
                        <div className="absolute inset-0 animate-shimmer" />
                      </motion.div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Skill chips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {[
            "OOP", "DSA", "REST APIs", "Git", "Maven", "Hibernate", "Spring MVC",
            "Bootstrap", "Firebase Auth", "Realtime DB", "API Integration",
          ].map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-4 py-2 rounded-full glass text-sm font-medium cursor-default"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
