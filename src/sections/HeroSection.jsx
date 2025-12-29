import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
    const banners = [
        {
            title: "Professional Legal Solutions",
            subtitle: "Welcome to WF Law Office",
            text: "Providing comprehensive legal services with integrity and excellence. Your trusted partner in justice."
        },
        {
            title: "Experienced Attorneys",
            subtitle: "Committed to Your Success",
            text: "We fight for your rights and deliver results that matter. Trust our expertise."
        },
        {
            title: "Justice For You",
            subtitle: "Your Legal Rights Matter",
            text: "Navigating the complexities of law with dedication and precision."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    };

    // Auto-advance slider
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="relative h-[450px] md:h-[650px] lg:h-[700px] w-full overflow-hidden bg-dark">
            {/* Dynamic CSS Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary-dark to-blue-900">
                {/* Animated Shapes */}
                <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl transition-transform duration-[2000ms] ease-in-out ${currentSlide % 2 === 0 ? 'translate-x-1/4 -translate-y-1/4' : 'translate-x-[20%] -translate-y-[20%]'}`}></div>
                <div className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl transition-transform duration-[2000ms] ease-in-out ${currentSlide % 2 === 0 ? '-translate-x-1/4 translate-y-1/4' : '-translate-x-[20%] translate-y-[20%]'}`}></div>
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}>
                </div>
            </div>

            {/* Content Slider */}
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex items-center transition-all duration-1000 ease-in-out px-4 ${index === currentSlide ? 'opacity-100 z-10 translate-x-0' : 'opacity-0 z-0 translate-x-8'
                        }`}
                >
                    <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-center pt-20">
                        <div className="max-w-4xl relative flex flex-col items-center text-center mx-auto">
                            {/* Decorative Line */}
                            <div className={`w-20 h-1 bg-white/30 mb-8 transition-all duration-700 delay-300 ${index === currentSlide ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>

                            <h2 className={`text-blue-300 text-lg md:text-xl font-body uppercase tracking-[0.2em] mb-4 font-bold transition-all duration-700 delay-100 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                {banner.subtitle}
                            </h2>
                            <h1 className={`text-white text-5xl md:text-7xl lg:text-8xl font-heading leading-tight mb-8 font-bold transition-all duration-700 delay-200 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                {banner.title}
                            </h1>
                            <p className={`text-gray-300 text-lg md:text-2xl mb-10 max-w-3xl font-light leading-relaxed transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                {banner.text}
                            </p>

                            <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                                <Link
                                    to="/contact"
                                    className="bg-primary hover:bg-white hover:text-primary text-white font-semibold py-4 px-10 rounded-none transition-all duration-300 border-2 border-primary text-lg tracking-wide uppercase"
                                >
                                    Free Consultation
                                </Link>
                                <Link
                                    to="/about"
                                    className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-none transition-all duration-300 border-2 border-white text-lg tracking-wide uppercase"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 flex items-center justify-center group hover:bg-white/5 transition-colors"
                aria-label="Previous Slide"
            >
                <FaChevronLeft className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 flex items-center justify-center group hover:bg-white/5 transition-colors"
                aria-label="Next Slide"
            >
                <FaChevronRight className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
                {banners.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
