import React from 'react';
import './HeaderContent.css';

function HeaderContent() {
  const trackEvent = (eventName) => {
    if (window.umami) {
      window.umami.track(eventName);
    }
  };

  return (
    <div className="bio">
      <img
        src={process.env.PUBLIC_URL + '/alex.jpg'}
        alt="Alex Anthony"
        className="bio-avatar"
      />
      <div className="bio-content">
        <h1 className="bio-name">Alex Anthony</h1>
        <div className="bio-title">AI product leader</div>
        <p className="bio-text bio-text--lead">
          I lead Product for LLM Infrastructure at Indeed, the world's #1 job site.
        </p>
        <p className="bio-text">
          With 8+ years of experience as a PM for impactful technical platform teams in AI, data products, and data platforms at leading tech companies like Indeed and Bloomberg, I bring technical excellence and customer obsession to every opportunity.
        </p>
        <p className="bio-text">
          My research background (going back 15+ years) is in natural language semantics, cognitive science, formal logic, and philosophy of language.
        </p>
        <p className="bio-text">
          I spent five years as a Member of the Technical Staff at Cycorp (the leading symbolic AI lab), doing ontology (knowledge representation), natural language generation, inference programming, and data engineering.
        </p>
        <p className="bio-text">
          I'm excited to build the next generation of infrastructure and tools that empower AI engineers to deliver on their most ambitious and creative visions for AI-enabled experiences.
        </p>
        <div className="bio-links">
          <a 
            href={process.env.PUBLIC_URL + '/aanthony-resume.pdf'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bio-link"
            onClick={() => trackEvent('cv_click')}
          >CV</a>
          <span className="bio-link-separator">•</span>
          <a 
            href="https://www.linkedin.com/in/aoanthony/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bio-link"
            onClick={() => trackEvent('linkedin_click')}
          >LinkedIn</a>
        </div>
        <div className="publications">
          <h3 className="publications-title">Research</h3>
          <div className="publications-list">
            <p className="publication-item">
              <a 
                href={process.env.PUBLIC_URL + '/eefd.pdf'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="publication-link"
                onClick={() => trackEvent('paper_eefd_click')}
              >
                Experience, evaluation and Faultless Disagreement
              </a>
              <span className="publication-venue">Inquiry, 2016</span>
            </p>
            <p className="publication-item">
              <a 
                href={process.env.PUBLIC_URL + '/dispositionalpredicates.pdf'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="publication-link"
                onClick={() => trackEvent('paper_dispositional_click')}
              >
                Dispositional predicates in context
              </a>
              <span className="publication-venue">Thesis (Wesleyan University), 2010</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContent; 