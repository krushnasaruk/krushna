import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const lineVariants = {
        hidden: { y: isMobile ? 20 : 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: isMobile ? 0.8 : 1, ease: [0.6, 0.01, 0.05, 0.95] }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: isMobile ? 0.05 : 0.15, // Faster stagger on mobile
                delayChildren: 0.2
            }
        }
    };

    return (
        <section id="hero" style={{ minHeight: '100vh', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ marginTop: '0' }}
            >
                <div style={{ overflow: 'hidden' }}>
                    <motion.h1 variants={lineVariants} style={{ fontSize: 'clamp(2rem, 9vw, 11rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}>
                        ARCHITECTING
                    </motion.h1>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <motion.h1 variants={lineVariants} style={{ fontSize: 'clamp(2rem, 9vw, 11rem)', letterSpacing: '-0.02em', lineHeight: 0.9, textAlign: 'right', color: 'transparent', WebkitTextStroke: '1px var(--stroke-color)', fontFamily: 'var(--font-display)' }}>
                        ACADEMIC
                    </motion.h1>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <motion.h1 variants={lineVariants} style={{ fontSize: 'clamp(2rem, 9vw, 11rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}>
                        LEGACIES.
                    </motion.h1>
                </div>
            </motion.div>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                pointerEvents: 'none',
                zIndex: -1
            }} />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '1.5rem',
                    maxWidth: '300px',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-dim)',
                    fontSize: '0.9rem'
                }}
            >
                <p>Premium education counselling for students aiming for global excellence.</p>
            </motion.div>
        </section>
    );
};

export default Hero;
