import './corporate.css';
import projects from './data/projects.json';
import ObjectLinks from './data/links.json';
import { useState, useEffect } from 'react';

// Traditional/Formal Icons
const Icons = {
  twitter: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
      <path d="M21.582 6.186c-.23-.86-.906-1.538-1.768-1.768C18.253 4 12 4 12 4s-6.255 0-7.814.418c-.861.23-1.538.908-1.768 1.768C2 7.747 2 12 2 12s0 4.253.418 5.814c.23.86.906 1.538 1.768 1.768 1.559.418 7.814.418 7.814.418s6.253 0 7.814-.418c.862-.23 1.538-.908 1.768-1.768C22 16.253 22 12 22 12s0-4.253-.418-5.814zM9.996 15.005l.005-6.02 5.566 3.013-5.571 3.007z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
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
                  <p className="text-[9px] font-sans text-gray-500 tracking-[0.2em] uppercase mb-1 font-bold">Architect Born</p>
                  <p className="text-xl font-serif text-black font-semibold">1992</p>
                </div>
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
                      <div className="absolute w-[400%] h-[400%] top-0 left-0" style={{ transform: 'scale(0.25)', transformOrigin: '0 0' }}>
                        <img
                          src={project.customImage || `https://image.thum.io/get/width/800/crop/800/noanimate/${project.link}`}
                          alt={project.title}
                          className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity transform group-hover:scale-105 duration-700"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://placehold.co/800x600/ffffff/000000?text=Generating+Report...";
                          }}
                        />
                      </div>
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
          <p className="text-[9px] font-sans tracking-[0.2em] uppercase text-black font-bold">
            © {new Date().getFullYear()} Borivoje Cvetković. Printed in Global Operations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CorporateApp;
