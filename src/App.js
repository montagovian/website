import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wave-container">
          <svg viewBox="0 0 2000 1000" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9FEBE8" />
                <stop offset="100%" stopColor="#FF9B9B" />
              </linearGradient>
            </defs>
            {[...Array(100)].map((_, i) => {
              const baseY = 300 + i * 5;
              return (
                <path
                  key={i}
                  d={`M 0 ${baseY} 
                     C 500 ${baseY + 50} 1000 ${baseY + 50} 2000 ${baseY}`}
                  fill="none"
                  stroke="url(#gradient1)"
                  strokeWidth="1.5"
                  opacity={0.2}
                  className="wave-line"
                  style={{
                    animationDelay: `${-i * 0.1}s`
                  }}
                />
              );
            })}
          </svg>
        </div>
        <div className="header-content">
          <img src="/alex.jpg" alt="Alex Anthony" className="profile-image" />
          <h1>Alex Anthony</h1>
        </div>
        <p className="bio-text">
          <span>AI product leader</span>
          <span>semanticist</span>
          <span>philosopher</span>
          <span>husband</span>
          <span>dad</span>
          <span>cognitive scientist</span>
          <span>cyclist</span>
          <span>Austinite</span>
          <span>cineaste</span>
          <span>beer snob</span>
          <span>oversharer</span>
          <span>human</span>
        </p>
        <p className="subtitle">
          I love a challenge
        </p>
      </header>
      <main className="App-main">
        <section className="features">
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Product lead for LLM Infrastructure at <a href="https://www.indeed.com" target="_blank" rel="noopener noreferrer">Indeed</a></h3>
              <p>Building the future of AI-enabled experiences on the world's number one job site</p>
            </div>
            <div className="feature-card">
              <h3>Former Member of Technical Staff, <a href="https://en.wikipedia.org/wiki/Cyc" target="_blank" rel="noopener noreferrer">Cycorp</a></h3>
              <p>Worked on symbolic AI and data integration</p>
            </div>
            <div className="feature-card">
              <h3>Failed philosopher</h3>
              <p>
                <a href="/eefd.pdf" target="_blank" rel="noopener noreferrer">
                  Experience, evaluation and Faultless Disagreement. Inquiry, 2016.
                </a>
                <br />
                <a href="/dispositionalpredicates.pdf" target="_blank" rel="noopener noreferrer">
                  Dispositional predicates in context. Thesis (Wesleyan University), 2010.
                </a>
              </p>
            </div>
            <div className="feature-card">
              <h3>Lucky husband to <a href="https://www.amandafaraone.com/" target="_blank" rel="noopener noreferrer">Amanda Faraone</a></h3>
            </div>
          </div>
        </section>
      </main>
      <footer className="App-footer">
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/aoanthony/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <span className="footer-separator">•</span>
          <a href="#" className="footer-link">CV</a>
        </div>
        <p className="copyright">© Alex Anthony 2025</p>
      </footer>
    </div>
  );
}

export default App;
