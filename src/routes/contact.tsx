import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeader from "../components/SectionHeader";
import SocialLinks from "../components/SocialLinks";
import { profile } from "../data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bharath K" },
      { name: "description", content: "Get in touch with Bharath K — email, phone or message form." },
      { property: "og:title", content: "Contact — Bharath K" },
      { property: "og:description", content: "Let's build something great together." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  const info = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: "Location", value: profile.location, href: "#" },
  ];

  return (
    <PageTransition variant="slide">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="// contact" title="Let's Build Together" subtitle="I'm open to opportunities, collaborations and a good coffee chat." />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {info.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 glass rounded-2xl p-4 glow-hover"
                >
                  <div className="h-12 w-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase font-mono text-muted-foreground">{c.label}</div>
                    <div className="font-semibold truncate">{c.value}</div>
                  </div>
                </motion.a>
              );
            })}

            <div className="glass-strong rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest font-mono text-muted-foreground mb-3">Find me on</p>
              <SocialLinks />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 space-y-5 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full gradient-bg blur-3xl opacity-20" />
            <div className="relative grid sm:grid-cols-2 gap-4">
              <Field label="Your Name" name="name" required placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" required placeholder="jane@example.com" />
            </div>
            <div className="relative">
              <label className="text-xs uppercase tracking-widest font-mono text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                className="mt-2 w-full rounded-2xl glass border border-border/50 px-4 py-3 outline-none focus:border-primary focus:shadow-[0_0_0_3px_oklch(0.82_0.16_200/0.2)] transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status !== "idle"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full gradient-bg px-8 py-3.5 font-bold text-primary-foreground glow-hover disabled:opacity-80 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </motion.span>
                )}
                {status === "sent" && (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4" /> Sent — Thank you!
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </PageTransition>
  );
}

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest font-mono text-muted-foreground">{label}</label>
      <input
        {...props}
        className="mt-2 w-full rounded-2xl glass border border-border/50 px-4 py-3 outline-none focus:border-primary focus:shadow-[0_0_0_3px_oklch(0.82_0.16_200/0.2)] transition-all"
      />
    </div>
  );
}
