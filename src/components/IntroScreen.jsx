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
        <p className="typewriter-text shadow-glow">{dialogue}</p>
      </div>

      {/* Main image container */}
      <div className="morpheus-image-container fade-in-cinematic">
        <img
          src="/assets/morpheus_real.jpg"
          alt="Morpheus offering pills"
          className="morpheus-bg"
          onError={(e) => {
            // Fallbacks in case the copy command didn't grab the file instantly
            if (e.target.src.includes('morpheus_real.jpg')) {
              e.target.src = '/morpheus.jpg';
            } else {
              e.target.style.display = 'none';
            }
          }}
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
              <div className="pill-pulse red-pulse"></div>
              <span className="pill-tooltip">The Matrix</span>
            </button>

            {/* Blue Pill (Morpheus left hand, screen right) */}
            <button
              className="pill-overlay blue-pill-zone"
              onClick={() => onChoice('corporate')}
              title="Corporate Reality"
            >
              <div className="pill-pulse blue-pulse"></div>
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
          top: 8%;
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
          border-right: 3px solid #00FF41;
          animation: typing 2.5s steps(40, end), blink-caret .75s step-end infinite;
        }

        .shadow-glow {
          text-shadow: 0 0 10px rgba(0,255,65,0.8);
        }

        .morpheus-image-container {
          position: relative;
          width: 100%;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .morpheus-bg {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Keeps image proportions without cropping the hands */
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
          left: 30%;
          top: 70%;
          width: 80px;
          height: 80px;
          transform: translate(-50%, -50%);
        }

        .blue-pill-zone {
          left: 70%;
          top: 70%;
          width: 80px;
          height: 80px;
          transform: translate(-50%, -50%);
        }

        .pill-pulse {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          position: absolute;
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Red pill overlays the left hand */
        .red-pulse { background-color: rgba(255, 0, 0, 0.2); box-shadow: 0 0 20px red; }
        /* Blue pill overlays the right hand */
        .blue-pulse { background-color: rgba(0, 80, 255, 0.2); box-shadow: 0 0 20px blue; }

        .pill-overlay:hover .pill-pulse {
          animation: none;
          transform: scale(1.4);
          transition: transform 0.3s ease;
        }
        
        .pill-overlay:hover .red-pulse { background-color: rgba(255, 0, 0, 0.5); }
        .pill-overlay:hover .blue-pulse { background-color: rgba(0, 80, 255, 0.5); }

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
