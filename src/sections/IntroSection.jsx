import React from 'react';

const IntroSection = () => {
    return (
        <section className="bg-white py-8 border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Left: Contact Info */}
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">WF Law Office</h4>
                                <p className="text-xs text-gray-500">Advocate & Legal Consultant</p>
                            </div>
                        </div>

                        <div className="hidden md:block w-px h-10 bg-gray-200"></div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 text-sm">Our Location</h4>
                                <p className="text-xs text-gray-500">Kec. Jetis, Kota Yogyakarta</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Socials */}
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-gray-600">Find Us:</span>
                        <div className="flex gap-2">
                            {['instagram', 'tiktok', 'facebook', 'youtube'].map((social) => (
                                <a key={social} href="#" className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition">
                                    {/* Placeholder Icon */}
                                    <span className="text-xs capitalize">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
