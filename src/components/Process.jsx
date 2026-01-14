import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We begin with a deep dive into your academic history, strengths, and aspirations to build a unique profile.'
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'Developing a tailored roadmap including university selection, standardized test planning, and timeline management.'
    },
    {
        number: '03',
        title: 'Application',
        description: 'Crafting compelling personal statements, essays, and managing the complete application process.'
    },
    {
        number: '04',
        title: 'Decision',
        description: 'Analyzing offers and scholarship options to make the best financial and academic choice.'
    },
    {
        number: '05',
        title: 'Departure',
        description: 'Pre-departure briefing, visa counseling, and helping you settle into your new life.'
    }
];

const Process = () => {
    return (
        <section id="process" className="container">
            <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>The Journey</h2>
                <p style={{ color: 'var(--color-dim)', marginTop: '1rem' }}>Your path to excellence, simplified.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '2rem',
                    top: '0',
                    bottom: '0',
                    width: '1px',
                    background: 'var(--color-border)',
                    zIndex: -1
                }} />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{
                            display: 'flex',
                            gap: '3rem',
                            alignItems: 'flex-start',
                            paddingLeft: '2rem'
                        }}
                    >
                        <div style={{
                            minWidth: '4rem',
                            height: '4rem',
                            background: 'var(--color-bg)',
                            border: '1px solid var(--color-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50%',
                            fontWeight: 600,
                            transform: 'translateX(-50%)' // Center on line
                        }}>
                            {step.number}
                        </div>

                        <div style={{ paddingBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--color-dim)', lineHeight: 1.6, maxWidth: '600px' }}>{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Process;
