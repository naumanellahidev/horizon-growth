import Link from "next/link";
import type { Metadata } from "next";
import { SectionHead, ServiceCard } from "@/components/ContentBlocks";
import { homeServices } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <section className="hero hero--inner">
        <div className="wide">
          <div className="hero__inner">
            <p className="eyebrow eyebrow--light" style={{ justifyContent: "center" }}>
              Error 404
            </p>
            <h1>We Could Not Find That Page</h1>
            <p className="hero__text">
              The link may be out of date or the page may have moved. Here are the places
              people usually mean to land.
            </p>
            <div className="btn-row btn-row--center">
              <Link href="/" className="btn btn--primary">
                Back to home
              </Link>
              <Link href="/contact" className="btn btn--ghost-light">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wide">
          <SectionHead center eyebrow="Popular Pages" title="Try One Of These Instead" />
          <div className="card-grid">
            {homeServices.slice(0, 3).map((s) => (
              <ServiceCard
                key={s.slug}
                href={`/services/${s.slug}`}
                name={s.name}
                blurb={s.cardBlurb}
                label={s.cardLabel}
                icon={s.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
