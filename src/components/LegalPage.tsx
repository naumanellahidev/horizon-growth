import type { ReactNode } from "react";
import PageHero from "./PageHero";
import JsonLd from "./JsonLd";
import CtaBand from "./CtaBand";
import { breadcrumbSchema } from "@/lib/seo";

/**
 * Shared shell for the policy pages so they stay visually consistent with the
 * rest of the site without duplicating layout in three places.
 */
export default function LegalPage({
  title,
  intro,
  path,
  updated,
  children,
}: {
  title: string;
  intro: string;
  path: string;
  updated: string;
  children: ReactNode;
}) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        text={intro}
        image="interiorB"
        crumbs={crumbs}
      />

      <section className="section">
        <div className="content">
          <p className="muted" style={{ fontSize: "var(--fs-x-small)" }}>
            Last updated: {updated}
          </p>
          <div className="prose">{children}</div>
        </div>
      </section>

      <CtaBand
        title="Questions about this policy?"
        text="Get in touch and a member of the team will answer directly."
        image="officeModern"
      />

      <JsonLd schemas={[breadcrumbSchema(crumbs)]} />
    </>
  );
}
