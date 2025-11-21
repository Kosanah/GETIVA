import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function Features() {
    return (
        <section style={{ padding: '6rem 0', background: '#111' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                    {/* Feature 1 */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ flex: 1, minWidth: '300px' }}
                        >
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Choose <span className="text-gradient">GETIVA</span>?</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                                We don't just fill positions; we build partnerships. Our data-driven approach ensures you get the right fit, every time.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {['AI-Powered Matching', '24/7 Support', 'Global Talent Network', 'Rapid Placement'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                                        <CheckCircle size={20} color="var(--primary)" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            style={{ flex: 1, minWidth: '300px', height: '400px', background: 'var(--glass-bg)', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}
                        >
                            {/* Placeholder for feature image/graphic */}
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                                alt="Team collaboration"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                            />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                                <div style={{ display: 'flex', gap: '2rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>98%</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Client Retention</p>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>5k+</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>Placements</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
