import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const students = [
    { id: 1, name: "Aarav Patel", uni: "Harvard University", degree: "Computer Science", year: "2028", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80", story: "Aarav built a solar-powered drone in high school. We helped him narrate his passion for sustainable tech." },
    { id: 2, name: "Sarah Khan", uni: "Oxford University", degree: "PPE", year: "2027", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80", story: "Sarah debate champion turned policy maker. Her essay on global economics was a standout." },
    { id: 3, name: "Rohan Mehta", uni: "Stanford University", degree: "Bioengineering", year: "2028", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", story: "Rohan's research on algae-based fuels impressed the admissions committee instantly." },
    { id: 4, name: "Priya Sharma", uni: "MIT", degree: "Robotics", year: "2029", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80", story: "Priya led her robotics team to nationals. We focused on her leadership journey." },
    { id: 5, name: "Vikram Rao", uni: "LSE", degree: "Economics", year: "2027", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80", story: "Vikram's analysis of local markets showed a depth of understanding rare for his age." },
    { id: 6, name: "Neha Gupta", uni: "Cambridge", degree: "Literature", year: "2028", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", story: "A published poet, Neha's portfolio was a piece of art in itself." },
    { id: 7, name: "Arjun Das", uni: "Yale", degree: "History", year: "2029", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80", story: "Arjun's documentary on local heritage won hearts and an acceptance letter." },
];

// Duplicate list for seamless loop
const marqueeStudents = [...students, ...students, ...students];

const WallOfFame = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);

    return (
        <section id="wall-of-fame" style={{ padding: '8rem 0', overflow: 'hidden', position: 'relative' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', lineHeight: 1 }}>HALL OF <span className="text-gradient">EXCELLENCE</span></h2>
                <p style={{ marginTop: '1rem', color: 'var(--color-dim)' }}>Click on a portrait to read their story.</p>
            </div>

            <div className="marquee-container" style={{ display: 'flex', width: '100%', overflow: 'hidden' }}>
                <motion.div
                    className="marquee-track"
                    animate={{ x: ["0%", "-50%"] }} // Move halfway because list is tripled
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    style={{ display: 'flex', gap: '2rem', width: 'max-content' }}
                    whileHover={{ animationPlayState: 'paused' }} // CSS handling for pause is smoother usually, but Framer works too
                    onHoverStart={() => { /* Pause logic if manual usually involves state, but simpler to use CSS class for pause */ }}
                >
                    {marqueeStudents.map((student, index) => (
                        <div
                            key={`${student.id}-${index}`}
                            className="student-card"
                            onClick={() => setSelectedStudent(student)}
                            style={{
                                width: '300px',
                                height: '450px',
                                position: 'relative',
                                flexShrink: 0,
                                cursor: 'pointer',
                                borderRadius: '12px',
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src={student.img}
                                alt={student.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'all 0.3s' }}
                            />
                            <div className="overlay" style={{
                                position: 'absolute', bottom: 0, left: 0, width: '100%',
                                padding: '1.5rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                opacity: 0, transition: 'opacity 0.3s'
                            }}>
                                <h3 style={{ color: 'white', margin: 0 }}>{student.name}</h3>
                                <p style={{ color: '#ccc', fontSize: '0.9rem' }}>{student.uni}</p>
                            </div>

                            <style>{`
                                .student-card:hover img { filter: grayscale(0%); transform: scale(1.05); }
                                .student-card:hover .overlay { opacity: 1; }
                                .marquee-track:hover { animation-play-state: paused !important; } 
                                /* Note: Framer Motion animates inline styles, so CSS hover pause acts on a wrapper usually, 
                                   or we accept that hover might not effectively pause JS animation without state. 
                                   Let's rely on Framer Motion's hover variants or a wrapping div. */
                            `}</style>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedStudent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedStudent(null)}
                        style={{
                            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
                            zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                background: 'var(--color-bg)', border: '1px solid var(--color-border)',
                                maxWidth: '900px', width: '100%', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
                                borderRadius: '20px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
                            }}
                        >
                            <div style={{ height: '100%', minHeight: '400px' }}>
                                <img src={selectedStudent.img} alt={selectedStudent.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{selectedStudent.name}</h2>
                                <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', marginBottom: '2rem' }}>{selectedStudent.uni} • {selectedStudent.year}</p>

                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ textTransform: 'uppercase', color: 'var(--color-dim)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Accepted For</h4>
                                    <p style={{ fontSize: '1.1rem' }}>{selectedStudent.degree}</p>
                                </div>

                                <div>
                                    <h4 style={{ textTransform: 'uppercase', color: 'var(--color-dim)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Success Story</h4>
                                    <p style={{ lineHeight: 1.6, color: 'var(--color-text)' }}>{selectedStudent.story}</p>
                                </div>

                                <button
                                    onClick={() => setSelectedStudent(null)}
                                    style={{
                                        marginTop: '3rem', padding: '1rem 2rem', background: 'transparent',
                                        border: '1px solid var(--color-border)', color: 'var(--color-text)',
                                        borderRadius: '50px', alignSelf: 'flex-start', cursor: 'pointer',
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => { e.target.style.background = 'var(--color-text)'; e.target.style.color = 'var(--color-bg)'; }}
                                    onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--color-text)'; }}
                                >
                                    Close Story
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default WallOfFame;
