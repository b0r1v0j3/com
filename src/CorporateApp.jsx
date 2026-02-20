import './corporate.css';
import projects from './data/projects.json';
import ObjectLinks from './data/links.json';

const iconMap = {
    twitter: '𝕏',
    linkedin: 'in',
    youtube: '▶',
    facebook: 'f',
    instagram: 'ig',
    phone: '✆',
    mail: '✉'
};

function CorporateApp() {
    return (
        <div className="theme-corporate font-sans min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Ambient Background Gradients for Premium Feel */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="relative z-10">
                {/* Modern Header */}
                <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/50">
                    <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
                        <div className="text-xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-2">
                            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-sm">B</span>
                            Borivoje Cvetković
                        </div>
                        <nav className="hidden md:flex space-x-8 text-sm font-semibold text-slate-500">
                            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
                            <a href="#projects" className="hover:text-slate-900 transition-colors">Work</a>
                            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
                        </nav>
                    </div>
                </header>

                <main className="max-w-6xl mx-auto px-6 py-16 space-y-32">

                    {/* Hero Section */}
                    <section id="about" className="py-20 md:py-32 flex flex-col items-center text-center space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Available for new opportunities
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] max-w-4xl">
                            Engineering digital <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">products of the future.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
                            I am a software engineer focused on building robust, scalable applications with pixel-perfect, accessible user interfaces.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full sm:w-auto">
                            <a href="#projects" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto">
                                View Portfolio
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                            <a href="#contact" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold shadow-sm transition-all w-full sm:w-auto">
                                Get in touch
                            </a>
                        </div>
                    </section>

                    {/* Technical Projects Section */}
                    <section id="projects" className="space-y-16">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 pb-8">
                            <div className="space-y-3">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Selected Work</h2>
                                <p className="text-slate-500 font-medium">Showcasing recent technical achievements.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {projects.map(project => (
                                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                                    <article className="bg-white rounded-3xl p-2 shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col h-full">
                                        <div className="relative h-64 w-full rounded-2xl bg-slate-100 overflow-hidden mb-6">
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent z-10"></div>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="px-6 pb-6 flex flex-col flex-1">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors capitalize">
                                                    {project.title.replace('_', ' ')}
                                                </h3>
                                                <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                                                    ↗
                                                </span>
                                            </div>
                                            <p className="text-slate-500 mb-8 flex-1 leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {project.tech.map(t => (
                                                    <span key={t} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-semibold rounded-lg border border-slate-100">
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

                    {/* Premium Contact Section */}
                    <section id="contact" className="relative rounded-3xl bg-slate-900 overflow-hidden px-6 py-24 sm:px-12 text-center isolate">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>

                        <div className="max-w-2xl mx-auto space-y-8">
                            <h2 className="text-4xl font-bold text-white tracking-tight">Start a conversation</h2>
                            <p className="text-lg text-slate-300">
                                Interested in collaborating on a new project or looking to add a dedicated engineer to your team? Let's connect.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 pt-8">
                                {ObjectLinks.map(link => (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center text-white border border-white/10 hover:border-white/20 transition-all font-bold backdrop-blur-md group"
                                        title={link.name}
                                    >
                                        <span className="group-hover:scale-110 transition-transform">
                                            {iconMap[link.icon] || link.name.charAt(0)}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="border-t border-slate-200 mt-20 py-12 text-center bg-white/50 backdrop-blur-sm">
                    <p className="text-slate-500 font-medium">© {new Date().getFullYear()} Borivoje Cvetković. Built with React & Tailwind.</p>
                </footer>
            </div>

            <style>{`
                /* Add custom animations to the corporate theme */
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 1s ease-out forwards;
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </div>
    );
}

export default CorporateApp;
