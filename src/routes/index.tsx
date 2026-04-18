import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/portfolio";

const Hero3D = lazy(() => import("../components/Hero3D"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharath K — Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Hi, I'm Bharath K — a Java Full Stack Developer based in Bangalore building scalable web apps with React and Spring Boot.",
      },
      { property: "og:title", content: "Bharath K — Java Full Stack Developer" },
      {
        property: "og:description",
        content: "Futuristic portfolio with 3D visuals, animations and full-stack projects.",
      },
    ],
  }),
  component: Index,
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Index() {
  return (
    <PageTransition variant="blur">
      <section className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-widest"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="gradient-text">Available for opportunities</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I'm <span className="gradient-text text-glow">Bharath K</span>
            <br />
            <span className="text-foreground">Java Full Stack</span>{" "}
            <span className="gradient-text">Developer</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg text-muted-foreground max-w-xl">
            I craft scalable web experiences with <span className="text-primary font-semibold">React.js</span>,{" "}
            <span className="text-primary font-semibold">Spring Boot</span> and modern tooling — from concept to deployment.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full gradient-bg px-6 py-3 font-semibold text-primary-foreground glow-hover animate-glow-pulse"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 font-semibold glow-hover"
            >
              <Download className="h-4 w-4" /> Download Resume
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold glow-hover"
            >
              <Mail className="h-4 w-4" /> Contact Me
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-mono">Find me on</p>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[420px] md:h-[560px] lg:h-[620px]"
        >
          <div className="absolute inset-0 -z-10 rounded-[40%] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 blur-3xl animate-pulse" />
          <Suspense fallback={<div className="h-full w-full glass rounded-3xl animate-pulse" />}>
            <Hero3D />
          </Suspense>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { k: "9+", v: "Projects Built" },
            { k: "3+", v: "Years Coding" },
            { k: "10+", v: "Technologies" },
            { k: "100%", v: "Passion" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Quick about */}
      <section className="mx-auto max-w-4xl px-6 mt-24 text-center">
        <p className="text-2xl md:text-3xl font-medium leading-relaxed">
          {profile.bio.split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02, duration: 0.4 }}
              className="inline-block mr-1.5"
            >
              {w}
            </motion.span>
          ))}
        </p>
      </section>
    </PageTransition>
  );
}
