'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Clock, CheckCircle, Users } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ContactPage() {

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Office Location",
      details: "Abuja, Nigeria",
      description: "Strategic location in Nigeria's capital for easy access to government agencies and regulatory bodies."
    },
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
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-purple-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#2e125b] mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto">
              Ready to transform your compliance strategy? Let&apos;s discuss how <strong>HAYLAR</strong> Energy can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2e125b] mb-4">Contact Information</h2>
            <p className="text-xl text-black">Multiple ways to reach us and get the support you need</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 text-center"
              >
                <div className="text-brand-primary mb-6 flex justify-center">{info.icon}</div>
                <h3 className="text-xl font-semibold text-[#2e125b] mb-3">{info.title}</h3>
                <p className="text-lg font-medium text-brand-primary mb-3">{info.details}</p>
                <p className="text-black text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
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

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-[#2e125b] mb-8">Office Information</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
                <h3 className="text-2xl font-semibold text-[#2e125b] mb-6">Abuja Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-[#2e125b] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2e125b] group-hover:text-brand-primary transition-colors">Abuja, Nigeria</p>
                      <p className="text-black">Strategic location in Nigeria&apos;s capital</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2e125b] group-hover:text-[#2e125b] transition-colors">Business Hours</p>
                      <p className="text-black">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-black">No Saturday work</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-[#2e125b] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2e125b] group-hover:text-brand-primary transition-colors">Support Available</p>
                      <p className="text-black">24/7 emergency support for critical compliance issues</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose <strong>HAYLAR</strong>?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>10+ years of industry expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Cutting-edge <strong>NovaCore</strong> technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Expert regulatory compliance team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Proven track record of success</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-[#2e125b] mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-black mb-8">
              Don&apos;t wait to transform your compliance strategy. Contact us today and let&apos;s discuss how we can help you achieve your goals.
            </p>
            <div className="flex justify-center">
              <a href="mailto:info@haylarenergy.com" className="bg-brand-primary text-white hover:bg-orange-700 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
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

