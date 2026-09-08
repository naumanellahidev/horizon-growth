"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, site } from "@/lib/site";
import { services } from "@/lib/services";
import { Close, Menu } from "./Icons";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll and support Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="burger"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {open && (
        <div className="drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-label="Site menu">
          <div className="drawer__top">
            <span className="brand__name">Horizon Growth</span>
            <button
              type="button"
              className="burger"
              style={{ display: "inline-flex" }}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              autoFocus
            >
              <Close />
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul className="drawer__list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
                <ul className="drawer__sub">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`}>{s.name}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {primaryNav
                .filter((item) => !item.href.startsWith("/services"))
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                    {item.children && (
                      <ul className="drawer__sub">
                        {item.children
                          .filter((c) => c.href !== "/services")
                          .map((child) => (
                            <li key={child.href}>
                              <Link href={child.href}>{child.label}</Link>
                            </li>
                          ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </nav>

          <div className="drawer__foot">
            <Link href="/contact" className="btn btn--primary">
              Get a Free Consultation
            </Link>
            <a href={site.phoneHref} className="btn btn--ghost-light">
              Call {site.phone}
            </a>
            <p className="drawer__contact">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
