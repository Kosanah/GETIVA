import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Briefcase, X, Upload, CheckCircle } from 'lucide-react'

const jobs = [
    { id: 1, title: "Senior React Developer", location: "Remote", type: "Full-time", salary: "$120k - $150k" },
    { id: 2, title: "Product Manager", location: "New York, NY", type: "Full-time", salary: "$130k - $160k" },
    { id: 3, title: "UX/UI Designer", location: "San Francisco, CA", type: "Contract", salary: "$80/hr" },
    { id: 4, title: "Data Scientist", location: "Austin, TX", type: "Full-time", salary: "$110k - $140k" },
    { id: 5, title: "DevOps Engineer", location: "Remote", type: "Full-time", salary: "$125k - $155k" },
]

export default function Careers() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedJob, setSelectedJob] = useState(null)
    const [applicationState, setApplicationState] = useState('idle') // idle, submitting, success

    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleApply = (e) => {
        e.preventDefault()
        setApplicationState('submitting')
        setTimeout(() => {
            setApplicationState('success')
        }, 1500)
    }

    const closeModal = () => {
        setSelectedJob(null)
        setApplicationState('idle')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '80px' }}
        >
            <div style={{ background: 'var(--bg-card)', padding: '4rem 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Find Your <span className="text-gradient">Dream Job</span></h1>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
                        Explore opportunities at top companies.
                    </p>

                    <div className="glass" style={{
                        display: 'flex',
                        alignItems: 'center',
                        maxWidth: '600px',
                        margin: '0 auto',
                        padding: '0.5rem 1rem',
                        borderRadius: '50px',
                        border: '1px solid var(--border-color)'
                    }}>
                        <Search color="var(--text-muted)" />
                        <input
                            type="text"
                            placeholder="Search by job title or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                flex: 1,
                                outline: 'none',
                                fontSize: '1rem'
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="container" style={{ padding: '4rem 0' }}>
                <div style={{ display: 'grid', gap: '1.5rem' }}>
                    {filteredJobs.map((job) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass"
                            style={{ padding: '2rem', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{job.title}</h3>
                                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16} /> {job.location}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Briefcase size={16} /> {job.type}</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                <span style={{ fontWeight: '600', color: 'var(--primary)' }}>{job.salary}</span>
                                <button onClick={() => setSelectedJob(job)} className="btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Apply Now</button>
                            </div>
                        </motion.div>
                    ))}
                    {filteredJobs.length === 0 && (
                        <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No jobs found matching your search.</p>
                    )}
                </div>
            </div>

            {/* Application Modal */}
            <AnimatePresence>
                {selectedJob && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0,0,0,0.8)', zIndex: 1000,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
                        }}
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="glass"
                            style={{
                                width: '100%', maxWidth: '500px', background: '#1a1a1a',
                                borderRadius: '16px', padding: '2rem', position: 'relative'
                            }}
                        >
                            <button onClick={closeModal} style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--text-muted)', background: 'transparent' }}>
                                <X />
                            </button>

                            {applicationState === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                    <CheckCircle size={64} color="var(--primary)" style={{ margin: '0 auto 1rem' }} />
                                    <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Application Sent!</h2>
                                    <p style={{ color: 'var(--text-muted)' }}>You successfully applied for <strong>{selectedJob.title}</strong>.</p>
                                </div>
                            ) : (
                                <>
                                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Apply for {selectedJob.title}</h2>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{selectedJob.location} • {selectedJob.type}</p>

                                    <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <input required type="text" placeholder="Full Name" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #333', background: '#000', color: 'white' }} />
                                        <input required type="email" placeholder="Email Address" style={{ padding: '0.8rem', borderRadius: '8px', border: '1px solid #333', background: '#000', color: 'white' }} />
                                        <div style={{ border: '1px dashed #333', padding: '2rem', borderRadius: '8px', textAlign: 'center', cursor: 'pointer', background: 'rgba(255,255,255,0.02)' }}>
                                            <Upload size={24} style={{ margin: '0 auto 0.5rem', color: 'var(--text-muted)' }} />
                                            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Upload Resume (PDF)</span>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn-primary"
                                            disabled={applicationState === 'submitting'}
                                            style={{ marginTop: '1rem', opacity: applicationState === 'submitting' ? 0.7 : 1 }}
                                        >
                                            {applicationState === 'submitting' ? 'Submitting...' : 'Submit Application'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
