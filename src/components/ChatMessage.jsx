const ChatMessage = ({ msg }) => {
    const isUser = msg.sender === 'user';

    return (
        <div className={`message ${isUser ? 'user' : 'ai'}`}>
            <div className="avatar">
                {isUser ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1V7a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1c0 .74-.4 1.39-1 1.73V11h-2v2h1a2 2 0 0 1 2 2v1c0 .74-.4 1.39-1 1.73V19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1c0-.74.4-1.39 1-1.73V15h-1v-2h-1a2 2 0 0 1-2-2v-1c0-.55.22-1.05.58-1.42C8.22 8.05 8 7.55 8 7V6a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1c0 .74-.4 1.39-1 1.73V5h1V4a2 2 0 0 1-2-2z" />
                    </svg>
                )}
            </div>
            <div className="bubble">
                {msg.text}
                {msg.component}
            </div>

            <style>{`
        .message {
          display: flex;
          gap: 16px;
          max-width: 85%;
          animation: fadeIn 0.3s ease;
        }
        .message.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }
        .bubble {
          padding: 14px 18px;
          border-radius: var(--radius-md);
          line-height: 1.6;
          font-size: 0.95rem;
          white-space: pre-wrap;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .message.ai .bubble {
          background: var(--ai-msg-bg);
          color: var(--text-primary);
          border-bottom-left-radius: 2px;
        }
        .message.user .bubble {
          background: var(--user-msg-bg);
          color: white;
          border-bottom-right-radius: 2px;
        }
        .avatar {
          width: 36px;
          height: 36px;
          border-radius: 8px; /* Square with radius looks more techy */
          background: var(--bg-tertiary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        .message.user .avatar {
          background: transparent;
        }
      `}</style>
        </div>
    );
};

export default ChatMessage;
