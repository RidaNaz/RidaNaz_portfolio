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
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Purple glow effect top right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, #712FFF44 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Purple glow effect bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, #712FFF33 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Logo + domain row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <img
            src={logoBase64}
            width={52}
            height={52}
            style={{ borderRadius: "50%" }}
          />
          <div style={{ color: "#712FFF", fontSize: "22px", letterSpacing: "2px" }}>
            ridanaz.com
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            color: "#ffffff",
            fontSize: "72px",
            fontWeight: "bold",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
        >
          Rida Naz
        </div>

        {/* Title */}
        <div
          style={{
            color: "#a0a0c0",
            fontSize: "30px",
            marginBottom: "48px",
          }}
        >
          FullStack Developer & Agentic AI Engineer
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["Voice AI", "Agentic Workflows", "Next.js", "LiveKit"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "#712FFF22",
                border: "1px solid #712FFF88",
                color: "#b388ff",
                padding: "10px 24px",
                borderRadius: "999px",
                fontSize: "20px",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom border accent */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "4px",
            background: "linear-gradient(90deg, transparent, #712FFF, transparent)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
