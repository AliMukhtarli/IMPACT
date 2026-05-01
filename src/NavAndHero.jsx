import React from "react";
import { useState } from "react";




export default function NavAndHero() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      fontFamily: "'Inter', sans-serif",
      background: "#1a0a2e",
      color: "#ffffff",
      width: "100%",          // ❗ 100vw yox
      margin: 0,
      padding: 0,
      boxSizing: "border-box"
    }}>
      
      {/* Navbar */}
      <nav className="impact-nav">
        <div className="site-container impact-nav-inner">
          <span style={{ fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>D/</span>

          <div className="impact-nav-actions">
          
            <button style={{ background: "#fff", color: "#1a0a2e", border: "none", padding: "6px 18px", borderRadius: 20, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
              RSVP
            </button>

            <button style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "6px 18px", borderRadius: 20, fontSize: 12, cursor: "pointer" }}>
              Contest
            </button>

            {/* HAMBURGER → X */}
            <div 
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 24,
                height: 24,
                cursor: "pointer",
                position: "relative"
              }}
            >
              <span style={{
                position: "absolute",
                width: "100%",
                height: 2,
                background: "#fff",
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(45deg)" : "translateY(-4px)"
              }} />

              <span style={{
                position: "absolute",
                width: "100%",
                height: 2,
                background: "#fff",
                transition: "all 0.3s ease",
                transform: isOpen ? "rotate(-45deg)" : "translateY(4px)"
              }} />
            </div>

          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="impact-hero">
        
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #2d1057 0%, #1a0a2e 60%, #3a1a6e 100%)" }} />

        <div className="site-container impact-hero-inner">
          <h1 className="impact-hero-title" style={{ color: "rgb(255, 255, 255)" }}>
            IMPACT
          </h1>

          <div className="impact-hero-tagline">
            <span style={{ color: "rgb(255, 255, 255)" }}>
              Where ideas make movements
            </span>

            <span style={{ color: "rgb(255, 255, 255)" }}>
              Ready for
            </span>
          </div>
        </div>

      </div>

      {/* Content */}
      <div style={{ background: "#000000", color: "#fff", padding: "32px 24px 40px" }}>
        <div className="site-container">
          <p style={{ fontSize: 10, letterSpacing: 2, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", margin: "0 0 20px" }}>
            I. About Impact
          </p>

          <p style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 700, lineHeight: 1.25, margin: "0 0 28px" }}>
            Azerbaijani students are already building. Impact just puts them in the same room as the people who've done it
             — for a day of real conversations and a live product challenge. Less theory, more reps.
          </p>

          <div className="impact-dividerRow" aria-hidden="true">
            <div className="impact-content-divider impact-content-divider--left" />
            <div className="impact-content-divider impact-content-divider--right" />
          </div>

          <div className="impact-quoteRow">
            <span className="impact-quoteMark" aria-hidden="true">“</span>

            <div className="impact-quoteBox">
              <p style={{ fontSize: 12.5, lineHeight: 1.75, color: "rgba(255,255,255,0.65)", textAlign: "justify", margin: 0 }}>
                Impact doesn't bridge a gap that doesn't exist. It just turns up the heat. Desinftec is bringing real founders,
                real conversations, and a live product challenge to Khazar University, giving teams a dedicated day to go head to head
                with industry and each other. This is not about closing a distance between education and execution — that distance is
                already shrinking. This is about accelerating what's already in motion — and finding out who rises when the pressure is
                real.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      

    </div>

    
    
  );
  
}