import './corporate.css';
import projects from './data/projects.json';
import ObjectLinks from './data/links.json';

// Traditional/Formal Icons
const Icons = {
  twitter: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90 hover:opacity-100 transition-opacity">
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.959-.576 1.7-1.485 2.047-2.574-.9.536-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
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
      <path d="M20 22.621l-3.521-6.795c-.007.004-1.974.97-2.28.316l-1.548-1.548c-.146-.146-.226-.341-.225-.548.001-.205.084-.4.232-.544l2.846-2.846c-.053-.086-.112-.17-.184-.242L5.807 1.056C5.59 .84 5.25.753 4.956.843c-3.155.955-4.956 3.655-4.956 6.847 0 7.828 7.373 15.201 15.201 15.201 2.373 0 5.564-1.267 6.847-4.956.126-.356-.002-.748-.283-.984l-1.765-1.33zm-4.8-14.868l1.647 1.648c.199.199.521.199.721 0 .199-.199.199-.521 0-.721l-1.648-1.647zm-1.62-.638l2.95 2.951c.199.199.521.199.721 0 .199-.199.199-.522 0-.721l-2.951-2.95c-.198-.198-.521-.198-.72 0-.2.198-.2.52 0 .72zm-1.028-.895l1.096 1.096c.199.199.521.199.72 0 .199-.199.199-.521 0-.721l-1.096-1.096c-.2-.198-.521-.198-.72 0-.199.199-.199.521 0 .721z" />
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
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#2B3A4A] font-serif selection:bg-[#B7955B] selection:text-white">

      {/* ── Firm Header (Wall Street Style) ── */}
      <header className="bg-[#0B1320] text-white border-b-[6px] border-[#B7955B] shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl tracking-widest uppercase font-bold">Borivoje Cvetković</h1>
            <span className="text-[#B7955B] text-xs font-sans tracking-[0.2em] font-medium uppercase mt-1">Capital Engineering & Architecture</span>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-sans tracking-widest uppercase font-semibold text-white/80">
            <a href="#firm" className="hover:text-[#B7955B] transition-colors">The Firm</a>
            <a href="#portfolio" className="hover:text-[#B7955B] transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#B7955B] transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 py-24">

        {/* ── Institution Hero ── */}
        <section id="firm" className="py-16 md:py-24 border-b border-gray-300">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0B1320] leading-[1.2] mb-8 relative">
                <span className="absolute -left-6 top-3 w-4 h-1 bg-[#B7955B]"></span>
                Structuring Scalable Digital Assets.
              </h2>
              <p className="text-xl text-[#4A5D70] leading-relaxed mb-10 font-serif">
                We design and engineer robust digital architecture for high-performing organizations. Specializing in highly secure, performant software systems that drive capital growth and operational efficiency.
              </p>
              <a href="#portfolio" className="inline-flex items-center justify-center h-12 px-10 bg-[#0B1320] text-white font-sans text-sm tracking-widest uppercase hover:bg-[#B7955B] transition-colors shadow-sm">
                View Holdings
              </a>
            </div>

            {/* Prestige Stats / Branding Box */}
            <div className="hidden lg:flex flex-col w-72 bg-white border border-gray-200 shadow-sm p-8 shrink-0">
              <div className="border-b border-gray-200 pb-4 mb-4">
                <p className="text-xs font-sans text-gray-400 tracking-widest uppercase mb-1">Founded</p>
                <p className="text-xl font-serif font-bold text-[#0B1320]">1992</p>
              </div>
              <div className="border-b border-gray-200 pb-4 mb-4">
                <p className="text-xs font-sans text-gray-400 tracking-widest uppercase mb-1">Focus</p>
                <p className="text-xl font-serif font-bold text-[#0B1320]">Software Architecture</p>
              </div>
              <div>
                <p className="text-xs font-sans text-gray-400 tracking-widest uppercase mb-1">Location</p>
                <p className="text-xl font-serif font-bold text-[#0B1320]">Global</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Structured Portfolio ── */}
        <section id="portfolio" className="py-24">
          <div className="flex justify-between items-end border-b-2 border-[#0B1320] pb-6 mb-12">
            <h2 className="text-3xl font-serif font-bold text-[#0B1320] uppercase tracking-widest">Client Holdings & Projects</h2>
            <span className="hidden md:inline-block font-sans text-sm tracking-widest text-[#B7955B] uppercase font-bold">Confidential & Public</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.map(project => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <article className="bg-white border border-gray-300 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative p-2">
                  <div className="border border-gray-200 p-6 flex flex-col h-full">

                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="font-sans text-xs tracking-widest uppercase text-[#B7955B] font-bold mb-2">Project Profile</p>
                        <h3 className="text-2xl font-serif font-bold text-[#0B1320] group-hover:text-[#B7955B] transition-colors">
                          {formatTitle(project.title)}
                        </h3>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-gray-300 flex justify-center items-center text-gray-400 group-hover:bg-[#0B1320] group-hover:text-white transition-colors">
                        <span className="text-sm font-sans shrink-0">↗</span>
                      </div>
                    </div>

                    {/* Screenshot presentation */}
                    <div className="relative h-56 bg-gray-100 overflow-hidden mb-8 border border-gray-300 group-hover:border-[#0B1320]/20 transition-colors">
                      <div className="absolute w-[400%] h-[400%] top-0 left-0" style={{ transform: 'scale(0.25)', transformOrigin: '0 0' }}>
                        <img
                          src={`https://image.thum.io/get/width/800/crop/800/noanimate/${project.link}`}
                          alt={project.title}
                          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://placehold.co/800x600/e2e8f0/64748b?text=Generating+Report...";
                          }}
                        />
                      </div>
                    </div>

                    <p className="text-[#4A5D70] font-serif leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>

                    <div className="border-t border-gray-200 pt-6">
                      <p className="font-sans text-xs tracking-widest uppercase text-gray-400 font-bold mb-3">Technology Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-[#0B1320]/5 text-[#0B1320] font-sans text-xs uppercase tracking-wider font-semibold border border-[#0B1320]/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section id="contact" className="py-24 border-t border-gray-300">
          <div className="bg-[#0B1320] p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
            {/* Subtle decorative border inside */}
            <div className="absolute inset-4 border border-white/10 pointer-events-none"></div>

            <h2 className="text-3xl font-serif font-bold text-white mb-6 uppercase tracking-widest relative z-10">Inquiries & Correspondences</h2>
            <p className="text-[#AABBC8] font-serif max-w-2xl text-lg mb-10 relative z-10">
              For consultation, prospective partnerships, or to request a full technical portfolio detailing past engineering ventures.
            </p>

            <div className="flex flex-wrap gap-6 justify-center relative z-10 m-auto mt-7">
              {ObjectLinks.map(link => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 bg-white/5 text-white border border-white/20 hover:bg-[#B7955B] hover:border-[#B7955B] transition-all duration-300"
                  title={link.name}
                >
                  {Icons[link.icon] || <span className="font-sans font-bold uppercase">{link.name.charAt(0)}</span>}
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-xs font-sans tracking-widest uppercase text-gray-500 font-semibold gap-4">
          <p>© {new Date().getFullYear()} Borivoje Cvetković. All Rights Reserved.</p>
          <p>Global Engineering Operations</p>
        </div>
      </footer>
    </div>
  );
}

export default CorporateApp;
