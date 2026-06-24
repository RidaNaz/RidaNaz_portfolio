"use client";

import { Socials } from "@/constants";
import {
  Bars3Icon,
  DocumentArrowDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 sm:px-5 lg:px-8">
      <nav className="mx-auto max-w-screen-2xl rounded-2xl border border-white/10 bg-[#030014]/80 shadow-2xl shadow-[#2A0E61]/40 backdrop-blur-xl">
        <div className="flex h-[68px] items-center justify-between px-4 sm:px-5 lg:px-6">
          <Link
            href="/"
            aria-label="Rida Naz home"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-400/30 bg-white/[0.04]">
              <Image
                src="/Ridalogo.svg"
                alt="Rida Naz logo"
                width={34}
                height={34}
                className="cursor-pointer hover:animate-slowspin"
                priority
                fetchPriority="high"
              />
            </span>
            <span className="hidden min-w-0 flex-col leading-tight sm:flex">
              <span className="font-bold text-white">Rida Naz</span>
              <span className="text-xs text-cyan-200/80">
                Agentic AI Engineer
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm text-gray-200 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 transition ${
                  isActive(link.href)
                    ? "bg-purple-500/25 text-white shadow-inner shadow-purple-300/10"
                    : "hover:bg-white/10 hover:text-cyan-200"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex items-center gap-2">
              {Socials.slice(0, 2).map((social) => (
                <Link
                  href={social.link}
                  key={social.name}
                  target="_blank"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-300/10"
                >
                  <Image
                    src={social.src}
                    alt=""
                    width={social.width}
                    height={social.height}
                    className="h-5 w-5"
                  />
                </Link>
              ))}
            </div>
            <Link
              href="/resume"
              className="button-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              <DocumentArrowDownIcon className="h-5 w-5" />
              Resume
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition hover:border-purple-300/50 hover:bg-purple-300/10 lg:hidden"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="border-t border-white/10 px-4 py-4">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive(link.href)
                        ? "bg-purple-500/25 text-white"
                        : "text-gray-200 hover:bg-white/10 hover:text-cyan-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <div className="flex items-center gap-2">
                  {Socials.map((social) => (
                    <Link
                      href={social.link}
                      key={social.name}
                      target="_blank"
                      aria-label={social.name}
                      onClick={() => setIsOpen(false)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#030014]/80"
                    >
                      <Image
                        src={social.src}
                        alt=""
                        width={social.width}
                        height={social.height}
                        className="h-5 w-5"
                      />
                    </Link>
                  ))}
                </div>
                <Link
                  href="/resume"
                  onClick={() => setIsOpen(false)}
                  className="button-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
                >
                  <DocumentArrowDownIcon className="h-5 w-5" />
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
