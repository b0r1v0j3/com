import { useState } from 'react';

const SUGGESTIONS = ["View Projects", "Contact Info", "About You", "Clear Chat"];

const InputArea = ({ onSend, disabled }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() || disabled) return;
        onSend(input);
        setInput('');
    };

    return (
        <div className="input-area-container">
            <div className="suggestions">
                {SUGGESTIONS.map(text => (
                    <button
                        key={text}
                        type="button"
                        className="chip"
                        onClick={() => onSend(text)}
                        disabled={disabled}
                    >
                        {text}
                    </button>
                ))}
            </div>

            <form className="input-form" onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={disabled}
                    />
                    <button type="submit" disabled={!input.trim() || disabled}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </div>
            </form>

            <div className="disclaimer">
                AI generated responses can be inaccurate. Luckily, I'm hardcoded.
            </div>

            <style>{`
        .input-area-container {
          padding: 20px 24px 24px; /* Less padding top to fit chips */
          background: var(--bg-primary);
          border-top: 1px solid var(--bg-tertiary);
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .suggestions {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }
        .suggestions::-webkit-scrollbar {
          height: 0;
        }
        .chip {
          white-space: nowrap;
          background: var(--bg-secondary);
          border: 1px solid var(--bg-tertiary);
          color: var(--text-accent);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .chip:hover:not(:disabled) {
          background: var(--bg-tertiary);
          border-color: var(--accent-primary);
        }
        .chip:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .input-form {
          width: 100%;
        }
        .input-wrapper {
          display: flex;
          gap: 12px;
          background: var(--bg-secondary);
          padding: 8px;
          border-radius: var(--radius-md);
          border: 1px solid var(--bg-tertiary);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: border-color 0.2s;
        }
        .input-wrapper:focus-within {
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 2px var(--accent-glow);
        }
        .input-wrapper input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 12px 16px;
          color: var(--text-primary);
          font-size: 1rem;
          outline: none;
        }
        .input-wrapper input::placeholder {
          color: var(--text-secondary);
        }
        .input-wrapper button {
          background: var(--accent-primary);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .input-wrapper button:disabled {
          background: var(--bg-tertiary);
          cursor: not-allowed;
          opacity: 0.5;
        }
        .input-wrapper button:not(:disabled):hover {
          background: #0284c7;
          transform: translateY(-1px);
        }
        .disclaimer {
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }
      `}</style>
        </div>
    );
};

export default InputArea;
