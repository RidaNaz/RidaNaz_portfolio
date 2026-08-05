import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "../components/main/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cedarville",
});

export const metadata: Metadata = {
  title: "Rida Naz | Agentic AI Engineer & Full Stack Product Builder",
  description:
    "Rida Naz builds production AI systems, voice AI agents, agentic workflows, RAG knowledge systems, and full stack SaaS platforms for founders and technical teams.",
  keywords: [
    "Rida Naz",
    "Agentic AI Engineer",
    "Voice AI Agent Developer",
    "Full Stack Developer Karachi",
    "Next.js Developer Pakistan",
    "LiveKit developer",
    "LangGraph developer",
    "FastAPI Developer",
    "AI Engineer Pakistan",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico?v=4" },
      { url: "/Ridalogo1.png", type: "image/png", sizes: "192x192" },
    ],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  metadataBase: new URL("https://www.ridanaz.com"),
  alternates: {
    canonical: "https://www.ridanaz.com",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rida Naz | Agentic AI Engineer & Full Stack Product Builder",
    description:
      "Production AI systems, voice agents, agentic workflows, RAG, integrations, and full stack SaaS platforms.",
    url: "https://www.ridanaz.com",
    siteName: "Rida Naz",
    type: "website",
    images: [
      {
        url: "https://www.ridanaz.com/og",
        width: 1200,
        height: 630,
        alt: "Rida Naz - Agentic AI Engineer and Full Stack Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rida Naz | Agentic AI Engineer & Full Stack Product Builder",
    description:
      "Production AI systems, voice agents, agentic workflows, RAG, integrations, and full stack SaaS platforms.",
    images: ["https://www.ridanaz.com/og"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.ridanaz.com/#person",
      name: "Rida Naz",
      url: "https://www.ridanaz.com",
      jobTitle: "Agentic AI Engineer and Full Stack Product Builder",
      description:
        "Full Stack Developer and Agentic AI Engineer specializing in Voice AI agents, agentic workflows, RAG systems, and full stack SaaS platforms.",
      knowsAbout: [
        "Voice AI",
        "Agentic Workflows",
        "Next.js",
        "FastAPI",
        "LiveKit",
        "LangGraph",
        "MCP Servers",
        "RAG Systems",
        "Multi-agent Systems",
      ],
      worksFor: {
        "@type": "Organization",
        name: "TalkifAI",
        url: "https://talkifai.dev",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressCountry: "PK",
      },
      sameAs: [
        "https://linkedin.com/in/ridanaz67",
        "https://github.com/RidaNaz",
        "https://www.upwork.com/freelancers/~0110100ff16de521db",
      ],
      alumniOf: {
        "@type": "Organization",
        name: "PIAIC/GIAIC",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ridanaz.com/#website",
      name: "Rida Naz Portfolio",
      url: "https://www.ridanaz.com",
      publisher: { "@id": "https://www.ridanaz.com/#person" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.ridanaz.com/#services",
      name: "Rida Naz AI Engineering Services",
      url: "https://www.ridanaz.com/services",
      areaServed: "Worldwide",
      provider: { "@id": "https://www.ridanaz.com/#person" },
      serviceType: [
        "Voice AI agent development",
        "Agentic workflow automation",
        "RAG knowledge systems",
        "Full stack AI SaaS development",
        "AI integration engineering",
        "Agentic SEO and AI visibility",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} ${cedarville.variable} bg-surface overflow-y-scroll overflow-x-hidden max-w-screen-2xl mx-auto`}>
        {/* Inline a11y patcher runs before other JS to catch widget buttons. */}
        <Script id="a11y-fixer" strategy="beforeInteractive">{`
          (function () {
            function labelButtons(root) {
              var btns = root.querySelectorAll('button:not([aria-label])');
              btns.forEach(function (btn) {
                if (btn.textContent && btn.textContent.trim()) return;
                var cls = btn.className || '';
                if (cls.indexOf('text-white/80') !== -1) {
                  btn.setAttribute('aria-label', 'Close chat widget');
                } else if (cls.indexOf('bg-gradient-primary') !== -1) {
                  btn.setAttribute('aria-label', 'Send message');
                } else if (cls.indexOf('shrink-0') !== -1 || cls.indexOf('p-2') !== -1) {
                  btn.setAttribute('aria-label', 'Chat action');
                }
              });
              root.querySelectorAll('*').forEach(function (el) {
                if (el.shadowRoot) labelButtons(el.shadowRoot);
              });
            }
            var obs = new MutationObserver(function () { labelButtons(document); });
            obs.observe(document.documentElement, { childList: true, subtree: true });
            labelButtons(document);
          })();
        `}</Script>
        <Navbar />
        {children}
        <Footer />
        <Script id="talkifai-config" strategy="beforeInteractive">
          {`
            window.__TALKIFAI__ = {
              apiUrl: "${process.env.NEXT_PUBLIC_TALKIFAI_API_URL}",
              widgetKey: "${process.env.NEXT_PUBLIC_TALKIFAI_WIDGET_KEY}",
              agentId: "${process.env.NEXT_PUBLIC_TALKIFAI_AGENT_ID}",
              theme: {
                primaryColor: '#712FFF',
                primaryDark: '#3C087E',
              },
            };
          `}
        </Script>
        <Script src="https://talkifai.dev/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
