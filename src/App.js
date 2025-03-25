import React from 'react';
import './App.css';
import WaveBackground from './components/WaveBackground';
import HeaderContent from './components/HeaderContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WaveBackground />
        <HeaderContent />
      </header>
      <footer className="App-footer">
        <div className="footer-content">
          <p className="personal-link">
            And very lucky husband to <a href="https://www.amandafaraone.com/" target="_blank" rel="noopener noreferrer">Amanda Faraone</a>
          </p>
          <p className="copyright">© Alex Anthony 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
