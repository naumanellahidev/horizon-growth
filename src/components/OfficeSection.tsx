import Image from "next/image";
import Link from "next/link";
import { images, officeGallery } from "@/lib/images";
import { site } from "@/lib/site";
import { SectionHead } from "./ContentBlocks";
import Reveal from "./Reveal";

/**
 * Split section: copy and CTA on the left, a 3 x 2 photo gallery on the right.
 * Repeated near the foot of the main marketing pages.
 */
export default function OfficeSection() {
  return (
    <section className="section section--tint">
      <div className="wide split">
        <div>
          <SectionHead
            eyebrow="Inside Horizon Growth"
            title="Come See How We Work"
            text={`We are based in Jackson Heights, Queens, and we work with clients across New York and the rest of the United States. If you are local, we would rather meet you in person than send another deck.`}
            as="h2"
          />
          <p className="muted" style={{ fontSize: "var(--fs-small)" }}>
            {site.address.street}, {site.address.locality}, {site.address.region}{" "}
            {site.address.postalCode}
            <br />
            {site.hours}
          </p>
          <div className="btn-row" style={{ marginTop: "var(--sp-50)" }}>
            <Link href="/contact" className="btn btn--primary">
              Book a visit or a call
            </Link>
          </div>
        </div>

        <Reveal className="gallery">
          {officeGallery.map((key) => {
            const img = images[key];
            return (
              <div className="gallery__item" key={key}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 720px) 45vw, 20vw"
                  quality={65}
                />
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
