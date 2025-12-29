import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import PracticeAreasSection from '../sections/PracticeAreasSection';
import AttorneysSection from '../sections/AttorneysSection';
import ProcessSection from '../sections/ProcessSection';
import ClientsSection from '../sections/ClientsSection';
import CTASection from '../sections/CTASection';
import GallerySection from '../sections/GallerySection';
import RevealOnScroll from '../components/RevealOnScroll';

const Home = () => {
    return (
        <div className="home-page">
            {/* 
                Section Order (Matching Clone Exactly):
                1. TopBar - Blue bar (in App.jsx)
                2. Navbar - Black (in App.jsx)
                3. Hero - Full-height slider
                4. About - Dark bg, overlapping images
                5. Services - Dark bg, 6 numbered cards
                6. Lawyers - Dark bg with dot pattern, 6 team photos
                7. Process - Dark header + Light steps with large numbers
                8. Clients - Dark bg, bullet list
                9. CTA - Dark bg with globe pattern
                10. Gallery - Alternating blue/dark backgrounds
                11. Footer - Black, 4 columns (in App.jsx)
            */}
            <HeroSection />
            <RevealOnScroll><AboutSection /></RevealOnScroll>
            <RevealOnScroll><PracticeAreasSection /></RevealOnScroll>
            <RevealOnScroll><AttorneysSection /></RevealOnScroll>
            <RevealOnScroll><ProcessSection /></RevealOnScroll>
            <RevealOnScroll><ClientsSection /></RevealOnScroll>
            <RevealOnScroll><CTASection /></RevealOnScroll>
            <RevealOnScroll><GallerySection /></RevealOnScroll>
        </div>
    );
};

export default Home;
