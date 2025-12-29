import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SubHeader = ({ pageName, parentPage = "Home" }) => {
    return (
        <div className="bg-white shadow-sm py-6 border-b border-gray-100 sticky top-20 z-40">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-gray-500 text-sm font-medium uppercase tracking-widest flex items-center gap-2">
                    <Link to="/" className="hover:text-primary transition-colors duration-300">{parentPage}</Link>
                    <span className="text-gray-300">|</span>
                    <span className="text-primary font-bold">{pageName}</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://wa.me/6289530540136" className="hidden md:flex items-center gap-2 text-gray-600 hover:text-primary transition-all duration-300 group">
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                            <i className="fab fa-whatsapp text-green-500"></i>
                        </div>
                        <span className="font-semibold text-sm">Hubungi Kami</span>
                    </a>

                    {/* Search Bar */}
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Cari layanan kami..."
                            className="pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 w-64 md:w-72 transition-all duration-300"
                        />
                        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-primary transition-colors">
                            <FaSearch className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
