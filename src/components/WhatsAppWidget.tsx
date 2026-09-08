"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { WhatsApp } from "./Icons";

/**
 * Floating WhatsApp contact button, bottom-right.
 *
 * Renders after a short delay so it never competes with the hero on first
 * paint, and collapses to a plain circular button once the visitor scrolls.
 * Uses WhatsApp's official brand green (#25D366).
 */
export default function WhatsAppWidget() {
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const show = setTimeout(() => setReady(true), 1200);
    const collapse = setTimeout(() => setExpanded(false), 7000);

    const onScroll = () => setExpanded(false);
    window.addEventListener("scroll", onScroll, { passive: true, once: true });

    return () => {
      clearTimeout(show);
      clearTimeout(collapse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const message = encodeURIComponent(
    "Hi Horizon Growth — I'd like to talk about digital marketing for my business.",
  );

  return (
    <a
      href={`${site.whatsapp}?text=${message}`}
      className="wa"
      data-ready={ready}
      data-expanded={expanded}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${site.shortName} on WhatsApp`}
    >
      <span className="wa__icon" aria-hidden="true">
        <WhatsApp />
      </span>
      <span className="wa__label">Chat on WhatsApp</span>
    </a>
  );
}
