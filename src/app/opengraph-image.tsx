import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — Digital Marketing Agency in Queens, New York`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card. Generated at build time as a PNG so it renders correctly
 * on every platform, and applied automatically to every route that does not
 * define its own.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0b1f3a 0%, #103a72 55%, #1668e3 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "18px",
              background: "#1668e3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: 800,
            }}
          >
            H
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "34px", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Horizon Growth Inc
            </span>
            <span style={{ fontSize: "20px", color: "#9ec8ff", letterSpacing: "0.12em" }}>
              DIGITAL MARKETING AGENCY
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: "950px",
            }}
          >
            Turning search demand into booked revenue.
          </div>
          <div style={{ fontSize: "28px", color: "#bcd8ff" }}>
            SEO · Google Ads · Web Design · Social · CRO
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "24px",
            color: "#9ec8ff",
            borderTop: "2px solid rgba(255,255,255,0.2)",
            paddingTop: "28px",
          }}
        >
          <span>Queens, New York · Serving the USA</span>
          <span>horizongrowth.us</span>
        </div>
      </div>
    ),
    size,
  );
}
