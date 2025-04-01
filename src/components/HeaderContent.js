import React from 'react';
import './HeaderContent.css';

function HeaderContent() {
  const trackEvent = (eventName) => {
    if (window.umami) {
      window.umami.track(eventName);
    }
  };

  return (
    <main className="bio">
      <img
        src={process.env.PUBLIC_URL + '/alex.jpg'}
        alt="Alex Anthony - AI Product Leader at Indeed"
        className="bio-avatar"
      />
      <article className="bio-content">
        <header>
          <h1 className="bio-name">Alex Anthony</h1>
          <div className="bio-title">AI Product Leader</div>
        </header>
        <section className="bio-description">
          <p className="bio-text bio-text--lead">
            I lead Product for LLM Infrastructure at Indeed, the world's #1 job site.
          </p>
          <p className="bio-text">
            With 7+ years of experience as a PM for impactful technical platform teams in AI, data products, and data platforms at leading tech companies like Indeed and Bloomberg, I bring technical excellence and customer obsession to every opportunity.
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
        </section>
        <nav className="bio-links" aria-label="Professional links">
          <a 
            href={process.env.PUBLIC_URL + '/aanthony-resume.pdf'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bio-link"
            onClick={() => trackEvent('cv_click')}
            aria-label="Download CV"
          >CV</a>
          <span className="bio-link-separator">•</span>
          <a 
            href="https://www.linkedin.com/in/aoanthony/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bio-link"
            onClick={() => trackEvent('linkedin_click')}
            aria-label="View LinkedIn Profile"
          >LinkedIn</a>
        </nav>
        <section className="publications" aria-labelledby="publications-title">
          <h2 id="publications-title" className="publications-title">Research</h2>
          <div className="publications-list">
            <article className="publication-item">
              <a 
                href={process.env.PUBLIC_URL + '/eefd.pdf'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="publication-link"
                onClick={() => trackEvent('paper_eefd_click')}
                aria-label="Read Experience, evaluation and Faultless Disagreement paper"
              >
                Experience, evaluation and Faultless Disagreement
              </a>
              <span className="publication-venue">Inquiry, 2016</span>
            </article>
            <article className="publication-item">
              <a 
                href={process.env.PUBLIC_URL + '/dispositionalpredicates.pdf'} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="publication-link"
                onClick={() => trackEvent('paper_dispositional_click')}
                aria-label="Read Dispositional predicates in context paper"
              >
                Dispositional predicates in context
              </a>
              <span className="publication-venue">Thesis (Wesleyan University), 2010</span>
            </article>
          </div>
        </section>
      </article>
    </main>
  );
}

export default HeaderContent; 