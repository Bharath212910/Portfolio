import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Code2 } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeader from "../components/SectionHeader";
import TiltCard from "../components/TiltCard";
import portrait from "../assets/portrait.jpg";
import { profile } from "../data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bharath K" },
      { name: "description", content: "Get to know Bharath K — background, education and journey as a Java Full Stack Developer." },
      { property: "og:title", content: "About — Bharath K" },
      { property: "og:description", content: "Java Full Stack Developer based in Bangalore. CSE graduate from Anna University." },
    ],
  }),
  component: About,
});

function About() {
  const facts = [
    { icon: MapPin, label: "Based in", value: profile.location },
    { icon: GraduationCap, label: "Degree", value: `${profile.education.degree}, ${profile.education.year}` },
    { icon: Briefcase, label: "Role", value: profile.role },
    { icon: Code2, label: "CGPA", value: profile.education.cgpa },
  ];

  return (
    <PageTransition variant="slide">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="// about me" title="The Person Behind the Code" subtitle="Curious developer, lifelong learner, and full-stack craftsman." />

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <TiltCard className="lg:col-span-2 mx-auto" intensity={15}>
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 gradient-bg blur-2xl opacity-40 rounded-3xl animate-pulse" />
              <div className="relative glass-strong rounded-3xl p-2 overflow-hidden">
                <img
                  src={portrait}
                  alt="Bharath K portrait"
                  loading="lazy"
                  width={768}
                  height={896}
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </TiltCard>

          <div className="lg:col-span-3 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm <span className="text-foreground font-semibold">Bharath K</span>, a Java Full Stack Developer from Bangalore. I graduated with a Bachelor of Engineering in Computer Science from{" "}
              <span className="text-foreground">{profile.education.college}</span> ({profile.education.university}) in {profile.education.year} with a CGPA of {profile.education.cgpa}.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              My happy place is at the intersection of clean architecture and beautiful UI — building React frontends that feel alive and Spring Boot APIs that scale. I love turning real-world problems into shippable software.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {facts.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="glass rounded-2xl p-4 flex items-start gap-3 glow-hover"
                  >
                    <div className="h-10 w-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-xs uppercase font-mono text-muted-foreground">{f.label}</div>
                      <div className="font-semibold">{f.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
