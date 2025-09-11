'use client';

import { motion } from 'framer-motion';
import { Users, Globe, Zap, Award } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  const companyStats = [
    { icon: <Globe className="w-8 h-8" />, number: "3", label: "Industry Sectors" },
    { icon: <Users className="w-8 h-8" />, number: "10+", label: "Years Experience" },
    { icon: <Zap className="w-8 h-8" />, number: "50+", label: "Projects Completed" }
  ];

  const milestones = [
    {
      year: "2022",
      title: "Company Founded",
      description: "HAYLAR Energy Services Ltd established in Abuja, Nigeria with a vision to transform regulatory compliance in the energy sector."
    },
    {
      year: "2023",
      title: "NovaCore Platform Launch",
      description: "Development and launch of our flagship integrated compliance management system."
    },
    {
      year: "2024",
      title: "Industry Partnerships",
      description: "Strategic partnerships with key players in Oil & Gas, Power, and Finance sectors."
    }
  ];

  const teamMembers = [
    {
      name: "Lara Timi-Ajayi",
      position: "Founder & CEO",
      description: "Visionary leader with extensive experience in regulatory compliance and energy sector innovation.",
      image: "/api/placeholder/200/200/brand-primary/ffffff?text=LT"
    },
    {
      name: "Technical Team",
      position: "Engineering & Development",
      description: "Expert developers and engineers specializing in compliance technology and regulatory systems.",
      image: "/api/placeholder/200/200/brand-secondary/ffffff?text=TT"
    },
    {
      name: "Compliance Experts",
      position: "Regulatory Specialists",
      description: "Seasoned professionals with deep knowledge of Nigerian and international energy regulations.",
      image: "/api/placeholder/200/200/brand-primary/ffffff?text=CE"
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
            <h1 className="text-5xl md:text-6xl font-bold text-[#1a0466] mb-6">
              About HAYLAR Energy
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Leading the transformation of regulatory compliance in Nigeria&apos;s energy sector through innovation, technology, and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-brand-secondary mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2022, HAYLAR Energy Services Ltd was established with a singular mission: transforming compliance from a regulatory necessity into a strategic advantage. Built on a foundation of integrity, innovation, and excellence, we provide cutting-edge compliance solutions that empower businesses to thrive in an evolving energy landscape.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that true success stems from trust, responsibility, and foresight. By integrating governance, technology, and strategic insight, we help organizations not only meet regulatory standards but also enhance operational efficiency, attract investment, and achieve sustainable growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Beyond compliance, HAYLAR champions a mindset shift—one where businesses view regulation as a catalyst for innovation and long-term value creation. Strong governance fosters resilience, credibility, and competitiveness on a global scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-8 rounded-lg border border-orange-100">
                <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Vision</h3>
                <p className="text-gray-600 text-lg">&ldquo;To be the leading Regulatory Compliance technology and procurement solutions provider in Nigeria and Africa, setting new industry standards for regulatory oversight, efficiency and business integrity&rdquo;</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-8 rounded-lg border border-purple-100">
                <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Mission</h3>
                <p className="text-gray-600 text-lg">&ldquo;To empower organizations with future-forward optimization by continuously pushing the boundaries of efficiency&rdquo;</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1a0466] mb-4">A Message from Our CEO</h2>
            <p className="text-xl text-gray-600">Lara Timi-Ajayi, Founder & CEO</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 text-[#1a0466] shadow-sm border border-gray-100"
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                At HAYLAR Energy, we are driven by a singular mission: transforming compliance from a regulatory necessity into strategic advantage. Built on integrity, innovation and excellence, we develop cutting-edge compliance solutions that empower industries with oversight and foresight to thrive in an evolving energy landscape.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Our vision is simple, yet ambitious. By integrating governance technology and strategic insight, we aim to transform compliance into a driver of transparency, accountability and growth across Nigeria&apos;s most vital industries.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                NovaCore is at the heart of that mission - a platform that empowers regulators, operators and financial institutions to align seamlessly and integrate across oversight frameworks, unlocking efficiency, fostering investment and accelerating sustainable growth.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Beyond compliance, HAYLAR champion&apos;s a mindset shift, one where businesses view regulation as a catalyst for innovation and long-term value creation on a global scale. At HAYLAR, we are committed to equipping organizations with the tools, expertise, and forward-thinking solutions they need to lead with confidence.
              </p>
              <p className="text-lg md:text-xl leading-relaxed mt-6 font-semibold">
                Together, we redefine compliance for a smarter, more efficient and sustainable energy future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Company at a Glance</h2>
            <p className="text-xl text-gray-600">Key metrics that define our success and growth</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="text-brand-primary mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl font-bold text-brand-secondary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our company&apos;s development</p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <div className="text-6xl font-bold text-brand-primary mb-4">{milestone.year}</div>
                  <h3 className="text-2xl font-semibold text-[#1a0466] mb-4">{milestone.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{milestone.description}</p>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts driving innovation and excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-secondary mb-2">{member.name}</h3>
                <p className="text-brand-primary font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Learn More?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Discover how HAYLAR Energy can transform your compliance strategy and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-white text-brand-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Explore Our Services
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-brand-secondary font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
