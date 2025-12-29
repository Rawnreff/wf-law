import React from 'react';

const PageHeader = ({ title, subtitle, backgroundImage }) => {
    return (
        <section className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center overflow-hidden bg-primary-dark font-sans">
            {/* Background Layer */}
            {backgroundImage ? (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 transform hover:scale-105"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-blue-900 opacity-95"></div>

                    {/* Abstract Shapes */}
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                            backgroundSize: '40px 40px'
                        }}>
                    </div>
                </>
            )}

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Title with Animation */}
                    <h1 className="text-4xl md:text-6xl font-heading text-white font-bold tracking-tight uppercase mb-6 drop-shadow-2xl animate-[fadeInUp_0.8s_ease-out]">
                        {title}
                    </h1>

                    {/* Decorative Line */}
                    <div className="flex items-center justify-center gap-3 mb-6 animate-[fadeInUp_1s_ease-out]">
                        <div className="h-[2px] w-12 bg-orange-500 rounded-full"></div>
                        <div className="h-2 w-2 bg-white rotate-45"></div>
                        <div className="h-[2px] w-12 bg-orange-500 rounded-full"></div>
                    </div>

                    {/* Subtitle */}
                    {subtitle && (
                        <p className="text-white/90 text-lg md:text-2xl font-body font-light leading-relaxed drop-shadow-lg max-w-2xl mx-auto animate-[fadeInUp_1.2s_ease-out]">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PageHeader;
