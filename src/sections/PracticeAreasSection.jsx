import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const PracticeAreasSection = () => {
    const services = [
        {
            id: '01',
            title: 'Jasa Hukum Litigasi',
            desc: 'Jasa Hukum Litigasi merupakan layanan hukum yang diberikan berakaitan dengan Penanganan Perkara Hukum melalui suatu persidangan (peradilan).',
        },
        {
            id: '02',
            title: 'Konsultasi Hukum',
            desc: 'Konsultasi Hukum merupakan layanan hukum yang diberikan untuk menangani dan menjawab persoalan hukum kepada Klien.',
        },
        {
            id: '03',
            title: 'Jasa Retainer (In House Lawyer)',
            desc: 'Jasa Retainer merupakan bentuk Layanan Hukum bagi Perusahaan dan / atau Instansi / Lembaga yang secara resmi menunjuk firma hukum kami.',
        },
        {
            id: '04',
            title: 'Penyusunan / Review Dokumen',
            desc: 'Jasa pembuatan / drafting dokumen dan / atau review / memeriksa isi suatu dokumen sebelum diterbitkan.',
        },
        {
            id: '05',
            title: 'Perizinan Usaha & Legalitas',
            desc: 'Membantu anda dalam proses pembuatan badan usaha yang professional, Legalitas bisnis & perizinan berusaha.',
        },
        {
            id: '06',
            title: 'Legal Audit',
            desc: 'Layanan ini termasuk dalam melakukan audit terhadap aset, dokumen, termasuk kegiatan yang diperlukan untuk melakukan audit.',
        },
    ];

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                    <div className="lg:w-2/3">
                        <p className="text-primary font-body text-sm uppercase tracking-wider mb-3">
                            What We Offer
                        </p>
                        <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
                            Layanan Kami
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Kebutuhan jasa hukum semakin beragam seiring dengan dinamika perkembangan dunia usaha di berbagai bidang. WF Law Office siap membantu anda dalam berbagai persoalan hukum.
                        </p>
                    </div>
                    <Link
                        to="/lawyers"
                        className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 uppercase text-sm tracking-wide flex items-center gap-2"
                    >
                        Our Lawyer
                        <FaArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="border border-gray-200 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                            style={{ backgroundColor: '#F7F6F6' }}
                        >
                            {/* Large Number */}
                            <div className="text-primary text-5xl md:text-6xl font-heading mb-4">
                                {service.id}.
                            </div>

                            {/* Title */}
                            <h3 className="text-gray-900 text-xl md:text-2xl font-heading mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
                                {service.desc}
                            </p>

                            {/* Arrow Link */}
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm font-medium"
                            >
                                <span>Kontak Kami</span>
                                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PracticeAreasSection;
