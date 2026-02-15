import React, { useEffect, useRef } from 'react';

const BackgroundMusic = ({ playing }) => {
    if (!playing) return null;

    return (
        <div style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pFS4zYWxzNA?autoplay=1&loop=1&playlist=pFS4zYWxzNA&controls=0&showinfo=0&modestbranding=1"
                title="Background Music"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default BackgroundMusic;
