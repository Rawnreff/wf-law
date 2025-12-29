import React from 'react';
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
                'Konsultasi melalui chat WhatsApp',
                'Respon dalam waktu kerja',
                'Durasi maksimal 3 jam',
                'Saran hukum tertulis'
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
                'Video call langsung dengan pengacara',
                'Konsultasi tatap muka virtual',
                'Durasi maksimal 1 jam',
                'Diskusi interaktif',
                'Follow-up via chat'
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
                'Pertemuan langsung di kantor',
                'Diskusi mendalam dengan pengacara',
                'Durasi maksimal 1 jam',
                'Review dokumen dasar',
                'Saran hukum komprehensif'
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

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {pricingPackages.map((pkg, index) => (
                                <div
                                    key={index}
                                    className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${pkg.highlighted
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

                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <svg
                                                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${pkg.highlighted ? 'text-white' : 'text-primary'
                                                        }`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className={pkg.highlighted ? 'text-white/90' : 'text-gray-600'}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="/contact"
                                        className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${pkg.highlighted
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
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
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
