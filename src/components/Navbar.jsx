import React from 'react';

const Navbar = () => {
    return (
        <nav
            style={{
                position: 'relative',
                width: '100%',
                padding: '0',
                background: '#ffffff',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'center',
                height: '100px',
                alignItems: 'center',
            }}
        >
            <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/src/assets/Logo.jpg" alt="Logo" className="nav-logo" style={{ width: 'auto', display: 'block' }} />
                </div>

                {/* Navigation Links */}
                <div className="nav-links" style={{ fontSize: '0.95rem', fontWeight: '500', color: '#333' }}>
                    <a href="#about" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">About</a>
                    <a href="#experience" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">Experience</a>
                    <a href="#work" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">Portfolio</a>
                    <a href="#contact" style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }} className="nav-link">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
