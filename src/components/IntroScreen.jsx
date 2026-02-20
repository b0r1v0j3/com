import { useState, useEffect } from 'react';

const IntroScreen = ({ onChoice }) => {
  const [showPills, setShowPills] = useState(false);
  const [dialogue, setDialogue] = useState("");

  // Cinematic sequence
  useEffect(() => {
    let timeout1, timeout2;

    timeout1 = setTimeout(() => {
      setDialogue("After this, there is no turning back.");
    }, 1500);

    timeout2 = setTimeout(() => {
      setDialogue("You take the red pill... or the blue pill.");
      setShowPills(true);
    }, 5500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className="dark-intro-container">

      {/* Dynamic Background Fog Layers */}
      <div className="dense-fog-container">
        <div className="fog-layer mist-1"></div>
        <div className="fog-layer mist-2"></div>
        <div className="fog-layer mist-3"></div>
      </div>

      {/* ── Top Text Area ── */}
      <div className="dialogue-wrapper">
        <div className="dialogue-box">
          {dialogue && (
            <p key={dialogue} className="typewriter-text shadow-glowglow">
              {dialogue}
            </p>
          )}
        </div>
      </div>

      {/* ── Center Image ── */}
      <div className="morpheus-section">
        <div className="morpheus-wrapper">
          {/* Spotlight behind him */}
          <div className="morpheus-backlight"></div>

          <img
            src="/morpheus.png"
            alt="Morpheus"
            className="morpheus-img"
          />

          {/* Clickable pill zones on the hands */}
          {showPills && (
            <>
              {/* Red pill (Left hand on screen) */}
              <button
                onClick={() => onChoice('matrix')}
                className="pill-zone red-pill-zone pulse-glow-red"
                aria-label="Enter Matrix (Red Pill)"
                title="Enter The Matrix"
              />
              {/* Blue pill (Right hand on screen) */}
              <button
                onClick={() => onChoice('corporate')}
                className="pill-zone blue-pill-zone pulse-glow-blue"
                aria-label="Enter Corporate (Blue Pill)"
                title="Enter Wall Street"
              />
            </>
          )}
        </div>
      </div>

      <style>{`
        .dark-intro-container {
          position: fixed;
          inset: 0;
          background-color: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
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
          z-index: 1;
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

        /* ── Text Rendering ── */
        .dialogue-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding-top: 5vh;
          height: 15vh;
          z-index: 10;
        }

        .typewriter-text {
          font-size: 1.5rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border-right: 2px solid #fff;
          white-space: nowrap;
          overflow: hidden;
          width: fit-content;
          text-shadow: 0 0 10px rgba(255,255,255,0.8);
          animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #fff; }
        }

        /* ── Morpheus Cinematic Appearance ── */
        .morpheus-section {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          z-index: 5;
          position: relative;
        }

        .morpheus-wrapper {
          position: relative;
          display: inline-block;
          max-height: 80vh;
          max-width: 100vw;
          animation: emergeFromFog 5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .morpheus-backlight {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%);
          z-index: -1;
          pointer-events: none;
        }

        .morpheus-img {
          display: block;
          max-height: 80vh;
          max-width: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 30px rgba(0,0,0,0.8));
        }

        @keyframes emergeFromFog {
          0% {
            opacity: 0;
            filter: blur(15px) brightness(0.2);
            transform: scale(1.1) translateY(20px);
          }
          100% {
            opacity: 1;
            filter: blur(0px) brightness(1);
            transform: scale(1) translateY(0);
          }
        }

        /* ── Clickable Pill Zones ── */
        .pill-zone {
          position: absolute;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          background: transparent;
          outline: none;
          opacity: 0;
          animation: fadePills 2s forwards 0.5s;
        }

        .red-pill-zone {
          bottom: 22%;
          left: 26%;
          transform: translate(-50%, 50%);
        }
        
        .blue-pill-zone {
          bottom: 22%;
          right: 23%;
          transform: translate(50%, 50%);
        }

        .red-pill-zone:hover { background: radial-gradient(circle, rgba(255,0,0,0.4) 0%, transparent 70%); }
        .blue-pill-zone:hover { background: radial-gradient(circle, rgba(0,100,255,0.4) 0%, transparent 70%); }

        @keyframes fadePills {
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .typewriter-text { font-size: 1rem; }
          .pill-zone { width: 50px; height: 50px; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
