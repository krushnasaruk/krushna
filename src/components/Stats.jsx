import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: "Ivy League Admissions", value: "50+" },
    { label: "Scholarships Secured", value: "$2M+" },
    { label: "Visa Success Rate", value: "100%" },
    { label: "Years of Excellence", value: "12" },
];

const Stats = () => {
    return (
        <section style={{ padding: '4rem 0', borderBottom: '1px solid var(--color-border)' }}>
            <div className="container stats-grid">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            color: 'var(--color-accent)',
                            lineHeight: 1,
                            marginBottom: '0.5rem',
                            fontFamily: 'var(--font-display)'
                        }}>
                            {stat.value}
                        </h3>
                        <p style={{
                            color: 'var(--color-dim)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontSize: '0.8rem'
                        }}>
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
            <style>{`
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 4rem;
                    text-align: center;
                }
                @media (max-width: 768px) {
                    .stats-grid {
                        grid-template-columns: 1fr 1fr; /* Force 2 columns on mobile if they fit, or just 1fr for stack */
                        gap: 1.5rem;
                    }
                    /* If screen is VERY small, stack them */
                    @media (max-width: 400px) {
                        .stats-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                }
            `}</style>
        </section>
    );
};

export default Stats;
