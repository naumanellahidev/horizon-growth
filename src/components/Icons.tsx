import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export const ArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronDown = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const Check = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12.2l2.4 2.4 4.6-4.9" />
  </svg>
);

export const Plus = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Menu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006.5 6.5L17 13l4 1.5v3a2 2 0 01-2.2 2A17 17 0 013.1 5.2 2 2 0 015 3z" />
  </svg>
);

export const Mail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5l8.5 6 8.5-6" />
  </svg>
);

export const MapPin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const Clock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);

export const Search = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
);

export const Share = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="18" cy="6" r="2.6" />
    <circle cx="6" cy="12" r="2.6" />
    <circle cx="18" cy="18" r="2.6" />
    <path d="M8.4 10.8l7.2-3.6M8.4 13.2l7.2 3.6" />
  </svg>
);

export const Monitor = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="4" width="19" height="13" rx="2" />
    <path d="M9 21h6M12 17v4" />
  </svg>
);

export const Target = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.6" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export const Chart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20h16" />
    <rect x="6" y="11" width="3.2" height="6" rx="1" />
    <rect x="11.4" y="7" width="3.2" height="10" rx="1" />
    <rect x="16.8" y="13" width="3.2" height="4" rx="1" />
  </svg>
);

export const Cart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 4h2.2l2 11h10l2-8H6.4" />
    <circle cx="9" cy="19" r="1.5" />
    <circle cx="17" cy="19" r="1.5" />
  </svg>
);

export const Compass = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15.5 8.5l-2 5-5 2 2-5z" />
  </svg>
);

export const Spark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l1.9 5.6L19.5 10.5l-5.6 1.9L12 18l-1.9-5.6L4.5 10.5l5.6-1.9z" />
  </svg>
);

export const Shield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3l7.5 3v6c0 4.6-3.1 7.9-7.5 9.4C7.6 19.9 4.5 16.6 4.5 12V6z" />
    <path d="M9 12l2.2 2.2 3.8-4" />
  </svg>
);

export const Users = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8.5" r="3.2" />
    <path d="M3.5 19.5a5.5 5.5 0 0111 0" />
    <path d="M16 5.6a3.2 3.2 0 010 5.9M17.5 19.5a5.6 5.6 0 00-2-4.2" />
  </svg>
);

export const Rocket = (p: P) => (
  <svg {...base} {...p}>
    <path d="M14.5 4.5c3.2-1.2 5.2-.9 5.2-.9s.3 2-.9 5.2c-1.1 3-3.6 5.4-6.1 6.8l-3.9-3.9c1.4-2.5 3.8-5 6.7-6.1z" />
    <circle cx="14.8" cy="9.2" r="1.4" />
    <path d="M8.8 11.7L6 12.6l-1.4 1.4 2.6 1M12.3 15.2l.9 2.8-1.4 1.4-1-2.6M5.5 18.5l-1.4 1.4" />
  </svg>
);

export const Pen = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 20l1-4L16 5a2.1 2.1 0 013 3L8 19z" />
    <path d="M14.5 6.5l3 3" />
  </svg>
);

export const Code = (p: P) => (
  <svg {...base} {...p}>
    <path d="M9 8l-4.5 4L9 16M15 8l4.5 4L15 16" />
  </svg>
);

/* --- Social marks --- */
export const LinkedIn = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M4.98 3.5A2.5 2.5 0 112.5 6 2.49 2.49 0 014.98 3.5zM3 8.98h4v12H3zM9.5 8.98h3.8v1.64h.05a4.17 4.17 0 013.75-2.06c4 0 4.75 2.63 4.75 6.06v6.36h-4v-5.64c0-1.34 0-3.07-1.87-3.07s-2.16 1.46-2.16 2.97v5.74h-4z" />
  </svg>
);

export const Facebook = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0022 12z" />
  </svg>
);

export const Instagram = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.97.24 2.67.51.72.28 1.33.65 1.94 1.26.61.61.98 1.22 1.26 1.94.27.7.46 1.5.51 2.67.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.05 1.17-.24 1.97-.51 2.67-.28.72-.65 1.33-1.26 1.94-.61.61-1.22.98-1.94 1.26-.7.27-1.5.46-2.67.51-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.17-.05-1.97-.24-2.67-.51-.72-.28-1.33-.65-1.94-1.26-.61-.61-.98-1.22-1.26-1.94-.27-.7-.46-1.5-.51-2.67C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.05-1.17.24-1.97.51-2.67.28-.72.65-1.33 1.26-1.94.61-.61 1.22-.98 1.94-1.26.7-.27 1.5-.46 2.67-.51C8.4 2.21 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18-.22-.55-.47-.94-.88-1.35-.41-.41-.8-.66-1.35-.88-.41-.16-1.03-.35-2.18-.4C15.51 4.01 15.14 4 12 4zm0 3.06A4.94 4.94 0 1116.94 12 4.94 4.94 0 0112 7.06zm0 8.15A3.21 3.21 0 1015.21 12 3.21 3.21 0 0012 15.21zm6.29-8.35a1.15 1.15 0 11-1.15-1.15 1.15 1.15 0 011.15 1.15z" />
  </svg>
);

export const XMark = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M17.53 3H20.5l-6.49 7.42L21.5 21h-5.98l-4.68-6.12L5.47 21H2.5l6.94-7.93L2.5 3h6.13l4.23 5.6zm-1.04 16.2h1.65L7.6 4.71H5.83z" />
  </svg>
);

export const WhatsApp = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...p}>
    <path d="M12.04 2A9.9 9.9 0 002.1 11.9a9.8 9.8 0 001.34 4.95L2 22l5.28-1.38a9.94 9.94 0 004.76 1.21h.01A9.9 9.9 0 0022 11.94 9.9 9.9 0 0012.04 2zm0 18.02a8.24 8.24 0 01-4.2-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 01-1.26-4.36 8.25 8.25 0 118.25 8.23zm4.53-6.16c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12s-.64.8-.79.97-.29.19-.54.06a6.73 6.73 0 01-1.99-1.23 7.45 7.45 0 01-1.37-1.71c-.15-.25 0-.39.11-.51s.25-.29.37-.44a1.7 1.7 0 00.25-.42.46.46 0 000-.44c-.06-.13-.56-1.35-.77-1.85s-.41-.42-.56-.43h-.48a.92.92 0 00-.67.31 2.8 2.8 0 00-.87 2.08 4.87 4.87 0 001.02 2.58 11.14 11.14 0 004.26 3.76 14.4 14.4 0 001.42.53 3.42 3.42 0 001.57.1 2.57 2.57 0 001.68-1.18 2.08 2.08 0 00.15-1.19c-.06-.1-.23-.16-.48-.29z" />
  </svg>
);

export const socialIcons = {
  linkedin: LinkedIn,
  facebook: Facebook,
  instagram: Instagram,
  x: XMark,
  mail: Mail,
  whatsapp: WhatsApp,
} as const;

export const serviceIcons = {
  compass: Compass,
  search: Search,
  monitor: Monitor,
  share: Share,
  target: Target,
  chart: Chart,
  cart: Cart,
  spark: Spark,
  rocket: Rocket,
  pen: Pen,
  code: Code,
  shield: Shield,
  users: Users,
} as const;

export type ServiceIconName = keyof typeof serviceIcons;
