import './corporate.css';
import projects from './data/projects.json';
import ObjectLinks from './data/links.json'; // Rename to avoid conflict with the array below

// Map icons to simple HTML entities/emoji or use Lucide react later
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
        <div className="theme-corporate font-sans min-h-screen">
            {/* Header / Nav */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-tight text-slate-800">
                        Borivoje Cvetković
                    </div>
                    <nav className="space-x-6 text-sm font-medium text-slate-600">
                        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                        <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">

                {/* Hero Section */}
                <section id="about" className="py-12 md:py-24 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                            Building Digital <span className="text-blue-600">Experiences.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                            Professional software engineer and systems architect specializing in robust, scalable web applications and intuitive user interfaces.
                        </p>
                        <div className="pt-4 flex gap-4 justify-center md:justify-start">
                            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
                                View Work
                            </a>
                            <a href="#contact" className="bg-white border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="space-y-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Featured Projects</h2>
                        <p className="text-slate-600">A selection of my recent professional work.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map(project => (
                            <div key={project.id} className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full">
                                <div className="h-48 bg-slate-100 border-b border-slate-200 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 capitalize">{project.title.replace('_', ' ')}</h3>
                                    <p className="text-slate-600 mb-6 flex-1">{project.description}</p>

                                    <div className="space-y-4 mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800"
                                        >
                                            View Project <span className="ml-1">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact/Socials Section */}
                <section id="contact" className="bg-slate-50 -mx-6 px-6 py-16 sm:rounded-2xl sm:mx-0 sm:px-12 border border-slate-100 text-center space-y-8">
                    <div className="max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Let's Connect</h2>
                        <p className="text-slate-600">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        {ObjectLinks.map(link => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-md border border-slate-200 transition-all font-bold"
                                title={link.name}
                            >
                                {iconMap[link.icon] || link.name.charAt(0)}
                            </a>
                        ))}
                    </div>
                </section>

            </main>

            {/* Footer */}
            <footer className="border-t border-slate-200 bg-white mt-12 py-8 text-center text-slate-500 text-sm">
                <p>© {new Date().getFullYear()} Borivoje Cvetković. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default CorporateApp;
