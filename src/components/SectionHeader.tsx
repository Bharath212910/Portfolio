import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-widest gradient-text mb-4"
      >
        {eyebrow}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-6xl font-bold tracking-tight"
      >
        {title.split(" ").map((w, i) => (
          <span
            key={i}
            className={i % 2 === 1 ? "gradient-text" : ""}
          >
            {w}{" "}
          </span>
        ))}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-lg text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
