import React from 'react';
import { FaBalanceScale, FaMapMarkerAlt, FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="hidden md:block bg-primary text-white py-2">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Left: Company Info with Icons */}
                    <div className="flex items-center gap-6 text-sm">
                        <a
                            href="/"
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            {/* Balance Scale Icon */}
                            <FaBalanceScale className="w-4 h-4" />
                            <span>WF Law Office - Advocate & Legal Consultant</span>
                        </a>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            {/* Location Icon */}
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>Kec. Jetis, Kota Yogyakarta</span>
                        </a>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm">Find Us :</span>
                        <div className="flex gap-1">
                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <FaInstagram className="w-4 h-4 text-pink-400" />
                            </a>
                            {/* TikTok */}
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <FaTiktok className="w-4 h-4" />
                            </a>
                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <FaFacebookF className="w-4 h-4 text-blue-400" />
                            </a>
                            {/* YouTube */}
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <FaYoutube className="w-4 h-4 text-red-500" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
