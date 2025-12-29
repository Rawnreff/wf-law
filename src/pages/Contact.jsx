import React from 'react';
import PageHeader from '../components/PageHeader';
import SubHeader from '../components/SubHeader';
import RevealOnScroll from '../components/RevealOnScroll';

const Contact = () => {
    return (
        <div className="pt-20">
            <PageHeader
                title="Contact Us"
                subtitle="Get in touch with us for a consultation today."
            />
            <SubHeader pageName="Hubungi Kami" />

            <RevealOnScroll>
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-8 text-gray-800">Send us a Message</h2>
                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                        <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                        <textarea className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary h-32" placeholder="How can we help you?"></textarea>
                                    </div>
                                    <button type="submit" className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded transition duration-300 w-full uppercase tracking-wide">
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-gray-50 p-8 rounded-lg">
                                <h2 className="text-2xl font-bold font-heading mb-6 text-primary">Contact Information</h2>
                                <div className="space-y-6 text-gray-700">
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-gray-500 mb-2">Address</h4>
                                        <p>Jl. Magelang No.32-34A, Cokrodiningratan,<br /> Kec. Jetis, Kota Yogyakarta 55233</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-gray-500 mb-2">Phone / WhatsApp</h4>
                                        <p>0895-3054-0136</p>
                                        <p>0896-6588-5886</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-gray-500 mb-2">Email</h4>
                                        <p>info@wflaw.com</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold uppercase text-sm text-gray-500 mb-2">Office Hours</h4>
                                        <p>Mon - Fri: 08:00 - 17:00</p>
                                        <p>Sat - Sun: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>
        </div>
    );
};

export default Contact;
