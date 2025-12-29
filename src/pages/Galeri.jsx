import { useState } from 'react';
import { FaSearchPlus, FaTimes } from 'react-icons/fa';
import CTASection from '../sections/CTASection';
import PageHeader from '../components/PageHeader';
import SubHeader from '../components/SubHeader';
import RevealOnScroll from '../components/RevealOnScroll';

const Galeri = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Section 1: Office Gallery
    const officeImages = [
        {
            id: 1,
            src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600',
            alt: 'Kantor WF Law Office',
            caption: 'Kantor WF Law Office'
        },
        {
            id: 2,
            src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600',
            alt: 'Ruang Meeting',
            caption: 'Ruang Meeting'
        },
        {
            id: 7,
            src: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600',
            alt: 'Interior Kantor',
            caption: 'Interior Kantor'
        },
        {
            id: 10,
            src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600',
            alt: 'Ruang Kerja Utama',
            caption: 'Ruang Kerja Utama'
        },
        {
            id: 11,
            src: 'https://images.unsplash.com/photo-1462826303086-329426d1aef5?w=600',
            alt: 'Fasilitas Kantor',
            caption: 'Fasilitas Yang Nyaman'
        },
        {
            id: 12,
            src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600',
            alt: 'Eksen Interior',
            caption: 'Desain Modern Profesional'
        }
    ];

    // Section 2: Client Moments / Activities
    const activityImages = [
        {
            id: 3,
            src: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600',
            alt: 'Konsultasi dengan Klien',
            caption: 'Konsultasi dengan Klien'
        },
        {
            id: 4,
            src: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=600',
            alt: 'Tim Pengacara',
            caption: 'Tim Pengacara Kami'
        },
        {
            id: 5,
            src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
            alt: 'Persidangan',
            caption: 'Aktivitas Persidangan'
        },
        {
            id: 6,
            src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600',
            alt: 'Diskusi Tim',
            caption: 'Diskusi Tim'
        },
        {
            id: 8,
            src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600',
            alt: 'Tim Senior',
            caption: 'Tim Senior Kami'
        },
        {
            id: 9,
            src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
            alt: 'Review Dokumen',
            caption: 'Review Dokumen Legal'
        }
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="pt-20">
            <PageHeader
                title="Galeri"
                subtitle="Dokumentasi kegiatan dan fasilitas WF Law Office"
            />
            <SubHeader pageName="Galeri" />

            {/* Section 1: Galeri Kantor */}
            <RevealOnScroll>
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-6">
                                Galeri Kantor WF Law Office
                            </h2>
                            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                WF Law Firm memiliki kantor yang berlokasi strategis di <strong>Jl. Magelang No. 32-34 A, Yogyakarta</strong>.
                                Dengan ruang kerja yang nyaman, profesional, dan modern, kami menciptakan lingkungan yang kondusif bagi Tim Advokat
                                dan Klien dalam menangani berbagai urusan hukum. Kantor kami dirancang untuk memberikan pelayanan terbaik dengan
                                ruang konsultasi eksklusif yang menjamin privasi dan kenyamanan dalam diskusi hukum.
                            </p>
                        </div>

                        {/* Gallery Grid 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {officeImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                                    onClick={() => openLightbox(image)}
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className="text-white font-medium text-lg">{image.caption}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                                        <FaSearchPlus className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Section 2: Momen Penting */}
            <RevealOnScroll>
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-6">
                                Momen Penting Bersama Klien
                            </h2>
                            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                                Sebagai Firma Hukum yang telah berpengalaman sejak tahun 2016, WF Law Firm telah menangani berbagai kasus
                                dan membantu banyak Klien dalam menyelesaikan persoalan hukum mereka. Kami percaya bahwa setiap kasus yang
                                kami tangani adalah perjalanan penting dalam mencapai keadilan bagi Klien kami.
                            </p>
                        </div>

                        {/* Gallery Grid 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {activityImages.map((image) => (
                                <div
                                    key={image.id}
                                    className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                                    onClick={() => openLightbox(image)}
                                >
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <p className="text-white font-medium text-lg">{image.caption}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                                        <FaSearchPlus className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        onClick={closeLightbox}
                    >
                        <FaTimes className="w-8 h-8" />
                    </button>
                    <div
                        className="max-w-5xl max-h-[90vh] animate-fadeIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                        />
                        <p className="text-white text-center mt-4 text-lg">{selectedImage.caption}</p>
                    </div>
                </div>
            )}

            <RevealOnScroll><CTASection /></RevealOnScroll>
        </div>
    );
};

export default Galeri;
