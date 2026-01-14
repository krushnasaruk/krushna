import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            window.scrollTo(0, 0);
        }, 3500); // 3.5s total time
        return () => clearTimeout(timer);
    }, []);

    const text = "GUIDANCE.";
    const letters = Array.from(text);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#050505',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 99999,
                        overflow: 'hidden'
                    }}
                >
                    <div style={{ overflow: 'hidden', display: 'flex' }}>
                        {letters.map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ y: 200 }}
                                animate={{ y: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: [0.6, 0.01, -0.05, 0.9],
                                    delay: index * 0.1
                                }}
                                style={{
                                    fontFamily: 'var(--font-display)',
                                    fontSize: 'clamp(3rem, 10vw, 8rem)',
                                    fontWeight: 800,
                                    color: '#fff',
                                    display: 'inline-block'
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
