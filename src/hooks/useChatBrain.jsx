import { useState, useCallback } from 'react';
import projects from '../data/projects.json';

// Project Card Component (Inline for now or extract later)
const ProjectCarousel = () => (
    <div className="project-grid">
        {projects.map(p => (
            <div key={p.id} className="project-card">
                <div className="project-image" style={{ backgroundImage: `url(${p.image})` }} />
                <div className="project-info">
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                    <div className="tech-stack">
                        {p.tech.map(t => <span key={t}>{t}</span>)}
                    </div>
                    <a href={p.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
            </div>
        ))}
        <style>{`
      .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
        margin-top: 12px;
        width: 100%;
      }
      .project-card {
        background: var(--bg-tertiary); /* Slightly lighter than chat bubble */
        border: 1px solid rgba(255,255,255,0.05);
        border-radius: var(--radius-md);
        overflow: hidden;
        transition: transform 0.2s;
      }
      .project-card:hover {
        transform: translateY(-2px);
        border-color: var(--accent-primary);
      }
      .project-image {
        height: 140px;
        background-size: cover;
        background-position: center;
      }
      .project-info {
        padding: 16px;
      }
      .project-info h3 {
        margin: 0 0 8px;
        font-size: 1.1rem;
        color: var(--text-primary);
      }
      .project-info p {
        font-size: 0.9rem;
        color: var(--text-secondary);
        margin-bottom: 12px;
        line-height: 1.4;
      }
      .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 16px;
      }
      .tech-stack span {
        font-size: 0.75rem;
        background: rgba(0,0,0,0.3);
        padding: 4px 8px;
        border-radius: 4px;
        color: var(--text-accent);
      }
      .project-link {
        display: block;
        text-align: center;
        background: rgba(255,255,255,0.05);
        padding: 8px;
        border-radius: var(--radius-sm);
        text-decoration: none;
        color: var(--text-primary);
        font-size: 0.9rem;
        transition: background 0.2s;
      }
      .project-link:hover {
        background: rgba(255,255,255,0.1);
      }
    `}</style>
    </div>
);

const INITIAL_MESSAGE = {
    id: 1,
    sender: 'ai',
    text: "Hello! I'm the digital assistant for [Name]. I can show you his projects, contact info, or just chat. Try asking \"What have you built?\""
};

export function useChatBrain() {
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [isTyping, setIsTyping] = useState(false);

    const resetChat = useCallback(() => {
        setMessages([INITIAL_MESSAGE]);
    }, []);

    const processInput = useCallback((text) => {
        // 1. Add User Message
        const userMsg = { id: Date.now(), sender: 'user', text };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // 2. Simulate Delay & AI Logic
        setTimeout(() => {
            const lower = text.toLowerCase();
            let response = { id: Date.now() + 1, sender: 'ai', text: "" };

            // LOGIC ENGINE
            if (lower.includes("project") || lower.includes("work") || lower.includes("built") || lower.includes("portfolio")) {
                response.text = "Here are a few of the latest projects:";
                response.component = <ProjectCarousel />;
            } else if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("hire")) {
                response.text = "You can reach out via Email or check the social links in the sidebar.";
            } else if (lower.includes("about") || lower.includes("who")) {
                response.text = "I'm a Full Stack Developer passionate about AI, React, and building cool stuff. This website is one of my experiements!";
            } else if (lower.includes("hello") || lower.includes("hi")) {
                response.text = "Hi there! How can I help you today?";
            } else {
                response.text = "I'm just a simulated AI, so I only know about [Name]'s work. Try asking about 'Projects' or 'Contact'.";
            }

            setMessages(prev => [...prev, response]);
            setIsTyping(false);
        }, 800 + Math.random() * 500); // Random delay 0.8s - 1.3s
    }, []);

    return { messages, isTyping, processInput, resetChat };
}
