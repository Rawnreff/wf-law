import React from 'react';

const WhyChooseUsSection = () => {
    const features = [
        {
            title: 'Experienced Team',
            desc: 'Our lawyers have years of experience in various legal fields.',
            icon: (
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            title: 'Client Focused',
            desc: 'We prioritize our clients needs and provide personalized solutions.',
            icon: (
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Integrity',
            desc: 'We uphold the highest standards of integrity and ethics.',
            icon: (
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mt-2">Dedicated to Your Success</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group p-6 rounded-lg hover:bg-gray-50 transition duration-300">
                            <div className="mb-6 flex justify-center transform group-hover:scale-110 transition duration-300">
                                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-heading">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
