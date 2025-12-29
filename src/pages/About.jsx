import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../sections/CTASection';
import PageHeader from '../components/PageHeader';
import SubHeader from '../components/SubHeader';
import RevealOnScroll from '../components/RevealOnScroll';
import officeInterior from '../assets/office-interior.png';
import legalTeam from '../assets/legal-team.png';

const About = () => {
    return (
        <div className="pt-20">
            {/* Custom Header with no specific image to let the beautified default take over or use a subtle office one if preferred. 
                User asked to BEAUTIFY existing components. Using the default beautiful abstraction for consistency or the office image if it looks good as a header.
                Let's use the office-interior for a premium feel.
            */}
            <PageHeader
                title="Tentang Kami"
                subtitle="Dedikasi, Integritas, dan Keunggulan dalam Melayani Keadilan"
                backgroundImage={officeInterior}
            />

            <SubHeader pageName="Tentang Kami" />

            {/* Welcome Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column: Images Composition */}
                        <RevealOnScroll className="relative min-h-[500px] flex items-center justify-center lg:justify-start">
                            {/* Decorative Background Blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>

                            {/* Main Image */}
                            <div className="relative z-10 w-4/5 ml-auto shadow-2xl rounded-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                                <img src={legalTeam} alt="WF Law Office Team" className="w-full h-auto object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Floating Secondary Image */}
                            <div className="absolute -bottom-10 -left-4 md:left-0 z-20 w-3/5 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden border-8 border-white transform hover:-translate-y-2 transition-transform duration-500">
                                <img src={officeInterior} alt="Office Interior" className="w-full h-auto object-cover" />
                            </div>
                        </RevealOnScroll>

                        {/* Right Column: Content */}
                        <RevealOnScroll delay={200} className="lg:pl-8">
                            <h4 className="text-primary font-bold tracking-widest uppercase mb-2 text-sm">Profil Perusahaan</h4>
                            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8 leading-tight">
                                Selamat Datang di <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">WF Law Office</span>
                            </h2>

                            <div className="prose prose-lg text-gray-600 text-justify mb-10">
                                <p>
                                    <strong>WF Law Office</strong> adalah kantor Advokat dan Konsultan Hukum yang didirikan dengan komitmen kuat untuk memberikan pelayanan hukum yang prima, berintegritas, dan profesional. Sejak awal pendiriannya, kami telah mendedikasikan diri untuk menjadi mitra hukum terpercaya bagi individu maupun korporasi dalam menghadapi berbagai dinamika hukum di Indonesia.
                                </p>
                                <p>
                                    Kami memahami bahwa setiap permasalahan hukum memiliki keunikannya tersendiri. Oleh karena itu, WF Law Office mengedepankan pendekatan yang personal dan strategis, digabungkan dengan pemahaman mendalam terhadap regulasi hukum yang berlaku. Layanan kami mencakup berbagai spektrum hukum, mulai dari:
                                </p>
                                <ul className="list-none space-y-2 mt-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5"></div>
                                        <span><strong>Litigasi & Penyelesaian Sengketa:</strong> Penanganan kasus pidana, perdata, dan tata usaha negara di seluruh tingkat peradilan.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5"></div>
                                        <span><strong>Hukum Korporasi & Bisnis:</strong> Legal audit, pembuatan kontrak, merger & akuisisi, serta pendampingan hukum perusahaan.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5"></div>
                                        <span><strong>Hukum Keluarga & Waris:</strong> Konsultasi dan penyelesaian sengketa hukum keluarga dengan pendekatan yang bijaksana.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/layanan"
                                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300 tracking-wide uppercase text-sm"
                                >
                                    Lihat Layanan Kami
                                </Link>
                                <a
                                    href="https://wa.me/6289530540136"
                                    className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 uppercase text-sm flex items-center gap-2"
                                >
                                    <i className="far fa-envelope"></i>
                                    Konsultasi Gratis
                                </a>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            <RevealOnScroll><CTASection /></RevealOnScroll>
        </div>
    );
};

export default About;
