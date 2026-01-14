import React from 'react';
import { motion } from 'framer-motion';

const BackgroundOrbs = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            zIndex: -1,
            pointerEvents: 'none'
        }}>
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, rgba(0,0,0,0) 70%)', // Gold
                    borderRadius: '50%',
                    filter: 'blur(60px)'
                }}
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.5, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, rgba(30, 58, 138, 0.1) 0%, rgba(0,0,0,0) 70%)', // Deep Blue
                    borderRadius: '50%',
                    filter: 'blur(80px)'
                }}
            />
        </div>
    );
};

export default BackgroundOrbs;
