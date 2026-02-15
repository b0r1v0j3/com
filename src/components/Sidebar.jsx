import links from '../data/links.json';

const Sidebar = ({ onNewChat }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>AI Portfolio</h2>
                <span className="online-status">● Online</span>
            </div>
            <div className="sidebar-content">
                <button className="nav-btn active" onClick={onNewChat}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                    New Chat
                </button>

                <div className="section-title">Quick Links</div>
                {links.map(link => (
                    <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="nav-link">
                        <span>{link.name}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                ))}
            </div>

            <style>{`
        .sidebar {
          width: 260px;
          background: var(--bg-secondary);
          padding: 24px;
          display: flex;
          flex-direction: column;
          border-right: 1px solid var(--bg-tertiary);
          height: 100vh;
        }
        @media (max-width: 768px) {
          .sidebar {
            display: none; /* Mobile handling later */
          }
        }
        .sidebar-header {
          margin-bottom: 32px;
        }
        .sidebar-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .online-status {
          display: inline-block;
          margin-top: 4px;
          color: #4ade80;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .nav-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--accent-primary);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius-sm);
          color: white;
          cursor: pointer;
          font-size: 0.9rem;
          margin-bottom: 32px;
          transition: all 0.2s;
        }
        .nav-btn:hover {
          background: #0284c7;
        }
        .section-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 12px;
          padding-left: 8px;
        }
        .nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--radius-sm);
          transition: 0.2s;
        }
        .nav-link:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
      `}</style>
        </aside>
    );
};

export default Sidebar;
