import React from 'react';
import { ArrowRight, Code2, Send } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        {/* Glass Status Badge */}
        <div className="status-badge" role="status">
          <span className="status-pulse-dot">
            <span className="pulse-ring" />
            <span className="pulse-core" />
          </span>
          <span className="status-text">Open to Learning & Opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          Hi, I’m <span className="hero-name-gradient">Sparsh Kashyap</span>.
        </h1>

        {/* Supporting Role Text */}
        <p className="hero-subtitle">
          BTech Information Technology Student <span className="separator-dot">•</span> Full-Stack Developer <span className="separator-dot">•</span> Problem Solver
        </p>

        {/* Short Introduction */}
        <p className="hero-intro">
          I’m an Information Technology student passionate about software development, problem solving, and building useful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-group">
          <a
            href="#skills"
            onClick={(e) => handleScrollTo(e, 'skills')}
            className="btn btn-primary hero-btn"
          >
            <span>View My Skills</span>
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="btn btn-secondary hero-btn"
          >
            <span>Contact Me</span>
            <Send size={16} />
          </a>
        </div>

        {/* Subtle decorative glass element */}
        <div className="hero-glass-accent" aria-hidden="true">
          <div className="accent-pill">
            <Code2 size={16} className="accent-icon" />
            <span>Building with Clean Code & Modern Tech</span>
          </div>
        </div>
      </div>
    </section>
  );
}
