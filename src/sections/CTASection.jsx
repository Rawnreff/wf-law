import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-wflaw.JPG';

const CTASection = () => {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#F7F6F6' }}>
            {/* Globe wireframe pattern background */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="400" cy="200" r="180" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    <ellipse cx="400" cy="200" rx="180" ry="60" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    <ellipse cx="400" cy="200" rx="180" ry="120" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    <ellipse cx="400" cy="200" rx="60" ry="180" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    <ellipse cx="400" cy="200" rx="120" ry="180" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    <line x1="220" y1="200" x2="580" y2="200" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                    <line x1="400" y1="20" x2="400" y2="380" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left: Logo and Text */}
                    <div className="flex items-center gap-6">
                        <img
                            src={logo}
                            alt="WF Law Office"
                            className="h-16 md:h-20 w-auto rounded-lg"
                        />
                        <div>
                            <p className="text-gray-900 text-lg md:text-xl font-heading mb-2">
                                We can help you find proper and effective legal solutions!
                            </p>
                            <p className="text-gray-600 text-sm">
                                www.wf-lawoffice.com
                            </p>
                        </div>
                    </div>

                    {/* Right: Button and Social */}
                    <div className="flex items-center gap-6">
                        <Link
                            to="/contact"
                            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 uppercase text-sm tracking-wide"
                        >
                            CONSULT NOW
                        </Link>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 hover:bg-primary hover:text-white text-primary transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M14 8.81q3 0 5.1 2.1t2.09 5.1-2.1 5.08T14 23.2t-5.1-2.1T6.82 16t2.1-5.1T14 8.82z" />
                                </svg>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 hover:bg-primary hover:text-white text-primary transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 28 32">
                                    <path d="M28 13.12c-2.75 0-5.44-.85-7.67-2.45v11.17a10.16 10.16 0 1 1-8.77-10.07v5.62a4.66 4.66 0 1 0 3.27 4.45V0h5.5a7.63 7.63 0 0 0 3.48 6.4A7.57 7.57 0 0 0 28 7.66z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 hover:bg-primary hover:text-white text-primary transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 17 32">
                                    <path d="M13.5 5.31q-1.13 0-1.78.38t-.85.94-.18 1.43V12H16l-.75 5.69h-4.56V32H4.8V17.7H0V12h4.8V7.5q0-3.56 2-5.53T12.13 0q2.68 0 4.37.25v5.06h-3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
