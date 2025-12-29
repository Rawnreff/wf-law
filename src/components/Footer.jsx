import { Link } from 'react-router-dom';
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaTiktok, FaFacebookF, FaYoutube, FaChevronRight } from 'react-icons/fa';
import logo from '../assets/logo-wflaw.JPG';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'Tentang Kami', path: '/about' },
        { name: 'Layanan', path: '/practice-areas' },
        { name: 'Tim Lawyer', path: '/lawyers' },
        { name: 'Kontak', path: '/contact' },
    ];

    const latestPosts = [
        { title: 'Tips Hukum: Cara Memilih Pengacara yang Tepat', date: '25 Dec 2025' },
        { title: 'Pentingnya Konsultasi Hukum Sebelum Memulai Bisnis', date: '20 Dec 2025' },
        { title: 'Hak-Hak Anda dalam Proses Hukum Pidana', date: '15 Dec 2025' },
    ];

    return (
        <footer className="text-gray-800" style={{ backgroundColor: '#F7F6F6' }}>
            {/* Main Footer */}
            <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Column 1: Logo & Copyright */}
                    <div>
                        <img
                            src={logo}
                            alt="WF Law Office"
                            className="h-16 w-auto mb-6"
                        />
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            WF Law Office – Advocate & Legal Consultant.
                            Menyediakan layanan hukum profesional dengan integritas dan keunggulan.
                        </p>
                        <p className="text-gray-600 text-sm">
                            © {currentYear} WF Law Office. All Rights Reserved.
                        </p>
                    </div>

                    {/* Column 2: About Us / Quick Links */}
                    <div>
                        <h4 className="text-gray-900 text-lg font-heading mb-6">About Us</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center gap-2"
                                    >
                                        <FaChevronRight className="w-3 h-3 text-primary" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Call Us */}
                    <div>
                        <h4 className="text-gray-900 text-lg font-heading mb-6">Call Us</h4>
                        <div className="space-y-4">
                            {/* WhatsApp Links */}
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                                    <FaWhatsapp className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm">+62 812-3456-7890</span>
                            </a>
                            <a
                                href="https://wa.me/6289876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                                    <FaWhatsapp className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm">+62 898-7654-3210</span>
                            </a>

                            {/* Address */}
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                    <FaMapMarkerAlt className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-sm">Jl. Contoh Alamat No. 123, Kec. Jetis, Kota Yogyakarta</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: New Post */}
                    <div>
                        <h4 className="text-gray-900 text-lg font-heading mb-6">New Post</h4>
                        <div className="space-y-4">
                            {latestPosts.map((post, index) => (
                                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                                    <Link
                                        to="#"
                                        className="text-gray-600 hover:text-primary transition-colors text-sm line-clamp-2"
                                    >
                                        {post.title}
                                    </Link>
                                    <p className="text-primary text-xs mt-1">{post.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="container mx-auto px-4 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-xs">
                            Designed by WF Law Office
                        </p>
                        <div className="flex gap-3">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                                <FaTiktok className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                                <FaYoutube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
