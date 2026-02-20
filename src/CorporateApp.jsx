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

function formatProjectTitle(title) {
  if (title.toLowerCase() === 'podovi') return 'podovi';
  if (title === 'workers_united') return 'Workers United';
  return title.replace('_', ' ');
}

function CorporateApp() {
  return (
    <div className="theme-corporate font-sans min-h-screen bg-[#FAFAFA] text-slate-900 relative overflow-hidden" style={{ backgroundColor: '#FAFAFA' }}>

      {/* ── Ambient Premium Glows (Light Mode) ── */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-100 blur-[120px] pointer-events-none opacity-60" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-100 blur-[120px] pointer-events-none opacity-60" />
      <div className="fixed top-[40%] left-[50%] -translate-x-1/2 w-[60vw] h-[20vw] rounded-full bg-white blur-[150px] pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ── Floating Nav ── */}
        <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-xl bg-white/70 border border-slate-200/50 rounded-2xl px-6 py-4 flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-[1px] shadow-sm">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                    B
                  </div>
                </div>
                <span>Borivoje Cvetković</span>
              </div>
              <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-500">
                <a href="#about" className="hover:text-slate-900 transition-colors">Vision</a>
                <a href="#projects" className="hover:text-slate-900 transition-colors">Work</a>
                <a href="#contact" className="hover:text-slate-900 transition-colors">Connect</a>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-5xl mx-auto w-full px-6 pt-40 pb-24 space-y-40">

          {/* ── Hero Section ── */}
          <section id="about" className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Defining the next generation of digital tools
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] max-w-4xl text-slate-900">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Excellence.</span>
            </h1>

            <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
              I build scalable software solutions and pixel-perfect interfaces designed for performance, accessibility, and high impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-8 w-full sm:w-auto">
              <a href="#projects" className="bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5 shadow-lg shadow-slate-900/20 px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
                Explore Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#contact" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm hover:shadow px-8 py-4 rounded-full font-semibold transition-all w-full sm:w-auto flex justify-center">
                Get in touch
              </a>
            </div>
          </section>

          {/* ── Projects Showcase ── */}
          <section id="projects" className="space-y-12">
            <div className="text-center space-y-4 mb-20 animate-fade-in-up animation-delay-200">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">Selected Work</h2>
              <p className="text-slate-500 text-lg font-medium">A showcase of recent technical challenges and solutions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer"
                  className="group block animate-fade-in-up" style={{ animationDelay: `${(index + 2) * 200}ms` }}>
                  <article className="h-full bg-white border border-slate-200/60 rounded-[2rem] p-4 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-blue-200 hover:-translate-y-2 relative overflow-hidden flex flex-col">

                    {/* Hover Tint */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative h-72 w-full rounded-3xl bg-slate-100 overflow-hidden mb-8 border border-slate-200/50 group">

                      {/* Generates a live screenshot of the website using a free API instead of an iframe to bypass security blocks */}
                      <img
                        src={`https://image.thum.io/get/width/800/crop/800/noanimate/${project.link}`}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                        loading="lazy"
                        onError={(e) => {
                          e.target.src = "https://placehold.co/800x600/f1f5f9/94a3b8?text=Generating+Preview...";
                        }}
                      />

                      {/* Soft inner shadow overlay to frame it beautifully */}
                      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl z-10"></div>

                    </div>

                    <div className="px-4 pb-4 flex flex-col flex-1 relative z-30">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                          {formatProjectTitle(project.title)}
                        </h3>
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 text-lg transition-colors group-hover:text-blue-600">
                          ↗
                        </div>
                      </div>
                      <p className="text-slate-500 mb-8 flex-1 leading-relaxed font-medium line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map(t => (
                          <span key={t} className="px-4 py-1.5 bg-slate-50 text-slate-600 text-xs font-bold tracking-wide rounded-full border border-slate-200">
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
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-transparent blur-3xl -z-10 rounded-[3rem]"></div>
            <div className="bg-white border border-slate-200 rounded-[3rem] px-8 py-24 md:px-20 text-center shadow-xl shadow-slate-200/20 relative overflow-hidden">

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

              <div className="max-w-2xl mx-auto space-y-8 relative z-10">
                <h2 className="text-5xl font-black tracking-tight text-slate-900 mb-6">Let's build together.</h2>
                <p className="text-xl text-slate-500 font-medium pb-8">
                  Whether it's a new venture or scaling an existing system, I'm ready to collaborate on ambitious projects.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  {ObjectLinks.map(link => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-slate-50 hover:bg-slate-900 hover:text-white rounded-2xl flex items-center justify-center text-slate-600 border border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/20 hover:-translate-y-1"
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

        <footer className="border-t border-slate-200 py-12 text-center text-slate-400 font-medium text-sm mt-auto z-10 bg-white/50 backdrop-blur-sm">
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
