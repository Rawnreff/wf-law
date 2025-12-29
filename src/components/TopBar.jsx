import React from 'react';

const TopBar = () => {
    return (
        <div className="hidden md:block bg-primary text-white py-2">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Left: Company Info with Icons */}
                    <div className="flex items-center gap-6 text-sm">
                        <a
                            href="/"
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            {/* Balance Scale Icon */}
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 40 32">
                                <path d="M16 21q0 2.06-2.34 3.53T8 26t-5.66-1.47T0 21v-.06q0-.5.31-1.22t2.2-4.47l2.8-5.63Q6.13 8 8.01 8t2.68 1.62q1.25 2.5 2.88 5.82 1.8 3.56 2.12 4.25t.31 1.25V21zM8 11l-4.5 9h9zm32 10q0 1.38-1.06 2.53t-2.9 1.81T32 26q-3.31 0-5.66-1.47T24 21v-.06q0-.5.31-1.22t2.2-4.47l.46-.94.5-.97.6-1.15.59-1.2.65-1.37Q30.13 8 32.01 8t2.68 1.62q1.25 2.5 2.88 5.82 1.8 3.56 2.12 4.25t.31 1.25V21zm-12.5-1h9L32 11zm5.5 8q.44 0 .72.28T34 29v2q0 .44-.28.72T33 32H7q-.44 0-.72-.28T6 31v-2q0-.44.28-.72T7 28h11V9.56q-2.38-1-2.88-3.56H7q-.44 0-.72-.28T6 5V3q0-.44.28-.72T7 2h9q1.56-2 4-2t4 2h9q.44 0 .72.28T34 3v2q0 .44-.28.72T33 6h-8.13q-.5 2.56-2.87 3.56V28h11z" />
                            </svg>
                            <span>WF Law Office - Advocate & Legal Consultant</span>
                        </a>
                        <a
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:opacity-80 transition"
                        >
                            {/* Location Icon */}
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 32">
                                <path d="M10.75 31.38q-1.5-2.2-3.4-4.94t-2.73-3.88-1.87-2.78-1.4-2.34-.76-1.75-.5-1.85T0 12q0-5 3.5-8.5T12 0t8.5 3.5T24 12q0 1.06-.1 1.84t-.5 1.85-.74 1.75-1.41 2.34-1.88 2.78-2.71 3.88-3.41 4.93Q12.81 32 12 32t-1.25-.63zM12 17q2.06 0 3.53-1.47T17 12t-1.47-3.53T12 7 8.47 8.47 7 12t1.47 3.53T12 17z" />
                            </svg>
                            <span>Kec. Jetis, Kota Yogyakarta</span>
                        </a>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm">Find Us :</span>
                        <div className="flex gap-1">
                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 32 32">
                                    <path d="M14 8.81q3 0 5.1 2.1t2.09 5.1-2.1 5.08T14 23.2t-5.1-2.1T6.82 16t2.1-5.1T14 8.82zm0 11.88q1.94 0 3.31-1.38T18.7 16t-1.38-3.31T14 11.3t-3.31 1.38T9.3 16t1.38 3.31T14 20.7zM23.13 8.5q0 .69-.47 1.19t-1.16.5-1.19-.5-.5-1.19.5-1.16 1.19-.46 1.16.46.46 1.16z" />
                                </svg>
                            </a>
                            {/* TikTok */}
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 28 32">
                                    <path d="M28 13.12c-2.75 0-5.44-.85-7.67-2.45v11.17a10.16 10.16 0 1 1-8.77-10.07v5.62a4.66 4.66 0 1 0 3.27 4.45V0h5.5a7.63 7.63 0 0 0 3.48 6.4A7.57 7.57 0 0 0 28 7.66z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 17 32">
                                    <path d="M13.5 5.31q-1.13 0-1.78.38t-.85.94-.18 1.43V12H16l-.75 5.69h-4.56V32H4.8V17.7H0V12h4.8V7.5q0-3.56 2-5.53T12.13 0q2.68 0 4.37.25v5.06h-3z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 36 32">
                                    <path d="M34.38 7.75q.18.75.34 1.88t.22 2.21.1 2.03.02 1.57V16q0 5.63-.68 8.31-.32 1.07-1.13 1.88t-1.94 1.12q-1.19.32-4.5.47t-6.06.22H18q-10.7 0-13.31-.69-2.44-.68-3.07-3-.31-1.18-.47-3.28T.94 17.5V16q0-5.56.68-8.25.32-1.12 1.13-1.94T4.69 4.7q1.18-.31 4.5-.47T15.25 4H18q10.69 0 13.31.69 1.13.31 1.94 1.12t1.13 1.94zM14.5 21.13 23.44 16l-8.94-5.06v10.19z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
