import React, { useEffect, useMemo, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

function mod(n, m) {
  return ((n % m) + m) % m;
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
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
  const intervalMs = 2500;

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
      setCenterIndex((i) => mod(i + 1, testimonials.length));
      setIsAnimating(false);
      animatingRef.current = false;
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
  // With exactly 3 testimonials, the "new entering" one equals the current left.
  const enter = left;

  const bgStyle = {
    "--bg-accent": center.accent,
  };

  return (
    <section
      className={`testimonial-section ${isAnimating ? "is-shifting" : ""}`}
      style={bgStyle}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="site-container testimonial-section__inner">
        <div className="testimonial-section__header">
          <div className="testimonial-section__label">VOICES OF INNOVATION</div>
          <h2 className="testimonial-section__title">
            BUILT BY BUILDERS.
            <br />
            <span>MENTORED BY GIANTS.</span>
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
      </div>
    </section>
  );
}

