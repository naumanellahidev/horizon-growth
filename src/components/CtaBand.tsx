import Image from "next/image";
import Link from "next/link";
import { images, type ImageKey } from "@/lib/images";
import { site } from "@/lib/site";

/**
 * Full-bleed conversion banner. Placed once near the foot of every page so the
 * primary call to action is always within reach without repeating it endlessly.
 */
export default function CtaBand({
  title = "Let's build your growth plan",
  text = "Tell us what you are trying to grow and we will come back with a candid assessment and a clear next step. No pressure, no jargon.",
  image = "officeModern",
  primaryLabel = "Get a Free Consultation",
  primaryHref = "/contact",
  showPhone = true,
}: {
  title?: string;
  text?: string;
  image?: ImageKey;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
}) {
  const img = images[image];

  return (
    <section className="cta-band">
      <div className="cta-band__bg">
        <Image
          src={img.src}
          alt=""
          fill
          sizes="100vw"
          quality={60}
          style={{ objectFit: "cover" }}
          aria-hidden="true"
        />
      </div>
      <div className="wide cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link href={primaryHref} className="btn btn--light">
            {primaryLabel}
          </Link>
          {showPhone && (
            <a href={site.phoneHref} className="btn btn--ghost-light">
              Call {site.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
