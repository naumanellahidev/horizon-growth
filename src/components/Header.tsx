"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, site } from "@/lib/site";
import { ChevronDown, Phone } from "./Icons";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="header">
      <div className="wide header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} — home`}>
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 17.5l5.5-6 4 4L21 6.5" />
              <path d="M15.5 6.5H21v5.5" />
            </svg>
          </span>
          <span className="brand__text">
            <span className="brand__name">Horizon Growth</span>
            <span className="brand__sub">Digital Marketing</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <ul className="nav__list">
            {primaryNav.map((item) => (
              <li key={item.href} className="nav__item">
                <Link
                  href={item.href}
                  className="nav__link"
                  data-active={isActive(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {item.children && <ChevronDown />}
                </Link>
                {item.children && (
                  <ul className="nav__submenu">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>{child.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a className="header__phone" href={site.phoneHref}>
            <Phone />
            {site.phone}
          </a>

          <Link href="/contact" className="btn btn--primary header__cta">
            Get a Free Consultation
          </Link>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
