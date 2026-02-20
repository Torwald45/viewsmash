import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ViewSmash — Open Source Web Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a1a",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 180,
            height: 180,
            borderRadius: "50%",
            border: "3px solid #FFD700",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              color: "#FFD700",
              fontSize: 80,
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            ./vs
          </span>
        </div>
        <span
          style={{
            color: "white",
            fontSize: 64,
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          ViewSmash
        </span>
        <span
          style={{
            color: "#00d4ff",
            fontSize: 28,
            marginBottom: 24,
          }}
        >
          Open source web development, APIs &amp; integrations
        </span>
        <span
          style={{
            color: "#9ca3af",
            fontSize: 22,
          }}
        >
          www.viewsmash.com
        </span>
      </div>
    ),
    { ...size }
  );
}