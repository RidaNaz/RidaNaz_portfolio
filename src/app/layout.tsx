import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar"
import Footer from "../components/main/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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
  openGraph: {
    title: "Rida Naz | FullStack Developer & Agentic AI Engineer",
    description:
      "Specialized in Voice AI, Agentic Workflows, and Scalable FullStack Applications.",
    url: "https://www.ridanaz.com",
    siteName: "Rida Naz Portfolio",
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
  worksFor: {
    "@type": "Organization",
    name: "TalkifAI",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  sameAs: [
    "https://linkedin.com/in/ridanaz67",
    "https://github.com/RidaNaz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-screen-2xl mx-auto`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
        <Script src="https://talkifai.dev/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
