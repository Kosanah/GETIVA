import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '80px' }}
        >
            <div className="container" style={{ padding: '4rem 0' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>About <span className="text-gradient">GETIVA</span></h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Founded with a vision to revolutionize the staffing industry, GETIVA combines cutting-edge technology with a human-centric approach. We believe that the right people can change the world, and we are dedicated to connecting them with the organizations that need them most.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Our team of expert recruiters works tirelessly to understand the unique culture and needs of every client, ensuring a perfect match every time.
                        </p>
                    </div>
                    <div className="glass" style={{ height: '400px', borderRadius: '20px', overflow: 'hidden' }}>
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                            alt="Our Team"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
