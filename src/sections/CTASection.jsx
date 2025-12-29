import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaFacebookF, FaGlobe } from 'react-icons/fa';
import logo from '../assets/logo-wflaw.JPG';

const CTASection = () => {
    return (
        <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#F7F6F6' }}>
            {/* Globe pattern background using icon */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-5">
                <FaGlobe className="w-[400px] h-[400px] text-primary" />
            </div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Left: Logo and Text */}
                    <div className="flex items-center gap-6">
                        <img
                            src={logo}
                            alt="WF Law Office"
                            className="h-16 md:h-20 w-auto rounded-lg"
                        />
                        <div>
                            <p className="text-gray-900 text-lg md:text-xl font-heading mb-2">
                                We can help you find proper and effective legal solutions!
                            </p>
                            <p className="text-gray-600 text-sm">
                                www.wf-lawoffice.com
                            </p>
                        </div>
                    </div>

                    {/* Right: Button and Social */}
                    <div className="flex items-center gap-6">
                        <Link
                            to="/contact"
                            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 uppercase text-sm tracking-wide"
                        >
                            CONSULT NOW
                        </Link>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 hover:bg-primary hover:text-white text-primary transition">
                                <FaInstagram className="w-4 h-4" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 hover:bg-primary hover:text-white text-primary transition">
                                <FaTiktok className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/30 hover:bg-primary hover:text-white text-primary transition">
                                <FaFacebookF className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
