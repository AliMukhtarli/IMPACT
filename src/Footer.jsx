import React, { useState } from "react";

const navLinks = {
  EXPLORE: ["HACKATHONS", "SCHEDULE", "MENTORS", "FAQ"],
  LEGAL: ["PRIVACY POLICY", "TERMS OF SERVICE", "PRESS KIT"],
};

const socialIcons = [
  {
    label: "Share",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="13" cy="2.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="13" cy="13.5" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <circle cx="3" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M4.5 7.1L11.5 3.4M4.5 8.9L11.5 12.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Email",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M1.5 5L8 9.5L14.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Code",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5 4L1 8L5 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 4L15 8L11 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.5 2.5L6.5 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

function HoverLink({ children, style, ...props }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? "#c084fc" : "rgba(255,255,255,0.45)",
        fontSize: 11,
        letterSpacing: 1.5,
        textDecoration: "none",
        transition: "color 200ms ease",
        cursor: "pointer",
        display: "block",
        ...style,
      }}
    >
      {children}
    </a>
  );
}

function SocialBtn({ icon, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: `1px solid ${hovered ? "rgba(192,132,252,0.6)" : "rgba(255,255,255,0.15)"}`,
        background: hovered ? "rgba(192,132,252,0.1)" : "transparent",
        color: hovered ? "#c084fc" : "rgba(255,255,255,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 200ms ease",
        flexShrink: 0,
      }}
    >
      {icon}
    </button>
  );
}

export default function Footer() {
  const [applyHovered, setApplyHovered] = useState(false);
  const [scheduleHovered, setScheduleHovered] = useState(false);

  return (
    <div className="impact-footer" style={{ fontFamily: "'Inter', sans-serif", background: "#0d0717" }}>

      {/* ── CTA Section ── */}
      <div
        style={{
          background: "linear-gradient(180deg, #1a0a2e 0%, #0d0717 100%)",
          textAlign: "center",
          padding: "clamp(60px, 10vw, 120px) clamp(24px, 6vw, 80px)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px, 6vw, 72px)",
            fontWeight: 900,
            letterSpacing: -5,
            textTransform: "uppercase",
            margin: "0 0 24px",
            lineHeight: 1.05,
            color: "#fff",
          }}
        >
          READY TO MAKE AN{" "}
          <span style={{ color: "#e879f9" }}>IMPACT?</span>
        </h2>

        <p
          style={{
            fontSize: "clamp(13px, 1.5vw, 16px)",
            color: "rgba(255,255,255,0.55)",
            lineHeight: 1.7,
            maxWidth: 500,
            margin: "0 auto 48px",
          }}
        >
          Join hundreds of innovators for 48 hours of intense creation, learning,
          and discovery. Limited slots available for the upcoming cohort.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <button
            onMouseEnter={() => setApplyHovered(true)}
            onMouseLeave={() => setApplyHovered(false)}
            style={{
              background: applyHovered ? "#d946ef" : "#e879f9",
              color: "#fff",
              border: "none",
              padding: "14px 36px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              transition: "background 200ms ease, transform 150ms ease",
              transform: applyHovered ? "translateY(-2px)" : "none",
              letterSpacing: 0.3,
            }}
          >
            Apply Now
          </button>

          <button
            onMouseEnter={() => setScheduleHovered(true)}
            onMouseLeave={() => setScheduleHovered(false)}
            style={{
              background: "transparent",
              color: scheduleHovered ? "#e879f9" : "rgba(255,255,255,0.8)",
              border: `1px solid ${scheduleHovered ? "rgba(232,121,249,0.6)" : "rgba(255,255,255,0.2)"}`,
              padding: "14px 36px",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 200ms ease",
              transform: scheduleHovered ? "translateY(-2px)" : "none",
              letterSpacing: 0.3,
            }}
          >
            View Schedule
          </button>
        </div>
      </div>

      {/* ── Footer ── */}
      <div
        style={{
          background: "#0a0612",
          padding: "48px clamp(24px, 6vw, 80px) 0",
          boxSizing: "border-box",
        }}
      >
        <div
          className="impact-footer__grid"
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
            gap: "clamp(24px, 4vw, 60px)",
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 800,
                color: "#fff",
                letterSpacing: 2,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              IMPACT
            </div>
            <p
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.8,
                letterSpacing: 1,
                textTransform: "uppercase",
                margin: "0 0 24px",
                maxWidth: 240,
              }}
            >
              The kinetic hub for elite developers and industry pioneers. Powered by academic excellence and technological rigor.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="12" width="16" height="4" rx="1" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
                <rect x="4" y="7" width="10" height="5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
                <path d="M7 7V5a2 2 0 014 0v2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2"/>
              </svg>
              <span
                style={{
                  fontSize: 9,
                  letterSpacing: 1.5,
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                Official Partner of Khazar University
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(navLinks).map(([heading, links]) => (
            <div key={heading}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: 2,
                  color: "rgba(247, 195, 255, 1)",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                {heading}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {links.map((link) => (
                  <HoverLink key={link} href="#">
                    {link}
                  </HoverLink>
                ))}
              </div>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 2,
                color: "rgba(255,255,255,0.5)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Contact Support
            </div>
            <a
              href="mailto:hello@impacthack.com"
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#fff",
                textDecoration: "none",
                display: "block",
                marginBottom: 24,
                transition: "color 200ms",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e879f9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              hello@impacthack.com
            </a>
            <div style={{ display: "flex", gap: 10 }}>
              {socialIcons.map((s) => (
                <SocialBtn key={s.label} icon={s.icon} label={s.label} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            © 2024 IMPACT KINETIC MONOLITH. ALL RIGHTS RESERVED.
          </span>
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: 0.5,
              textTransform: "uppercase",
            }}
          >
            VERSION 4.0.2 // STABLE
          </span>
        </div>
      </div>
    </div>
  );
}