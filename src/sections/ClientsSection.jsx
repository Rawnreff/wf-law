import React from 'react';

const ClientsSection = () => {
    const clients = [
        'PT. KLIEN PERTAMA',
        'PT. KLIEN KEDUA',
        'CV. KLIEN KETIGA',
        'PT. KLIEN KEEMPAT',
        'PT. KLIEN KELIMA',
        'CV. KLIEN KEENAM',
        'PT. KLIEN KETUJUH',
        'PT. KLIEN KEDELAPAN',
    ];

    return (
        <section className="bg-primary py-16 md:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Title */}
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-heading text-center mb-12">
                    Klien Jasa Retainer (In House Lawyer) Kami
                </h3>

                {/* Client List - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-4xl mx-auto">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 text-white/90"
                        >
                            <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                            <span className="text-sm md:text-base">{client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
