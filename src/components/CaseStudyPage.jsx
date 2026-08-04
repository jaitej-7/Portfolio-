import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, User, Target, ChevronLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { useSEO } from '../hooks/useSEO';
import BottomNavBar from './BottomNavBar';
import logo from '../assets/Logo.jpg';
import ResumePDF from '../assets/Resume.pdf';
import './CaseStudyModal.css';

const CaseStudyPage = () => {
    const { id } = useParams();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const lastScrollY = React.useRef(0);

    const project = projects.find(p => p.id === id);

    // Dynamic SEO for each case study
    useSEO({
        title: project ? `${project.title} | Jai Portfolio` : 'Project Not Found | Jai Portfolio',
        description: project ? project.description : 'UX Case study by Jai.',
        url: `https://jaidesigner.netlify.app/project/${id}`
    });

    // Track scroll progress within the page
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Handle nav visibility (hide on scroll down, show on scroll up)
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsNavVisible(false); // scrolling down
            } else if (currentScrollY < lastScrollY.current) {
                setIsNavVisible(true); // scrolling up
            }
            lastScrollY.current = currentScrollY;

            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const status = (currentScrollY / totalHeight) * 100;
            setScrollProgress(status);
        };
        
        window.addEventListener('scroll', handleScroll);
        // Reset scroll position on mount
        window.scrollTo(0, 0);
        
        // Hide scrollbar on mount
        document.documentElement.classList.add('no-scrollbar');
        document.body.classList.add('no-scrollbar');
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.classList.remove('no-scrollbar');
            document.body.classList.remove('no-scrollbar');
        };
    }, []);

    if (!project) return <div className="p-20 text-center font-sans">Project not found</div>;

    const itemVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } // smooth spring-like ease
        }
    };

    return (
        <div className="min-h-screen bg-white w-full overflow-x-hidden relative pb-32 md:pb-24">
            {/* Fixed Dotted Background */}
            <div 
                className="fixed inset-0 pointer-events-none z-0"
                style={{
                    backgroundImage: 'radial-gradient(#bcbcbd 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />

            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[60] bg-gray-200">
                <motion.div 
                    className="h-full bg-[#0077b6]"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Top Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-[100] py-4 md:py-6 flex justify-center pointer-events-none transition-all duration-300 ease-in-out bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm md:bg-transparent md:backdrop-blur-none md:border-none md:shadow-none ${!isNavVisible ? '-translate-y-full md:translate-y-0' : 'translate-y-0'}`}>
                <div className="w-full px-8 md:px-12 flex justify-between items-center">
                    <Link to="/#home" className="pointer-events-auto cursor-pointer">
                        <img src={logo} alt="Logo" className="w-[40px] h-[40px] md:w-[64px] md:h-[64px] object-contain hover:scale-105 transition-transform" />
                    </Link>

                    <a
                        href={ResumePDF}
                        target="_blank"
                        rel="noreferrer"
                        className="pointer-events-auto bg-[#0077b6] text-white px-6 py-2 rounded-full font-medium text-sm hover:bg-[#006497] transition-colors shadow-md"
                    >
                        Resume
                    </a>
                </div>
            </nav>

            <div className="max-w-5xl mx-auto min-h-screen md:min-h-0 pt-24 md:pt-32 md:mb-12 relative">
                <div className="modal-content-premium !h-auto !overflow-visible !px-6 md:!px-16 !py-8 md:!py-12">
                    {/* Hero Section */}
                    <motion.header 
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} 
                        className="hero-section-premium text-center flex flex-col items-center justify-center"
                    >
                        <div className="hero-content flex flex-col items-center">
                            {/* Breadcrumbs */}
                            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold mb-6 justify-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-full shadow-sm text-gray-600 max-w-fit mx-auto">
                                <Link to="/#work" className="hover:text-[#0077b6] transition-colors flex items-center gap-1">
                                    <ChevronLeft size={16} /> <span>Portfolio</span>
                                </Link>
                                <span className="text-gray-300">/</span>
                                <span className="text-blue-600">{project.title}</span>
                            </div>
                            <h1 className="hero-title text-[32px] font-black mb-4">{project.title}</h1>
                            <p className="hero-tagline text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-center">{project.tagline}</p>
                        </div>
                        <motion.div 
                            className="hero-image-wrapper mt-4 rounded-lg overflow-hidden w-full border border-gray-100 shadow-sm"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                        </motion.div>
                    </motion.header>

                    {/* Meta Dashboard */}
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} 
                        className="meta-dashboard mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <div className="meta-card bg-gray-50 p-6 rounded-xl border border-gray-100 flex items-start gap-4">
                            <div className="meta-icon text-blue-500 mt-1"><User size={24} /></div>
                            <div className="meta-text">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">Role</label>
                                <p className="text-gray-900 font-medium">{project.role}</p>
                            </div>
                        </div>
                        <div className="meta-card bg-gray-50 p-6 rounded-lg border border-gray-100 flex items-start gap-4">
                            <div className="meta-icon text-blue-500 mt-1"><Calendar size={24} /></div>
                            <div className="meta-text">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">Timeline</label>
                                <p className="text-gray-900 font-medium">{project.timeline}</p>
                            </div>
                        </div>
                        <div className="meta-card bg-gray-50 p-6 rounded-lg border border-gray-100 flex items-start gap-4">
                            <div className="meta-icon text-blue-500 mt-1"><Target size={24} /></div>
                            <div className="meta-text">
                                <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">Objective</label>
                                <p className="text-gray-900 font-medium">{project.goal}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Body Sections */}
                    <div className="body-grid-premium mt-16 space-y-16">
                        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block">
                            <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">THE CHALLENGE</div>
                            <h2 className="block-title text-3xl font-bold mb-6 text-gray-900">Context & Problem</h2>
                            <p className="block-text text-lg text-gray-600 leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: project.challenge }}></p>
                            
                            {project.placeholders?.challenge && (
                                <div className="w-full aspect-[16/9] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mt-8 shadow-sm">
                                    <span className="text-gray-400 font-bold tracking-wider uppercase text-sm px-6 text-center">{project.placeholders.challenge}</span>
                                </div>
                            )}
                        </motion.section>

                        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block">
                            <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">THE APPROACH</div>
                            <h2 className="block-title text-3xl font-bold mb-6 text-gray-900">Strategic Decisions</h2>
                            <p className="block-text text-lg text-gray-600 leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: project.solution }}></p>
                            
                            {project.placeholders?.solution && (
                                <div className="w-full aspect-[16/9] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mt-8 shadow-sm">
                                    <span className="text-gray-400 font-bold tracking-wider uppercase text-sm px-6 text-center">{project.placeholders.solution}</span>
                                </div>
                            )}
                        </motion.section>

                        {project.decisions && (
                            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block">
                                <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">DESIGN DECISIONS</div>
                                <h2 className="block-title text-3xl font-bold mb-6 text-gray-900">Trade-offs & Iterations</h2>
                                <p className="block-text text-lg text-gray-600 leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: project.decisions }}></p>
                                
                                {project.placeholders?.decisions && (
                                    <div className="w-full aspect-[16/9] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mt-8 shadow-sm">
                                        <span className="text-gray-400 font-bold tracking-wider uppercase text-sm px-6 text-center">{project.placeholders.decisions}</span>
                                    </div>
                                )}
                            </motion.section>
                        )}

                        {project.features && (
                            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block features-block">
                                <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">KEY CAPABILITIES</div>
                                <h2 className="block-title text-3xl font-bold mb-8 text-gray-900">The Solution</h2>
                                <div className="features-showcase grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {project.features.map((feature, index) => (
                                        <div key={index} className="feature-item-premium bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="feature-number text-blue-100 font-black text-5xl mb-4 leading-none">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </div>
                                            <div className="feature-info">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {project.showcase && (
                            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block showcase-block">
                                <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">FINAL SOLUTION</div>
                                <h2 className="block-title text-3xl font-bold mb-8 text-gray-900">Visual Showcase</h2>
                                <div className="showcase-grid grid grid-cols-1 gap-8">
                                    {project.showcase.map((imgOrPlaceholder, index) => {
                                        if (typeof imgOrPlaceholder === 'string' && imgOrPlaceholder.startsWith('placeholder:')) {
                                            return (
                                                <div key={index} className="w-full aspect-[16/9] bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center shadow-sm">
                                                    <span className="text-gray-400 font-bold tracking-wider uppercase text-sm px-6 text-center">{imgOrPlaceholder.replace('placeholder:', '').trim()}</span>
                                                </div>
                                            );
                                        }
                                        return (
                                            <div key={index} className="showcase-image rounded-lg overflow-hidden shadow-sm border border-gray-200">
                                                <img src={imgOrPlaceholder} alt={`Showcase ${index + 1}`} className="w-full h-auto object-cover" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.section>
                        )}

                        {project.impact && (
                            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block impact-block bg-gray-50 border border-gray-100 text-gray-900 p-8 md:p-12 rounded-lg mx-[-1.5rem] md:mx-0">
                                <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">THE OUTCOME</div>
                                <h2 className="block-title text-3xl font-bold mb-8 text-gray-900">Impact & Results</h2>
                                <div className="impact-stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {project.impact.map((item, index) => (
                                        <div key={index} className="stat-card">
                                            <div className="stat-value text-4xl md:text-5xl font-black text-blue-500 mb-2">{item.split(' ')[0]}</div>
                                            <div className="stat-desc text-gray-600 font-medium">{item.split(' ').slice(1).join(' ')}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {project.learnings && (
                            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block">
                                <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">REFLECTIONS</div>
                                <h2 className="block-title text-3xl font-bold mb-6 text-gray-900">Learnings & Next Steps</h2>
                                <p className="block-text text-lg text-gray-600 leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: project.learnings }}></p>
                            </motion.section>
                        )}
                    </div>

                    {/* Footer */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="modal-footer-premium text-center">
                        <div className="footer-cta-card">
                            <h3>Interested in working together?</h3>
                            <p>Let's build something great.</p>
                            <a href="mailto:hello@example.com" className="primary-cta-btn">
                                Get in touch
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Nav Bar from Main Page */}
            <BottomNavBar isCaseStudy={true} />
        </div>
    );
};

export default CaseStudyPage;
