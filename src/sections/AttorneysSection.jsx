import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const AttorneysSection = () => {
    const lawyers = [
        {
            name: 'Nama Lawyer 1, S.H., M.Kn.',
            position: 'Managing Partner',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
            name: 'Nama Lawyer 2, S.H., M.H.',
            position: 'Junior Associate',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
            name: 'Nama Lawyer 3, C.CLP., C.NMS.',
            position: 'Legal Assistant',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
            name: 'Nama Lawyer 4, S.H.',
            position: 'Legal Assistant',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
            name: 'Nama Lawyer 5, S.H., M.H.',
            position: 'Legal Assistant',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
        {
            name: 'Nama Lawyer 6, S.H.',
            position: 'Legal Assistant',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        },
    ];

    return (
        <section className="py-16 md:py-24 relative" style={{ backgroundColor: '#F7F6F6' }}>
            {/* Dot pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #1C07CA 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 gap-6">
                    <div className="lg:w-2/3">
                        <p className="text-primary font-body text-sm uppercase tracking-wider mb-3">
                            Our Great Team
                        </p>
                        <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
                            Lawyer Tim
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Kami adalah tim profesional yang berpengalaman terhadap satu atau lebih bidang hukum substantif dan siap memberikan pelayanan hukum dengan sepenuh hati.
                        </p>
                    </div>
                    <Link
                        to="/lawyers"
                        className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 uppercase text-sm tracking-wide flex items-center gap-2"
                    >
                        OUR TEAM
                        <FaArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lawyers.map((lawyer, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer"
                        >
                            {/* Image */}
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={lawyer.image}
                                    alt={lawyer.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Overlay with name */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <h3 className="text-white text-lg font-heading mb-1">
                                    {lawyer.name}
                                </h3>
                                <p className="text-primary text-sm">
                                    {lawyer.position}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AttorneysSection;
