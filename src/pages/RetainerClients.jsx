import React from 'react';
import PageHeader from '../components/PageHeader';
import SubHeader from '../components/SubHeader';
import CTASection from '../sections/CTASection';
import RevealOnScroll from '../components/RevealOnScroll';

const RetainerClients = () => {
    const clients = [
        { name: "PT. Sinergi Utama", logo: "https://via.placeholder.com/150?text=Sinergi" },
        { name: "Global Tech Ind", logo: "https://via.placeholder.com/150?text=Global" },
        { name: "Mega Finance", logo: "https://via.placeholder.com/150?text=Mega" },
        { name: "Bina Karya", logo: "https://via.placeholder.com/150?text=Bina" },
        { name: "Trans Logistic", logo: "https://via.placeholder.com/150?text=Trans" },
        { name: "Pacific Energy", logo: "https://via.placeholder.com/150?text=Pacific" },
        { name: "Indo Foods", logo: "https://via.placeholder.com/150?text=Indo" },
        { name: "Sentosa Property", logo: "https://via.placeholder.com/150?text=Sentosa" },
    ];

    return (
        <div className="pt-20">
            <PageHeader
                title="Klien Jasa Retainer"
                subtitle="Perusahaan dan Lembaga yang mempercayakan urusan hukumnya kepada kami."
            />
            <SubHeader pageName="Klien Jasa Retainer" />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <RevealOnScroll>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                            {clients.map((client, index) => (
                                <div key={index} className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow duration-300 group">
                                    <div className="w-32 h-32 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                                        {/* Placeholder for Logos - Replace with actual assets if available, or keep text/placeholder */}
                                        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                                            <span className="text-2xl font-bold text-gray-400 group-hover:text-primary">{client.name.charAt(0)}</span>
                                        </div>
                                    </div>
                                    <h3 className="mt-4 font-bold text-gray-700 text-center">{client.name}</h3>
                                </div>
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default RetainerClients;
