import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeader from "../components/SectionHeader";
import { profile, skills } from "../data/portfolio";
import resumePdf from "../assets/Bharath_Resume.pdf";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Bharath K" },
      { name: "description", content: "Download Bharath K's resume — Java Full Stack Developer." },
      { property: "og:title", content: "Resume — Bharath K" },
      { property: "og:description", content: "Get a quick overview and download the full resume." },
    ],
  }),
  component: Resume,
});

function Resume() {
  const highlights = [
    "B.E. Computer Science — Anna University (2023)",
    "Java, Spring Boot & RESTful API expertise",
    "React.js full-stack project portfolio",
    "Firebase real-time auth & database",
    "MySQL relational database design",
  ];

  return (
    <PageTransition variant="fade">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="// resume" title="Download My Resume" subtitle="A snapshot of my journey, skills and experience." />

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full gradient-bg blur-3xl opacity-30" />
            <FileText className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2">Bharath K — Resume</h3>
            <p className="text-muted-foreground mb-6">
              {profile.role} · {profile.location}
            </p>
            <ul className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-2.5 text-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={resumePdf}
              download="Bharath_Resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full gradient-bg px-7 py-3.5 font-bold text-primary-foreground animate-glow-pulse"
            >
              <Download className="h-5 w-5" /> Download Resume
            </motion.a>
          </motion.div>

          {/* Resume preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-7 text-sm space-y-5"
          >
            <div>
              <p className="font-mono text-xs uppercase text-primary tracking-widest">Contact</p>
              <p className="font-semibold mt-1">{profile.email}</p>
              <p className="text-muted-foreground">{profile.phone}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-primary tracking-widest">Education</p>
              <p className="font-semibold mt-1">{profile.education.degree}</p>
              <p className="text-muted-foreground">
                {profile.education.college} · {profile.education.year} · CGPA {profile.education.cgpa}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase text-primary tracking-widest">Top Skills</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {[...skills.Frontend, ...skills.Backend].slice(0, 8).map((s) => (
                  <span key={s.name} className="px-2.5 py-1 rounded-full glass text-xs font-mono">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
