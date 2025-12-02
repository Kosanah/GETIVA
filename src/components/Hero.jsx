import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <header style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Simple Static Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
            }}>
                {/* Subtle overlay for depth */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'radial-gradient(circle at 30% 50%, rgba(255, 87, 34, 0.05) 0%, transparent 50%)'
                }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ maxWidth: '800px' }}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(255, 87, 34, 0.1)',
                            color: 'var(--primary)',
                            borderRadius: '50px',
                            fontWeight: '600',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(255, 87, 34, 0.2)'
                        }}
                    >
                        #1 Staffing Agency
                    </motion.span>

                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 800 }}>
                        We <span className="text-gradient">get it done</span> for you.
                    </h1>

                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        Connect with top-tier talent and world-class companies. The modern recruiting platform designed for the future of work.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link
                            to="/contact"
                            className="btn-primary"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '1.1rem',
                                textDecoration: 'none'
                            }}
                        >
                            Find Talent <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/careers"
                            className="glass"
                            style={{
                                padding: '0.75rem 2rem',
                                borderRadius: '50px',
                                color: 'white',
                                fontWeight: '600',
                                fontSize: '1.1rem',
                                transition: 'all 0.2s',
                                display: 'inline-flex',
                                alignItems: 'center',
                                textDecoration: 'none'
                            }}
                        >
                            Find Work
                        </Link>
                    </div>
                </motion.div>
            </div>
        </header>
    )
}
