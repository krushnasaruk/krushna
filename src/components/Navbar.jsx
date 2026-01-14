import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
const Navbar = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: isScrolled ? '1rem 3rem' : '2rem 3rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                mixBlendMode: isScrolled ? 'normal' : 'difference',
                color: isScrolled ? 'var(--color-text)' : 'white',
                background: isScrolled ? (theme === 'dark' ? 'rgba(5, 5, 5, 0.8)' : 'rgba(255, 255, 255, 0.8)') : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
                transition: 'all 0.4s ease'
            }}
        >
            <div className="logo" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em' }}>
                GUIDANCE.
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <ul style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {['About', 'Services', 'Process', 'Fame', 'FAQ', 'Contact'].map((item) => (
                        <li key={item}>
                            <Magnetic>
                                <a href={`#${item.toLowerCase() === 'fame' ? 'wall-of-fame' : item.toLowerCase()}`} className="nav-link" style={{ display: 'block', padding: '0.5rem' }}>{item}</a>
                            </Magnetic>
                        </li>
                    ))}
                </ul>
                <Magnetic>
                    <button
                        onClick={toggleTheme}
                        style={{
                            background: 'none',
                            border: '1px solid currentColor',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            color: 'inherit',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'none'
                        }}
                    >
                        {theme === 'dark' ? '☀' : '☾'}
                    </button>
                </Magnetic>
            </div>
        </motion.nav >
    );
};

export default Navbar;
