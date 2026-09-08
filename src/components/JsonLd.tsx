/**
 * Renders one or more schema.org nodes inside a single @graph script tag.
 * Keeping every page's structured data in one graph avoids duplicate
 * declarations and lets nodes reference each other by @id.
 */
export default function JsonLd({ schemas }: { schemas: object[] }) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": schemas,
  };

  return (
    <script
      type="application/ld+json"
      // Content is generated from our own typed data, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
