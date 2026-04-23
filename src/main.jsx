import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import NavAndHero from "./NavAndHero";
import TimelineSection from "./TimelineSection";
import SpeakersSection from "./Speakers"
import ContestPathways from "./ContestantPathWay";
import TestimonialSection from "./TestimonialSection";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <NavAndHero />
    <TimelineSection />
    <SpeakersSection />
    <ContestPathways />
    <TestimonialSection />
  </>
);