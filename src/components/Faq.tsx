"use client";

import { useId, useState } from "react";
import type { Faq as FaqItem } from "@/lib/services";
import { Plus } from "./Icons";

/**
 * Accessible accordion. The first item opens by default so the section never
 * reads as an empty list of headings, and panels animate via grid-template-rows
 * so there is no fixed max-height to maintain.
 */
export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${baseId}-btn-${i}`;
        const panelId = `${baseId}-panel-${i}`;

        return (
          <div className="faq__item" key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                id={btnId}
                className="faq__btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  <Plus />
                </span>
              </button>
            </h3>
            <div
              className="faq__panel"
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              data-open={isOpen}
            >
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
