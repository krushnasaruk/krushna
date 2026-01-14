import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const lineVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    };

    return (
        <section id="hero" style={{ height: '100vh', padding: '0 3rem' }}>
            <motion.div
                className="hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ marginTop: '10vh' }}
            >
                <div style={{ overflow: 'hidden' }}>
                    <motion.h1 variants={lineVariants} style={{ fontSize: 'clamp(3rem, 10vw, 11rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}>
                        ARCHITECTING
                    </motion.h1>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <motion.h1 variants={lineVariants} style={{ fontSize: 'clamp(3rem, 10vw, 11rem)', letterSpacing: '-0.02em', lineHeight: 0.9, textAlign: 'right', color: 'transparent', WebkitTextStroke: '1px var(--stroke-color)', fontFamily: 'var(--font-display)' }}>
                        ACADEMIC
                    </motion.h1>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <motion.h1 variants={lineVariants} style={{ fontSize: 'clamp(3rem, 10vw, 11rem)', letterSpacing: '-0.02em', lineHeight: 0.9 }}>
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
                    bottom: '3rem',
                    left: '3rem',
                    maxWidth: '300px',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-dim)'
                }}
            >
                <p>Premium education counselling for students aiming for global excellence.</p>
            </motion.div>
        </section>
    );
};

export default Hero;
