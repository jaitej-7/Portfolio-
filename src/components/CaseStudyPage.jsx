import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, User, Target, ChevronLeft } from 'lucide-react';
import { projects } from '../data/projects';
import { useSEO } from '../hooks/useSEO';
import { ReactLenis } from 'lenis/react';
import BottomNavBar from './BottomNavBar';
import logo from '../assets/Logo.jpg';
import ResumePDF from '../assets/Resume.pdf';
import './CaseStudyModal.css';

const PlaceholderComingSoon = ({ text, imageSrc }) => {
    const cleanText = text.replace(/placeholder:\s*/i, '').replace(/\[|\]/g, '').replace(/Placeholder:\s*/i, '').replace(/comingsoon_img:/i, '');
    
    return (
        <div className="w-full aspect-[16/9] rounded-3xl border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden bg-gray-50/50 shadow-inner group">
            {imageSrc ? (
                <>
                    <img src={imageSrc} className="absolute inset-0 w-full h-full object-cover filter blur-[6px] opacity-60 group-hover:blur-[10px] transition-all duration-500 scale-105" alt="Coming soon background" />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                </>
            ) : (
                <>
                    <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full filter blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-400/20 rounded-full filter blur-[80px] pointer-events-none"></div>
                </>
            )}
            
            <div className="relative z-10 flex flex-col items-center p-8 text-center">
                <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-sm border border-white/50 mb-4">
                    <span className="text-gray-800 font-bold tracking-widest uppercase text-xs">Coming Soon</span>
                </div>
                {cleanText && <span className="text-gray-600 font-medium text-sm max-w-md leading-relaxed bg-white/50 backdrop-blur-sm px-4 py-1 rounded-full">{cleanText}</span>}
            </div>
        </div>
    );
};

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
        <ReactLenis root options={{ lerp: 0.08, smoothWheel: true }}>
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

            <div className="max-w-5xl mx-auto min-h-screen md:min-h-0 pt-20 md:pt-24 md:mb-12 relative">
                <div className="modal-content-premium !h-auto !overflow-visible !px-6 md:!px-16 !py-6 md:!py-8">
                    {/* Hero Section */}
                    <motion.header 
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} 
                        className="hero-section-premium text-center flex flex-col items-center justify-center"
                    >
                        <div className="hero-content flex flex-col items-center">
                            {/* Breadcrumbs */}
                            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold mb-4 justify-center bg-gray-50 border border-gray-200 px-4 py-2 rounded-full shadow-sm text-gray-600 max-w-fit mx-auto">
                                <Link to="/#work" className="hover:text-[#0077b6] transition-colors flex items-center gap-1">
                                    <ChevronLeft size={16} /> <span>Portfolio</span>
                                </Link>
                                <span className="text-gray-300">/</span>
                                <span className="text-blue-600">{project.title}</span>
                            </div>
                            <h1 className="hero-title text-[32px] font-black mb-2">{project.title}</h1>
                            <p className="hero-tagline text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto text-center">{project.tagline}</p>
                        </div>
                        <motion.div 
                            className="hero-image-wrapper mt-2 rounded-lg overflow-hidden w-full border border-gray-100 shadow-sm"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                        </motion.div>
                    </motion.header>

                    {/* Meta Dashboard */}
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} 
                        className="meta-dashboard mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        <div className="meta-card bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 h-full">
                            <div className="meta-icon bg-blue-50/50 text-blue-600 p-4 rounded-xl flex-shrink-0">
                                <User size={24} />
                            </div>
                            <div className="meta-text flex-1">
                                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold block mb-1">Role</label>
                                <p className="text-gray-900 font-bold text-sm leading-snug">{project.role}</p>
                            </div>
                        </div>
                        <div className="meta-card bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 h-full">
                            <div className="meta-icon bg-blue-50/50 text-blue-600 p-4 rounded-xl flex-shrink-0">
                                <Calendar size={24} />
                            </div>
                            <div className="meta-text flex-1">
                                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold block mb-1">Timeline</label>
                                <p className="text-gray-900 font-bold text-sm leading-snug">{project.timeline}</p>
                            </div>
                        </div>
                        <div className="meta-card bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 h-full">
                            <div className="meta-icon bg-blue-50/50 text-blue-600 p-4 rounded-xl flex-shrink-0">
                                <Target size={24} />
                            </div>
                            <div className="meta-text flex-1">
                                <label className="text-[11px] uppercase tracking-widest text-gray-400 font-bold block mb-1">Objective</label>
                                <p className="text-gray-900 font-bold text-sm leading-snug">{project.goal}</p>
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
                                <div className="w-full mt-8 shadow-sm">
                                    {project.placeholders.challenge.startsWith('placeholder:') ? (
                                        <PlaceholderComingSoon text={project.placeholders.challenge} />
                                    ) : project.placeholders.challenge.startsWith('comingsoon_img:') ? (
                                        <PlaceholderComingSoon text={project.placeholders.challenge} imageSrc={project.placeholders.challenge.replace('comingsoon_img:', '')} />
                                    ) : (
                                        <img src={project.placeholders.challenge.replace('img:', '')} alt="Challenge Visualization" className="w-full h-auto rounded-3xl border border-gray-200" />
                                    )}
                                </div>
                            )}
                        </motion.section>

                        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block">
                            <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">THE APPROACH</div>
                            <h2 className="block-title text-3xl font-bold mb-6 text-gray-900">Strategic Decisions</h2>
                            <p className="block-text text-lg text-gray-600 leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: project.solution }}></p>
                            
                            {project.placeholders?.solution && (
                                <div className="w-full mt-8 shadow-sm">
                                    {project.placeholders.solution.startsWith('placeholder:') ? (
                                        <PlaceholderComingSoon text={project.placeholders.solution} />
                                    ) : project.placeholders.solution.startsWith('comingsoon_img:') ? (
                                        <PlaceholderComingSoon text={project.placeholders.solution} imageSrc={project.placeholders.solution.replace('comingsoon_img:', '')} />
                                    ) : (
                                        <img src={project.placeholders.solution.replace('img:', '')} alt="Solution Visualization" className="w-full h-auto rounded-3xl border border-gray-200" />
                                    )}
                                </div>
                            )}
                        </motion.section>

                        {project.decisions && (
                            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block">
                                <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">DESIGN DECISIONS</div>
                                <h2 className="block-title text-3xl font-bold mb-6 text-gray-900">Trade-offs & Iterations</h2>
                                <p className="block-text text-lg text-gray-600 leading-relaxed whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: project.decisions }}></p>
                                
                                {project.placeholders?.decisions && (
                                    <div className="w-full mt-8 shadow-sm">
                                        {project.placeholders.decisions.startsWith('placeholder:') ? (
                                            <PlaceholderComingSoon text={project.placeholders.decisions} />
                                        ) : project.placeholders.decisions.startsWith('comingsoon_img:') ? (
                                            <PlaceholderComingSoon text={project.placeholders.decisions} imageSrc={project.placeholders.decisions.replace('comingsoon_img:', '')} />
                                        ) : (
                                            <img src={project.placeholders.decisions.replace('img:', '')} alt="Decisions Visualization" className="w-full h-auto rounded-3xl border border-gray-200" />
                                        )}
                                    </div>
                                )}
                            </motion.section>
                        )}

                        {project.features && (
                            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block features-block">
                                <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">KEY CAPABILITIES</div>
                                <h2 className="block-title text-3xl font-bold mb-8 text-gray-900">The Solution</h2>
                                <div className="features-showcase grid grid-cols-1 md:grid-cols-6 gap-6">
                                    {project.features.map((feature, index) => {
                                        const total = project.features.length;
                                        let layoutClass = "md:col-span-3";
                                        
                                        if (total === 6) {
                                            layoutClass = "md:col-span-2";
                                        } else if (total === 5) {
                                            const pattern = ["md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-3", "md:col-span-3"];
                                            layoutClass = pattern[index];
                                        } else if (total === 3) {
                                            layoutClass = "md:col-span-2";
                                        }
                                        
                                        return (
                                            <div key={index} className={`feature-item-premium bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group ${layoutClass}`}>
                                                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full opacity-60 group-hover:scale-150 transition-transform duration-700 ease-out pointer-events-none"></div>
                                                
                                                <div className="relative z-10 h-full flex flex-col justify-between">
                                                    <div className="absolute top-[-10px] right-[-10px] text-blue-50/50 font-black text-8xl leading-none z-[-1] select-none pointer-events-none">
                                                        {(index + 1).toString().padStart(2, '0')}
                                                    </div>
                                                    
                                                    <div>
                                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 pr-8 leading-tight">{feature.title}</h3>
                                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </motion.section>
                        )}

                        {project.useCases && project.useCases.length > 0 && (
                            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={itemVariants} className="body-block">
                                <div className="block-label text-blue-500 text-sm font-bold tracking-widest mb-3">DEEP DIVE</div>
                                <h2 className="block-title text-3xl font-bold mb-8 text-gray-900">Complex Context, Simple Solutions</h2>
                                
                                <div className="space-y-12">
                                    {project.useCases.map((useCase, index) => (
                                        <div key={index} className="use-case-card bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                                            {/* Decorative indicator */}
                                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-blue-500"></div>
                                            
                                            <h3 className="text-2xl font-bold text-gray-900 mb-6">{useCase.title}</h3>
                                            
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="context-box bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-red-400"></span>
                                                        Complex Context
                                                    </h4>
                                                    <p className="text-gray-700 leading-relaxed">{useCase.complexContext}</p>
                                                </div>
                                                
                                                <div className="solution-box bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                                                    <h4 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                                                        Simple Solution
                                                    </h4>
                                                    <p className="text-gray-700 leading-relaxed">{useCase.simpleSolution}</p>
                                                </div>
                                            </div>
                                            
                                            {useCase.image && (
                                                <div className="mt-8">
                                                    {useCase.image.startsWith('placeholder:') ? (
                                                        <PlaceholderComingSoon text={useCase.image} />
                                                    ) : (
                                                        <img src={useCase.image} alt={useCase.title} className="w-full h-auto rounded-3xl border border-gray-200 shadow-sm" />
                                                    )}
                                                </div>
                                            )}
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
                                                <div key={index} className="w-full">
                                                    <PlaceholderComingSoon text={imgOrPlaceholder} />
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
                                <div className="impact-stats-grid grid grid-cols-4 md:grid-cols-2 gap-6">
                                    {project.impact.map((item, index) => {
                                        const firstWord = item.split(' ')[0];
                                        const rest = item.split(' ').slice(1).join(' ');
                                        const isLong = firstWord.length > 5;
                                        return (
                                        <div key={index} className="stat-card">
                                            <div className={`stat-value font-black text-blue-500 mb-2 break-words ${isLong ? 'text-3xl md:text-3xl' : 'text-4xl md:text-5xl'}`}>{firstWord}</div>
                                            <div className="stat-desc text-gray-600 font-medium">{rest}</div>
                                        </div>
                                        );
                                    })}
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
        </ReactLenis>
    );
};

export default CaseStudyPage;
