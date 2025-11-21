import Hero from '../components/Hero'
import Features from '../components/Features'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />

            {/* Quick Links Section */}
            <section style={{ padding: '4rem 0', background: 'var(--bg-card)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>For Companies</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                Find the perfect talent to scale your business. We specialize in IT, Healthcare, and Finance.
                            </p>
                            <Link to="/services" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                Hire Talent <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>For Candidates</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                                Browse thousands of job openings and find your next career move.
                            </p>
                            <Link to="/careers" className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', borderRadius: '50px', color: 'white', fontWeight: '600' }}>
                                Search Jobs <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Features />
        </motion.div>
    )
}
