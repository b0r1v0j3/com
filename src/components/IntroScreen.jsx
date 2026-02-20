import { useState, useEffect } from 'react';

const IntroScreen = ({ onChoice }) => {
  const [showPills, setShowPills] = useState(false);
  const [dialogue, setDialogue] = useState("");

  // Clean typewriter sequence
  useEffect(() => {
    let timeout1, timeout2;

    // Start first line
    timeout1 = setTimeout(() => {
      setDialogue("After this, there is no turning back.");
    }, 1000);

    // Start second line and show pills
    timeout2 = setTimeout(() => {
      setDialogue("You take the red pill... or the blue pill.");
      setShowPills(true);
    }, 4500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-between text-white font-mono fixed inset-0 z-50 overflow-hidden">

      {/* ── Top Text Area ── */}
      <div className="w-full flex justify-center py-8 h-24">
        {dialogue && (
          <p
            key={dialogue}
            className="text-xl md:text-2xl tracking-[0.2em] uppercase typing-animation"
          >
            {dialogue}
          </p>
        )}
      </div>

      {/* ── Center Image ── */}
      <div className="flex-1 w-full flex items-center justify-center relative max-h-[80vh]">
        <img
          src="/morpheus.jpg"
          alt="Morpheus"
          className="max-w-full max-h-full object-contain block opacity-0 animate-fade-in"
        />

        {/* Clickable pill zones on the hands (only active when text is done) */}
        {showPills && (
          <>
            {/* Red pill (Left hand on screen) */}
            <button
              onClick={() => onChoice('matrix')}
              className="absolute w-20 h-20 rounded-full cursor-pointer bg-transparent border-none outline-none focus:ring-4 focus:ring-red-500/50"
              style={{ bottom: '22%', left: '26%', transform: 'translate(-50%, 50%)' }}
              aria-label="Enter Matrix (Red Pill)"
              title="Enter The Matrix"
            />
            {/* Blue pill (Right hand on screen) */}
            <button
              onClick={() => onChoice('corporate')}
              className="absolute w-20 h-20 rounded-full cursor-pointer bg-transparent border-none outline-none focus:ring-4 focus:ring-blue-500/50"
              style={{ bottom: '22%', right: '23%', transform: 'translate(50%, 50%)' }}
              aria-label="Enter Corporate (Blue Pill)"
              title="Enter Corporate View"
            />
          </>
        )}
      </div>

      <style>{`
        .typing-animation {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid white;
          width: fit-content;
          animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: white; }
        }

        .animate-fade-in {
          animation: simpleFade 1.5s ease-out forwards;
        }

        @keyframes simpleFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
