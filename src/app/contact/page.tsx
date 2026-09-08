import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import OfficeSection from "@/components/OfficeSection";
import { SectionHead } from "@/components/ContentBlocks";
import { Clock, Mail, MapPin, Phone } from "@/components/Icons";
import { breadcrumbSchema, buildMetadata, faqSchema } from "@/lib/seo";
import { site, socials } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Our Queens, NY Digital Marketing Agency",
  description: `Talk to ${site.name} about SEO, PPC, web design or conversion optimization. Call ${site.phone}, email ${site.email}, or request a free consultation.`,
  path: "/contact",
});

const contactFaqs = [
  {
    q: "What happens after I get in touch?",
    a: "We reply within one business day to arrange a 30-minute call. Before it we will have looked at your website and whatever public data we can see, so the conversation starts with something useful rather than a blank page.",
  },
  {
    q: "Is the consultation really free?",
    a: "Yes, and there is no obligation attached. We would rather spend thirty minutes finding out we are not the right fit than have you six weeks into an engagement that was never going to work.",
  },
  {
    q: "What should I have ready for the call?",
    a: "Nothing formal. If you can share access to your analytics and ad accounts beforehand we can be far more specific, but it is not a requirement for a first conversation.",
  },
  {
    q: "Do you work with businesses outside New York?",
    a: "Yes. We are based in Queens and we work with clients across the United States. Everything except the in-person meetings works the same way remotely.",
  },
];

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About What You Are Trying To Grow"
        subtitle="Free 30-minute consultation, no obligation"
        text="Tell us what is working, what is not, and what you would like the next twelve months to look like. We reply within one business day."
        image="clientMeeting"
        crumbs={crumbs}
        priority
      />

      <section className="section">
        <div className="wide contact-grid">
          <div>
            <SectionHead
              eyebrow="Reach Us Directly"
              title="Prefer To Skip The Form?"
              text="Call, email or message us — whichever suits. You will reach a person, not a queue."
            />

            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-card__icon" aria-hidden="true"><Phone /></span>
                <div>
                  <h3>Call us</h3>
                  <p><a href={site.phoneHref}>{site.phone}</a></p>
                  <p style={{ fontSize: "var(--fs-x-small)" }}>{site.hours}</p>
                </div>
              </div>

              <div className="contact-card">
                <span className="contact-card__icon" aria-hidden="true"><Mail /></span>
                <div>
                  <h3>Email us</h3>
                  <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
                  <p style={{ fontSize: "var(--fs-x-small)" }}>
                    Replies within {site.responseTime.toLowerCase()}
                  </p>
                </div>
              </div>

              <div className="contact-card">
                <span className="contact-card__icon" aria-hidden="true"><MapPin /></span>
                <div>
                  <h3>Visit the office</h3>
                  <address className="footer__addr" style={{ color: "var(--muted)" }}>
                    {site.address.street}
                    <br />
                    {site.address.locality}, {site.address.region} {site.address.postalCode}
                  </address>
                  <p style={{ fontSize: "var(--fs-x-small)" }}>By appointment</p>
                </div>
              </div>

              <div className="contact-card">
                <span className="contact-card__icon" aria-hidden="true"><Clock /></span>
                <div>
                  <h3>Service area</h3>
                  <p>
                    Queens, Brooklyn, Manhattan, The Bronx, Staten Island and Long Island —
                    plus clients across the United States.
                  </p>
                </div>
              </div>
            </div>

            <p className="muted" style={{ fontSize: "var(--fs-small)", marginTop: "var(--sp-50)" }}>
              You can also find us on{" "}
              {socials
                .filter((s) => s.href.startsWith("http") && s.icon !== "whatsapp")
                .map((s, i, arr) => (
                  <span key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                    {i < arr.length - 1 ? ", " : "."}
                  </span>
                ))}
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wide">
          <div className="section-head">
            <p className="eyebrow">Before You Write</p>
            <h2>Contact FAQs</h2>
          </div>
          <Faq items={contactFaqs} />
        </div>
      </section>

      <OfficeSection />

      <JsonLd schemas={[faqSchema(contactFaqs), breadcrumbSchema(crumbs)]} />
    </>
  );
}
