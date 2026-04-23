import React from "react";
import JoeBidenImage from "./image/JoeBiden.svg";
import FarizHesenliImage from "./image/FarizHesenli.svg";
import DarioAmodeiImage from "./image/DarioAmodei.svg";
import FaridOsmanovImage from "./image/FaridOsmanov.svg";

const speakers = [
  {
    name: "Joe Biden",
    role: "AI Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    linkedin: "#",
    image: JoeBidenImage,
    imagePosition: "center top",
    layout: "left",
  },
  {
    name: "Fariz Hasanli",
    role: "ICPC coach",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    linkedin: "#",
    image: FarizHesenliImage,
    imagePosition: "20% center",
    layout: "center",
  },
  {
    name: "Dario Amodei",
    role: "Anthropic CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    descShiftLeftPx: 450,
    linkedin: "#",
    image: DarioAmodeiImage,
    imagePosition: "center top",
    layout: "left",
  },
  {
    name: "Farid Osmanov",
    role: "Idda CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    linkedin: "#",
    image: FaridOsmanovImage,
    imagePosition: "center top",
    layout: "right",
  },
];

const overlay = "rgba(90, 30, 140, 0.65)";

const btnStyle = {
  background: "#fff",
  color: "#111",
  border: "none",
  padding: "6px 20px",
  borderRadius: 20,
  fontSize: 12,
  fontWeight: 600,
  cursor: "pointer",
  whiteSpace: "nowrap",
};

const descStyle = {
  fontSize: 12,
  color: "rgba(255,255,255,0.8)",
  lineHeight: 1.65,
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  maxWidth: 280,
};

export default function SpeakersSection() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#f0eef4",
        paddingBottom: 48,
        boxSizing: "border-box",
      }}
    >
      {/* Container */}
      <div
        style={{
          maxWidth: 1250,
          margin: "0 auto",
          padding: "0 32px",
          boxSizing: "border-box",
        }}
      >
        {/* Section title */}
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            color: "#111",
            textTransform: "uppercase",
            margin: "0",
            padding: "48px 0 32px 0",
          }}
        >
          III.&nbsp; Speakers
        </p>

        {speakers.map((sp, i) => (
          <div
            key={i}
            style={{
              position: "relative",
              height: 220,
              overflow: "hidden",
              marginBottom: 4,
              background: "#3b0764",
              boxSizing: "border-box",
              borderRadius: 8,
            }}
          >
            {/* Background image */}
            {sp.image && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${sp.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: sp.imagePosition || "center center",
                  backgroundRepeat: "no-repeat",
                  filter: "grayscale(100%)",
                  zIndex: 0,
                }}
              />
            )}

            {/* Purple overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: overlay,
                zIndex: 1,
              }}
            />

            {/* ── LEFT layout ── */}
            {sp.layout === "left" && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  padding: "20px 28px",
                  boxSizing: "border-box",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gridTemplateRows: "1fr auto",
                }}
              >
                <div style={{ gridColumn: 1, gridRow: 1, alignSelf: "start" }}>
                  <div
                    style={{
                      fontSize: "clamp(24px, 3.5vw, 46px)",
                      fontWeight: 800,
                      color: "#fff",
                      lineHeight: 1.05,
                      letterSpacing: -0.5,
                    }}
                  >
                    {sp.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.4vw, 16px)",
                      color: "rgba(255,255,255,0.85)",
                      marginTop: 5,
                    }}
                  >
                    {sp.role}
                  </div>
                </div>

                <div style={{ gridColumn: 2, gridRow: 1 }} />

                <div style={{ gridColumn: 1, gridRow: 2, alignSelf: "end" }}>
                  <button onClick={() => window.open(sp.linkedin, "_blank")} style={btnStyle}>
                    LinkedIn
                  </button>
                </div>

                <div style={{ gridColumn: 2, gridRow: 2, alignSelf: "end", textAlign: "right", marginRight: "clamp(10px, 5vw, 50px)"}}>
                  <div
                    className="speaker-desc speaker-desc--right"
                    style={{ ...descStyle, "--desc-shift-left": `${sp.descShiftLeftPx ?? 0}px` }}
                  >
                    {sp.description}
                  </div>
                </div>
              </div>
            )}

            {/* ── CENTER layout (Fariz) ── */}
            {sp.layout === "center" && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  padding: "20px 28px",
                  boxSizing: "border-box",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gridTemplateRows: "1fr auto",
                }}
              >
                
                <div
                  style={{
                    gridColumn: "1 / 3",
                    gridRow: 1,
                    alignSelf: "start",
                    textAlign: "center",
                    paddingLeft: "12%",
                  }}
                >
                  <div
                    style={{
                      fontSize: "clamp(24px, 3.5vw, 46px)",
                      fontWeight: 800,
                      color: "#fff",
                      lineHeight: 1.05,
                      letterSpacing: -0.5,
                    }}
                  >
                    {sp.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.4vw, 16px)",
                      color: "rgba(255,255,255,0.85)",
                      marginTop: 5,
                    }}
                  >
                    {sp.role}
                  </div>
                </div>

                <div style={{ gridColumn: 1, gridRow: 2, alignSelf: "end" }}>
                  <button onClick={() => window.open(sp.linkedin, "_blank")} style={btnStyle}>
                    LinkedIn
                  </button>
                </div>

                <div style={{ gridColumn: 2, gridRow: 2, alignSelf: "end", textAlign: "right" }}>
                  <div style={descStyle}>{sp.description}</div>
                </div>
              </div>
            )}

            {/* ── RIGHT layout (Farid) ── */}
            {sp.layout === "right" && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 2,
                  padding: "20px 28px",
                  boxSizing: "border-box",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gridTemplateRows: "1fr auto",
                }}
              >
                <div style={{ gridColumn: 1, gridRow: 1 }} />

                <div style={{ gridColumn: 2, gridRow: 1, alignSelf: "start", textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "clamp(24px, 3.5vw, 46px)",
                      fontWeight: 800,
                      color: "#fff",
                      lineHeight: 1.05,
                      letterSpacing: -0.5,
                    }}
                  >
                    {sp.name}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(12px, 1.4vw, 16px)",
                      color: "rgba(255,255,255,0.85)",
                      marginTop: 5,
                    }}
                  >
                    {sp.role}
                  </div>
                </div>

                <div style={{ gridColumn: 1, gridRow: 2, alignSelf: "end", textAlign: "left" }}>
                  <div style={descStyle}>{sp.description}</div>
                </div>

                <div style={{ gridColumn: 2, gridRow: 2, alignSelf: "end", textAlign: "right" }}>
                  <button onClick={() => window.open(sp.linkedin, "_blank")} style={btnStyle}>
                    LinkedIn
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}