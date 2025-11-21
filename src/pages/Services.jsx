import ServicesComponent from '../components/Services'
import { motion } from 'framer-motion'

export default function Services() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '80px' }}
        >
            <div style={{ background: 'var(--bg-card)', padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our <span className="text-gradient">Expertise</span></h1>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        We provide end-to-end staffing solutions designed to help your business thrive in a competitive market.
                    </p>
                </div>
            </div>
            <ServicesComponent />
        </motion.div>
    )
}
