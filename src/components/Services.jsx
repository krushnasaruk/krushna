import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: 'I',
        title: 'Admissions Strategy',
        description: 'Comprehensive roadmap design for Ivy League, Oxbridge, and Tier-1 Global Universities.'
    },
    {
        id: 'II',
        title: 'Academic Profiling',
        description: 'Curating research projects, internships, and extracurricular narratives that distinguish your application.'
    },
    {
        id: 'III',
        title: 'Essay Architecture',
        description: 'Guided storytelling workshops to craft compelling Personal Statements and Supplemental Essays.'
    },
    {
        id: 'IV',
        title: 'Financial Aid',
        description: 'Expert maneuvering of scholarships, grants, and bursary applications to maximize funding.'
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
                {services.map((service) => {
                    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

                    const handleMouseMove = (e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMousePosition({
                            x: e.clientX - rect.left,
                            y: e.clientY - rect.top,
                        });
                    };

                    return (
                        <motion.div
                            key={service.id}
                            className="service-item"
                            onMouseEnter={() => setHoveredService(service.id)}
                            onMouseLeave={() => setHoveredService(null)}
                            onMouseMove={handleMouseMove}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            style={{
                                borderBottom: '1px solid var(--color-border)',
                                padding: '3rem 2rem', // Added horizontal padding
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                cursor: 'none',
                                position: 'relative',
                                overflow: 'hidden',
                                background: 'transparent',
                                borderRadius: '12px', // Slight radius
                                transition: 'background 0.3s'
                            }}
                        >
                            {/* Glow Effect */}
                            {hoveredService === service.id && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        pointerEvents: 'none',
                                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.06), transparent 40%)`,
                                        zIndex: 0
                                    }}
                                />
                            )}

                            <div className="service-header" style={{ display: 'flex', gap: '4rem', alignItems: 'baseline', zIndex: 1 }}>
                                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--color-dim)' }}>/{service.id}</span>
                                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', margin: 0 }}>{service.title}</h3>
                            </div>

                            <div className="service-content" style={{ width: '400px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', zIndex: 1 }}>
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
                    )
                })}
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .service-item {
                        flex-direction: column !important;
                        gap: 1rem;
                        padding: 2rem 0 !important;
                    }
                    .service-header {
                        gap: 1rem !important;
                        margin-bottom: 1rem;
                    }
                    .service-content {
                        width: 100% !important;
                        justify-content: flex-start !important;
                        flex-direction: column-reverse;
                        align-items: flex-start !important;
                        gap: 1rem;
                    }
                    .service-content > div {
                        width: 100% !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;
