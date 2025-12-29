import { FaBuilding } from 'react-icons/fa';

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

                {/* Client Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {clients.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <FaBuilding className="w-5 h-5 text-white/70" />
                                <span className="text-white text-sm">{client}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
