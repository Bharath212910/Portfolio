import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold">
            Bharath <span className="gradient-text">K</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Java Full Stack Developer · Bangalore
          </p>
        </div>
        <SocialLinks />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bharath K. Crafted with passion.
        </p>
      </div>
    </footer>
  );
}
