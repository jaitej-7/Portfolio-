import React from 'react';
import '../styles/Work.css';
import Work1 from '../assets/Work1.png';
import Work2 from '../assets/work2.png';
import Work3 from '../assets/work 3.png';

const Work = () => {
    return (
        <section id="work" className="section work-section">
            <div className="container">
                <h2 className="work-title">
                    How I Turn Ideas Into Experiences
                </h2>
                <p className="work-description">
                    Every project I take on follows a five-step process—empathy, definition, ideation, design, and prototyping—that helps me uncover insights, shape concepts, and build intuitive digital products.
                </p>

                {/* Project 1 */}
                <div className="work-project">
                    <img
                        src={Work1}
                        alt="Project 1: Mobile App"
                        className="work-image"
                    />
                </div>

                {/* Project 2 */}
                <div className="work-project">
                    <img
                        src={Work2}
                        alt="Project 2: Laptop Mockup"
                        className="work-image"
                    />
                </div>

                {/* Project 3 */}
                <div className="work-project">
                    <img
                        src={Work3}
                        alt="Project 3: Mobile Screens"
                        className="work-image"
                    />
                </div>

                <div className="work-footer">
                    <button className="view-all-btn">
                        View More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Work;
