import Link from "next/link";
import { footerLegalNav, site, socials } from "@/lib/site";
import { services } from "@/lib/services";
import { socialIcons } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wide">
        <div className="footer__top">
          <div>
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

            <p className="footer__intro" style={{ marginTop: "1.25rem" }}>
              Horizon Growth Inc is a digital marketing agency based in Jackson Heights,
              Queens, working with businesses across New York City and the wider United
              States on search, paid media, web and conversion programs.
            </p>

            <ul className="socials">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      {...(s.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4>Services</h4>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/services">All Services</Link></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>New York Office</h4>
              <address className="footer__addr">
                <strong>Queens, NY</strong>
                {site.address.street}
                <br />
                {site.address.locality}, {site.address.region} {site.address.postalCode}
                <br />
                <a href={site.phoneHref}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                <span style={{ display: "block", marginTop: "0.5rem" }}>{site.hours}</span>
              </address>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p style={{ margin: 0 }}>
            &copy; {year} {site.name} &ndash; Digital Marketing Agency in Queens, New York.
          </p>
          <ul className="footer__legal">
            {footerLegalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
