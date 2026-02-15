import { useState } from 'react';
import MatrixRain from './components/MatrixRain';
import Typewriter from './components/Typewriter';
import MatrixProjectGrid from './components/MatrixProjectGrid';
import links from './data/links.json';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <MatrixRain />
      <div className="scanline"></div>

      <main className="container">
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
            <hr className="matrix-divider" />

            <section className="projects-section">
              <h2 className="section-title">SYSTEM_MODULES // PROJECTS</h2>
              <MatrixProjectGrid />
            </section>

            <section className="links-section">
              <h2 className="section-title">COMM_LINKS // SOCIALS</h2>
              <div className="links-grid">
                {links.map(link => (
                  <a key={link.id} href={link.url} target="_blank" className="matrix-link">
                    [{link.name.toUpperCase()}]
                  </a>
                ))}
              </div>
            </section>

            <footer className="footer">
              <p>SYSTEM_STATUS: ONLINE</p>
              <p>© {new Date().getFullYear()} b0r1v0j3</p>
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
        
        .matrix-divider {
          border: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--matrix-green-dim), transparent);
          margin: 60px 0;
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
          color: var(--matrix-green-dim);
          font-size: 0.8rem;
          border-top: 1px dashed var(--matrix-green-dim);
          padding-top: 24px;
        }
        
        /* Animation Classes */
        .fade-in {
          animation: fadeIn 1s ease-in;
        }
        .fade-in-slow {
          animation: fadeIn 2s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  )
}

export default App
