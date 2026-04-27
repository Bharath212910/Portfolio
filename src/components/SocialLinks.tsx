import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Bharath212910", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/bharath-k-267078260/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/k_bharat_h", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/919361893097", label: "WhatsApp" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-3 ${className}`}>
      {socials.map((s, i) => {
        const Icon = s.icon;
        return (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            <motion.a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-muted-foreground hover:text-primary hover:shadow-[0_0_25px_oklch(0.82_0.16_200/0.5)] transition-all"
            >
              <Icon className="h-5 w-5" />
            </motion.a>
          </motion.li>
        );
      })}
    </ul>
  );
}
