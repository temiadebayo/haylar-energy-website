'use client';

import { motion } from 'framer-motion';
import { Target, Rocket, BarChart3, Settings, Building2, Eye, Brain, Handshake, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';

export default function AboutPage() {

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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <PageHeader 
        title="About HAYLAR Energy"
        breadcrumbs={[
          { label: "HAYLAR Energy", href: "/" },
          { label: "About", href: "/about" }
        ]}
        description="Leading the transformation of regulatory compliance in Nigeria's energy sector through innovation, technology and expertise."
      />

      {/* Company Overview - WoodMac Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-6">Who We Are</h2>
            <p className="text-lg text-black max-w-4xl mx-auto leading-relaxed">
              <strong>HAYLAR</strong> Energy is a Nigerian compliance technology company dedicated to transforming compliance from a burden into a catalyst for trust, growth and resilience. We bridge the gap between regulation and innovation, equipping regulators and operators in the Oil &amp; Gas, Power and Finance sectors with tools that deliver clarity, accountability and foresight for growth and advancement.
            </p>
          </motion.div>

          {/* Vision & Mission Cards - WoodMac Style */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mb-6 shadow-md">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2e125b] mb-4">Our Vision</h3>
              <p className="text-black leading-relaxed">
                To be the leading compliance technology partner in Nigeria and Africa, delivering future ready compliance solutions that drive economic advancement in sustainable energy and financial transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mb-6 shadow-md">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2e125b] mb-4">Our Mission</h3>
              <p className="text-black leading-relaxed">
                To empower organizations with future-forward optimization by continuously pushing the boundaries of efficiency and transforming compliance into a strategic advantage.
              </p>
            </motion.div>
          </div>

          {/* NovaCore Platform Highlight - WoodMac Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-sm p-8 rounded-lg border border-gray-100 mb-16"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-light text-[#2e125b] mb-4">Our Flagship Platform: <strong>NovaCore</strong></h3>
              <p className="text-lg text-black max-w-3xl mx-auto mb-6">
                A modular compliance ecosystem that integrates diverse compliance modules for regulators, operators, and financial institutions into one unified system.
              </p>
              <a 
                href="https://www.novacoreafrica.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#2e125b] text-white hover:bg-[#1a0466] font-medium py-3 px-6 rounded-sm transition-all duration-300 shadow-lg"
              >
                Explore NovaCore →
              </a>
            </div>

            {/* Platform Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-8"
            >
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="NovaCore Platform Dashboard and Analytics"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e125b]/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-semibold mb-2">Real-time Compliance Dashboard</h4>
                  <p className="text-sm opacity-90">Advanced analytics and monitoring capabilities</p>
                </div>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#2e125b] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#2e125b] mb-3">For Regulators</h4>
                <p className="text-black">Real-time, sector-wide insights that simplify oversight, standardize reporting and strengthen enforcement.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#2e125b] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#2e125b] mb-3">For Operators</h4>
                <p className="text-black">Seamless reporting and monitoring integrated into daily workflows, reducing compliance strain while building cultures of integrity.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#2e125b] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#2e125b] mb-3">For Financial Institutions</h4>
                <p className="text-black">Standardized reporting and automated risk monitoring that simplify compliance for high-volume, resource-stretched banks, fintechs and MFIs.</p>
              </div>
            </div>
          </motion.div>

          {/* Why It Matters - WoodMac Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-3xl font-light text-[#2e125b] mb-8">Why It Matters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#2e125b] mb-2">Transparency</h4>
                <p className="text-black">Clear oversight across sectors</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#2e125b] mb-2">Efficiency</h4>
                <p className="text-black">Automation reduces cost and delays</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#2e125b] mb-2">Foresight</h4>
                <p className="text-black">Predictive analytics enable proactive governance</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-[#2e125b] mb-2">Trust</h4>
                <p className="text-black">Stronger compliance builds credibility</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Message - WoodMac Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-4">A Message from Our CEO</h2>
            <p className="text-lg text-black">Leadership insights driving our mission forward</p>
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
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#2e125b]/20 bg-gradient-to-br from-[#2e125b] to-[#1a0466] flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">LT</span>
                </div>
                <h3 className="text-xl font-bold text-[#2e125b] mb-2">Lara Timi-Ajayi</h3>
                <p className="text-[#2e125b] font-medium">Founder & CEO</p>
                <p className="text-sm text-black mt-2"><strong>HAYLAR</strong> Energy</p>
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
                  <p className="text-lg leading-relaxed text-black">
                    At <strong>HAYLAR</strong> Energy, we are driven by a singular mission: transforming compliance from a regulatory necessity into strategic advantage. Built on integrity, innovation and excellence, we develop cutting-edge compliance solutions that empower industries with oversight and foresight to thrive in an evolving energy landscape.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-black">
                    Our vision is simple, yet ambitious. By integrating governance technology and strategic insight, we aim to transform compliance into a driver of transparency, accountability and growth across Nigeria&apos;s most vital industries.
                  </p>
                  
                  <div className="bg-gray-50 shadow-sm p-6 rounded-lg border-l-4 border-[#2e125b]">
                    <p className="text-lg leading-relaxed text-black italic mb-4">
                      &ldquo;<strong>NovaCore</strong> is at the heart of that mission - a platform that empowers regulators, operators and financial institutions to align seamlessly and integrate across oversight frameworks, unlocking efficiency, fostering investment and accelerating sustainable growth.&rdquo;
                    </p>
                    <a 
                      href="https://www.novacoreafrica.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#2e125b] hover:text-[#1a0466] font-semibold transition-colors"
                    >
                      Visit NovaCore Platform →
                    </a>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-black">
                    Beyond compliance, <strong>HAYLAR</strong> champion&apos;s a mindset shift, one where businesses view regulation as a catalyst for innovation and long-term value creation on a global scale. At <strong>HAYLAR</strong>, we are committed to equipping organizations with the tools, expertise, and forward-thinking solutions they need to lead with confidence.
                  </p>
                  
                  <div className="bg-[#2e125b] p-6 rounded-xl text-white">
                    <p className="text-lg font-semibold text-center">
                      &ldquo;Together, we redefine compliance for a smarter, more efficient and sustainable energy future.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Team Section - WoodMac Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-4">Our Leadership Team</h2>
            <p className="text-lg text-black">Meet the experts driving innovation and excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:border-[#2e125b]/20 border border-gray-100"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-[#2e125b] to-[#1a0466] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2e125b] mb-2 group-hover:text-[#1a0466] transition-colors">{member.name}</h3>
                <p className="text-[#2e125b] font-medium mb-4">{member.position}</p>
                <p className="text-black leading-relaxed">{member.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="w-12 h-1 bg-[#2e125b] rounded-full mx-auto"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - WoodMac Style */}
      <section className="py-20 bg-[#2e125b]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">Ready to Learn More?</h2>
            <p className="text-xl text-white/90 mb-8">
              Discover how <strong>HAYLAR</strong> Energy can transform your compliance strategy and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-white text-[#2e125b] hover:bg-gray-50 font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300 shadow-lg">
                Explore Our Services
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-[#2e125b] font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300">
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
