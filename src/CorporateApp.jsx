import './corporate.css';
import projects from './data/projects.json';
import ObjectLinks from './data/links.json';

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

function formatTitle(title) {
  if (title.toLowerCase() === 'podovi') return 'podovi';
  if (title === 'workers_united') return 'Workers United';
  return title.replace('_', ' ');
}

function CorporateApp() {
  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">

      {/* Hyper-minimalist Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">Borivoje Cvetković</div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
            <a href="#work" className="hover:text-black transition-colors">Work</a>
            <a href="#contact" className="hover:text-black transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-40 pb-32">

        {/* Extreme Clean Hero */}
        <header className="py-20 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
            Software Engineer.<br />
            Building digital <span className="text-gray-400">clarity.</span>
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed mb-12 max-w-2xl">
            I craft pristine, high-performance web applications and systems with an obsessive focus on user experience and architectural elegance.
          </p>
          <a href="#work" className="inline-flex items-center justify-center h-12 px-8 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors">
            View Projects
          </a>
        </header>

        {/* Projects Grid */}
        <section id="work" className="py-20 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-12 tracking-tight">Selected Independent Work</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map(project => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <article className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col h-full">

                  {/* Browser-like window frame */}
                  <div className="bg-gray-50 border-b border-gray-200 p-4 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                    </div>
                    <div className="mx-auto text-xs text-gray-400 font-mono bg-white px-3 py-1 rounded-md border border-gray-200 truncate max-w-[200px]">
                      {project.link.replace('https://', '')}
                    </div>
                    <div className="w-10"></div> {/* Spacer for centering */}
                  </div>

                  {/* Absolute clean iframe loading */}
                  <div className="relative h-64 bg-gray-100 overflow-hidden isolate relative group-hover:bg-white transition-colors">
                    <div className="absolute w-[400%] h-[400%] top-0 left-0" style={{ transform: 'scale(0.25)', transformOrigin: '0 0' }}>
                      <iframe
                        src={project.link}
                        className="w-full h-full border-none pointer-events-none"
                        loading="lazy"
                        title={project.title}
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                    {/* Shadow overlay to blend edges if needed */}
                    <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.03)] pointer-events-none"></div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold tracking-tight">
                        {formatTitle(project.title)}
                      </h3>
                      <svg className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
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

        {/* Contact Links */}
        <section id="contact" className="py-20 border-t border-gray-100">
          <h2 className="text-2xl font-bold mb-8 tracking-tight">Connect</h2>
          <div className="flex flex-wrap gap-4">
            {ObjectLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
                title={link.name}
              >
                {Icons[link.icon] || <span className="font-bold">{link.name.charAt(0)}</span>}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} Borivoje Cvetković.
      </footer>
    </div>
  );
}

export default CorporateApp;
