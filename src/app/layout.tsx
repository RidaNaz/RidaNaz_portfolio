import type { Metadata } from "next";
import { Inter, Cedarville_Cursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar"
import Footer from "../components/main/Footer";
import Script from "next/script";
import StarsCanvas from "@/components/main/ClientStarsCanvas";

const inter = Inter({ subsets: ["latin"] });
const cedarville = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cedarville",
});

export const metadata: Metadata = {
  title: "Rida Naz | FullStack Developer & Agentic AI Engineer",
  description:
    "Rida Naz is a Full Stack Developer and Agentic AI Engineer based in Karachi, Pakistan. Specialized in Voice AI agents, Agentic workflows, Next.js, and scalable SaaS platforms.",
  keywords: [
    "Rida Naz",
    "Full Stack Developer Karachi",
    "Agentic AI Engineer",
    "Voice AI Agent",
    "Next.js Developer Pakistan",
    "LiveKit developer",
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
    title: "Rida Naz | FullStack Developer & Agentic AI Engineer",
    description:
      "Specialized in Voice AI, Agentic Workflows, and Scalable FullStack Applications.",
    url: "https://www.ridanaz.com",
    siteName: "Rida Naz",
    type: "website",
    images: [
      {
        url: "https://www.ridanaz.com/og",
        width: 1200,
        height: 630,
        alt: "Rida Naz - FullStack Developer & Agentic AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rida Naz | FullStack Developer & Agentic AI Engineer",
    description:
      "Specialized in Voice AI, Agentic Workflows, and Scalable FullStack Applications.",
    images: ["https://www.ridanaz.com/og"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rida Naz",
  url: "https://www.ridanaz.com",
  jobTitle: "Full Stack Developer & Agentic AI Engineer",
  description:
    "Full Stack Developer and Agentic AI Engineer specializing in Voice AI agents, Agentic workflows, and scalable SaaS platforms.",
  knowsAbout: [
    "Voice AI",
    "Agentic Workflows",
    "Next.js",
    "FastAPI",
    "LiveKit",
    "LangGraph",
    "MCP Servers",
    "Multi-agent Systems",
  ],
  worksFor: {
    "@type": "Organization",
    name: "TalkifAI",
    url: "https://talkifai.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "Rida Naz",
    url: "https://www.ridanaz.com",
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
      <body className={`${inter.className} ${cedarville.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-screen-2xl mx-auto`}>
        {/* Inline a11y patcher — runs before any other JS to catch widget buttons */}
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
              // Scan shadow roots
              root.querySelectorAll('*').forEach(function (el) {
                if (el.shadowRoot) labelButtons(el.shadowRoot);
              });
            }
            var obs = new MutationObserver(function () { labelButtons(document); });
            obs.observe(document.documentElement, { childList: true, subtree: true });
            labelButtons(document);
          })();
        `}</Script>
        <StarsCanvas />
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
