import React from 'react';
import { Link } from 'react-router-dom';

const HomeAboutSection = () => {
    return (
        <section className="py-16 md:py-24 bg-surface text-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Images (Grid/Overlapping) */}
                    <div className="relative h-[400px] md:h-[500px]">
                        {/* Image 1 - Top Left (Small) */}
                        <div className="absolute top-0 left-0 w-1/2 z-20 transform translate-y-8 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop"
                                alt="Meeting"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Image 2 - Main (Large) */}
                        <div className="absolute top-12 right-0 w-3/4 h-full z-10 rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop"
                                alt="Law Office"
                                className="w-full h-full object-cover bg-gray-200"
                            />
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="space-y-6">
                        {/* Welcome Text */}
                        <p className="text-secondary font-medium tracking-wide text-lg uppercase">
                            Welcome to Our Law Firm
                        </p>

                        {/* Main Heading */}
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
                            WF Law Office <br />
                            <span className="text-primary italic">Advocate & Legal Consultant</span>
                        </h2>

                        {/* Description - Adapted from clone */}
                        <div className="text-gray-600 space-y-4 text-justify leading-relaxed">
                            <p>
                                Firma Hukum "WF Law Office", Advokat dan Konsultan Hukum telah berdiri dengan dedikasi
                                untuk memberikan layanan hukum terbaik. Meskipun baru diresmikan, anggota kami memiliki
                                pengalaman luas dalam berbagai bidang hukum, mulai dari Pidana hingga Pelayanan Corporate Business.
                            </p>
                            <p>
                                Kami berkomitmen untuk memberikan solusi hukum yang tepat, efektif, dan profesional
                                bagi setiap klien kami.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="pt-4">
                            <Link to="/about" className="btn-primary">
                                COMPANY PROFILE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutSection;
