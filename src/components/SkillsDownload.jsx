import { useState, useEffect } from 'react';
import skills from '../data/skills.json';

const SkillsDownload = () => {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [dataStream, setDataStream] = useState('');

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';

  const initiateDownload = () => {
    setDownloading(true);
    setProgress(0);
    setComplete(false);
    setDataStream('');
  };

  useEffect(() => {
    if (downloading && progress < 100) {
      // Fast progress increment
      const timer = setTimeout(() => {
        const increment = Math.floor(Math.random() * 15) + 5;
        setProgress((prev) => Math.min(prev + increment, 100));

        // Generate random string for data stream effect
        let randomStr = '';
        for (let i = 0; i < 40; i++) {
          randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setDataStream(randomStr);
      }, 50); // Very fast updates
      return () => clearTimeout(timer);
    } else if (downloading && progress === 100) {
      // Finish download
      const finishTimer = setTimeout(() => {
        setDownloading(false);
        setComplete(true);
      }, 500); // Brief pause at 100%
      return () => clearTimeout(finishTimer);
    }
  }, [downloading, progress]);

  return (
    <div className="skills-container">
      {!downloading && !complete && (
        <div className="download-prompt">
          <p className="system-msg">Neural link standby. Ready to receive data.</p>
          <button className="action-btn blink-border" onClick={initiateDownload}>
            [INITIATE_SKILL_DOWNLOAD]
          </button>
        </div>
      )}

      {downloading && (
        <div className="downloading-state">
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="status-text glow-text">
            [DOWNLOADING_DATA_PACK... {progress}%]
          </div>
          <div className="data-stream">{dataStream}</div>
        </div>
      )}

      {complete && (
        <div className="complete-state fade-in">
          <div className="status-text success-text glow-text">
            [KNOWLEDGE_ACQUIRED]
          </div>
          <p className="system-msg">"I know Kung Fu."</p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-badge matrix-card">
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .skills-container {
          margin: 40px 0;
          padding: 20px;
          border: 1px dashed var(--matrix-green-dim);
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .download-prompt {
          text-align: center;
        }

        .system-msg {
          color: var(--matrix-text-secondary);
          margin-bottom: 20px;
          font-style: italic;
        }

        .action-btn {
          background: transparent;
          border: 2px solid var(--matrix-green);
          color: var(--matrix-text);
          font-family: var(--font-matrix);
          font-size: 1.1rem;
          padding: 12px 24px;
          cursor: pointer;
          transition: all 0.3s;
          text-shadow: 0 0 5px var(--matrix-green-shadow);
        }

        .action-btn:hover {
          background: rgba(0, 255, 65, 0.1);
          box-shadow: 0 0 15px var(--matrix-green-shadow);
          transform: scale(1.02);
        }

        .blink-border {
          animation: border-pulse 2s infinite;
        }

        @keyframes border-pulse {
          0% { border-color: var(--matrix-green-dim); }
          50% { border-color: var(--matrix-green); }
          100% { border-color: var(--matrix-green-dim); }
        }

        .downloading-state {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .progress-bar-container {
          width: 100%;
          height: 20px;
          border: 1px solid var(--matrix-green);
          background: rgba(0, 20, 0, 0.5);
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: var(--matrix-green);
          box-shadow: 0 0 10px var(--matrix-green);
          transition: width 0.05s linear;
        }

        .status-text {
          font-size: 1.2rem;
          font-weight: bold;
          text-align: center;
        }

        .success-text {
          color: var(--matrix-green);
          text-shadow: 0 0 5px var(--matrix-green-shadow);
        }

        .data-stream {
          font-size: 0.9rem;
          color: var(--matrix-green-dim);
          word-break: break-all;
          line-height: 1.5;
          opacity: 0.7;
          font-family: monospace;
          height: 60px;
          overflow: hidden;
        }

        .complete-state {
          text-align: center;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }

        .skill-badge {
          padding: 8px 16px;
          font-size: 1rem;
          background: rgba(0, 40, 0, 0.8);
          border: 1px solid var(--matrix-green-dim);
          border-left: 3px solid var(--matrix-green);
          transition: all 0.2s;
          cursor: default;
        }

        .skill-badge:hover {
          border-color: var(--matrix-green);
          box-shadow: 0 0 10px rgba(0, 255, 65, 0.3);
          transform: translateY(-2px);
          color: #fff;
          text-shadow: 0 0 5px var(--matrix-green);
        }
      `}</style>
    </div>
  );
};

export default SkillsDownload;
