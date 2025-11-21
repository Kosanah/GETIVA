import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                transition: 'all 0.3s ease',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                background: isScrolled ? 'var(--glass-bg)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                    <img
                        src="/src/assets/logo.png"
                        alt="GETIVA"
                        style={{
                            height: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            boxShadow: '0 0 15px rgba(255, 87, 34, 0.5)'
                        }}
                    />
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '1px' }}>GETIVA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/services" className="nav-link">Services</Link>
                    <Link to="/about" className="nav-link">About Us</Link>
                    <Link to="/careers" className="nav-link">Careers</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                    <Link to="/contact" className="btn-primary">Get Started</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" style={{ display: 'none' }}>
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ color: 'white', background: 'transparent' }}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="glass" style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderTop: '1px solid var(--glass-border)',
                    background: '#0a0a0a'
                }}>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/careers">Careers</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/contact" className="btn-primary" style={{ textAlign: 'center' }}>Get Started</Link>
                </div>
            )}

            <style>{`
        .nav-link {
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    )
}
