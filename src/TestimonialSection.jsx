import React, { useEffect, useMemo, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

function mod(n, m) {
  return ((n % m) + m) % m;
}

function hexToRgb(hex) {
  const h = (hex ?? "").replace("#", "").trim();
  if (h.length === 3) {
    const r = parseInt(h[0] + h[0], 16);
    const g = parseInt(h[1] + h[1], 16);
    const b = parseInt(h[2] + h[2], 16);
    return { r, g, b };
  }
  if (h.length === 6) {
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return { r, g, b };
  }
  return { r: 168, g: 85, b: 247 };
}

export default function TestimonialSection() {
  const testimonials = useMemo(
    () => [
      {
        id: "marcus",
        accent: "#a855f7",
        quote:
          "The level of architectural precision in the projects I saw was staggering. IMPACT isn't just a hackathon; it's a simulated crucible for high-performance engineering.",
        author: "MARCUS THORNE",
        role: "PRINCIPAL ARCH, METALOGIC",
        // Replace with real photo path/URL
        avatarUrl: "/avatars/marcus.jpg",
      },
      {
        id: "sarah",
        accent: "#c084fc",
        badge: "MENTOR CHOICE",
        quote:
          "I've judged dozens of global events. Nothing matches the kinetic energy of IMPACT. The teams don't just build MVPs; they build future infrastructure.",
        author: "SARAH JENKINS",
        role: "CTO, NEXUS DYNAMICS",
        avatarUrl: "/avatars/sarah.jpg",
      },
      {
        id: "david",
        accent: "#8b5cf6",
        quote:
          "The mentors were accessible 24/7. Having a Senior Engineer from the industry sit down and debug our logic for 2 hours changed our entire trajectory.",
        author: "DAVID CHEN",
        role: "FULL-STACK LEAD, TEAM 'NULL'",
        avatarUrl: "/avatars/david.jpg",
      },
    ],
    []
  );

  const [centerIndex, setCenterIndex] = useState(1);
  const centerIndexRef = useRef(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [bgActiveLayer, setBgActiveLayer] = useState("a"); // 'a' | 'b'
  const bgActiveLayerRef = useRef("a");
  const [bgLayerA, setBgLayerA] = useState({ accent: "#a855f7", rgb: hexToRgb("#a855f7") });
  const [bgLayerB, setBgLayerB] = useState({ accent: "#a855f7", rgb: hexToRgb("#a855f7") });
  const bgSwapRafRef = useRef(null);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);
  const animatingRef = useRef(false);
  const reduceMotion = useRef(false);
  const stageRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    reduceMotion.current = !!mq?.matches;
    const onChange = (e) => (reduceMotion.current = !!e.matches);
    mq?.addEventListener?.("change", onChange);
    return () => mq?.removeEventListener?.("change", onChange);
  }, []);

  const durationMs = 650;
  const intervalMs = 5500;

  useEffect(() => {
    centerIndexRef.current = centerIndex;
  }, [centerIndex]);

  useEffect(() => {
    bgActiveLayerRef.current = bgActiveLayer;
  }, [bgActiveLayer]);

  const crossfadeBgTo = (nextAccent) => {
    const next = { accent: nextAccent, rgb: hexToRgb(nextAccent) };
    if (reduceMotion.current) {
      setBgLayerA(next);
      setBgLayerB(next);
      setBgActiveLayer("a");
      bgActiveLayerRef.current = "a";
      return;
    }

    const inactive = bgActiveLayerRef.current === "a" ? "b" : "a";
    if (inactive === "a") setBgLayerA(next);
    else setBgLayerB(next);

    if (bgSwapRafRef.current) window.cancelAnimationFrame(bgSwapRafRef.current);
    // Ensure the new layer's CSS vars are committed before opacity crossfade.
    bgSwapRafRef.current = window.requestAnimationFrame(() => {
      setBgActiveLayer(inactive);
      bgActiveLayerRef.current = inactive;
      bgSwapRafRef.current = null;
    });
  };

  const advance = () => {
    if (animatingRef.current) return;
    if (reduceMotion.current) {
      setCenterIndex((i) => mod(i + 1, testimonials.length));
      return;
    }
    animatingRef.current = true;
    setIsAnimating(true);
  };

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      if (pausedRef.current) return;
      advance();
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isAnimating) return;
    const el = stageRef.current;
    if (!el) return;

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;

      // Change background accent exactly when the center card changes.
      const idx = centerIndexRef.current;
      const nextAccent =
        testimonials[mod(idx + 1, testimonials.length)]?.accent ?? "#a855f7";
      crossfadeBgTo(nextAccent);

      // Prevent the "push then return" effect by disabling transitions
      // for one frame while we snap cards into their new slots.
      setIsResetting(true);
      setCenterIndex((i) => mod(i + 1, testimonials.length));
      setIsAnimating(false);
      animatingRef.current = false;

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setIsResetting(false));
      });
    };

    const onEnd = (e) => {
      if (e?.target && e.target.classList?.contains("testimonial-card")) finish();
    };

    el.addEventListener("transitionend", onEnd);
    const timeout = window.setTimeout(finish, durationMs + 80);
    return () => {
      el.removeEventListener("transitionend", onEnd);
      window.clearTimeout(timeout);
    };
  }, [isAnimating, testimonials.length]);

  const left = testimonials[mod(centerIndex - 1, testimonials.length)];
  const center = testimonials[mod(centerIndex, testimonials.length)];
  const right = testimonials[mod(centerIndex + 1, testimonials.length)];
  // The entering card should be the one AFTER the right card.
  // (When there are exactly 3 items, this will equal `left` — that's fine.)
  const enter = testimonials[mod(centerIndex + 2, testimonials.length)];

  const activeAccent = center.accent;
  const activeRgb = hexToRgb(activeAccent);
  const bgStyle = {
    "--bg-accent": activeAccent,
    "--bg-r": String(activeRgb.r),
    "--bg-g": String(activeRgb.g),
    "--bg-b": String(activeRgb.b),
  };

  return (
    <section
      className={`testimonial-section ${isAnimating ? "is-shifting" : ""} ${isResetting ? "is-resetting" : ""}`}
      style={bgStyle}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`testimonial-bg ${bgActiveLayer === "a" ? "is-active" : ""}`}
        style={{
          "--layer-accent": bgLayerA.accent,
          "--layer-r": String(bgLayerA.rgb.r),
          "--layer-g": String(bgLayerA.rgb.g),
          "--layer-b": String(bgLayerA.rgb.b),
        }}
        aria-hidden="true"
      />
      <div
        className={`testimonial-bg ${bgActiveLayer === "b" ? "is-active" : ""}`}
        style={{
          "--layer-accent": bgLayerB.accent,
          "--layer-r": String(bgLayerB.rgb.r),
          "--layer-g": String(bgLayerB.rgb.g),
          "--layer-b": String(bgLayerB.rgb.b),
        }}
        aria-hidden="true"
      />

      <div className="site-container testimonial-section__inner">
        <div className="testimonial-section__header">
          <div className="testimonial-section__label">VOICES OF INNOVATION</div>
          <h2 className="testimonial-section__title">
            BUILT BY BUILDERS.
            <br />
            <span>
              <span className="testimonial-section__titleAccent">MENTORED</span> BY GIANTS.
            </span>
          </h2>
          <p className="testimonial-section__subtitle">
            Discover why the industry's brightest minds choose IMPACT as their proving ground for the next generation of
            technological breakthroughs.
          </p>
        </div>

        <div ref={stageRef} className="testimonial-stage" aria-label="Testimonials carousel">
          <div className="testimonial-glow" aria-hidden="true" />

          <div className="testimonial-track">
            <TestimonialCard t={left} slot="left" isAnimating={isAnimating} />
            <TestimonialCard t={center} slot="center" isAnimating={isAnimating} />
            <TestimonialCard t={right} slot="right" isAnimating={isAnimating} />
            <TestimonialCard t={enter} slot="enter" isAnimating={isAnimating} />
          </div>
        </div>

        <div className="testimonial-metrics" aria-label="Impact statistics">
          <div className="testimonial-metrics__item">
            <div className="testimonial-metrics__value">500+</div>
            <div className="testimonial-metrics__label">MENTORS ACTIVE</div>
          </div>
          <div className="testimonial-metrics__item">
            <div className="testimonial-metrics__value">12K</div>
            <div className="testimonial-metrics__label">TOTAL ALUMNI</div>
          </div>
          <div className="testimonial-metrics__item">
            <div className="testimonial-metrics__value">$2.5M</div>
            <div className="testimonial-metrics__label">PRIZE POOL ’24</div>
          </div>
          <div className="testimonial-metrics__item">
            <div className="testimonial-metrics__value">98%</div>
            <div className="testimonial-metrics__label">PLACEMENT RATE</div>
          </div>
        </div>
      </div>
    </section>
  );
}

