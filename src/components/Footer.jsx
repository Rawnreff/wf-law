import React from 'react';
import { Link } from 'react-router-dom';
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
                                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 5l7 7-7 7" />
                                        </svg>
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
                                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M23.81 6.06q4.2 4.2 4.2 9.82 0 5.75-4.13 9.8T14 29.76q-3.56 0-6.62-1.69L0 30l2-7.19Q.13 19.63.13 15.88q0-5.75 4.06-9.82T14 2t9.82 4.06z" />
                                    </svg>
                                </div>
                                <span className="text-sm">+62 812-3456-7890</span>
                            </a>
                            <a
                                href="https://wa.me/6289876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M23.81 6.06q4.2 4.2 4.2 9.82 0 5.75-4.13 9.8T14 29.76q-3.56 0-6.62-1.69L0 30l2-7.19Q.13 19.63.13 15.88q0-5.75 4.06-9.82T14 2t9.82 4.06z" />
                                    </svg>
                                </div>
                                <span className="text-sm">+62 898-7654-3210</span>
                            </a>

                            {/* Address */}
                            <div className="flex items-start gap-3 text-gray-600 mt-4">
                                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 32">
                                    <path d="M10.75 31.38q-1.5-2.2-3.4-4.94t-2.73-3.88-1.87-2.78-1.4-2.34-.76-1.75-.5-1.85T0 12q0-5 3.5-8.5T12 0t8.5 3.5T24 12q0 1.06-.1 1.84t-.5 1.85-.74 1.75-1.41 2.34-1.88 2.78-2.71 3.88-3.41 4.93Q12.81 32 12 32t-1.25-.63z" />
                                </svg>
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
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M14 8.81q3 0 5.1 2.1t2.09 5.1-2.1 5.08T14 23.2t-5.1-2.1T6.82 16t2.1-5.1T14 8.82z" />
                                </svg>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 28 32">
                                    <path d="M28 13.12c-2.75 0-5.44-.85-7.67-2.45v11.17a10.16 10.16 0 1 1-8.77-10.07v5.62a4.66 4.66 0 1 0 3.27 4.45V0h5.5a7.63 7.63 0 0 0 3.48 6.4A7.57 7.57 0 0 0 28 7.66z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 17 32">
                                    <path d="M13.5 5.31q-1.13 0-1.78.38t-.85.94-.18 1.43V12H16l-.75 5.69h-4.56V32H4.8V17.7H0V12h4.8V7.5q0-3.56 2-5.53T12.13 0q2.68 0 4.37.25v5.06h-3z" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 36 32">
                                    <path d="M34.38 7.75q.18.75.34 1.88t.22 2.21.1 2.03.02 1.57V16q0 5.63-.68 8.31-.32 1.07-1.13 1.88t-1.94 1.12q-1.19.32-4.5.47t-6.06.22H18q-10.7 0-13.31-.69-2.44-.68-3.07-3-.31-1.18-.47-3.28T.94 17.5V16q0-5.56.68-8.25.32-1.12 1.13-1.94T4.69 4.7q1.18-.31 4.5-.47T15.25 4H18q10.69 0 13.31.69 1.13.31 1.94 1.12t1.13 1.94z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
