import { useState, useEffect } from 'react';

const IntroScreen = ({ onChoice }) => {
  const [showPills, setShowPills] = useState(false);
  const [dialogue, setDialogue] = useState("This is your last chance.");

  // Cinematic sequence
  useEffect(() => {
    const t1 = setTimeout(() => {
      setDialogue("After this, there is no turning back.");
    }, 2500);

    const t2 = setTimeout(() => {
      setDialogue("You take the blue pill... or the red pill.");
      setShowPills(true);
    }, 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="dark-intro-container">

      {/* Dialogue box positioned at the top */}
      <div className="dialogue-box fade-in">
        <p key={dialogue} className="typewriter-text shadow-glow">{dialogue}</p>
      </div>

      {/* Main image container */}
      <div className="morpheus-image-container fade-in-cinematic">
        <img
          src="/morpheus.jpg"
          alt="Morpheus offering pills"
          className="morpheus-bg"
        />

        {/* Interactive overlays positioned exactly over his hands */}
        {showPills && (
          <div className="interactive-pills-layer fade-in-slow">

            {/* Red Pill (Morpheus right hand, screen left) */}
            <button
              className="pill-overlay red-pill-zone"
              onClick={() => onChoice('matrix')}
              title="The Matrix"
            >
              <span className="pill-tooltip">The Matrix</span>
            </button>

            {/* Blue Pill (Morpheus left hand, screen right) */}
            <button
              className="pill-overlay blue-pill-zone"
              onClick={() => onChoice('corporate')}
              title="Corporate Reality"
            >
              <span className="pill-tooltip">Corporate Reality</span>
            </button>

          </div>
        )}
      </div>

      <style>{`
        .dark-intro-container {
          height: 100vh;
          width: 100vw;
          background-color: #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          color: #fff;
          font-family: 'Courier New', monospace;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          overflow: hidden;
        }

        .dialogue-box {
          position: absolute;
          top: 4%;
          z-index: 20;
          text-align: center;
          width: 100%;
        }

        .typewriter-text {
          font-size: 1.5rem;
          letter-spacing: 2px;
          margin: 0;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          color: #ffffff;
          animation: typing 2.5s steps(40, end);
        }

        .shadow-glow {
          /* text-shadow: 0 0 10px rgba(0,255,65,0.8); removed */
        }

        .morpheus-image-container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          transform: scale(0.85);
          transform-origin: center bottom;
        }

        .morpheus-bg {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: bottom center;
        }

        .interactive-pills-layer {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
        }

        /* Invisible clickable regions positioned over the pills in the image */
        .pill-overlay {
          position: absolute;
          background: transparent;
          border: none;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Responsive positioning based on typical image fit */
        .red-pill-zone {
          left: 23%;
          top: 68%;
          width: 80px;
          height: 80px;
          transform: translate(-50%, -50%);
        }

        .blue-pill-zone {
          left: 77%;
          top: 68%;
          width: 80px;
          height: 80px;
          transform: translate(-50%, -50%);
        }


        .pill-tooltip {
          position: absolute;
          bottom: -40px;
          font-size: 1.2rem;
          color: rgba(255,255,255,0);
          white-space: nowrap;
          font-weight: bold;
          text-transform: uppercase;
          transition: color 0.3s ease;
          pointer-events: none;
        }

        .red-pill-zone:hover .pill-tooltip { color: #ff3333; text-shadow: 0 0 10px red; }
        .blue-pill-zone:hover .pill-tooltip { color: #3388ff; text-shadow: 0 0 10px blue; }

        /* Animations */
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #00FF41; }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }

        .fade-in { animation: fadeIn 1s ease-in forwards; }
        .fade-in-cinematic {
          opacity: 0;
          animation: cinematicReveal 3s ease-out forwards;
        }
        .fade-in-slow {
          opacity: 0;
          animation: fadeIn 2s ease-in 1s forwards;
        }

        @keyframes cinematicReveal {
          0% { opacity: 0; filter: blur(10px); }
          100% { opacity: 1; filter: blur(0); }
        }
        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* Mobile Adjustments */
        @media (max-width: 768px) {
          .red-pill-zone { left: 25%; top: 65%; }
          .blue-pill-zone { left: 75%; top: 65%; }
          .typewriter-text { font-size: 1.1rem; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
