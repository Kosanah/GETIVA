import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer style={{ background: '#050505', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                            <img src="/src/assets/logo.png" alt="GETIVA" style={{ height: '30px' }} />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>GETIVA</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Empowering businesses with top-tier talent and helping professionals find their dream careers.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} className="social-icon">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '600' }}>Company</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '600' }}>Services</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                            <li><a href="#">Staffing</a></li>
                            <li><a href="#">Executive Search</a></li>
                            <li><a href="#">Consulting</a></li>
                            <li><a href="#">Remote Teams</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontWeight: '600' }}>Contact</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-muted)' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={18} /> hello@getiva.com
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={18} /> +1 (555) 123-4567
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MapPin size={18} /> 123 Business Ave, Tech City
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #222', paddingTop: '2rem', textAlign: 'center', color: '#666', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} GETIVA. All rights reserved.
                </div>
            </div>
            <style>{`
        .social-icon:hover { color: var(--primary) !important; }
        ul a:hover { color: white !important; }
      `}</style>
        </footer>
    )
}
