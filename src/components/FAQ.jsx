import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const questions = [
    {
        question: "When should I start the application process?",
        answer: "Ideally, 12-18 months before your intended intake. This allows ample time for test preparation, profile building, and essay iterations."
    },
    {
        question: "Do you help with scholarships?",
        answer: "Yes. We have a dedicated team that identifies scholarship opportunities you are eligible for and assists in drafting specific scholarship essays."
    },
    {
        question: "Which countries do you specialize in?",
        answer: "Our primary expertise covers the USA, UK, Canada, Australia, and top European destinations (Germany, France, Netherlands)."
    },
    {
        question: "Is the initial consultation free?",
        answer: "Yes, we offer a complimentary 30-minute discovery call to understand your profile and explain how we can help you achieve your goals."
    }
];

const FAQ = () => {
    const [activeindex, setActiveIndex] = useState(null);

    return (
        <section id="faq" className="container">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '4rem', textAlign: 'center' }}>
                Common Queries
            </h2>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {questions.map((q, index) => (
                    <div key={index} style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <button
                            onClick={() => setActiveIndex(activeindex === index ? null : index)}
                            style={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '2rem 0',
                                background: 'none',
                                border: 'none',
                                color: 'inherit',
                                fontSize: '1.2rem',
                                textAlign: 'left',
                                cursor: 'none'
                            }}
                        >
                            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>{q.question}</span>
                            {activeindex === index ? <Minus size={20} /> : <Plus size={20} />}
                        </button>
                        <AnimatePresence>
                            {activeindex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    <p style={{ paddingBottom: '2rem', color: 'var(--color-dim)', lineHeight: 1.6 }}>
                                        {q.answer}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
