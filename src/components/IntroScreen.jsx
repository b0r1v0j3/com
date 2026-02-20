import { useState, useEffect } from 'react';

const IntroScreen = ({ onChoice }) => {
  const [showPills, setShowPills] = useState(false);
  const [glitchText, setGlitchText] = useState("This is your last chance.");

  // Cinematic sequence
  useEffect(() => {
    const t1 = setTimeout(() => {
      setGlitchText("After this, there is no turning back.");
    }, 3000);

    const t2 = setTimeout(() => {
      setShowPills(true);
      setGlitchText("You take the blue pill... or the red pill.");
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="intro-cinematic-container">
      {/* Background ambient noise/scanlines */}
      <div className="ambient-noise"></div>

      <div className="dialogue-box">
        <p className="typewriter-text shadow-glow">{glitchText}</p>
      </div>

      {showPills && (
        <div className="morpheus-hands-container fade-in-cinematic">

          {/* Left Hand - Blue Pill */}
          <div className="hand-wrapper left-hand">
            <div className="abstract-hand"></div>
            <button
              className="pill-hologram blue-pill-hologram"
              onClick={() => onChoice('corporate')}
              title="Wake up in your bed and believe whatever you want to believe."
            >
              <div className="pill-core"></div>
              <div className="pill-glow"></div>
              <span className="pill-label">Corporate Reality</span>
            </button>
          </div>

          {/* Right Hand - Red Pill */}
          <div className="hand-wrapper right-hand">
            <div className="abstract-hand"></div>
            <button
              className="pill-hologram red-pill-hologram"
              onClick={() => onChoice('matrix')}
              title="Stay in Wonderland, and I show you how deep the rabbit hole goes."
            >
              <div className="pill-core"></div>
              <div className="pill-glow"></div>
              <span className="pill-label">The Matrix</span>
            </button>
          </div>

        </div>
      )}

      <style>{`
        .intro-cinematic-container {
          height: 100vh;
          width: 100vw;
          background-color: #030303;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Courier New', monospace;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          overflow: hidden;
        }

        .ambient-noise {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: 
            linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.25) 50%),
            linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06));
          background-size: 100% 4px, 6px 100%;
          z-index: 1;
          pointer-events: none;
        }

        .dialogue-box {
          position: absolute;
          top: 20%;
          z-index: 10;
          text-align: center;
          width: 100%;
        }

        .typewriter-text {
          font-size: 1.8rem;
          letter-spacing: 3px;
          margin: 0;
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 3px solid #00FF41;
          animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
        }

        .shadow-glow {
          text-shadow: 0 0 10px rgba(0,255,65,0.5);
        }

        .morpheus-hands-container {
          position: relative;
          z-index: 5;
          display: flex;
          gap: 15vw;
          margin-top: 15vh;
          width: 100%;
          justify-content: center;
          align-items: flex-end;
          height: 50vh;
        }

        .hand-wrapper {
          position: relative;
          width: 200px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Simulating the dark silhouette of Morpheus' hands holding the pills */
        .abstract-hand {
          position: absolute;
          bottom: -50px;
          width: 180px;
          height: 180px;
          background: radial-gradient(ellipse at top, #1a1a1a 0%, #000 70%);
          border-radius: 50% 50% 10% 10%;
          box-shadow: inset 0 20px 50px rgba(0,0,0,0.9);
          filter: blur(4px);
          z-index: 1;
        }

        .left-hand:hover { transform: translateY(-30px) scale(1.05); }
        .right-hand:hover { transform: translateY(-30px) scale(1.05); }

        .pill-hologram {
          position: relative;
          z-index: 10;
          background: transparent;
          border: none;
          cursor: pointer;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pill-core {
          width: 60px;
          height: 120px;
          border-radius: 30px;
          position: relative;
          z-index: 2;
          overflow: hidden;
          box-shadow: inset 0px 0px 15px rgba(255,255,255,0.5), 0 0 10px rgba(0,0,0,0.8);
          animation: float 4s ease-in-out infinite;
        }

        .pill-core::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 50%;
          background: rgba(255,255,255,0.3);
        }

        .pill-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140px;
          height: 140px;
          border-radius: 50%;
          z-index: 1;
          filter: blur(25px);
          animation: pulse 2s infinite alternate;
        }

        .blue-pill-hologram .pill-core { background: linear-gradient(135deg, #0044cc, #001133); }
        .blue-pill-hologram .pill-glow { background: rgba(0, 102, 255, 0.4); }
        
        .red-pill-hologram .pill-core { background: linear-gradient(135deg, #cc0000, #330000); }
        .red-pill-hologram .pill-glow { background: rgba(255, 0, 0, 0.4); }

        .pill-label {
          margin-top: 40px;
          font-size: 1.2rem;
          color: rgba(255,255,255,0.3);
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .blue-pill-hologram:hover .pill-label { color: #66b3ff; text-shadow: 0 0 15px #0066ff; opacity: 1;}
        .blue-pill-hologram:hover .pill-glow { background: rgba(0, 102, 255, 0.9); width: 180px; height: 180px; }

        .red-pill-hologram:hover .pill-label { color: #ff6666; text-shadow: 0 0 15px #ff0000; opacity: 1;}
        .red-pill-hologram:hover .pill-glow { background: rgba(255, 0, 0, 0.9); width: 180px; height: 180px; }

        /* Animations */
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #00FF41; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulse {
          0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.8); }
          100% { opacity: 0.9; transform: translate(-50%, -50%) scale(1.1); }
        }

        .fade-in-cinematic {
          opacity: 0;
          animation: cinematicReveal 3s ease-out forwards;
        }

        @keyframes cinematicReveal {
          0% { opacity: 0; filter: blur(10px); transform: scale(0.9); }
          50% { opacity: 0.5; filter: blur(5px); transform: scale(1.02); }
          100% { opacity: 1; filter: blur(0); transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
