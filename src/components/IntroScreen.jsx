import { useState, useEffect } from 'react';

const IntroScreen = ({ onChoice }) => {
  const [showPills, setShowPills] = useState(false);
  const [dialogue, setDialogue] = useState("This is your last chance.");

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

      {/* Text at the very top */}
      <div className="dialogue-box">
        <p key={dialogue} className="dialogue-text">{dialogue}</p>
      </div>

      {/* Morpheus image in the middle, pushed down below text */}
      <div className="morpheus-section">
        <img
          src="/morpheus.png"
          alt="Morpheus offering pills"
          className="morpheus-img"
        />
      </div>

      {/* Visible pill buttons at the bottom */}
      {showPills && (
        <div className="pills-row fade-in-slow">
          <button className="pill-btn red-pill" onClick={() => onChoice('matrix')}>
            Red Pill — The Matrix
          </button>
          <button className="pill-btn blue-pill" onClick={() => onChoice('corporate')}>
            Blue Pill — Corporate
          </button>
        </div>
      )}

      <style>{`
        .dark-intro-container {
          height: 100vh;
          width: 100vw;
          background-color: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #fff;
          font-family: 'Courier New', monospace;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          overflow: hidden;
        }

        /* ── Text area ── */
        .dialogue-box {
          padding-top: 3vh;
          text-align: center;
          flex-shrink: 0;
        }

        .dialogue-text {
          font-size: 1.4rem;
          letter-spacing: 2px;
          margin: 0;
          color: #fff;
        }

        /* ── Morpheus image ── */
        .morpheus-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 0;
          width: 100%;
          padding: 1vh 0;
        }

        .morpheus-img {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }

        /* ── Pill buttons ── */
        .pills-row {
          display: flex;
          gap: 40px;
          padding-bottom: 4vh;
          flex-shrink: 0;
        }

        .pill-btn {
          padding: 14px 32px;
          border: none;
          border-radius: 30px;
          font-family: 'Courier New', monospace;
          font-size: 1rem;
          font-weight: bold;
          letter-spacing: 1px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .pill-btn:hover {
          transform: scale(1.08);
        }

        .red-pill {
          background: linear-gradient(135deg, #b91c1c, #ef4444);
          color: #fff;
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);
        }
        .red-pill:hover {
          box-shadow: 0 0 35px rgba(239, 68, 68, 0.7);
        }

        .blue-pill {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: #fff;
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }
        .blue-pill:hover {
          box-shadow: 0 0 35px rgba(59, 130, 246, 0.7);
        }

        /* ── Animations ── */
        .fade-in-slow {
          opacity: 0;
          animation: fadeIn 1.5s ease-in forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .dialogue-text { font-size: 1rem; }
          .pills-row { gap: 16px; flex-direction: column; align-items: center; }
          .pill-btn { font-size: 0.85rem; padding: 12px 24px; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
