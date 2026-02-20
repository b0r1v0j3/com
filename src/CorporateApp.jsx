import './corporate.css';
import projects from './data/projects.json';
import ObjectLinks from './data/links.json';

// Minimalist inline SVGs for the premium feel
const Icons = {
    twitter: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
    ),
    linkedin: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    ),
    youtube: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
    ),
    facebook: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    ),
    instagram: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    ),
    phone: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    ),
    mail: (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
        </svg>
    )
};

function CorporateApp() {
    return (
        <div className="theme-corporate font-sans min-h-screen bg-[#050505] selection:bg-white/20 text-white relative overflow-hidden">

            {/* ── Ambient Premium Glows ── */}
            <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />
            <div className="fixed top-[40%] left-[50%] -translate-x-1/2 w-[60vw] h-[20vw] rounded-full bg-white/5 blur-[150px] pointer-events-none" />

            <div className="relative z-10 flex flex-col min-h-screen">

                {/* ── Floating Nav ── */}
                <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-2xl">
                            <div className="text-xl font-bold tracking-tight text-white flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-400 p-[1px]">
                                    <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center text-sm font-semibold">
                                        B
                                    </div>
                                </div>
                                <span>B. Cvetković</span>
                            </div>
                            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
                                <a href="#about" className="hover:text-white transition-colors">Vision</a>
                                <a href="#projects" className="hover:text-white transition-colors">Work</a>
                                <a href="#contact" className="hover:text-white transition-colors">Connect</a>
                            </nav>
                        </div>
                    </div>
                </header>

                <main className="flex-1 max-w-5xl mx-auto w-full px-6 pt-40 pb-24 space-y-40">

                    {/* ── Hero Section ── */}
                    <section id="about" className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Defining the next generation of digital tools
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.05] max-w-4xl text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Excellence.</span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                            I build scalable software solutions and pixel-perfect interfaces designed for performance, accessibility, and high impact.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 pt-8 w-full sm:w-auto">
                            <a href="#projects" className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
                                Explore Work
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a href="#contact" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-semibold transition-all backdrop-blur-sm w-full sm:w-auto flex justify-center">
                                Get in touch
                            </a>
                        </div>
                    </section>

                    {/* ── Projects Showcase ── */}
                    <section id="projects" className="space-y-12">
                        <div className="text-center space-y-4 mb-20 animate-fade-in-up animation-delay-200">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Selected Work</h2>
                            <p className="text-gray-400 text-lg">A showcase of recent technical challenges and solutions.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {projects.map((project, index) => (
                                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer"
                                    className="group block animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 200}ms` }}>
                                    <article className="h-full bg-white/[0.02] border border-white/5 rounded-[2rem] p-4 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/20 hover:-translate-y-2 relative overflow-hidden flex flex-col">

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-indigo-500/0 group-hover:from-blue-500/10 group-hover:to-indigo-500/10 transition-colors duration-500"></div>

                                        <div className="relative h-72 w-full rounded-3xl bg-[#0a0a0a] overflow-hidden mb-8 border border-white/5">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                                loading="lazy"
                                            />
                                            {/* Image overlay gradient to blend bottom edge */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent"></div>
                                        </div>

                                        <div className="px-4 pb-4 flex flex-col flex-1 relative z-10">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-bold text-white capitalize tracking-tight group-hover:text-blue-400 transition-colors">
                                                    {project.title.replace('_', ' ')}
                                                </h3>
                                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 border border-white/10 group-hover:bg-white text-lg transition-colors group-hover:text-black">
                                                    ↗
                                                </div>
                                            </div>
                                            <p className="text-gray-400 mb-8 flex-1 leading-relaxed font-light line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tech.map(t => (
                                                    <span key={t} className="px-4 py-1.5 bg-white/5 text-gray-300 text-xs font-medium tracking-wide rounded-full border border-white/10 backdrop-blur-md">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* ── Contact Section ── */}
                    <section id="contact" className="relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent blur-3xl -z-10 rounded-[3rem]"></div>
                        <div className="bg-white/[0.02] border border-white/10 rounded-[3rem] px-8 py-24 md:px-20 text-center backdrop-blur-xl relative overflow-hidden">

                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

                            <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                                <h2 className="text-5xl font-bold tracking-tight text-white mb-6">Let's build together.</h2>
                                <p className="text-xl text-gray-400 font-light pb-8">
                                    Whether it's a new venture or scaling an existing system, I'm ready to collaborate on ambitious projects.
                                </p>

                                <div className="flex flex-wrap justify-center gap-4">
                                    {ObjectLinks.map(link => (
                                        <a
                                            key={link.id}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-16 h-16 bg-white/5 hover:bg-white hover:text-black rounded-2xl flex items-center justify-center text-gray-300 border border-white/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1"
                                            title={link.name}
                                        >
                                            {Icons[link.icon] || <span className="font-bold text-lg">{link.name.charAt(0)}</span>}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                </main>

                <footer className="border-t border-white/10 py-12 text-center text-gray-500 text-sm mt-auto relative z-10">
                    <p>© {new Date().getFullYear()} Borivoje Cvetković. Designed & Engineered with precision.</p>
                </footer>
            </div>

            <style>{`
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
        </div >
    );
}

export default CorporateApp;
