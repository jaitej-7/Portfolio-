import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Calendar, User, Target, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './CaseStudyModal.css';

const CaseStudyModal = ({ project, isOpen, onClose }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Track scroll progress within the modal
    const handleScroll = (e) => {
        const element = e.target;
        const totalHeight = element.scrollHeight - element.clientHeight;
        const status = (element.scrollTop / totalHeight) * 100;
        setScrollProgress(status);
    };

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 30 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.95, 
            y: 30,
            transition: { duration: 0.3, ease: "easeInOut" }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="modal-backdrop"
                    />
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onScroll={handleScroll}
                        className="modal-container-premium"
                    >
                        {/* Scroll Progress Bar */}
                        <div className="scroll-progress-container">
                            <motion.div 
                                className="scroll-progress-bar"
                                style={{ width: `${scrollProgress}%` }}
                            />
                        </div>

                        {/* Sticky Header Actions */}
                        <div className="modal-header-premium">
                            <motion.button 
                                whileHover={{ x: -5 }}
                                onClick={onClose} 
                                className="back-link-premium"
                            >
                                <ChevronLeft size={20} />
                                <span>Back to Explore</span>
                            </motion.button>
                            
                            <div className="header-center-title">
                                <span className="category-pill">{project.category}</span>
                            </div>

                            <motion.button
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={onClose}
                                className="close-btn-premium"
                            >
                                <X size={20} />
                            </motion.button>
                        </div>


                        <div className="modal-content-premium">

                            {/* Hero Section */}
                            <motion.header variants={itemVariants} className="hero-section-premium">
                                <div className="hero-content">
                                    <h1 className="hero-title">{project.title}</h1>
                                    <p className="hero-tagline">{project.tagline}</p>
                                </div>
                                <motion.div 
                                    variants={itemVariants}
                                    className="hero-image-wrapper"
                                >
                                    <img src={project.image} alt={project.title} />
                                    <div className="hero-image-overlay" />
                                </motion.div>
                            </motion.header>

                            {/* Meta Dashboard */}
                            <motion.div variants={itemVariants} className="meta-dashboard">
                                <div className="meta-card">
                                    <div className="meta-icon"><User size={20} /></div>
                                    <div className="meta-text">
                                        <label>Role</label>
                                        <p>{project.role}</p>
                                    </div>
                                </div>
                                <div className="meta-card">
                                    <div className="meta-icon"><Calendar size={20} /></div>
                                    <div className="meta-text">
                                        <label>Timeline</label>
                                        <p>{project.timeline}</p>
                                    </div>
                                </div>
                                <div className="meta-card">
                                    <div className="meta-icon"><Target size={20} /></div>
                                    <div className="meta-text">
                                        <label>Objective</label>
                                        <p>{project.goal}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Body Sections */}
                            <div className="body-grid-premium">
                                <motion.section variants={itemVariants} className="body-block">
                                    <div className="block-label">01 // THE CHALLENGE</div>
                                    <h2 className="block-title">Problem Statement</h2>
                                    <p className="block-text">{project.challenge}</p>
                                </motion.section>

                                <motion.section variants={itemVariants} className="body-block">
                                    <div className="block-label">02 // THE SOLUTION</div>
                                    <h2 className="block-title">Our Strategic Approach</h2>
                                    <p className="block-text">{project.solution}</p>
                                </motion.section>

                                {project.features && (
                                    <motion.section variants={itemVariants} className="body-block features-block">
                                        <div className="block-label">03 // KEY CAPABILITIES</div>
                                        <div className="features-showcase">
                                            {project.features.map((feature, index) => (
                                                <div key={index} className="feature-item-premium">
                                                    <div className="feature-number">{index + 1}</div>
                                                    <div className="feature-info">
                                                        <h3>{feature.title}</h3>
                                                        <p>{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}

                                {project.impact && (
                                    <motion.section variants={itemVariants} className="body-block impact-block">
                                        <div className="block-label">04 // OUTCOME & IMPACT</div>
                                        <div className="impact-stats-grid">
                                            {project.impact.map((item, index) => (
                                                <div key={index} className="stat-card">
                                                    <div className="stat-value">{item.split(' ')[0]}</div>
                                                    <div className="stat-desc">{item.split(' ').slice(1).join(' ')}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.section>
                                )}
                            </div>

                            {/* Enhanced Footer */}
                            <motion.footer variants={itemVariants} className="modal-footer-premium">

                                
                                <div className="project-navigation-hints">
                                    <button onClick={onClose} className="nav-hint">
                                        <span>Close to view more projects</span>
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.footer>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CaseStudyModal;
