import React from 'react';
import '../styles/Process.css';
import { motion } from 'framer-motion';
import EmpathyIcon from '../assets/Empathy.svg';
import DefineIcon from '../assets/Define.svg';
import IdeationIcon from '../assets/ideation.svg';
import DesignIcon from '../assets/Design.svg';
import TestingIcon from '../assets/Testing.svg';



const Process = () => {
    return (
        <section id="process" className="section process-section">
            <div className="container">
                <motion.h2
                    className="process-heading"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    My approach to creating intuitive digital experiences.
                </motion.h2>
                <motion.p
                    className="process-description"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    From understanding users to prototyping solutions, each step adds clarity and purpose.
                    This process helps me design products that feel natural and work the way people expect.
                </motion.p>

                <div className="process-grid">

                    {/* Card 1: Define / Understanding */}
                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-content">
                            <h3 className="card-heading">Understanding the Problem</h3>
                            <p className="card-text">Before touching a pixel, I dive into the why. What problem are we solving? For whom? And what's stopping them right now? Clarity here saves months later.</p>
                        </div>
                        <div className="card-visual-container">
                            <img src={EmpathyIcon} alt="Empathy" className="process-svg" />
                        </div>
                    </motion.div>

                    {/* Card 2: Define / Insights */}
                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-content">
                            <h3 className="card-heading">Turning Insights Into Clarity</h3>
                            <p className="card-text">I refine the chaos into something meaningful. Needs, pain points, goals — all mapped into a clear problem statement. This becomes the foundation every decision stands on.</p>
                        </div>
                        <div className="card-visual-container">
                            <img src={DefineIcon} alt="Define" className="process-svg" />
                        </div>
                    </motion.div>

                    {/* Card 3: Ideation / Exploring */}
                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-content">
                            <h3 className="card-heading">Exploring Possibilities Without Limits</h3>
                            <p className="card-text">I'm unleashing creativity! Sketching, brainstorming, and experimenting — no idea is too wild. The aim is clear: explore various paths before selecting the best one.</p>
                        </div>
                        <div className="card-visual-container">
                            <img src={IdeationIcon} alt="Ideation" className="process-svg" />
                        </div>
                    </motion.div>

                    {/* Card 4: Design / Crafting */}
                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-content">
                            <h3 className="card-heading">Crafting the Experience Intentionally</h3>
                            <p className="card-text">From wireframes to UI, ideas take shape. Layouts, interactions, and hierarchy are crafted with intention, ensuring a clean and intuitive experience that aligns with natural navigation.</p>
                        </div>
                        <div className="card-visual-container">
                            <img src={DesignIcon} alt="Design" className="process-svg" />
                        </div>
                    </motion.div>

                    {/* Card 5: Testing / Perfecting */}
                    <motion.div
                        className="process-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="card-content">
                            <h3 className="card-heading">Testing, Tweaking, Perfecting</h3>
                            <p className="card-text">I bring the design to life and see its behavior. Real interactions and feedback lead to improvements. The experience becomes something people can feel.</p>
                        </div>
                        <div className="card-visual-container">
                            <img src={TestingIcon} alt="Testing" className="process-svg" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Process;
