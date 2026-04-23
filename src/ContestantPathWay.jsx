import React from "react";

const categories = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "Master the art of visual storytelling and user-centric architecture to create interfaces that feel intuitive and powerful.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M8 28L20 10M20 10L24 18M20 10L14 14" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="28" r="3" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Front-end Development",
    description:
      "Construct highly performant, accessible, and responsive visual logic using the latest framework standards.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M10 18L6 14L10 10" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 18L30 14L26 10" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 8L16 28" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Back-end Development",
    description:
      "Engineer scalable architectures and secure data pipelines that form the backbone of modern digital ecosystems.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <ellipse cx="18" cy="11" rx="10" ry="4" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
        <path d="M8 11v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
        <path d="M8 18v7c0 2.2 4.5 4 10 4s10-1.8 10-4v-7" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Mobile Development",
    description:
      "Deploy high-impact mobile solutions with seamless native integration and optimized user flows.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="11" y="4" width="14" height="28" rx="3" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5"/>
        <circle cx="18" cy="28" r="1.5" fill="rgba(255,255,255,0.25)"/>
        <path d="M15 8h6" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const stats = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <polygon points="9,2 11,7 17,7 12,11 14,17 9,13 4,17 6,11 1,7 7,7" fill="rgba(180,100,255,0.9)"/>
      </svg>
    ),
    label: "HIGH INTENSITY",
    sub: "48 HOUR SPRINT",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="6" cy="7" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/>
        <circle cx="12" cy="7" r="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/>
        <path d="M1 16c0-3 2-4 5-4M17 16c0-3-2-4-5-4M6 12c1.5-1 3.5-1 5 0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    label: "COLLABORATIVE",
    sub: "3–5 MEMBER TEAMS",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3"/>
        <path d="M9 5v4l3 2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    label: "INDUSTRY PRIZES",
    sub: "$10,000+ TOTAL FUND",
  },
];

export default function ContestPathways() {
  return (
    <div
      style={{
        background: "#0d0d0d",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        padding: "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 80px)",
        boxSizing: "border-box",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: "clamp(40px, 6vw, 72px)",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: 4,
                color: "#b06aff",
                textTransform: "uppercase",
                margin: "0 0 12px",
                fontWeight: 500,
              }}
            >
              Categories
            </p>
            <h2
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                fontWeight: 900,
                lineHeight: 0.95,
                margin: 0,
                letterSpacing: -1,
                textTransform: "uppercase",
              }}
            >
              CONTEST
              <br />
              PATHWAYS
            </h2>
          </div>

          <p
            style={{
              fontSize: "clamp(12px, 1.3vw, 14px)",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              maxWidth: 280,
              margin: 0,
              alignSelf: "flex-end",
              textAlign: "right",
            }}
          >
            Bridging the gap between theoretical excellence
            <br />
            and industry-standard production requirements.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          {categories.map((cat, i) => (
            <div
              key={i}
              style={{
                background: "#1a1a1a",
                borderRadius: 12,
                padding: "20px 20px 24px",
                display: "flex",
                flexDirection: "column",
                minHeight: 280,
                boxSizing: "border-box",
              }}
            >
              {/* Number + icon */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 16,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: 1,
                    fontWeight: 500,
                  }}
                >
                  {cat.number} //
                </span>
                {cat.icon}
              </div>

              {/* Title */}
              <div
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#fff",
                  marginBottom: 16,
                }}
              >
                {cat.title}
              </div>

              {/* Spacer */}
              <div style={{ flex: 1 }} />

              {/* Description */}
              <p
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.65,
                  margin: "0 0 20px",
                }}
              >
                {cat.description}
              </p>

              {/* Purple line */}
              <div
                style={{
                  width: 32,
                  height: 2.5,
                  background: "#b06aff",
                  borderRadius: 2,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "clamp(24px, 5vw, 60px)",
          flexWrap: "wrap",
          marginTop: "clamp(40px, 6vw, 72px)",
          alignItems: "center",
        }}
      >
        {stats.map((st, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {st.icon}
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 1.5,
                  color: "#fff",
                }}
              >
                {st.label}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: 1,
                  marginTop: 2,
                }}
              >
                {st.sub}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}