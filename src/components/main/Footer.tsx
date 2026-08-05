import Link from "next/link";
import { profileLinks } from "@/constants/profile-pages";

const siteLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  "Voice AI agents",
  "Agentic workflows",
  "RAG knowledge systems",
  "Full stack AI SaaS",
  "AI integrations",
  "Agentic SEO",
];

const socialLinks = [
  { label: "LinkedIn", href: profileLinks.linkedin },
  { label: "GitHub", href: profileLinks.github },
  { label: "Upwork", href: profileLinks.upwork },
  { label: "YouTube", href: profileLinks.youtube },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-surface px-6 py-14 text-text-muted">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="text-2xl font-bold text-white">
            Rida Naz
          </Link>
          <p className="mt-4 max-w-md leading-7">
            Agentic AI Engineer and Full Stack Product Builder creating voice
            agents, AI workflows, RAG systems, integrations, and SaaS platforms
            for real business operations.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-surface transition hover:bg-accent-soft/20"
            >
              Work With Me
            </Link>
            <Link
              href={profileLinks.upwork}
              target="_blank"
              rel="noopener"
              className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20"
            >
              Hire on Upwork
            </Link>
          </div>
        </div>

        <nav aria-label="Footer site navigation">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Site
          </h2>
          <ul className="mt-5 space-y-3">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-200">
            Services
          </h2>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((service) => (
              <li key={service}>
                <Link href="/services" className="transition hover:text-white">
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Contact
          </h2>
          <ul className="mt-5 space-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={profileLinks.email} className="transition hover:text-white">
                rnaz3414@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <p>© Rida Naz 2026. All rights reserved.</p>
        <p>Karachi, Pakistan · Available for AI product and SaaS collaborations.</p>
      </div>
    </footer>
  );
};

export default Footer;
