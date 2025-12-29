import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const galleries = [
        {
            title: 'Kantor Utama WF Law Office',
            images: [
                'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            ]
        },
        {
            title: 'Momen Penting Bersama Klien',
            images: [
                'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                'https://images.unsplash.com/photo-1577415124269-fc1140354a25?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            ]
        },
        {
            title: 'Pelatihan Hukum Perusahaan',
            images: [
                'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
                'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            ]
        }
    ];

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    return (
        <>
            <PageHeader
                title="Our Gallery"
                subtitle="Capturing moments of justice and dedication."
            />
            {galleries.map((gallery, groupIndex) => (
                <section
                    key={groupIndex}
                    className={`py-12 md:py-16 ${groupIndex % 2 === 0 ? 'bg-primary' : 'bg-gray-100'}`}
                >
                    <div className="container mx-auto px-4 lg:px-8">
                        {/* Gallery Title */}
                        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-heading text-center mb-8 ${groupIndex % 2 === 0 ? 'text-white' : 'text-gray-900'
                            }`}>
                            {gallery.title}
                        </h3>

                        {/* Gallery Grid */}
                        <div className={`grid gap-4 ${gallery.images.length === 6
                            ? 'grid-cols-2 md:grid-cols-3'
                            : 'grid-cols-1 md:grid-cols-3'
                            }`}>
                            {gallery.images.map((image, imageIndex) => (
                                <div
                                    key={imageIndex}
                                    className="overflow-hidden rounded-lg group cursor-pointer relative"
                                    onClick={() => openLightbox(image)}
                                >
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                    <img
                                        src={image}
                                        alt={`${gallery.title} ${imageIndex + 1}`}
                                        className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 p-2"
                        onClick={closeLightbox}
                    >
                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Gallery Detail"
                            className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl border-4 border-white"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default GallerySection;
