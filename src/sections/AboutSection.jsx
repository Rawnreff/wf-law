import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className="py-16 md:py-24" style={{ backgroundColor: '#F7F6F6' }}>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left: Images with overlap effect */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Law Office"
                                    className="w-48 md:w-56 h-64 md:h-72 object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                            {/* Overlapping Image */}
                            <div className="absolute top-20 left-32 md:left-40 z-20">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Meeting"
                                    className="w-64 md:w-80 h-48 md:h-64 object-cover rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 mt-32 lg:mt-0">
                        <p className="text-primary font-body text-sm uppercase tracking-wider mb-3">
                            Welcome to Our Law Firm
                        </p>
                        <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
                            WF Law Office – <span className="block text-gray-600 text-2xl md:text-3xl font-light mt-2">Advocate & Legal Consultant</span>
                        </h2>
                        <div className="text-gray-600 leading-relaxed space-y-4 mb-8 text-justify">
                            <p>
                                Firma Hukum "WF Law Office", Advokat dan Konsultan Hukum telah berdiri sejak Tahun 2016
                                Berdasarkan SK. MENTERI HUKUM DAN HAK ASASI MANUSIA RI.
                            </p>
                            <p>
                                Firma Hukum "WF Law Office" meskipun secara resmi baru berdiri sejak Tahun 2018,
                                namun "WF Law Office" dan anggotanya sudah berkiprah sejak Tahun 2016 baik dalam
                                Bidang Pidana sampai dengan Pelayanan dan atau Pendampingan Corporate Business…..
                                <Link to="/about" className="text-primary hover:underline">(selengkapnya)</Link>
                            </p>
                        </div>
                        <Link
                            to="/about"
                            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 uppercase text-sm tracking-wide"
                        >
                            SELENGKAPNYA COMPANY PROFIL
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
