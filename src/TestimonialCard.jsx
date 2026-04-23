import React from "react";

export default function TestimonialCard({ t, slot, isAnimating }) {
  const style = {
    "--accent": t.accent,
  };

  return (
    <article
      className={[
        "testimonial-card",
        `testimonial-card--${slot}`,
        isAnimating ? "is-animating" : "",
        slot === "center" ? "is-active" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      <div className="testimonial-card__top">
        <div className="testimonial-card__quoteMark">“</div>
        {t.badge ? <div className="testimonial-card__badge">{t.badge}</div> : <div />}
      </div>

      <p className="testimonial-card__quote">{t.quote}</p>

      <div className="testimonial-card__footer">
        <img className="testimonial-card__avatar" alt="" src={t.avatarUrl} />
        <div className="testimonial-card__author">
          <div className="testimonial-card__name">{t.author}</div>
          <div className="testimonial-card__role">{t.role}</div>
        </div>
      </div>
    </article>
  );
}

