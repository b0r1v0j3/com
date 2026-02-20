import { useState, useEffect } from 'react';

const IntroScreen = ({ onChoice }) => {
  const [showPills, setShowPills] = useState(false);
  const [dialogue, setDialogue] = useState("");

  // Construct scene pacing
  useEffect(() => {
    // Morpheus appearing
    const t1 = setTimeout(() => {
      setDialogue("This is the Construct.");
    }, 1500);

    // Morpheus offering choice
    const t2 = setTimeout(() => {
      setDialogue("You take the blue pill... the story ends.");
      setShowPills(true);
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="construct-container">

      <div className="morpheus-wrapper fade-in">
        <div className="image-container">
          <img
            src="/morpheus.jpg"
            alt="Morpheus"
            className="morpheus-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.classList.add('morpheus-fallback');
            }}
          />
        </div>
        <p className="dialogue-text">{dialogue}</p>
      </div>

      {showPills && (
        <div className="pills-container fade-in-slow">

          <button
            className="pill-hologram blue-pill-hologram"
            onClick={() => onChoice('corporate')}
          >
            <div className="pill-core"></div>
            <div className="pill-glow"></div>
            <span className="pill-label">Wake Up</span>
          </button>

          <button
            className="pill-hologram red-pill-hologram"
            onClick={() => onChoice('matrix')}
          >
            <div className="pill-core"></div>
            <div className="pill-glow"></div>
            <span className="pill-label">Wonderland</span>
          </button>

        </div>
      )}

      <style>{`
        .construct-container {
          height: 100vh;
          width: 100vw;
          background-color: #ffffff; /* The pure white loading construct */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #000;
          font-family: 'Courier New', monospace;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          overflow: hidden;
          transition: background-color 2s ease;
        }

        .morpheus-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;
          margin-top: -10vh;
        }

        .image-container {
          width: 250px;
          height: 350px;
          margin-bottom: 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          background: #f5f5f5;
        }

        .morpheus-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1) grayscale(0.2);
        }

        .morpheus-fallback::after {
          content: 'MORPHEUS';
          font-size: 2rem;
          font-weight: bold;
          color: #ccc;
          letter-spacing: 5px;
        }

        .dialogue-text {
          font-size: 1.5rem;
          letter-spacing: 1px;
          margin: 0;
          height: 30px;
          font-weight: bold;
          color: #333;
          text-align: center;
          transition: opacity 0.5s;
        }

        .pills-container {
          display: flex;
          gap: 60px;
          width: 100%;
          justify-content: center;
          align-items: flex-end;
        }

        .pill-hologram {
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s;
        }
        
        .pill-hologram:hover {
          transform: translateY(-10px);
        }

        .pill-core {
          width: 60px;
          height: 130px;
          border-radius: 30px;
          position: relative;
          z-index: 2;
          overflow: hidden;
          box-shadow: inset -5px -5px 15px rgba(0,0,0,0.3), inset 5px 5px 15px rgba(255,255,255,0.8), 0 10px 20px rgba(0,0,0,0.2);
        }

        .pill-core::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 50%;
          background: rgba(255,255,255,0.4);
        }

        .pill-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          border-radius: 50%;
          z-index: 1;
          filter: blur(25px);
          opacity: 0.5;
          transition: opacity 0.3s;
        }

        .blue-pill-hologram .pill-core { background: linear-gradient(135deg, #1e3a8a, #3b82f6); }
        .blue-pill-hologram .pill-glow { background: #3b82f6; }
        
        .red-pill-hologram .pill-core { background: linear-gradient(135deg, #7f1d1d, #ef4444); }
        .red-pill-hologram .pill-glow { background: #ef4444; }

        .pill-label {
          margin-top: 25px;
          font-size: 1.1rem;
          color: #666;
          font-weight: bold;
          transition: all 0.3s;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .blue-pill-hologram:hover .pill-label { color: #1e3a8a; }
        .blue-pill-hologram:hover .pill-glow { opacity: 0.8; width: 140px; height: 140px; }

        .red-pill-hologram:hover .pill-label { color: #7f1d1d; }
        .red-pill-hologram:hover .pill-glow { opacity: 0.8; width: 140px; height: 140px; }

        .fade-in {
          opacity: 0;
          animation: cinematicReveal 2s ease-out forwards;
        }

        .fade-in-slow {
          opacity: 0;
          animation: cinematicReveal 1s ease-out 0.5s forwards;
        }

        @keyframes cinematicReveal {
          0% { opacity: 0; transform: scale(0.95); filter: blur(5px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
