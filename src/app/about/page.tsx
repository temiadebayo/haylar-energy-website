'use client';

import { motion } from 'framer-motion';
import { Users, Globe, Zap, Award, Target, Rocket, BarChart3, Settings, Building2, Eye, TrendingUp, Brain, Handshake } from 'lucide-react';
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
              About <strong>HAYLAR</strong> Energy
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1a0466] mb-6">Who We Are</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <strong>HAYLAR</strong> Energy is a Nigerian compliance technology company dedicated to transforming compliance from a burden into a catalyst for trust, growth and resilience. We bridge the gap between regulation and innovation, equipping regulators and operators in the Oil &amp; Gas, Power and Finance sectors with tools that deliver clarity, accountability and foresight for growth and advancement.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a0466] mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading compliance technology partner in Nigeria and Africa, delivering future ready compliance solutions that drive economic advancement in sustainable energy and financial transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a0466] mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower organizations with future-forward optimization by continuously pushing the boundaries of efficiency and transforming compliance into a strategic advantage.
              </p>
            </motion.div>
          </div>

          {/* NovaCore Platform Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-gray-50 to-orange-50 p-8 rounded-2xl border border-gray-200 mb-16"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-[#1a0466] mb-4">Our Flagship Platform: <strong>NovaCore</strong></h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A modular compliance ecosystem that integrates diverse compliance modules for regulators, operators, and financial institutions into one unified system.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#1a0466] mb-3">For Regulators</h4>
                <p className="text-gray-600">Real-time, sector-wide insights that simplify oversight, standardize reporting and strengthen enforcement.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#1a0466] mb-3">For Operators</h4>
                <p className="text-gray-600">Seamless reporting and monitoring integrated into daily workflows, reducing compliance strain while building cultures of integrity.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#1a0466] mb-3">For Financial Institutions</h4>
                <p className="text-gray-600">Standardized reporting and automated risk monitoring that simplify compliance for high-volume, resource-stretched banks, fintechs and MFIs.</p>
              </div>
            </div>
          </motion.div>

          {/* Why It Matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-[#1a0466] mb-8">Why It Matters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#1a0466] mb-2">Transparency</h4>
                <p className="text-gray-600">Clear oversight across sectors</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#1a0466] mb-2">Efficiency</h4>
                <p className="text-gray-600">Automation reduces cost and delays</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#1a0466] mb-2">Foresight</h4>
                <p className="text-gray-600">Predictive analytics enable proactive governance</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#1a0466] mb-2">Trust</h4>
                <p className="text-gray-600">Stronger compliance builds credibility</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1a0466] mb-4">A Message from Our CEO</h2>
            <p className="text-xl text-gray-600">Leadership insights driving our mission forward</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* CEO Photo Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-brand-primary to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">LT</span>
                </div>
                <h3 className="text-xl font-bold text-[#1a0466] mb-2">Lara Timi-Ajayi</h3>
                <p className="text-brand-primary font-medium">Founder & CEO</p>
                <p className="text-sm text-gray-600 mt-2"><strong>HAYLAR</strong> Energy Services Ltd</p>
              </div>
            </motion.div>

            {/* CEO Message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    At <strong>HAYLAR</strong> Energy, we are driven by a singular mission: transforming compliance from a regulatory necessity into strategic advantage. Built on integrity, innovation and excellence, we develop cutting-edge compliance solutions that empower industries with oversight and foresight to thrive in an evolving energy landscape.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our vision is simple, yet ambitious. By integrating governance technology and strategic insight, we aim to transform compliance into a driver of transparency, accountability and growth across Nigeria&apos;s most vital industries.
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-xl border-l-4 border-brand-primary">
                    <p className="text-lg leading-relaxed text-gray-700 italic">
                      "<strong>NovaCore</strong> is at the heart of that mission - a platform that empowers regulators, operators and financial institutions to align seamlessly and integrate across oversight frameworks, unlocking efficiency, fostering investment and accelerating sustainable growth."
                    </p>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-700">
                    Beyond compliance, <strong>HAYLAR</strong> champion&apos;s a mindset shift, one where businesses view regulation as a catalyst for innovation and long-term value creation on a global scale. At <strong>HAYLAR</strong>, we are committed to equipping organizations with the tools, expertise, and forward-thinking solutions they need to lead with confidence.
                  </p>
                  
                  <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-6 rounded-xl text-white">
                    <p className="text-lg font-semibold text-center">
                      "Together, we redefine compliance for a smarter, more efficient and sustainable energy future."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
                className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-brand-primary/20"
              >
                <div className="text-white mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-orange-600 rounded-full flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-5xl font-bold text-[#1a0466] mb-3 group-hover:text-brand-primary transition-colors">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-orange-600 rounded-full mx-auto"></div>
                </div>
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

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-primary to-brand-secondary transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 bg-white p-8 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl font-bold text-white">{milestone.year}</span>
                      </div>
                      <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-orange-600 rounded-full"></div>
                    </div>
                    <h3 className="text-2xl font-semibold text-[#1a0466] mb-4 group-hover:text-brand-primary transition-colors">{milestone.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-brand-secondary to-purple-600 rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-brand-secondary to-brand-primary mt-4"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1a0466] mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts driving innovation and excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:border-brand-primary/20 border border-gray-100"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1a0466] mb-2 group-hover:text-brand-primary transition-colors">{member.name}</h3>
                <p className="text-brand-primary font-medium mb-4">{member.position}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-primary to-orange-600 rounded-full mx-auto"></div>
                </div>
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
              Discover how <strong>HAYLAR</strong> Energy can transform your compliance strategy and drive your business forward.
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
