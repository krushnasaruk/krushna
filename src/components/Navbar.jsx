import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
const Navbar = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Services', 'Process', 'Fame', 'FAQ', 'Contact'];

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
                padding: isScrolled ? '1rem 1.5rem' : '2rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                mixBlendMode: isScrolled || isMobileMenuOpen ? 'normal' : 'difference',
                color: isScrolled || isMobileMenuOpen ? 'var(--color-text)' : 'white',
                background: isScrolled || isMobileMenuOpen ? (theme === 'dark' ? 'rgba(5, 5, 5, 0.95)' : 'rgba(255, 255, 255, 0.95)') : 'transparent',
                backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(12px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
                transition: 'all 0.4s ease'
            }}
        >
            <div className="logo" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.02em', zIndex: 102 }}>
                GUIDANCE.
            </div>

            {/* Desktop Menu */}
            <div className="mobile-hidden" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                <ul style={{ display: 'flex', gap: '2rem', fontFamily: 'var(--font-body)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {navItems.map((item) => (
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

            {/* Mobile Menu Toggle */}
            <div className="desktop-hidden mobile-nav-controls" style={{ zIndex: 102 }}>
                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'none',
                        border: '1px solid currentColor',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        color: 'inherit',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'none'
                    }}
                >
                    {theme === 'dark' ? '☀' : '☾'}
                </button>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ background: 'none', border: 'none', color: 'inherit', fontSize: '1.5rem', cursor: 'none' }}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            background: 'var(--color-bg)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 101,
                            padding: '2rem'
                        }}
                    >
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontFamily: 'var(--font-display)', fontSize: '2rem', textAlign: 'center' }}>
                            {navItems.map((item) => (
                                <motion.li
                                    key={item}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a
                                        href={`#${item.toLowerCase() === 'fame' ? 'wall-of-fame' : item.toLowerCase()}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{ display: 'block', padding: '1rem' }}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav >
    );
};

export default Navbar;
