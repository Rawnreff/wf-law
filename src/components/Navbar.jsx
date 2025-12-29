import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-wflaw.JPG';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Tentang Kami', path: '/about' },
        { name: 'Biaya Konsultasi', path: '/consultation-fees' },
        { name: 'Layanan', path: '/practice-areas' },
        { name: 'Klien Retainer', path: '/retainer-clients' },
        { name: 'Tim Lawyer', path: '/lawyers' },
        { name: 'Galeri', path: '/gallery' },
        { name: 'Info', path: '/info' },
        { name: 'Kontak', path: '/contact', highlight: true },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`} style={{ backgroundColor: '#F7F6F6' }}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="block">
                            <img
                                src={logo}
                                alt="WF Law Office"
                                className="h-12 md:h-16 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-800 p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`px-4 py-2 text-sm font-medium transition-colors ${item.highlight
                                    ? 'bg-primary text-white rounded-full hover:bg-primary-dark ml-2'
                                    : isActive(item.path)
                                        ? 'text-primary'
                                        : 'text-gray-800 hover:text-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Search Icon */}
                        <button className="ml-4 text-gray-800 hover:text-primary transition p-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4" style={{ backgroundColor: '#F7F6F6' }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 text-sm font-medium transition-colors ${isActive(item.path) ? 'text-primary' : 'text-gray-800 hover:text-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
