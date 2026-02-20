import './corporate.css';
import projects from './data/projects.json';
import ObjectLinks from './data/links.json';
import { useState, useEffect } from 'react';

// High-Grade Editorial Icons
const Icons = {
  twitter: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M11.42 0H11.5c6.305 0 11.42 5.115 11.42 11.42 0 6.305-5.115 11.42-11.42 11.42-2.025 0-3.921-.527-5.564-1.458L0 24l2.766-5.69A11.365 11.365 0 0 1 .08 11.42C.08 5.115 5.195 0 11.5 0h-.08zm0 1.914c-5.242 0-9.496 4.254-9.496 9.496 0 2.05.654 3.95 1.761 5.484l-.066.113L1.933 20.4l3.542-1.07.12-.066a9.458 9.458 0 0 0 5.825 1.986c5.242 0 9.496-4.254 9.496-9.496 0-5.242-4.254-9.496-9.496-9.496zM11.5 0zm0 0zM17.65 15.61a2.83 2.83 0 0 1-1.956 1.956c-.633.228-1.396.34-2.52-.083-2.083-.787-3.911-2.203-5.246-4.068-1.579-2.208-1.558-4.484-.527-5.876.331-.444.821-.659 1.341-.659.255 0 .5.04.721.121l.135.05c.294.133.483.411.564.726.234.908.647 2.145.717 2.37.112.359-.009.702-.279.917l-.801.62-.057.067c1.036 1.838 2.502 3.193 4.417 4.09l.06-.039.69-.766c.231-.252.569-.36.91-.255.437.135 1.763.513 2.5.765.343.117.625.334.743.649.034.09.062.207.062.338z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-5.141-5.929h21.035l-10.517 8.525-10.518-8.525zm7.33 6.942l3.188 2.583 3.193-2.588 5.617 6.963h-17.616l5.618-6.958zm7.565-.989l4.623-3.746v9.458l-4.623-5.712z" />
    </svg>
  )
};

function formatTitle(title) {
  if (title.toLowerCase() === 'podovi') return 'Podovi';
  if (title === 'workers_united') return 'Workers United';
  return title.replace('_', ' ');
}

