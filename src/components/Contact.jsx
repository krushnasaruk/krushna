import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SocialLinks from './SocialLinks';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // NOTE: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
        emailjs.sendForm('service_id_placeholder', 'template_id_placeholder', form.current, 'public_key_placeholder')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setTimeout(() => setStatus(''), 5000);
            });
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem 0',
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid var(--color-border)',
        borderRadius: '0',
        color: 'var(--color-text)',
        fontSize: '1.5rem',
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        outline: 'none',
        transition: 'border-color 0.3s ease'
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>BEGIN YOUR JOURNEY</h2>
                    <p style={{ color: 'var(--color-dim)', fontSize: '1.1rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
                        The path to your dream university starts with a single conversation.
                    </p>
                </motion.div>

                <motion.div
                    className="contact-form-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    <form ref={form} onSubmit={sendEmail}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Student Name *"
                                    required
                                    style={inputStyle}
                                    className="hover-target"
                                />
                            </motion.div>
                            <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Email Address *"
                                    required
                                    style={inputStyle}
                                    className="hover-target"
                                />
                            </motion.div>
                        </div>
                        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} style={{ marginTop: '2rem' }}>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Target University / Program"
                                required
                                style={inputStyle}
                                className="hover-target"
                            />
                        </motion.div>
                        <motion.div variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }} style={{ marginTop: '2rem' }}>
                            <textarea
                                name="message"
                                placeholder="Tell us about your academic goals..."
                                required
                                rows="4"
                                style={{ ...inputStyle, resize: 'vertical' }}
                                className="hover-target"
                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.02, backgroundColor: 'var(--color-accent)', color: 'white', borderColor: 'var(--color-accent)' }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status === 'sending'}
                            className="hover-target"
                            style={{
                                width: '100%',
                                padding: '1.2rem',
                                background: 'transparent',
                                border: '1px solid var(--color-dim)',
                                color: 'var(--color-text)',
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                marginTop: '1rem',
                                opacity: status === 'sending' ? 0.7 : 1,
                                transition: 'all 0.3s'
                            }}
                        >
                            {status === 'sending' ? 'Submitting...' : 'Schedule Consultation'}
                        </motion.button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ marginTop: '1rem', color: '#4caf50', textAlign: 'center' }}
                            >
                                Message sent successfully!
                            </motion.p>
                        )}
                        {status === 'error' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ marginTop: '1rem', color: '#f44336', textAlign: 'center' }}
                            >
                                Failed to send message. Please try again.
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </div>

            <SocialLinks />

            <footer style={{ marginTop: '5rem', display: 'flex', justifyContent: 'space-between', padding: '0 2rem', color: 'var(--color-dim)', fontSize: '0.9rem', width: '100%', borderTop: '1px solid var(--color-border)', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <span>© 2026 Guidance Inc.</span>
                <span className="hover-target">Designed for Excellence</span>
            </footer>
        </section>
    );
};

export default Contact;
