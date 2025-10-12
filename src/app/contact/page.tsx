'use client';

import { motion } from 'framer-motion';
import { Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';

export default function ContactPage() {

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Address",
      details: "info@haylarenergy.com",
      description: "Send us detailed inquiries and we'll respond within 24 hours."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      details: "Mon - Fri: 8:00 AM - 5:00 PM",
      description: "Available during standard business hours, with emergency support when needed."
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <PageHeader 
        title="Get in Touch"
        breadcrumbs={[
          { label: "HAYLAR Energy", href: "/" },
          { label: "Contact", href: "/contact" }
        ]}
        description="Ready to transform your compliance strategy? Let's discuss how HAYLAR Energy can help you achieve your goals."
      />

      {/* Contact Information - WoodMac Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-4">Contact Information</h2>
            <p className="text-lg text-black">Ready to transform your compliance strategy? Let&apos;s discuss how HAYLAR Energy can help you achieve your goals.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="text-[#2e125b] mb-6 flex justify-center">{info.icon}</div>
                <h3 className="text-xl font-semibold text-[#2e125b] mb-3">{info.title}</h3>
                <p className="text-lg font-medium text-[#2e125b] mb-3">{info.details}</p>
                <p className="text-black text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map - WoodMac Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>

            
          </div>
        </div>
      </section>

      {/* CTA Section - WoodMac Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-black mb-8">
              Don&apos;t wait to transform your compliance strategy. Contact us today and let&apos;s discuss how we can help you achieve your goals.
            </p>
            <div className="flex justify-center">
              <a href="mailto:info@haylarenergy.com" className="bg-[#2e125b] text-white hover:bg-[#1a0466] font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300 shadow-lg flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

