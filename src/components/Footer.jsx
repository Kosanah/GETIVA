import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer style={{ background: '#050505', padding: '4rem 0 2rem', borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                            <img src="logo.png" alt="GETIVA" style={{ height: '30px', width: '30px', borderRadius: '50%', objectFit: 'cover' }} />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>GETIVA</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            Empowering businesses with top-tier talent and helping professionals find their dream careers.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://www.linkedin.com/company/getiva-sparse/" target="_blank" rel="noopener" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} className="social-icon" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/getiva262211?s=11" target="_blank" rel="noopener" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} className="social-icon" aria-label="X">
                                <Twitter size={20} />
                            </a>
                            <a href="https://www.instagram.com/getiva_262211?igsh=MTEwYXV6NjJseHI4dg==" target="_blank" rel="noopener" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} className="social-icon" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
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
                                <Mail size={18} /> hr@getiva.com
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={18} /> +1 (945) 360-2904
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MapPin size={18} /> 117 S Lexington St Ste 100, Harrisonville, MO 64701
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
