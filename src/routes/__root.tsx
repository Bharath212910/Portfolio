import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useLocation,
} from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

import appCss from "../styles.css?url";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const ParticleBackground = lazy(() => import("../components/ParticleBackground"));

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center glass-strong rounded-3xl p-10">
        <h1 className="text-7xl font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for drifted into another dimension.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full gradient-bg px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-hover"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bharath K — Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Bharath K, a Java Full Stack Developer based in Bangalore — React, Spring Boot, MySQL projects and more.",
      },
      { name: "author", content: "Bharath K" },
      { property: "og:title", content: "Bharath K — Java Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Futuristic portfolio showcasing React, Spring Boot, and full-stack projects by Bharath K.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

const themeInitScript = `(function(){try{var t=localStorage.getItem('bk-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`;

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen noise-overlay">
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <main key={location.pathname}>
          <Outlet />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
