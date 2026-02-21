import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import CorporateApp from './CorporateApp';
import MatrixRain from './components/MatrixRain';
import Typewriter from './components/Typewriter';
import MatrixProjectGrid from './components/MatrixProjectGrid';
import BackgroundMusic from './components/BackgroundMusic';
import SkillsDownload from './components/SkillsDownload';
import links from './data/links.json';
import './index.css'; // Import Matrix styles exclusively here

// Extract the original Matrix App into a sub-component for cleaner routing
function MatrixApp({ onSwitchTheme }) {
  const [introComplete, setIntroComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <MatrixRain />
      <BackgroundMusic playing={showContent} />
      <div className="scanline"></div>

      <main className="container">
        {/* Theme toggle – top right */}
        <button
          onClick={onSwitchTheme}
          style={{
            position: 'fixed',
            top: '16px',
            right: '20px',
            zIndex: 9999,
            background: 'transparent',
            border: 'none',
            color: 'var(--matrix-green, #00FF41)',
            fontFamily: 'var(--font-matrix, "Courier New", monospace)',
            fontSize: '11px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.3s, text-shadow 0.3s',
            textShadow: '0 0 6px rgba(0,255,65,0.4)',
          }}
          onMouseEnter={e => { e.target.style.opacity = '1'; e.target.style.textShadow = '0 0 12px rgba(0,255,65,0.8)'; }}
          onMouseLeave={e => { e.target.style.opacity = '0.7'; e.target.style.textShadow = '0 0 6px rgba(0,255,65,0.4)'; }}
        >
          [ LIGHT_MODE ]
        </button>

        <section className="hero">
          <h1 className="glitch-title" data-text="> Wake up, User...">
            <span className="cursor-char">{'>'} </span>
            <Typewriter
              text="Wake up, User..."
              delay={100}
              onComplete={() => setTimeout(() => setIntroComplete(true), 500)}
            />
            {!introComplete && <span className="cursor"> </span>}
          </h1>

          {introComplete && (
            <div className="sub-hero fade-in">
              <p>The Matrix has you...</p>
              <p>Just kidding. Welcome to my digital construct.</p>
              <button className="enter-btn" onClick={() => setShowContent(true)}>
                ENTER_SYSTEM()
              </button>
            </div>
          )}
        </section>

        {showContent && (
          <div className="content-layer fade-in-slow">
            <section className="projects-section">
              <h2 className="section-title">SYSTEM_MODULES // PROJECTS</h2>
              <MatrixProjectGrid />
            </section>

            <section className="skills-section">
              <h2 className="section-title">KNOWLEDGE_BASE // SKILLS</h2>
              <SkillsDownload />
            </section>

            <section className="links-section">
              <h2 className="section-title">COMM_LINKS // SOCIALS</h2>
              <div className="links-grid">
                {links.map(link => (
                  <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="matrix-link">
                    [{link.name.toUpperCase()}]
                  </a>
                ))}
              </div>
            </section>

            <footer className="footer">
              <p>SYSTEM_STATUS: ONLINE</p>
              <p>© 1992 [b0r1v0j3]</p>
            </footer>
          </div>
        )}
      </main>

      <style>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
          position: relative;
          z-index: 2;
        }
        
        .hero {
          min-height: 50vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        
        .glitch-title {
          font-size: clamp(2rem, 5vw, 4rem);
          margin: 0 0 24px;
          color: var(--matrix-text);
          text-shadow: 0 0 10px var(--matrix-green-shadow);
        }
        
        .sub-hero {
          font-size: 1.2rem;
          color: var(--matrix-text-secondary);
        }
        
        .enter-btn {
          margin-top: 32px;
          background: transparent;
          border: 2px solid var(--matrix-green);
          color: var(--matrix-green);
          padding: 12px 32px;
          font-family: var(--font-matrix);
          font-size: 1.1rem;
          cursor: pointer;
          transition: 0.3s;
          font-weight: bold;
        }
        .enter-btn:hover {
          background: var(--matrix-green);
          color: var(--matrix-bg);
          box-shadow: 0 0 20px var(--matrix-green);
        }
        
        .section-title {
          font-size: 1.5rem;
          border-bottom: 2px solid var(--matrix-green-dim);
          padding-bottom: 8px;
          margin-bottom: 32px;
          display: inline-block;
          text-shadow: 0 0 5px var(--matrix-green-shadow);
        }
        
        .links-grid {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }
        
        .matrix-link {
          color: var(--matrix-text);
          text-decoration: none;
          font-size: 1.2rem;
          transition: 0.2s;
        }
        .matrix-link:hover {
          text-shadow: 0 0 8px var(--matrix-green);
          letter-spacing: 2px;
        }
        
        .footer {
          margin-top: 80px;
          text-align: center;
          color: var(--matrix-green);
          font-size: 0.9rem;
          border-top: 1px dashed var(--matrix-green-dim);
          padding-top: 24px;
        }
        
        .fade-in { animation: fadeIn 1s ease-in; }
        .fade-in-slow { animation: fadeIn 2s ease-in; }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}

// Main App Router
function App() {
  const [themeChoice, setThemeChoice] = useState(null); // 'matrix' | 'corporate' | null

  if (!themeChoice) {
    return <IntroScreen onChoice={(choice) => setThemeChoice(choice)} />;
  }

  if (themeChoice === 'corporate') {
    return <CorporateApp onSwitchTheme={() => setThemeChoice('matrix')} />;
  }

  return <MatrixApp onSwitchTheme={() => setThemeChoice('corporate')} />;
}

export default App;
