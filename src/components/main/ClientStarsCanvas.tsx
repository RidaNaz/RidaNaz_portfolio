"use client";

import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("./StarBackground"), {
  ssr: false,
});

export default function ClientStarsCanvas() {
  return <StarsCanvas />;
}
