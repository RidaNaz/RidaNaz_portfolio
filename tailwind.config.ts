import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#070B17",
          soft: "#0D1326",
          panel: "#111A31",
          border: "rgba(255,255,255,0.08)",
        },
        text: {
          DEFAULT: "#F5F7FF",
          muted: "#A7B0D3",
          subtle: "#8895BB",
        },
        accent: {
          DEFAULT: "#6DD1FF",
          soft: "#3DB0E4",
          alt: "#B7A0FF",
        },
        support: {
          success: "#7BF2D9",
          highlight: "#F8F5FF",
        },
      },
      boxShadow: {
        glow: "0 20px 80px rgba(13, 29, 68, 0.35)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
