import Image from "next/image";
import Link from "next/link";
import { images, type ImageKey } from "@/lib/images";
import { Check, Clock, MapPin } from "./Icons";

export type Crumb = { name: string; path: string };

function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => (
          <li key={item.path}>
            {i === items.length - 1 ? (
              <span aria-current="page">{item.name}</span>
            ) : (
              <Link href={item.path}>{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

type Props = {
  /** Rendered as the page H1. */
  title: string;
  eyebrow?: string;
  /** Short bolded line under the H1. */
  subtitle?: string;
  text?: string;
  image: ImageKey;
  crumbs?: Crumb[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Trust strip under the buttons. Only shown on the home page hero. */
  meta?: string[];
  /** Home page hero is taller than inner page heroes. */
  variant?: "home" | "inner";
  /** Home hero is above the fold, so its image should not be lazy loaded. */
  priority?: boolean;
};

export default function PageHero({
  title,
  eyebrow,
  subtitle,
  text,
  image,
  crumbs,
  primaryCta,
  secondaryCta,
  meta,
  variant = "inner",
  priority = false,
}: Props) {
  const img = images[image];
  // "Digital Marketing Agency · Queens, New York" -> two parts, so the home
  // badge can drop the separator and stack cleanly on narrow screens.
  const eyebrowParts = eyebrow?.split(" · ") ?? [];

  return (
    <section className={`hero hero--${variant}`}>
      <div className="hero__bg">
        <Image
          src={img.src}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          quality={70}
          style={{ objectFit: "cover" }}
          aria-hidden="true"
        />
      </div>

      <div className="wide">
        <div className="hero__inner">
          {crumbs && <Breadcrumbs items={crumbs} />}
          {eyebrow && variant === "home" && (
            <p className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              <span className="hero__badge-text">
                {eyebrowParts.map((part, i) => (
                  <span key={part}>
                    {i > 0 && <span className="hero__badge-sep"> · </span>}
                    <span className="hero__badge-part">{part}</span>
                  </span>
                ))}
              </span>
            </p>
          )}
          {eyebrow && variant === "inner" && (
            <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>{eyebrow}</p>
          )}
          <h1>{title}</h1>
          {subtitle && <p className="hero__sub">{subtitle}</p>}
          {text && <p className="hero__text">{text}</p>}

          {(primaryCta || secondaryCta) && (
            <div className="btn-row btn-row--center">
              {primaryCta && (
                <Link href={primaryCta.href} className="btn btn--primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn btn--ghost-light">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {meta && (
            <p className="hero__meta">
              <span><MapPin /> {meta[0]}</span>
              <span><Clock /> {meta[1]}</span>
              <span><Check /> {meta[2]}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
