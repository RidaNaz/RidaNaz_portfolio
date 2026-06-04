// src/app/og/route.tsx
import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";

export async function GET() {
  const logoPath = join(process.cwd(), "public", "Ridalogo.png");
  const logoData = readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#030014",
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, #712FFF22 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo */}
        <img
          src={logoBase64}
          width={100}
          height={100}
          style={{ borderRadius: "50%", marginBottom: "32px" }}
        />

        {/* Name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "80px",
            fontWeight: "bold",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          Rida Naz
        </div>

        {/* Role */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "28px",
            letterSpacing: "3px",
          }}
        >
          FULLSTACK DEVELOPER & AGENTIC AI ENGINEER
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #712FFF, transparent)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
