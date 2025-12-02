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

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    return (
        <>
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
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', zIndex: 101 }}>
                        <img
                            src="logo.png"
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
                    <div className="mobile-toggle" style={{ display: 'none', zIndex: 101 }}>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            style={{
                                color: 'white',
                                background: 'transparent',
                                padding: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minWidth: '44px',
                                minHeight: '44px'
                            }}
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="mobile-backdrop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 98,
                        animation: 'fadeIn 0.3s ease'
                    }}
                />
            )}

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
                style={{
                    position: 'fixed',
                    top: 0,
                    right: isMobileMenuOpen ? 0 : '-100%',
                    width: '80%',
                    maxWidth: '300px',
                    height: '100vh',
                    background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
                    zIndex: 99,
                    padding: '5rem 2rem 2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    borderLeft: '1px solid var(--glass-border)',
                    boxShadow: '-5px 0 20px rgba(0, 0, 0, 0.5)',
                    transition: 'right 0.3s ease',
                    overflowY: 'auto'
                }}
            >
                <Link
                    to="/services"
                    className="mobile-nav-link"
                    style={{
                        padding: '1rem',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    Services
                </Link>
                <Link
                    to="/about"
                    className="mobile-nav-link"
                    style={{
                        padding: '1rem',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    About Us
                </Link>
                <Link
                    to="/careers"
                    className="mobile-nav-link"
                    style={{
                        padding: '1rem',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    Careers
                </Link>
                <Link
                    to="/contact"
                    className="mobile-nav-link"
                    style={{
                        padding: '1rem',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        borderRadius: '8px',
                        transition: 'all 0.2s',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    Contact
                </Link>
                <Link
                    to="/contact"
                    className="btn-primary"
                    style={{
                        textAlign: 'center',
                        marginTop: '1rem',
                        minHeight: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    Get Started
                </Link>
            </div>

            <style>{`
        .nav-link {
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: var(--primary);
        }
        
        .mobile-nav-link:hover {
          background: var(--glass-bg);
          color: var(--primary);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
          .container { padding: 0 1rem; }
        }
        
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
          .mobile-backdrop { display: none !important; }
        }
      `}</style>
        </>
    )
}