function CorporateApp() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const d = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(d.toLocaleDateString('en-US', options).toUpperCase());

    // Add corporate theme class to HTML for global overrides (like scrollbar)
    document.documentElement.classList.add('theme-corporate');
    return () => {
      document.documentElement.classList.remove('theme-corporate');
    };
  }, []);

  return (
    <div className="bg-white min-h-screen text-black font-serif selection:bg-black selection:text-white pb-24 border-x-[16px] border-white">

      {/* ── Newspaper Top Meta Line ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 flex justify-between items-center border-b border-black/30 font-sans text-[9px] md:text-[10px] tracking-widest text-black/70">
        <span>VOL. I ... No. 1</span>
        <span className="hidden md:inline-block">BELGRADE, SERBIA</span>
        <span>{currentDate}</span>
      </div>

      {/* ── Firm Header (Editorial Style) ── */}
      <header className="bg-white text-black border-b-[4px] border-double border-black shadow-none sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8 flex flex-col items-center justify-center relative">

          <h1 className="font-serif text-4xl md:text-7xl font-black tracking-tighter text-center leading-none mb-3 transform hover:scale-[1.01] transition-transform duration-500">
            BORIVOJE CVETKOVIĆ
          </h1>
          <h2 className="text-black text-[10px] md:text-xs font-sans tracking-[0.25em] md:tracking-[0.4em] font-semibold uppercase italic opacity-90">
            Capital Engineering & Architecture
          </h2>

          <nav className="hidden md:flex gap-10 text-[11px] font-sans tracking-[0.15em] uppercase font-bold text-black mt-10">
            <a href="#firm" className="relative group overflow-hidden px-1">
              The Firm
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
            <a href="#portfolio" className="relative group overflow-hidden px-1">
              Portfolio
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
            <a href="#contact" className="relative group overflow-hidden px-1">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-16">

        {/* ── Institution Hero ── */}
        <section id="firm" className="py-12 border-b-2 border-black mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-serif font-black text-black leading-tight mb-8">
                Structuring Scalable<br className="hidden md:block" /> Digital Assets.
              </h2>
              <div className="text-lg md:text-xl text-gray-900 leading-relaxed mb-10 font-serif max-w-2xl relative">
                {/* Editorial Drop Cap */}
                <p>
                  <span className="float-left text-7xl font-black leading-[0.8] pr-2 pt-1">W</span>
                  e design and engineer robust digital architecture for high-performing organizations. Specializing in highly secure, performant software systems that drive capital growth and operational efficiency globally.
                </p>
              </div>
            </div>

            {/* Prestige Stats / Branding Box */}
            <div className="hidden lg:flex flex-col w-64 border-l border-black pl-8 shrink-0 justify-between py-2">
              <div>
                <div className="mb-6">
                  <p className="text-[9px] font-sans text-gray-500 tracking-[0.2em] uppercase mb-1 font-bold">Focus</p>
                  <p className="text-xl font-serif text-black font-semibold">Software Architecture</p>
                </div>
                <div>
                  <p className="text-[9px] font-sans text-gray-500 tracking-[0.2em] uppercase mb-1 font-bold">Coverage</p>
                  <p className="text-xl font-serif text-black font-semibold">Global</p>
                </div>
              </div>
              <a href="#portfolio" className="inline-flex items-center justify-between w-full h-10 px-4 border border-black text-black bg-white hover:bg-black hover:text-white font-sans text-[10px] tracking-widest uppercase transition-colors uppercase group pb-[1px]">
                <span>View Holdings</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── Structured Portfolio ── */}
        <section id="portfolio" className="py-8">
          <div className="border-t-4 border-black pt-4 mb-2 flex justify-between items-end">
            <h2 className="text-2xl md:text-3xl font-serif font-black text-black">CLIENT HOLDINGS</h2>
            <span className="font-sans text-[9px] tracking-[0.15em] text-gray-500 uppercase font-bold hidden md:block">Public & Confidential</span>
          </div>
          <p className="font-serif text-sm italic text-gray-600 mb-10 pb-4 border-b border-black">
            An index of recent architectural implementations and corporate software solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative ${index % 2 === 0 ? 'md:border-r md:border-black/20 md:pr-12' : ''}`}
              >
                <article className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="font-sans text-[9px] tracking-widest uppercase text-gray-500 font-bold mb-1">Index No. {String(index + 1).padStart(2, '0')}</p>
                      <h3 className="text-2xl font-serif font-black text-black group-hover:underline underline-offset-[6px] decoration-2">
                        {formatTitle(project.title)}
                      </h3>
                    </div>
                  </div>

                  {/* Screenshot presentation */}
                  <div className="bg-white overflow-hidden mb-5 border border-black relative">
                    <div className="w-full h-48 md:h-56 overflow-hidden relative grayscale contrast-125 sepia-[.1] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700">
                      {project.title === 'podovi' ? (
                        <div className="absolute inset-0">
                          <img
                            src={project.customImage}
                            alt={project.title}
                            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-700"
                            loading="lazy"
                          />
                        </div>
                      ) : (
                        <div className="absolute w-[400%] h-[400%] top-0 left-0" style={{ transform: 'scale(0.25)', transformOrigin: '0 0' }}>
                          <img
                            src={`https://image.thum.io/get/width/800/crop/800/noanimate/${project.link}`}
                            alt={project.title}
                            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-700"
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = "https://placehold.co/800x600/ffffff/000000?text=Generating+Report...";
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-800 font-serif leading-relaxed mb-6 flex-1 text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-1.5 py-0.5 text-black font-sans text-[9px] uppercase tracking-[0.05em] font-bold border border-black/20 group-hover:border-black transition-colors">
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
        <section id="contact" className="pt-20 border-t border-black/30 mt-16">
          <div className="text-center flex flex-col items-center bg-white relative max-w-2xl mx-auto py-12 border-t-[3px] border-b-[3px] border-black">

            <h2 className="text-2xl md:text-3xl font-serif font-black text-black mb-3">CORRESPONDENCE</h2>
            <p className="text-gray-700 font-serif text-base italic mb-8 px-4">
              For consultation, prospective partnerships, or to request a full technical portfolio.
            </p>

            <div className="flex flex-wrap gap-8 justify-center m-auto">
              {ObjectLinks.map(link => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-black hover:text-gray-500 hover:scale-110 transition-all duration-300 transform"
                  title={link.name}
                >
                  <div className="scale-[1.3] flex items-center justify-center">
                    {Icons[link.icon] || <span className="font-sans font-bold uppercase text-xs">{link.name.charAt(0)}</span>}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-white border-t-4 border-double border-black py-6 mt-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex justify-center text-center">
          <p className="text-[9px] font-sans tracking-[0.2em] uppercase text-black font-bold flex flex-col items-center gap-1.5 md:flex-row md:gap-3">
            <span>© 1992 [b0r1v0j3]</span>
            <span className="hidden md:inline-block">/</span>
            <span>PRINTED IN GLOBAL OPERATIONS.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CorporateApp;
