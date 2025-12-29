import React from 'react';
import PracticeAreasSection from '../sections/PracticeAreasSection';
import CTASection from '../sections/CTASection';
import PageHeader from '../components/PageHeader';
import SubHeader from '../components/SubHeader';
import RevealOnScroll from '../components/RevealOnScroll';

const PracticeAreas = () => {
    return (
        <div className="pt-20">
            <PageHeader
                title="Practice Areas"
                subtitle="Comprehensive legal solutions for your needs."
            />
            <SubHeader pageName="Layanan Kami" />

            {/* Reusing Home Section for now, but could be more detailed */}
            <RevealOnScroll><PracticeAreasSection /></RevealOnScroll>

            <RevealOnScroll><CTASection /></RevealOnScroll>
        </div>
    );
};

export default PracticeAreas;
