"use client";

import { useEffect } from "react";

export default function A11yFixer() {
  useEffect(() => {
    const fixA11y = () => {
      // Find all buttons inside a container with class `fixed`
      const fixedButtons = document.querySelectorAll("div.fixed button");
      fixedButtons.forEach((btn) => {
        // If the button lacks an aria-label and has no visible text
        if (!btn.getAttribute("aria-label") && !btn.textContent?.trim()) {
          // Identify button type by its classes or layout hierarchy
          if (
            btn.classList.contains("text-white/80") ||
            btn.closest(".flex")?.classList.contains("flex-row")
          ) {
            btn.setAttribute("aria-label", "Close Chat Widget");
          } else if (btn.closest("div.border-t")) {
            // Is it the send button?
            if (
              btn.classList.contains("bg-gradient-primary") ||
              btn.classList.contains("bg-purple-600")
            ) {
              btn.setAttribute("aria-label", "Send message");
            } else {
              btn.setAttribute("aria-label", "Chat option");
            }
          } else {
            btn.setAttribute("aria-label", "Chat button");
          }
        }
      });
    };

    // Run initially
    fixA11y();

    // Set up MutationObserver to handle dynamically rendered widget elements
    const observer = new MutationObserver((mutations) => {
      fixA11y();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
