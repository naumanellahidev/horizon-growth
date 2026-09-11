import Link from "next/link";
import {
  addOns,
  comparison,
  plans,
  pricingAssurances,
  servicePrices,
  usd,
  type CompareValue,
  type Plan,
} from "@/lib/pricing";
import { serviceBySlug } from "@/lib/services";
import { ArrowRight, Check, Rocket, Shield, Spark, Target, serviceIcons } from "./Icons";
import Reveal from "./Reveal";

const planIcons: Record<Plan["id"], typeof Target> = {
  starter: Target,
  growth: Rocket,
  premium: Spark,
};

/* ------------------------------------------------------------------ */
/* Plan cards                                                          */
/* ------------------------------------------------------------------ */

function PlanCard({ plan }: { plan: Plan }) {
  const Icon = planIcons[plan.id];

  return (
    <article className={`plan ${plan.featured ? "plan--featured" : ""}`.trim()}>
      {plan.featured && <span className="plan__badge">Most Popular</span>}

      <div className="plan__head">
        <span className="plan__icon" aria-hidden="true">
          <Icon />
        </span>
        <div>
          <h3 className="plan__name">{plan.name}</h3>
          <p className="plan__tagline">{plan.tagline}</p>
        </div>
      </div>

      <p className="plan__price">
        <span className="plan__amount">{usd(plan.price)}</span>
        <span className="plan__period">/ month</span>
      </p>
      <p className="plan__best">
        <strong>Best for:</strong> {plan.bestFor}
      </p>

      <Link
        href={`/contact?plan=${plan.id}`}
        className={`btn ${plan.featured ? "btn--light" : "btn--primary"} plan__cta`}
      >
        {plan.cta}
      </Link>

      <p className="plan__label">What&rsquo;s included</p>
      <ul className="plan__features">
        {plan.features.map((f) => (
          <li key={f}>
            <Check aria-hidden="true" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function PricingCards() {
  return (
    <div className="plan-grid">
      {plans.map((plan, i) => (
        <Reveal key={plan.id} delay={i * 90} className="plan-grid__cell">
          <PlanCard plan={plan} />
        </Reveal>
      ))}
    </div>
  );
}

export function PricingAssurances() {
  return (
    <ul className="assurances">
      {pricingAssurances.map((a) => (
        <li key={a.title}>
          <Shield aria-hidden="true" />
          <span>
            <strong>{a.title}</strong> {a.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Comparison table                                                    */
/* ------------------------------------------------------------------ */

function CompareCell({ value }: { value: CompareValue }) {
  if (value === true) {
    return (
      <span className="compare__yes">
        <Check aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="compare__no">
        <span aria-hidden="true">&mdash;</span>
        <span className="sr-only">Not included</span>
      </span>
    );
  }
  return <span className="compare__text">{value}</span>;
}

export function PlanComparison() {
  return (
    <>
      <p className="compare-hint" aria-hidden="true">
        Swipe the table sideways to compare all three plans &rarr;
      </p>
      <div className="compare-wrap" role="region" aria-label="Plan comparison" tabIndex={0}>
        <table className="compare">
          <caption className="sr-only">Feature comparison of the Starter, Growth and Premium plans</caption>
          <thead>
            <tr>
              <th scope="col" className="compare__feature-head">
                Features
              </th>
              {plans.map((p) => (
                <th scope="col" key={p.id} className={p.featured ? "is-featured" : undefined}>
                  <span className="compare__plan">{p.name.replace(" Plan", "")}</span>
                  <span className="compare__price">
                    {usd(p.price)}
                    <small>/mo</small>
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          {comparison.map((group) => (
            <tbody key={group.group}>
              <tr className="compare__group">
                <th scope="colgroup" colSpan={plans.length + 1}>
                  {group.group}
                </th>
              </tr>
              {group.rows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((v, i) => (
                    <td key={plans[i].id} className={plans[i].featured ? "is-featured" : undefined}>
                      <CompareCell value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ))}
          <tfoot>
            <tr>
              <th scope="row" />
              {plans.map((p) => (
                <td key={p.id} className={p.featured ? "is-featured" : undefined}>
                  <Link
                    href={`/contact?plan=${p.id}`}
                    className={`btn ${p.featured ? "btn--primary" : "btn--outline"} compare__cta`}
                  >
                    Choose {p.name.replace(" Plan", "")}
                  </Link>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Individual service pricing                                          */
/* ------------------------------------------------------------------ */

export function ServicePriceGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`price-grid ${compact ? "price-grid--compact" : ""}`.trim()}>
      {servicePrices.map((sp, i) => {
        const service = serviceBySlug(sp.slug);
        if (!service) return null;
        const Icon = serviceIcons[service.icon];
        const href = `/services/${service.slug}`;

        return (
          <Reveal key={sp.slug} as="article" className="price-card" delay={i * 60}>
            <div className="price-card__top">
              <span className="svc-card__icon price-card__icon" aria-hidden="true">
                <Icon />
              </span>
              <p className="price-card__from">
                <span>From</span>
                <strong>{usd(sp.from)}</strong>
                <em>{sp.unit}</em>
              </p>
            </div>
            <h3>
              <Link href={href} style={{ color: "inherit" }}>
                {service.name}
              </Link>
            </h3>
            <p className="price-card__note">{sp.note}</p>
            {!compact && (
              <ul className="price-card__list">
                {sp.includes.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            <Link href={href} className="price-card__more" aria-label={`Learn more about ${service.name}`}>
              View service <ArrowRight />
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Add-ons                                                             */
/* ------------------------------------------------------------------ */

export function AddOnGrid() {
  return (
    <ul className="addon-grid">
      {addOns.map((a) => (
        <li key={a.name} className="addon">
          <div className="addon__head">
            <h3>{a.name}</h3>
            <span className="addon__price">{a.price}</span>
          </div>
          <p>{a.text}</p>
        </li>
      ))}
    </ul>
  );
}
