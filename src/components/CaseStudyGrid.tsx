import Image from "next/image";
import Link from "next/link";
import { caseStudies, type CaseStudy } from "@/lib/caseStudies";
import { images } from "@/lib/images";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

export function CaseStudyCard({ item, index = 0 }: { item: CaseStudy; index?: number }) {
  const img = images[item.image];
  const href = `/case-studies/${item.slug}`;

  return (
    <Reveal as="article" className="case-card" delay={index * 80}>
      <div className="case-card__media">
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          sizes="(max-width: 720px) 100vw, (max-width: 1000px) 50vw, 33vw"
          quality={70}
        />
      </div>
      <div className="case-card__body">
        <p className="case-card__tag">{item.tag}</p>
        <h3>
          <Link href={href} style={{ color: "inherit" }}>
            {item.title}
          </Link>
        </h3>
        <p>{item.excerpt}</p>
        <Link href={href} className="case-card__more" aria-label={`Read the ${item.title} blueprint`}>
          Read the blueprint <ArrowRight />
        </Link>
      </div>
    </Reveal>
  );
}

export default function CaseStudyGrid({
  items = caseStudies,
  exclude,
}: {
  items?: CaseStudy[];
  /** Slug to leave out, used on individual case study pages. */
  exclude?: string;
}) {
  const list = exclude ? items.filter((i) => i.slug !== exclude) : items;

  return (
    <div className="case-grid">
      {list.map((item, i) => (
        <CaseStudyCard key={item.slug} item={item} index={i} />
      ))}
    </div>
  );
}
