import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Social & contact details
  const contactDetails = [
    {
      label: 'Email',
      value: 'sparsh.kashyap@example.com',
      href: 'mailto:sparsh.kashyap@example.com',
      icon: Mail,
    },
    {
      label: 'LeetCode',
      value: 'leetcode.com/u/Sparsh_Kashyap-3112',
      href: 'https://leetcode.com/u/Sparsh_Kashyap-3112/',
      icon: LeetCodeIcon,
    },
    {
      label: 'GitHub',
      value: 'github.com/sparshkashyap',
      href: 'https://github.com',
      icon: GithubIcon,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/sparshkashyap',
      href: 'https://linkedin.com',
      icon: LinkedinIcon,
    },
  ];

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate frontend validation & response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="section-header">
        <span className="section-tag">Reach Out</span>
        <h2 className="section-title">Let’s Connect</h2>
        <p className="section-subtitle">
          Have a question, opportunity, or simply want to connect? Feel free to reach out.
        </p>
      </div>

      <div className="contact-layout-grid">
        {/* Contact Info Card */}
        <div className="contact-info-card glass-card">
          <h3 className="contact-card-heading">Contact & Profiles</h3>
          <p className="contact-card-subtext">
            I am always open to discussing web development, algorithmic problem solving, or collaborative academic projects.
          </p>

          <div className="contact-links-list">
            {contactDetails.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-link"
                >
                  <div className="contact-item-icon-box">
                    <IconComp size={18} />
                  </div>
                  <div className="contact-item-details">
                    <span className="contact-item-label">{item.label}</span>
                    <span className="contact-item-value">{item.value}</span>
                  </div>
                  <ArrowUpRight size={16} className="contact-item-arrow" />
                </a>
              );
            })}
          </div>

          <div className="contact-availability-badge">
            <span className="status-pulse-dot">
              <span className="pulse-ring" />
              <span className="pulse-core" />
            </span>
            <span className="avail-text">Currently exploring internships & project collaborations</span>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-form-card glass-card">
          <h3 className="contact-card-heading">Send a Message</h3>

          {isSubmitted ? (
            <div className="form-success-alert" role="alert">
              <CheckCircle size={32} className="success-icon" />
              <h4>Thank you for your message!</h4>
              <p>
                Your note has been validated and recorded. (Note: Frontend demo mode enabled).
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="btn btn-secondary btn-sm"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              {/* Name field */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="required-star">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Sharma"
                  className={`form-input ${formErrors.name ? 'form-input-error' : ''}`}
                  autoComplete="name"
                />
                {formErrors.name && (
                  <span className="form-error-msg" role="alert">
                    <AlertCircle size={14} /> {formErrors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email <span className="required-star">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className={`form-input ${formErrors.email ? 'form-input-error' : ''}`}
                  autoComplete="email"
                />
                {formErrors.email && (
                  <span className="form-error-msg" role="alert">
                    <AlertCircle size={14} /> {formErrors.email}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message <span className="required-star">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Sparsh, I'd like to connect regarding..."
                  className={`form-input form-textarea ${formErrors.message ? 'form-input-error' : ''}`}
                />
                {formErrors.message && (
                  <span className="form-error-msg" role="alert">
                    <AlertCircle size={14} /> {formErrors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary form-submit-btn"
              >
                {isSubmitting ? (
                  <span>Validating...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
