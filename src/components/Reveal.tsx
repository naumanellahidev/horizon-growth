"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  /** Stagger in milliseconds, useful for grids. */
  delay?: number;
  as?: ElementType;
  className?: string;
};

/**
 * Subtle scroll-reveal wrapper.
 *
 * Content is rendered visible on the server and only hidden once the client has
 * mounted and confirmed the element is below the fold, so a failed hydration,
 * a missing IntersectionObserver or reduced-motion settings can never leave a
 * section permanently invisible. A timeout backstop reveals anything the
 * observer has not reported on.
 */
export default function Reveal({ children, delay = 0, as, className = "" }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");
  const nodeRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Callback ref: fires whenever the element attaches, regardless of the tag
  // that `as` resolves to.
  const setNode = useCallback((node: HTMLElement | null) => {
    nodeRef.current = node;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      setState("shown");
      return;
    }

    // Already on screen at mount: leave it visible rather than flashing it out.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setState("shown");
      return;
    }

    setState("hidden");

    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    observerRef.current = observer;

    // Backstop: never leave content hidden if the observer stays silent.
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setState("shown"), 2500);
  }, []);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Tag
      ref={setNode}
      className={`reveal ${className}`.trim()}
      data-shown={state === "hidden" ? "false" : "true"}
      style={delay && state === "hidden" ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
