import { ImageResponse } from "next/og";
import { doctor } from "@/content/site";

export const alt = `${doctor.name} — ${doctor.specialty} em ${doctor.city} – ${doctor.state}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "80px 88px",
          background: "#0c2038",
          color: "#f8fafc",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, color: "#648baa", fontSize: 22, letterSpacing: 6 }}>
          <div style={{ width: 48, height: 1, background: "#648baa" }} />
          {`${doctor.specialty.toUpperCase()} · ${doctor.city.toUpperCase()} – ${doctor.state}`}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 1.02 }}>{doctor.name}</div>
          <div style={{ fontSize: 40, marginTop: 28, color: "rgba(248,250,252,0.72)", fontStyle: "italic" }}>
            Cirurgia plástica com atenção à sua individualidade.
          </div>
        </div>
        <div style={{ display: "flex", height: 1, background: "#24476b" }} />
      </div>
    ),
    size,
  );
}
