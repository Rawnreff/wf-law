import React from 'react';
import { Link } from 'react-router-dom';

const ProcessSection = () => {
    const steps = [
        {
            id: '01',
            title: 'Konsultasi Awal',
            subtitle: 'Konsultasi sesuai dengan paket yang Anda pilih',
            desc: 'Anda masih bingung layanan hukum apa yang Anda butuhkan? Tenang saja, kami akan memandu Anda mendapatkan layanan hukum yang sesuai dengan kebutuhan Anda.'
        },
        {
            id: '02',
            title: 'Pemilihan Metode Konsultasi',
            subtitle: 'Chat, video, audio',
            desc: 'Anda dapat menentukan serta memilih metode konsultasi apa yang Anda inginkan. Kami melayani konsultasi melalui live chat, WhatsApp, Zoom, Google Meet, dll.'
        },
        {
            id: '03',
            title: 'Penawaran Layanan',
            subtitle: 'Dapatkan penawaran',
            desc: 'Setelah Anda melewati tahap konsultasi dan ternyata ingin mendapatkan layanan hukum lebih lanjut, maka kami akan mengirimkan dokumen penawaran beserta rincian biayanya.'
        },
        {
            id: '04',
            title: 'Proses Pembayaran',
            subtitle: 'Cara Pembayaran',
            desc: 'Pembayaran dapat dilakukan melalui transfer bank via setoran tunai bank, transfer ATM, atau mobile banking ke rekening kantor kami.'
        },
        {
            id: '05',
            title: 'Pelaksanaan Layanan',
            subtitle: 'Selesai!',
            desc: 'Anda bisa tenang melakukan kesibukan Anda lainnya. Anda akan menerima informasi terkait perkembangan perkara, dokumen, atau penyelesaian sesuai dengan layanan hukum yang telah Anda bayar.'
        }
    ];

    return (
        <>
            {/* Process Header Section - Light */}
            <section className="py-16 md:py-24" style={{ backgroundColor: '#F7F6F6' }}>
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Left: Text */}
                        <div className="w-full lg:w-1/2">
                            <p className="text-primary font-body text-sm mb-2">
                                WF Law Office – Advocate & Legal Consultant
                            </p>
                            <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-heading mb-6">
                                Bagaimana cara menggunakan Layanan Hukum Kami?
                            </h2>
                            <p className="text-gray-600 mb-6">Berikut merupakan caranya :</p>
                            <Link
                                to="/contact"
                                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 uppercase text-sm tracking-wide"
                            >
                                Contact Us
                            </Link>
                        </div>
                        {/* Right: Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Office"
                                className="w-full h-64 md:h-80 object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Steps Section - Light */}
            <section className="bg-light py-16 md:py-20">
                <div className="container mx-auto px-4 lg:px-8">
                    {steps.map((step, index) => (
                        <div key={step.id}>
                            <div className="flex flex-col md:flex-row gap-8 md:gap-16 py-8 md:py-12">
                                {/* Left: Number and Title */}
                                <div className="md:w-1/3">
                                    <div className="text-primary text-6xl md:text-8xl font-heading leading-none mb-4">
                                        {step.id}
                                    </div>
                                    <h3 className="text-dark-pure text-xl md:text-2xl font-heading">
                                        {step.title}
                                    </h3>
                                </div>
                                {/* Right: Content */}
                                <div className="md:w-2/3">
                                    <h4 className="text-dark-pure text-lg md:text-xl font-heading mb-4">
                                        {step.subtitle}
                                    </h4>
                                    <p className="text-text-dark leading-relaxed text-justify">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                            {/* Divider */}
                            {index < steps.length - 1 && (
                                <div className="border-t border-gray-300"></div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProcessSection;
