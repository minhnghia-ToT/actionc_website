"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/banner1.jpg",
    label: "STORIES THAT MOVE YOU",
  },
  {
    image: "/images/banner2.jpg",
    label: "CREATIVE VISIONS. REAL IMPACT.",
  },
  {
    image: "/images/banner3.jpg",
    label: "EVERY FRAME TELLS A STORY",
  },
];

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`hero-background ${
            index === activeSlide ? "active" : ""
          }`}
          style={{ backgroundImage: `url("${slide.image}")` }}
          aria-hidden="true"
        />
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        {/* <p className="hero-eyebrow">
          ACTION C PRODUCTION <span />
          {slides[activeSlide].label}
        </p> */}

        <h1>
          ACTION <span>C</span>
        {/* <span>C</span> */}
          <span className="title-period">.</span>
        </h1>

        <p className="hero-description">
        We are a production house that specializes in producing
        <br />
        action-comedy films.
        </p>

        <div className="hero-actions">
          <a
            href="/work"
            className="button button-primary"
          >
            NHÂN SỰ <span>↗</span>
          </a>

          <a
            href="/services"
            className="button button-outline"
          >
            KHÁM PHÁ DỰ ÁN <span>→</span>
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        {/* <span>INDEPENDENT CREATIVE PRODUCTION</span> */}

        <div className="slide-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              className={`slide-indicator ${
                index === activeSlide ? "active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Chuyển đến banner ${index + 1}`}
              aria-pressed={index === activeSlide}
            />
          ))}
        </div>

        <a href="#contact" className="scroll-link">
          SCROLL TO EXPLORE ABOUT US<span>↓</span>
        </a>
      </div>
    </section>
  );
}