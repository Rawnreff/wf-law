import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

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
        <>
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
                            className="md:hidden text-gray-800 p-2 z-50 relative"
                        >
                            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
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
                                <FaSearch className="w-5 h-5" />
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 z-[60] bg-black/50" onClick={() => setIsOpen(false)}>
                    <div 
                        className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl pt-6 px-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-800 p-2"
                        >
                            <FaTimes className="w-6 h-6" />
                        </button>

                        <div className="mt-12">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 text-sm font-medium transition-colors border-b border-gray-100 ${isActive(item.path) ? 'text-primary' : 'text-gray-800 hover:text-primary'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
