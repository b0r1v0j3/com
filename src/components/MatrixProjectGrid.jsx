import projects from '../data/projects.json';

const MatrixProjectGrid = () => {
    return (
        <div className="matrix-grid">
            {projects.map(p => (
                <div key={p.id} className="matrix-card">
                    <div className="card-header">
                        <span className="card-title">{'>'} {p.title}</span>
                        <span className="card-id">ID: {p.id.padStart(3, '0')}</span>
                    </div>
                    <div className="card-body">
                        <p className="description">{p.description}</p>
                        <div className="tech-stack">
                            {p.tech.map(t => <span key={t}>[{t}]</span>)}
                        </div>
                        <a href={p.link} className="access-btn">ACCESS_PROJECT()</a>
                    </div>
                </div>
            ))}

            <style>{`
        .matrix-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
          padding: 24px 0;
        }
        .matrix-card {
          border: 1px solid var(--matrix-green-dim);
          background: rgba(0, 20, 0, 0.7);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .matrix-card:hover {
          border-color: var(--matrix-green);
          box-shadow: 0 0 15px var(--matrix-green-shadow);
          transform: translateY(-2px);
        }
        .card-header {
          background: var(--matrix-green-dim);
          color: var(--matrix-bg);
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
          font-size: 0.9rem;
        }
        .card-body {
          padding: 16px;
        }
        .description {
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 16px;
          color: var(--matrix-text-secondary);
        }
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
          font-size: 0.8rem;
        }
        .access-btn {
          display: inline-block;
          border: 1px solid var(--matrix-green);
          color: var(--matrix-green);
          padding: 8px 16px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: 0.2s;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .access-btn:hover {
          background: var(--matrix-green);
          color: var(--matrix-bg);
          box-shadow: 0 0 10px var(--matrix-green);
        }
      `}</style>
        </div>
    );
};

export default MatrixProjectGrid;
