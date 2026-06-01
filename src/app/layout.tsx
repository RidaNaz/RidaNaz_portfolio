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
  description: "Portfolio of Rida Naz, a specialized FullStack Developer and Agentic AI Engineer with 1.5+ years of experience in building production AI systems and agentic workflows.", 
  icons:{
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png']
  },
  metadataBase: new URL("https://www.ridanaz.com"),
  alternates: {
    canonical: "https://www.ridanaz.com",
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-screen-2xl mx-auto`}>
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
