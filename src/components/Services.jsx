import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'University Admissions',
        description: 'Strategic guidance for Ivy League and top-tier university applications globally.'
    },
    {
        id: '02',
        title: 'Career Planning',
        description: 'Psychometric profiling and long-term career roadmap construction.'
    },
    {
        id: '03',
        title: 'Scholarship Aid',
        description: 'Comprehensive financial planning and scholarship application support.'
    },
    {
        id: '04',
        title: 'Visa Assistance',
        description: 'End-to-end support for student visa documentation and interviews.'
    }
];

const Services = () => {
    const [hoveredService, setHoveredService] = useState(null);

    return (
        <section id="services" className="container">
            <div style={{ marginBottom: '4rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '2rem' }}>
                <h2 style={{ fontSize: '2rem', color: 'var(--color-dim)' }}>Our Expertise</h2>
            </div>

            <div className="services-list">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className="service-item"
                        onMouseEnter={() => setHoveredService(service.id)}
                        onMouseLeave={() => setHoveredService(null)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        style={{
                            borderBottom: '1px solid var(--color-border)',
                            padding: '3rem 0',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            cursor: 'none'
                        }}
                    >
                        <div style={{ display: 'flex', gap: '4rem', alignItems: 'baseline' }}>
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-dim)' }}>/{service.id}</span>
                            <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', margin: 0 }}>{service.title}</h3>
                        </div>

                        <div style={{ width: '400px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <AnimatePresence>
                                {hoveredService === service.id && (
                                    <motion.button
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            background: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: '2rem'
                                        }}
                                    >
                                        <ArrowUpRight color="black" size={24} />
                                    </motion.button>
                                )}
                            </AnimatePresence>
                            <div style={{ width: '250px' }}>
                                <p style={{ color: 'var(--color-dim)', lineHeight: 1.6 }}>{service.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
