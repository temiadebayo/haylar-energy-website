'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Shield, Settings, BarChart3, FileText, Building2, TrendingUp, CheckCircle, Award, Target, DollarSign } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselSlides = [
    {
      id: 1,
      title: "Regulatory Compliance Technology",
      subtitle: "Energy | Innovation | Technology",
      description: "Transforming compliance from a regulatory necessity into strategic advantage. Built on integrity, innovation and excellence, we develop cutting-edge compliance solutions that empower industries.",
      bgColor: "from-brand-primary to-orange-700",
      cta: "Explore Our Solutions"
    },
    {
      id: 2,
      title: "NovaCore Platform",
      subtitle: "Insights, Amplified - Real-Time Compliance Technology",
      description: "Our integrated modular compliance ecosystem unifies diverse compliance modules for regulators, operators and industry stakeholders into a single unified system.",
      bgColor: "from-brand-secondary to-purple-800",
      cta: "Learn More"
    },
    {
      id: 3,
      title: "Future-Forward Optimization",
      subtitle: "Empowering Organizations with Strategic Advantage",
      description: "By integrating governance technology and strategic insight, we transform compliance into a driver of transparency, accountability and growth across Nigeria's most vital industries.",
      bgColor: "from-brand-primary to-orange-800",
      cta: "Get Started"
    }
  ];

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "NovaCore: Real-Time Compliance Technology",
      description: "Integrated modular compliance ecosystem that unifies diverse compliance modules for regulators, operators and industry stakeholders into a single unified system."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Regulatory Risk Compliance & Advisory",
      description: "We identify compliance risks early and design strategies that strengthen integrity, reduce exposure and position operators for long-term resilience."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Project Management Consulting - Oil & Gas",
      description: "End-to-end project management support for upstream and midstream oil and gas developments with 10+ years of industry expertise."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Financial Reg-Tech Solutions",
      description: "Regulatory technology solutions for financial institutions including automated AML monitoring, regulatory reporting automation, and tiered compliance tools."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Procurement & Supply Chain Integrity",
      description: "Technology-enabled procurement tools ensuring sourcing processes are efficient, cost-effective and fully aligned with regulatory standards."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Governance & Risk Management",
      description: "Digital frameworks that help operators mitigate risks, demonstrate accountability, and remain competitive in an increasingly regulated global market."
    }
  ];

  const values = [
    { icon: <CheckCircle className="w-6 h-6" />, title: "Compliance", description: "Seamless adherence to industry standards and regulations" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Efficiency", description: "Technology-driven solutions for operational optimization" },
    { icon: <Target className="w-6 h-6" />, title: "Excellence", description: "Highest quality standards in all operations and services" },
    { icon: <Zap className="w-6 h-6" />, title: "Innovation", description: "Cutting-edge technology and forward-thinking solutions" },
    { icon: <Shield className="w-6 h-6" />, title: "Integrity", description: "Built on foundation of trust, responsibility and excellence" }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proactive Risk Mitigation",
      description: "Helping organizations prevent compliance failures before they occur, promoting proactivity over reactivity."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Regulatory Alignment",
      description: "Designed in collaboration with industry regulators to ensure full compliance with evolving laws and policies."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Technology-Driven Approach",
      description: "Leveraging AI, automation and digital tools for seamless compliance adherence and operational efficiency."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Specialized Compliance Expertise",
      description: "Leveraging deep regulatory experience from power, oil & gas and finance sectors to develop compliance-driven solutions."
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Carousel */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${carouselSlides[currentSlide].bgColor}`}>
              <div className="absolute inset-0 bg-black/20"></div>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/20 rounded-full blur-lg"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-md"></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                {carouselSlides[currentSlide].title}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-white drop-shadow-md">
                {carouselSlides[currentSlide].subtitle}
              </p>
              <p className="text-lg sm:text-xl mb-8 text-white drop-shadow-md max-w-2xl mx-auto">
                {carouselSlides[currentSlide].description}
              </p>
              <Link href="/services" className="inline-block bg-brand-primary hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                {carouselSlides[currentSlide].cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-[#2e125b] mb-4"
            >
              About <strong>HAYLAR</strong> Energy Services Ltd
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A leading provider of regulatory compliance technology, risk management and procurement services for Nigeria&apos;s Oil &amp; Gas, Power and Finance sectors.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-[#2e125b] mb-4">Who We Are</h3>
                              <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2022, <strong>HAYLAR</strong> Energy is a leading provider of regulatory compliance technology, risk management and procurement services for the Nigerian Oil &amp; Gas, Power and Financial sectors. We believe compliance should not be a burden but a catalyst for trust, growth and business resilience.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our flagship platform, <strong>NovaCore</strong> is more than a reporting tool, it is a reimagined compliance ecosystem. By unifying data, streamlining processes and providing foresight through AI analytics, <strong>NovaCore</strong> enables regulators, operators and institutions to lead with confidence in a complex regulatory landscape.
                </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Regulatory compliance technology solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Risk management and procurement services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-brand-primary rounded-full mt-2"></div>
                  <p className="text-gray-600"><strong>NovaCore</strong> integrated compliance management system</p>
                </div>
              </div>
              
              {/* Industry Sectors Infographic */}
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl">
                <h4 className="text-lg font-semibold text-[#2e125b] mb-4 text-center">Serving Key Industries</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-sm">O&G</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">Oil & Gas</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Power</p>
                  </div>
                  <div className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">Finance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-orange-50 to-purple-50 p-6 rounded-lg border border-orange-100">
                <h4 className="text-lg font-semibold text-[#2e125b] mb-2">Vision</h4>
                <p className="text-gray-600">&ldquo;To be the leading Regulatory Compliance technology and procurement solutions provider in Nigeria and Africa, setting new industry standards for regulatory oversight, efficiency and business integrity&rdquo;</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-lg border border-purple-100">
                <h4 className="text-lg font-semibold text-[#2e125b] mb-2">Mission</h4>
                <p className="text-gray-600">&ldquo;To empower organizations with future-forward optimization by continuously pushing the boundaries of efficiency&rdquo;</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2e125b] mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-brand-primary mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[#2e125b] mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2e125b] mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive regulatory compliance and energy solutions for a sustainable future</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-brand-primary/20"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-orange-600 rounded-xl flex items-center justify-center">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#2e125b] mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="w-8 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#2e125b] mb-4">Why Choose <strong>HAYLAR</strong>?</h2>
            <p className="text-xl text-gray-600">Through strategic advisory, cutting-edge technology, and optimized solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-brand-secondary/20"
              >
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-secondary to-purple-600 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#2e125b] mb-4 group-hover:text-[#2e125b] transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="w-8 h-1 bg-gradient-to-r from-brand-secondary to-purple-600 rounded-full"></div>
                </div>
              </motion.div>
            ))}
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
            className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100"
          >
            <h2 className="text-4xl font-bold text-[#2e125b] mb-6">Ready to Transform Your Compliance?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let <strong>HAYLAR</strong> help you navigate the future regulatory compliance with confidence. Partner with us to drive compliance transformation in Nigeria&apos;s Oil &amp; Gas and Finance sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-brand-primary text-white hover:bg-orange-700 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Partner With Us
              </Link>
              <Link href="/about" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Learn More
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
