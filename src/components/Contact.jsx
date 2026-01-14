import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center' }}>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <p style={{ fontSize: '1.2rem', color: 'var(--color-dim)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Ready to start?
                </p>
                <h2 style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', lineHeight: 1 }}>
                    LET'S TALK
                </h2>
                <div style={{ marginTop: '3rem' }}>
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1.5rem 4rem',
                            fontSize: '1.2rem',
                            background: 'transparent',
                            border: '1px solid var(--color-text)',
                            color: 'var(--color-text)',
                            borderRadius: '50px',
                            fontFamily: 'var(--font-body)',
                            cursor: 'none'
                        }}
                    >
                        Schedule Consultation
                    </motion.button>
                </div>
            </motion.div>

            <footer style={{ position: 'absolute', bottom: '2rem', width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 3rem', color: 'var(--color-dim)', fontSize: '0.9rem' }}>
                <span>© 2026 Guidance Inc.</span>
                <span>Made with <span style={{ color: 'white' }}>React</span></span>
            </footer>
        </section>
    );
};

export default Contact;
