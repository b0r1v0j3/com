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

      {/* Text at the very top, separate from image */}
      <div className="dialogue-box">
        <p key={dialogue} className="dialogue-text">{dialogue}</p>
      </div>

      {/* Morpheus image pushed below text, with clickable pill zones */}
      <div className="morpheus-section">
        <div className="morpheus-wrapper">
          <img
            src="/morpheus.png"
            alt="Morpheus offering pills"
            className="morpheus-img"
          />

          {/* Clickable zones directly on the pills in his hands */}
          {showPills && (
            <>
              <button
                className="pill-zone red-pill-zone fade-in-slow"
                onClick={() => onChoice('matrix')}
                aria-label="Red Pill - The Matrix"
              />
              <button
                className="pill-zone blue-pill-zone fade-in-slow"
                onClick={() => onChoice('corporate')}
                aria-label="Blue Pill - Corporate"
              />
            </>
          )}
        </div>
      </div>

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

        /* ── Text area — sits at top, never overlaps the image ── */
        .dialogue-box {
          padding: 3vh 20px 1vh;
          text-align: center;
          flex-shrink: 0;
        }

        .dialogue-text {
          font-size: 1.4rem;
          letter-spacing: 2px;
          margin: 0;
          color: #fff;
        }

        /* ── Morpheus image section — fills remaining space below text ── */
        .morpheus-section {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 0;
          width: 100%;
        }

        .morpheus-wrapper {
          position: relative;
          display: inline-block;
          max-height: 100%;
          max-width: 100%;
        }

        .morpheus-img {
          display: block;
          max-height: 88vh;
          max-width: 100%;
          object-fit: contain;
        }

        /* ── Clickable pill zones — invisible, placed on his actual hands ── */
        .pill-zone {
          position: absolute;
          background: transparent;
          border: 2px solid transparent;
          border-radius: 50%;
          cursor: pointer;
          width: 70px;
          height: 70px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .pill-zone:hover {
          border-color: rgba(255,255,255,0.5);
        }

        /* Position over the red pill in his right hand (screen left) */
        .red-pill-zone {
          bottom: 22%;
          left: 22%;
          transform: translate(-50%, 0);
        }
        .red-pill-zone:hover {
          box-shadow: 0 0 25px rgba(255, 0, 0, 0.6);
          border-color: rgba(255, 50, 50, 0.7);
        }

        /* Position over the blue pill in his left hand (screen right) */
        .blue-pill-zone {
          bottom: 22%;
          right: 22%;
          transform: translate(50%, 0);
        }
        .blue-pill-zone:hover {
          box-shadow: 0 0 25px rgba(0, 100, 255, 0.6);
          border-color: rgba(50, 130, 255, 0.7);
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
          .pill-zone { width: 50px; height: 50px; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
