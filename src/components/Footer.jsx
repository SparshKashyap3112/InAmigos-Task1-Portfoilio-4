import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand-info">
            <span className="footer-name">Sparsh Kashyap</span>
            <p className="footer-copyright">
              © 2026 Sparsh Kashyap. Built with passion and technology.
            </p>
          </div>

          <div className="footer-actions">
            <div className="footer-social-links">
              <a
                href="https://leetcode.com/u/Sparsh_Kashyap-3112/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LeetCode Profile"
                title="Sparsh's LeetCode Profile"
              >
                <LeetCodeIcon size={17} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="footer-scroll-top-btn"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
