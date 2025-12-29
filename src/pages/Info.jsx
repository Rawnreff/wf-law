import React from 'react';
import PageHeader from '../components/PageHeader';
import SubHeader from '../components/SubHeader';
import CTASection from '../sections/CTASection';
import RevealOnScroll from '../components/RevealOnScroll';

const Info = () => {
    const articles = [
        {
            title: "Pentingnya Legalitas Bisnis untuk UMKM",
            date: "March 15, 2025",
            excerpt: "Memahami aspek hukum dasar yang wajib dipenuhi oleh pelaku usaha mikro, kecil, dan menengah di Indonesia.",
            category: "Bisnis"
        },
        {
            title: "Perubahan Undang-Undang Ketenagakerjaan",
            date: "March 10, 2025",
            excerpt: "Analisis mendalam mengenai poin-poin krusial dalam revisi UU Ketenagakerjaan terbaru dan dampaknya bagi perusahaan.",
            category: "Ketenagakerjaan"
        },
        {
            title: "Prosedur Penyelesaian Sengketa Tanah",
            date: "February 28, 2025",
            excerpt: "Langkah-langkah hukum yang tepat dalam menghadapi sengketa kepemilikan lahan dan properti.",
            category: "Properti"
        },
        {
            title: "Hak Kekayaan Intelektual di Era Digital",
            date: "February 15, 2025",
            excerpt: "Perlindungan hukum terhadap aset digital dan karya cipta di tengah pesatnya perkembangan teknologi.",
            category: "Teknologi"
        },
        {
            title: "Memahami Kontrak Kerja Sama",
            date: "January 30, 2025",
            excerpt: "Hal-hal yang harus diperhatikan sebelum menandatangani perjanjian kerjasama bisnis agar tidak merugi.",
            category: "Kontrak"
        },
        {
            title: "Tanggung Jawab Direksi dalam Perseroan",
            date: "January 12, 2025",
            excerpt: "Batasan kewenangan dan tanggung jawab hukum seorang direktur dalam menjalankan operasional perusahaan.",
            category: "Korporasi"
        }
    ];

    return (
        <div className="pt-20">
            <PageHeader
                title="Info & Artikel"
                subtitle="Wawasan hukum terbaru dan berita terkini dari WF Law Office."
            />
            <SubHeader pageName="Info & Artikel" />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <RevealOnScroll key={index} delay={index * 100}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                    {/* Image Placeholder */}
                                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                                        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">
                                            {article.category}
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                                        <h3 className="text-xl font-bold font-heading mb-3 text-gray-800 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 flex-grow">
                                            {article.excerpt}
                                        </p>
                                        <button className="text-primary font-bold uppercase text-sm tracking-wider hover:underline self-start mt-auto">
                                            Read More &rarr;
                                        </button>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Info;
