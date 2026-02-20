import { useState, useEffect } from 'react';

const IntroScreen = ({ onChoice }) => {
    const [showPills, setShowPills] = useState(false);

    // Delay showing the pills for dramatic effect
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPills(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="intro-container">
            <div className="morpheus-dialogue fade-in">
                <p>"This is your last chance. After this, there is no turning back."</p>
            </div>

            {showPills && (
                <div className="pills-container fade-in-slow">
                    <button
                        className="pill-btn blue-pill"
                        onClick={() => onChoice('corporate')}
                        title="Wake up in your bed and believe whatever you want to believe."
                    >
                        <div className="pill-body"></div>
                        <span className="pill-text">Corporate Reality</span>
                    </button>

                    <button
                        className="pill-btn red-pill"
                        onClick={() => onChoice('matrix')}
                        title="Stay in Wonderland, and I show you how deep the rabbit hole goes."
                    >
                        <div className="pill-body"></div>
                        <span className="pill-text">The Matrix</span>
                    </button>
                </div>
            )}

            <style>{`
        .intro-container {
          height: 100vh;
          width: 100vw;
          background-color: #000;
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
        }

        .morpheus-dialogue {
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          padding: 0 20px;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          letter-spacing: 2px;
        }

        .pills-container {
          display: flex;
          gap: 60px;
          align-items: center;
          justify-content: center;
        }

        .pill-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .pill-btn:hover {
          transform: scale(1.1);
        }

        .pill-body {
          width: 60px;
          height: 120px;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(255,255,255,0.1), inset 0 0 20px rgba(0,0,0,0.5);
        }

        .pill-body::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 50%;
          background: rgba(255,255,255,0.2);
        }

        .blue-pill .pill-body {
          background: linear-gradient(to right, #002244, #0066cc);
          box-shadow: 0 0 30px rgba(0, 102, 204, 0.6);
        }

        .red-pill .pill-body {
          background: linear-gradient(to right, #660000, #ff0000);
          box-shadow: 0 0 30px rgba(255, 0, 0, 0.6);
        }

        .pill-text {
          font-size: 1rem;
          opacity: 0.7;
          transition: opacity 0.3s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .blue-pill:hover .pill-text { color: #66b3ff; opacity: 1; text-shadow: 0 0 10px #66b3ff; }
        .red-pill:hover .pill-text { color: #ff6666; opacity: 1; text-shadow: 0 0 10px #ff6666; }

        .fade-in { animation: fadeIn 2s ease-in forwards; }
        .fade-in-slow { opacity: 0; animation: fadeIn 2s ease-in 1s forwards; }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default IntroScreen;
