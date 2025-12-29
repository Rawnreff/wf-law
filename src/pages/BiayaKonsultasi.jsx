import React from 'react';
import { FaWhatsapp, FaComments, FaClock, FaFileAlt, FaVideo, FaUserTie, FaReply, FaBuilding, FaHandshake, FaClipboardCheck, FaGavel } from 'react-icons/fa';
import CTASection from '../sections/CTASection';
import PageHeader from '../components/PageHeader';
import SubHeader from '../components/SubHeader';
import RevealOnScroll from '../components/RevealOnScroll';

const BiayaKonsultasi = () => {
    const pricingPackages = [
        {
            name: 'Paket Basic',
            title: 'Konsultasi Pesan WhatsApp',
            price: 'Rp. 300.000,-',
            duration: 'Maksimal 3 jam',
            description: 'Via Message WhatsApp',
            features: [
                { text: 'Konsultasi melalui chat WhatsApp', icon: FaComments },
                { text: 'Respon dalam waktu kerja', icon: FaClock },
                { text: 'Durasi maksimal 3 jam', icon: FaClock },
                { text: 'Saran hukum tertulis', icon: FaFileAlt }
            ],
            highlighted: false
        },
        {
            name: 'Paket Platinum',
            title: 'Konsultasi Online',
            price: 'Rp. 500.000,-',
            duration: 'Maksimal 1 jam',
            description: 'Via Zoom / Google Meet',
            features: [
                { text: 'Video call langsung dengan pengacara', icon: FaVideo },
                { text: 'Konsultasi tatap muka virtual', icon: FaUserTie },
                { text: 'Durasi maksimal 1 jam', icon: FaClock },
                { text: 'Diskusi interaktif', icon: FaComments },
                { text: 'Follow-up via chat', icon: FaReply }
            ],
            highlighted: true
        },
        {
            name: 'Paket Premium',
            title: 'Konsultasi Tatap Muka',
            price: 'Rp. 750.000,-',
            duration: 'Maksimal 1 jam',
            description: 'Di Kantor Kami',
            features: [
                { text: 'Pertemuan langsung di kantor', icon: FaBuilding },
                { text: 'Diskusi mendalam dengan pengacara', icon: FaHandshake },
                { text: 'Durasi maksimal 1 jam', icon: FaClock },
                { text: 'Review dokumen dasar', icon: FaClipboardCheck },
                { text: 'Saran hukum komprehensif', icon: FaGavel }
            ],
            highlighted: false
        }
    ];

    return (
        <div className="pt-20">
            <PageHeader
                title="Biaya Konsultasi"
                subtitle="Transparansi adalah kunci untuk membangun hubungan yang kuat dengan Klien."
            />
            <SubHeader pageName="Biaya Konsultasi" />

            {/* Pricing section */}
            <RevealOnScroll>
                <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold font-heading text-gray-800 mb-4">
                                Biaya Jasa Konsultasi Kami
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Pilih paket konsultasi yang sesuai dengan kebutuhan Anda. Kami menyediakan berbagai opsi untuk memastikan Anda mendapatkan bantuan hukum yang tepat.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                            {pricingPackages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col ${pkg.highlighted
                                        ? 'bg-primary text-white shadow-xl scale-105'
                                        : 'bg-white shadow-lg border border-gray-100'
                                        }`}
                                >
                                    {pkg.highlighted && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                            <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                                                Popular
                                            </span>
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${pkg.highlighted ? 'bg-white/20' : 'bg-primary/10 text-primary'
                                            }`}>
                                            {pkg.name}
                                        </span>
                                        <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-800'
                                            }`}>
                                            {pkg.title}
                                        </h3>
                                    </div>

                                    <div className="text-center mb-6">
                                        <div className={`text-4xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-primary'
                                            }`}>
                                            {pkg.price}
                                        </div>
                                        <p className={`text-sm ${pkg.highlighted ? 'text-white/80' : 'text-gray-500'
                                            }`}>
                                            {pkg.duration}
                                        </p>
                                    </div>

                                    <div className={`border-t mb-6 ${pkg.highlighted ? 'border-white/20' : 'border-gray-200'
                                        }`}></div>

                                    <p className={`text-center mb-6 ${pkg.highlighted ? 'text-white/90' : 'text-gray-600'
                                        }`}>
                                        {pkg.description}
                                    </p>

                                    <ul className="space-y-3 mb-8 flex-grow">
                                        {pkg.features.map((feature, i) => {
                                            const IconComponent = feature.icon;
                                            return (
                                                <li key={i} className="flex items-start gap-3">
                                                    <IconComponent
                                                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-white' : 'text-primary'
                                                            }`}
                                                    />
                                                    <span className={pkg.highlighted ? 'text-white/90' : 'text-gray-600'}>
                                                        {feature.text}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <a
                                        href="/contact"
                                        className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 mt-auto ${pkg.highlighted
                                            ? 'bg-white text-primary hover:bg-gray-100'
                                            : 'bg-primary text-white hover:bg-primary-dark'
                                            }`}
                                    >
                                        Hubungi Kami
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Additional info */}
            <RevealOnScroll>
                <section className="py-16 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Butuh Konsultasi Khusus?
                            </h3>
                            <p className="text-gray-300 mb-8">
                                Untuk kasus yang lebih kompleks atau layanan retainer, silakan hubungi kami
                                untuk mendiskusikan kebutuhan spesifik Anda. Tim kami siap memberikan solusi hukum terbaik.
                            </p>
                            <a
                                href="https://api.whatsapp.com/send?phone=6289530540136"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                            >
                                <FaWhatsapp className="w-6 h-6" />
                                Chat via WhatsApp
                            </a>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            <RevealOnScroll><CTASection /></RevealOnScroll>
        </div>
    );
};

export default BiayaKonsultasi;
