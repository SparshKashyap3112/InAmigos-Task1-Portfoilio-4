import React from 'react';
import { GraduationCap, Brain, Globe2, BookOpenCheck } from 'lucide-react';

export default function About() {
  const chips = [
    {
      title: 'BTech Information Technology',
      desc: 'Academic Foundation',
      icon: GraduationCap,
    },
    {
      title: 'Problem Solving',
      desc: 'Algorithmic Thinking',
      icon: Brain,
    },
    {
      title: 'Web Development',
      desc: 'Modern Tech Stacks',
      icon: Globe2,
    },
    {
      title: 'Continuous Learner',
      desc: 'Curious & Adaptive',
      icon: BookOpenCheck,
    },
  ];

  return (
    <section id="about" className="section-container about-section">
      <div className="section-header">
        <span className="section-tag">Overview</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about-main-card glass-card">
        <div className="about-card-inner">
          <p className="about-paragraph">
            I’m a BTech Information Technology student interested in software development, data structures and algorithms, and modern web technologies. I enjoy learning by building projects and continuously improving my technical skills.
          </p>

          <div className="about-chips-grid">
            {chips.map((chip, index) => {
              const IconComponent = chip.icon;
              return (
                <div key={index} className="about-chip-card">
                  <div className="chip-icon-wrapper">
                    <IconComponent size={20} className="chip-icon" />
                  </div>
                  <div className="chip-info">
                    <span className="chip-title">{chip.title}</span>
                    <span className="chip-desc">{chip.desc}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
