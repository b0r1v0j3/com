import { useState, useEffect } from 'react';

const IntroScreen = ({ onChoice }) => {
  const [showPills, setShowPills] = useState(false);
  const [dialogue, setDialogue] = useState("This is your last chance.");

  useEffect(() => {
    const t1 = setTimeout(() => {
      setDialogue("After this, there is no turning back.");
    }, 2500);

    const t2 = setTimeout(() => {
      setDialogue("You take the red pill... or the blue pill.");
      setShowPills(true);
    }, 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="dark-intro-container">

      {/* Typewriter text at the top */}
      <div className="dialogue-box">
        <p key={dialogue} className="dialogue-text">{dialogue}</p>
      </div>

      {/* Morpheus image with clickable pill zones */}
      <div className="morpheus-section">
        <div className="morpheus-wrapper">
          <img
            src="/morpheus.png"
            alt="Morpheus offering pills"
            className="morpheus-img"
          />

          {/* Invisible clickable zones on the pills */}
          {showPills && (
            <>
              <button
                className="pill-zone red-zone fade-in-slow"
                onClick={() => onChoice('matrix')}
                aria-label="Red Pill"
              />
              <button
                className="pill-zone blue-zone fade-in-slow"
                onClick={() => onChoice('corporate')}
                aria-label="Blue Pill"
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

        /* ── Typewriter text ── */
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
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #fff;
          animation: typing 2s steps(40, end), blink-caret .75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #fff; }
        }

        /* ── Morpheus ── */
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
          animation: emergeFromMists 4s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }

        @keyframes emergeFromMists {
          0% {
            opacity: 0;
            filter: blur(20px) brightness(0.5);
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            filter: blur(0px) brightness(1);
            transform: scale(1);
          }
        }

        .morpheus-img {
          display: block;
          max-height: 88vh;
          max-width: 100%;
          object-fit: contain;
        }

        /* ── Pill clickable zones — completely invisible ── */
        .pill-zone {
          position: absolute;
          background: transparent;
          border: none;
          outline: none;
          border-radius: 50%;
          cursor: pointer;
          width: 80px;
          height: 50px;
        }

        /* Red pill — left hand */
        .red-zone {
          bottom: 24%;
          left: 24%;
          transform: translate(-50%, 0);
        }

        /* Blue pill — right hand */
        .blue-zone {
          bottom: 24%;
          right: 24%;
          transform: translate(50%, 0);
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
          .pill-zone { width: 50px; height: 40px; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
