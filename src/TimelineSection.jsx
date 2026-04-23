import React from "react";

const days = [
  {
    date: "XX04",
    year: "2026",
    events: [
      {
        tag: "Intro",
        tagColor: "#555",
        time: "7:00 AM",
        title: "First impact",
        venue: "Venue: Marble Hall",
        bg: "#2a2a2a",
      },
      {
        tag: "Panel Discussion",
        tagColor: "#7c3aed",
        time: "7:00 AM",
        title: "ICPC",
        venue: "Venue: Marble Hall",
        bg: "#5b21b6",
      },
      {
        tag: "Panel Discussion",
        tagColor: "#7c3aed",
        time: "7:00 AM",
        title: "Vibe Coding",
        venue: "Venue: Marble Hall",
        bg: "#6d28d9",
      },
      {
        tag: "Contest",
        tagColor: "#dc2626",
        time: "7:00 AM",
        title: "Main Contest",
        venue: "Venue: 401N, 402N",
        bg: "#7f1d1d",
      },
      {
        tag: "Panel Discussion",
        tagColor: "#7c3aed",
        time: "7:00 AM",
        title: "Vibe Coding",
        venue: "Venue: Marble Hall",
        bg: "#5b21b6",
      },
    ],
  },
  {
    date: "XX04",
    year: "2026",
    events: [
      {
        tag: "Intro",
        tagColor: "#555",
        time: "7:00 AM",
        title: "First impact",
        venue: "Venue: Marble Hall",
        bg: "#2a2a2a",
      },
      {
        tag: "Panel Discussion",
        tagColor: "#7c3aed",
        time: "7:00 AM",
        title: "ICPC",
        venue: "Venue: Marble Hall",
        bg: "#5b21b6",
      },
      {
        tag: "Panel Discussion",
        tagColor: "#7c3aed",
        time: "7:00 AM",
        title: "Vibe Coding",
        venue: "Venue: Marble Hall",
        bg: "#6d28d9",
      },
      {
        tag: "Contest",
        tagColor: "#dc2626",
        time: "7:00 AM",
        title: "Main Contest",
        venue: "Venue: 401N, 402N",
        bg: "#7f1d1d",
      },
      {
        tag: "Panel Discussion",
        tagColor: "#7c3aed",
        time: "7:00 AM",
        title: "Vibe Coding",
        venue: "Venue: Marble Hall",
        bg: "#5b21b6",
      },
    ],
  },
];

export default function TimelineSection() {
  return (
    <div className="timeline-section">
      <div className="site-container">

        {/* Section Label */}
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: "#111", textTransform: "uppercase", margin: "0 0 40px" }}>
          II.&nbsp; Time Line
        </p>

        {days.map((day, di) => (
          <div key={di} style={{ marginBottom: di < days.length - 1 ? 48 : 0 }}>

            {/* Row */}
            <div className="timeline-row">

              {/* Date label */}
              <div className="timeline-date">
                <div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1, color: "#111" }}>{day.date}</div>
                <div style={{ fontSize: 38, fontWeight: 900, lineHeight: 1, color: "#111" }}>{day.year}</div>
              </div>

              {/* Timeline + Cards */}
              <div style={{ flex: 1, minWidth: 0 }}>

              {/* Dots line */}
              <div className="timeline-dots-scroll" style={{ marginBottom: 12 }}>
                <div style={{ display: "flex", alignItems: "center", minWidth: 520 }}>
                  {day.events.map((_, i) => (
                    <React.Fragment key={i}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", border: "2px solid #aaa", background: "#f0eef4", flexShrink: 0 }} />
                      {i < day.events.length - 1 && (
                        <div style={{ flex: 1, height: 1.5, background: "#ccc" }} />
                      )}
                    </React.Fragment>
                  ))}
                  {/* trailing line + dot */}
                  <div style={{ flex: 1, height: 1.5, background: "#ccc" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", border: "2px solid #aaa", background: "#f0eef4", flexShrink: 0 }} />
                </div>
              </div>

              {/* Cards */}
              <div className="timeline-cards-frame">
                <div className="timeline-cards">
                  {day.events.map((ev, ei) => (
                    <div key={ei} style={{ background: ev.bg, borderRadius: 12, padding: "10px 12px", minHeight: 90, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                        <span style={{ background: ev.tagColor, color: "#fff", fontSize: 9, fontWeight: 600, padding: "2px 8px", borderRadius: 20 }}>
                          {ev.tag}
                        </span>
                        <span style={{ fontSize: 9, color: "rgba(255,255,255,0.6)" }}>{ev.time}</span>
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{ev.title}</div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{ev.venue}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

