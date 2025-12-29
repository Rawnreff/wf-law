import React from 'react';
import AttorneysSection from '../sections/AttorneysSection';
import CTASection from '../sections/CTASection';
import PageHeader from '../components/PageHeader';
import RevealOnScroll from '../components/RevealOnScroll';

const Lawyers = () => {
    return (
        <div className="pt-20">
            <PageHeader
                title="Our Lawyers"
                subtitle="Meet our dedicated team of legal professionals."
            />

            <RevealOnScroll><AttorneysSection /></RevealOnScroll>
            <RevealOnScroll><CTASection /></RevealOnScroll>
        </div>
    );
};

export default Lawyers;
