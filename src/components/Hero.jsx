import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <header style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            {/* Video Background */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, background: '#000' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                    poster="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
                >
                    <source src="https://v.ftcdn.net/05/63/69/56/700_F_563695645_12345.mp4" type="video/mp4" />
                    {/* Note: The above URL is a placeholder. If it fails, the poster will show. 
               For a real project, we should host the video locally or use a paid CDN. 
               I'll use a reliable free sample if possible, or just the poster. */}
                </video>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(10,10,10,0.7), rgba(10,10,10,0.9))'
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
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                            Find Talent <ArrowRight size={20} />
                        </button>
                        <button className="glass" style={{
                            padding: '0.75rem 2rem',
                            borderRadius: '50px',
                            color: 'white',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            transition: 'background 0.2s'
                        }}>
                            Find Work
                        </button>
                    </div>
                </motion.div>
            </div>
        </header>
    )
}
