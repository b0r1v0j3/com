import { useState } from 'react';

const IntroScreen = ({ onChoice }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="intro-container">

      {/* Dynamic Background Fog Layers */}
      <div className="dense-fog-container">
        <div className="fog-layer mist-1"></div>
        <div className="fog-layer mist-2"></div>
        <div className="fog-layer mist-3"></div>
      </div>

      {/* Centered Choice */}
      <div className="choice-section">
        <h1 className="choice-title">Choose Your Path</h1>
        <p className="choice-subtitle">Two realities. One architect.</p>

        <div className="choice-buttons">
          <button
            className={`choice-btn red-choice ${hovered === 'matrix' ? 'active' : ''}`}
            onClick={() => onChoice('matrix')}
            onMouseEnter={() => setHovered('matrix')}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="choice-icon">&#9632;</span>
            <span className="choice-label">DARK_SIDE</span>
            <span className="choice-desc">Enter the Matrix</span>
          </button>

          <span className="choice-divider">or</span>

          <button
            className={`choice-btn blue-choice ${hovered === 'corporate' ? 'active' : ''}`}
            onClick={() => onChoice('corporate')}
            onMouseEnter={() => setHovered('corporate')}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="choice-icon">&#9633;</span>
            <span className="choice-label">LIGHT_MODE</span>
            <span className="choice-desc">Enter the Firm</span>
          </button>
        </div>
      </div>

      <style>{`
        .intro-container {
          position: fixed;
          inset: 0;
          background-color: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Courier New', monospace;
          z-index: 1000;
          overflow: hidden;
        }

        /* ── Fog & Smoke Effects ── */
        .dense-fog-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .fog-layer {
          position: absolute;
          width: 200%;
          height: 100%;
          background: transparent url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog1.png') repeat-x;
          background-size: cover;
          opacity: 0.3;
        }

        .mist-1 {
          animation: fogMove 25s linear infinite;
          bottom: -10%;
          opacity: 0.4;
          filter: blur(4px);
        }

        .mist-2 {
          background-image: url('https://raw.githubusercontent.com/danielstuart14/CSS_FOG_ANIMATION/master/fog2.png');
          animation: fogMove 40s linear infinite reverse;
          bottom: -20%;
          opacity: 0.3;
          filter: blur(8px);
        }

        .mist-3 {
          animation: fogMove 30s linear infinite;
          top: 10%;
           opacity: 0.2;
           transform: scale(1.5);
           filter: blur(6px);
        }

        @keyframes fogMove {
          0% { transform: translate3d(0, 0, 0) scale(1.2); }
          100% { transform: translate3d(-50%, 0, 0) scale(1.2); }
        }

        /* ── Choice Section ── */
        .choice-section {
          position: relative;
          z-index: 10;
          text-align: center;
          animation: fadeUp 1.5s ease-out forwards;
        }

        .choice-title {
          font-size: clamp(1.8rem, 4vw, 3rem);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 8px;
          text-shadow: 0 0 20px rgba(255,255,255,0.3);
          font-weight: 300;
        }

        .choice-subtitle {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 56px;
        }

        .choice-buttons {
          display: flex;
          align-items: center;
          gap: 32px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .choice-btn {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7);
          padding: 28px 40px;
          font-family: 'Courier New', monospace;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          min-width: 180px;
        }

        .choice-btn:hover {
          transform: translateY(-4px);
        }

        .choice-icon {
          font-size: 1.6rem;
          transition: all 0.5s;
        }

        .choice-label {
          font-size: 0.85rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: bold;
        }

        .choice-desc {
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          opacity: 0.5;
        }

        .red-choice:hover, .red-choice.active {
          border-color: #ff2020;
          color: #ff4040;
          box-shadow: 0 0 30px rgba(255,0,0,0.15), inset 0 0 30px rgba(255,0,0,0.05);
          text-shadow: 0 0 10px rgba(255,0,0,0.5);
        }

        .blue-choice:hover, .blue-choice.active {
          border-color: rgba(255,255,255,0.6);
          color: #fff;
          box-shadow: 0 0 30px rgba(255,255,255,0.1), inset 0 0 30px rgba(255,255,255,0.03);
          text-shadow: 0 0 10px rgba(255,255,255,0.5);
        }

        .choice-divider {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .choice-buttons {
            flex-direction: column;
            gap: 20px;
          }
          .choice-btn {
            padding: 20px 32px;
            min-width: 160px;
          }
          .choice-divider {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
