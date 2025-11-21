import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
    const [formState, setFormState] = useState('idle') // idle, submitting, success

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormState('submitting')
        // Simulate network request
        setTimeout(() => {
            setFormState('success')
        }, 1500)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '80px' }}
        >
            <div className="container" style={{ padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Get in <span className="text-gradient">Touch</span></h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Information</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '50%' }}>
                                    <Mail color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email Us</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>hello@getiva.com</p>
                                </div>
                            </div>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '50%' }}>
                                    <Phone color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Call Us</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '50%' }}>
                                    <MapPin color="white" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Visit Us</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>123 Business Ave, Tech City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass" style={{ padding: '2rem', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
                        {formState === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: '1rem' }}
                            >
                                <CheckCircle size={64} color="var(--primary)" />
                                <h3 style={{ fontSize: '1.5rem' }}>Message Sent!</h3>
                                <p style={{ color: 'var(--text-muted)' }}>We'll get back to you within 24 hours.</p>
                                <button onClick={() => setFormState('idle')} className="btn-primary" style={{ marginTop: '1rem' }}>Send Another</button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
                                    <input required type="text" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'white' }} placeholder="Your Name" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
                                    <input required type="email" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'white' }} placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                                    <textarea required rows="5" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'white', fontFamily: 'inherit' }} placeholder="How can we help?"></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn-primary"
                                    disabled={formState === 'submitting'}
                                    style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: formState === 'submitting' ? 0.7 : 1 }}
                                >
                                    {formState === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
