import './corporate.css';
import projects from './data/projects.json';
import ObjectLinks from './data/links.json';
import { useState, useEffect } from 'react';

// High-Grade Editorial Icons
const Icons = {
  twitter: (
    <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 576 512" width="20" height="20" fill="currentColor">
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 496 512" width="20" height="20" fill="currentColor">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 320 512" width="20" height="20" fill="currentColor">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
    </svg>
  )
};

function formatTitle(title) {
  if (title.toLowerCase() === 'podovi') return 'Podovi';
  if (title === 'workers_united') return 'Workers United';
  return title.replace('_', ' ');
}

function CorporateApp({ onSwitchTheme }) {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const d = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setCurrentDate(d.toLocaleDateString('en-US', options).toUpperCase());

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    // Add corporate theme class to HTML for global overrides (like scrollbar)
    document.documentElement.classList.add('theme-corporate');
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.classList.remove('theme-corporate');
      document.documentElement.style.scrollBehavior = 'auto';
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-white min-h-screen text-black font-serif selection:bg-black selection:text-white pb-24 border-x-[16px] border-white relative">
      <div className="corporate-noise"></div>

      {/* ── Newspaper Top Meta Line ── */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-2 flex justify-between items-center border-b border-black/30 font-sans text-[9px] md:text-[10px] tracking-widest text-black/70 sticky top-0 z-[60] bg-white/90 backdrop-blur-sm shadow-[0_4px_30px_rgba(255,255,255,1)]">
        <span>VOL. I ... No. 1</span>
        <span className="hidden md:inline-block">BELGRADE, SERBIA</span>
        <div className="flex items-center gap-6">
          <span>{currentDate}</span>
          {onSwitchTheme && (
            <button
              onClick={onSwitchTheme}
              className="font-sans text-[9px] tracking-widest uppercase font-bold text-black border-l border-black/30 pl-4 hover:opacity-50 transition-opacity cursor-pointer bg-transparent p-0"
            >
              DARK MODE
            </button>
          )}
        </div>
      </div>

      {/* ── Firm Header (Editorial Style) ── */}
      <header className="bg-white/95 backdrop-blur shadow-none sticky top-[34px] z-50 border-b-[3px] border-black transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8 flex flex-col items-center justify-center relative inner-header">
          <div className="absolute bottom-[-6px] left-0 right-0 h-[1px] bg-black"></div>

          <h1 className="font-serif text-4xl md:text-7xl font-black tracking-tighter text-center leading-none mb-3 transform hover:scale-[1.01] transition-transform duration-700">
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
        <section id="firm" className="py-12 border-b-2 border-black mb-16 reveal-on-scroll">
          <div className="flex flex-col md:flex-row gap-12 items-stretch">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-serif font-black text-black leading-[1.1] mb-8 pr-12">
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
        <section id="portfolio" className="py-8 reveal-on-scroll">
          <div className="border-t-[3px] border-black pt-4 mb-2 flex justify-between items-end relative">
            <div className="absolute top-[-7px] left-0 right-0 h-[1px] bg-black"></div>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-black">CLIENT HOLDINGS</h2>
            <span className="font-sans text-[9px] tracking-[0.15em] text-gray-500 uppercase font-bold hidden md:block">Public & Confidential</span>
          </div>
          <p className="font-serif text-sm italic text-gray-600 mb-10 pb-4 border-b border-black">
            An index of recent architectural implementations and corporate software solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-y-16">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative reveal-on-scroll ${index % 2 === 0 ? 'md:border-r md:border-black/20 md:pr-8 delay-100' : 'md:pl-8 delay-200'} `}
              >
                <article className="flex flex-col h-full transform transition-transform duration-500 hover:-translate-y-1">
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
                        <div className="absolute w-[400%] h-[400%] top-0 left-0 bg-[#ebebeb]" style={{ transform: 'scale(0.25)', transformOrigin: '0 0' }}>
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
        <section id="contact" className="pt-20 border-t border-black/30 mt-16 reveal-on-scroll">
          <div className="text-center flex flex-col items-center bg-white relative max-w-2xl mx-auto py-12 border-t-[3px] border-b-[3px] border-black">
            <div className="absolute top-[-7px] left-0 right-0 h-[1px] bg-black"></div>
            <div className="absolute bottom-[-7px] left-0 right-0 h-[1px] bg-black"></div>

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
            © 1992 Borivoje Cvetković. Printed in Global Operations.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default CorporateApp;
