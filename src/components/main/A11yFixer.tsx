"use client";

import { useEffect } from "react";

export default function A11yFixer() {
  useEffect(() => {
    const fixA11y = () => {
      const scanRoot = (root: Document | Element | ShadowRoot) => {
        // Find all buttons in the current root context
        const buttons = root.querySelectorAll("button");
        buttons.forEach((btn) => {
          if (!btn.getAttribute("aria-label") && !btn.textContent?.trim()) {
            const className = btn.className || "";
            
            if (
              className.includes("text-white/80") || 
              btn.closest(".flex")?.classList.contains("flex-row")
            ) {
              btn.setAttribute("aria-label", "Close Chat Widget");
            } else if (
              className.includes("bg-gradient-primary") || 
              className.includes("bg-purple-600")
            ) {
              btn.setAttribute("aria-label", "Send message");
            } else if (
              className.includes("p-2") || 
              className.includes("border-gray-200") || 
              className.includes("shrink-0")
            ) {
              btn.setAttribute("aria-label", "Chat action option");
            } else {
              btn.setAttribute("aria-label", "Chat action button");
            }
          }
        });

        // Traverse into nested Shadow DOMs
        const allElements = root.querySelectorAll("*");
        allElements.forEach((el) => {
          if (el.shadowRoot) {
            scanRoot(el.shadowRoot);
          }
        });
      };

      scanRoot(document);
    };

    // Run immediately
    fixA11y();

    // Observe changes recursively
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
