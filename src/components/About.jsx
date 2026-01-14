import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="container" style={{ alignItems: 'flex-start' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', lineHeight: 1.2, marginBottom: '2rem' }}
                    >
                        We bridge the gap between <span className="text-gradient" style={{ fontStyle: 'italic' }}>ambition</span> and <span className="text-gradient" style={{ fontStyle: 'italic' }}>achievement</span>.
                    </motion.h2>
                </div>
                <div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-dim)' }}
                    >
                        For over a decade, we have been arguably the most trusted voice in education counselling. We don't just process applications; we architect futures. By combining data-driven insights with personalized mentorship, we ensure every student finds their perfect academic home.
                    </motion.p>
                    <br />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-dim)' }}
                    >
                        Our philosophy is simple: Transparency, Excellence, and Result-Oriented Guidance.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default About;
