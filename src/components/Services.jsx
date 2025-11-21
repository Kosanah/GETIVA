import { motion } from 'framer-motion'
import { Users, Briefcase, TrendingUp, Globe } from 'lucide-react'

const services = [
    {
        icon: <Users size={32} />,
        title: "Staffing Solutions",
        description: "Flexible staffing to meet your fluctuating business needs. We provide top talent on demand."
    },
    {
        icon: <Briefcase size={32} />,
        title: "Direct Hire",
        description: "Find your next permanent team member. We handle the sourcing and screening so you don't have to."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Executive Search",
        description: "Leadership matters. We identify and attract C-level executives who can drive your business forward."
    },
    {
        icon: <Globe size={32} />,
        title: "Global Recruitment",
        description: "Access a global talent pool. We help you build remote teams with the best talent worldwide."
    }
]

export default function Services() {
    return (
        <section id="services" style={{ padding: '6rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our <span className="text-gradient">Services</span></h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Comprehensive workforce solutions tailored to your business goals.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass"
                            style={{
                                padding: '2rem',
                                borderRadius: '16px',
                                transition: 'transform 0.3s, border-color 0.3s',
                                cursor: 'pointer'
                            }}
                            whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                        >
                            <div style={{
                                color: 'var(--primary)',
                                marginBottom: '1.5rem',
                                background: 'rgba(255, 87, 34, 0.1)',
                                width: 'fit-content',
                                padding: '1rem',
                                borderRadius: '12px'
                            }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
