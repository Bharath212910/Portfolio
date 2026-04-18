import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/articles", label: "Articles" },
  { to: "/profiles", label: "Profiles" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${scrolled ? "glass-strong rounded-2xl mx-4" : ""}`}>
        <nav className="flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2">
            <div className="relative h-9 w-9 rounded-xl gradient-bg animate-glow-pulse flex items-center justify-center font-bold text-primary-foreground">
              BK
            </div>
            <span className="hidden sm:block font-bold text-lg tracking-tight">
              Bharath<span className="gradient-text">.dev</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full glass"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${active ? "gradient-text font-semibold" : ""}`}>{l.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full gradient-bg text-primary-foreground font-semibold text-sm glow-hover"
          >
            Hire Me
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg glass"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-3 glass-strong rounded-2xl p-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                    activeProps={{ className: "block px-4 py-3 rounded-lg gradient-text font-semibold" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
