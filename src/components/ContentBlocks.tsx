import Image from "next/image";
import Link from "next/link";
import { images, type ImageKey } from "@/lib/images";
import { ArrowRight, Check, serviceIcons, type ServiceIconName } from "./Icons";
import Reveal from "./Reveal";

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */

export function SectionHead({
  eyebrow,
  title,
  text,
  center = false,
  light = false,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
  as?: "h2" | "h3";
}) {
  return (
    <div className={`section-head ${center ? "section-head--center" : ""}`.trim()}>
      {eyebrow && <p className={`eyebrow ${light ? "eyebrow--light" : ""}`.trim()}>{eyebrow}</p>}
      <Tag>{title}</Tag>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Service card grid (home page 3 x 2)                                 */
/* ------------------------------------------------------------------ */

export function ServiceCard({
  href,
  name,
  blurb,
  label,
  icon,
}: {
  href: string;
  name: string;
  blurb: string;
  label: string;
  icon: ServiceIconName;
}) {
  const Icon = serviceIcons[icon];

  return (
    <article className="svc-card">
      <span className="svc-card__icon" aria-hidden="true">
        <Icon />
      </span>
      <h3>
        <Link href={href} style={{ color: "inherit" }}>
          {name}
        </Link>
      </h3>
      <p>{blurb}</p>
      <div className="svc-card__foot">
        <span className="svc-card__label">{label}</span>
        <Link href={href} className="arrow-btn" aria-label={`Learn more about ${name}`}>
          <ArrowRight />
        </Link>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Benefit cards                                                       */
/* ------------------------------------------------------------------ */

export function BenefitGrid({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="benefit-grid">
      {items.map((item, i) => (
        <Reveal key={item.title} as="article" className="benefit" delay={i * 70}>
          <span className="benefit__num" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Checklist                                                           */
/* ------------------------------------------------------------------ */

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Alternating image / text rows                                       */
/* ------------------------------------------------------------------ */

export function FeatureRows({
  items,
  numbered = false,
}: {
  items: { title: string; text: string; image: ImageKey }[];
  numbered?: boolean;
}) {
  return (
    <div>
      {items.map((item, i) => {
        const img = images[item.image];
        return (
          <Reveal
            key={item.title}
            as="article"
            className={`feature-row ${i % 2 === 1 ? "feature-row--flip" : ""}`.trim()}
          >
            <div>
              {numbered && (
                <span className="feature-row__step">Step {String(i + 1).padStart(2, "0")}</span>
              )}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <div className="feature-row__media">
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                sizes="(max-width: 1000px) 100vw, 50vw"
                quality={72}
              />
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Platform / partner strip                                            */
/* ------------------------------------------------------------------ */

const platformsRowOne = [
  "Google Ads",
  "Google Analytics 4",
  "Google Search Console",
  "Meta Ads",
  "Microsoft Ads",
];
const platformsRowTwo = [
  "Shopify",
  "WordPress",
  "HubSpot",
  "Klaviyo",
  "Semrush",
];

export function PlatformStrip() {
  return (
    <div className="logo-rows">
      {[platformsRowOne, platformsRowTwo].map((row, ri) => (
        <div className="logo-row" key={ri}>
          {row.map((name) => (
            <span className="logo-chip" key={name}>
              {name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stats band                                                          */
/* ------------------------------------------------------------------ */

export function StatsBand({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="stats">
      {items.map((s) => (
        <div className="stat" key={s.label}>
          <div className="stat__value">{s.value}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Values                                                              */
/* ------------------------------------------------------------------ */

export function ValueGrid({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="value-grid">
      {items.map((v, i) => (
        <Reveal key={v.title} as="article" className="value" delay={i * 70}>
          <h3>{v.title}</h3>
          <p>{v.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
