import React from 'react';
import { 
  Code, 
  Layers, 
  Wrench, 
  Binary,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { LeetCodeIcon } from './Icons';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming',
      icon: Code,
      accentLabel: 'Core Languages',
      skills: [
        { name: 'C++' },
        { name: 'Java' },
        { name: 'JavaScript' },
      ],
    },
    {
      category: 'Web Development',
      icon: Layers,
      accentLabel: 'Frontend & Backend',
      skills: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'Express.js' },
      ],
    },
    {
      category: 'Tools',
      icon: Wrench,
      accentLabel: 'Workflow & Version Control',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
      ],
    },
    {
      category: 'Problem Solving',
      icon: Binary,
      accentLabel: 'Algorithms & Logic',
      skills: [
        { name: 'Data Structures & Algorithms' },
        { name: 'Competitive Programming' },
        { 
          name: 'LeetCode', 
          link: 'https://leetcode.com/u/Sparsh_Kashyap-3112/', 
          customIcon: LeetCodeIcon,
          isExternal: true 
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container skills-section">
      <div className="section-header">
        <span className="section-tag">Capabilities</span>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Core technical competencies developed through academic study and hands-on project building.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, idx) => {
          const CategoryIcon = cat.icon;
          return (
            <div key={idx} className="skill-category-card glass-card">
              <div className="category-header">
                <div className="category-icon-box">
                  <CategoryIcon size={22} className="category-icon" />
                </div>
                <div>
                  <h3 className="category-title">{cat.category}</h3>
                  <span className="category-accent-label">{cat.accentLabel}</span>
                </div>
              </div>

              <div className="skills-pill-container">
                {cat.skills.map((skill, sIdx) => {
                  const CustomIcon = skill.customIcon;
                  if (skill.link) {
                    return (
                      <a
                        key={sIdx}
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skill-pill skill-pill-interactive"
                        title={`View ${skill.name} Profile`}
                      >
                        {CustomIcon ? (
                          <CustomIcon size={14} className="skill-custom-icon" />
                        ) : (
                          <CheckCircle2 size={13} className="skill-check-icon" />
                        )}
                        <span>{skill.name}</span>
                        <ExternalLink size={12} className="skill-ext-icon" />
                      </a>
                    );
                  }

                  return (
                    <span key={sIdx} className="skill-pill">
                      <CheckCircle2 size={13} className="skill-check-icon" />
                      <span>{skill.name}</span>
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
