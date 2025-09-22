'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Settings, BarChart3, FileText, Building2, TrendingUp, CheckCircle, Award, Target, DollarSign, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselSlides = [
    {
      title: "Intelligence connected",
      subtitle: "Energy data and analytics solutions for an interconnected world — enhanced by AI and human intelligence",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Energy sector data analytics and compliance technology"
    },
    {
      title: "Regulatory Excellence",
      subtitle: "Advanced compliance technology that ensures seamless adherence to evolving industry standards and regulations",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Oil & Gas Industry Operations and Compliance"
    },
    {
      title: "Digital Transformation",
      subtitle: "Technology-driven solutions that optimize operations and drive efficiency across energy and financial sectors",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Financial Technology and Digital Compliance"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };


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


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Carousel Section */}
      <section id="home" className="relative bg-white py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-4xl lg:text-6xl font-light text-[#2e125b] leading-tight">
                  {carouselSlides[currentSlide].title}
                </h1>
                <p className="text-xl lg:text-2xl text-black font-light leading-relaxed">
                  {carouselSlides[currentSlide].subtitle}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
              >
                <Link href="/services" className="inline-block bg-[#2e125b] text-white hover:bg-[#1a0466] font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300 shadow-lg">
                  Discover our products
                </Link>
                <Link href="/about" className="inline-block border-2 border-[#2e125b] text-[#2e125b] hover:bg-[#2e125b] hover:text-white font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300">
                  Learn more
                </Link>
              </motion.div>
            </div>
            
            {/* Carousel Image */}
            <div className="relative">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={carouselSlides[currentSlide].image}
                  alt={carouselSlides[currentSlide].alt}
                  fill
                  className="object-cover"
                  priority={currentSlide === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e125b]/20 to-transparent"></div>
              </motion.div>
              
              {/* Carousel Controls */}
              <div className="flex items-center justify-center mt-6 space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-[#2e125b]" />
                </button>
                
                {/* Slide Indicators */}
                <div className="flex space-x-2">
                  {carouselSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-[#2e125b] w-8' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-[#2e125b]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get an interconnected view - WoodMac Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-6"
            >
              Get an interconnected view
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-black max-w-3xl mx-auto"
            >
              Break away from fragmented data to thrive in a complex world that demands an interconnected view of the entire energy and natural resources supply chain.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e125b] mb-4">Think beyond the silos</h3>
              <p className="text-black leading-relaxed">
                Break away from fragmented data to thrive in a complex world that demands an interconnected view of the entire energy and natural resources supply chain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e125b] mb-4">Uncover deep relationships</h3>
              <p className="text-black leading-relaxed">
                Explore connections between assets, technologies and industries, and the interplay across supply chains, government policies and global economies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e125b] mb-4">See with absolute clarity</h3>
              <p className="text-black leading-relaxed">
                Understand connections between commodities and make confident investment decisions in a complex energy landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold text-[#2e125b] mb-4"
            >
              About <strong>HAYLAR</strong> Energy Services Ltd
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-black max-w-3xl mx-auto"
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
                              <p className="text-black mb-6 leading-relaxed">
                  Founded in 2022, <strong>HAYLAR</strong> Energy is a leading provider of regulatory compliance technology, risk management and procurement services for the Nigerian Oil &amp; Gas, Power and Financial sectors. We believe compliance should not be a burden but a catalyst for trust, growth and business resilience.
                </p>
                <p className="text-black mb-6 leading-relaxed">
                  Our flagship platform, <strong>NovaCore</strong> is more than a reporting tool, it is a reimagined compliance ecosystem. By unifying data, streamlining processes and providing foresight through AI analytics, <strong>NovaCore</strong> enables regulators, operators and institutions to lead with confidence in a complex regulatory landscape.
                </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#2e125b] rounded-full mt-2"></div>
                  <p className="text-black">Regulatory compliance technology solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#2e125b] rounded-full mt-2"></div>
                  <p className="text-black">Risk management and procurement services</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-[#2e125b] rounded-full mt-2"></div>
                  <p className="text-black"><strong>NovaCore</strong> integrated compliance management system</p>
                </div>
              </div>
              
              {/* Industry Sectors Infographic */}
              <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
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

      {/* The future of energy data and insights - WoodMac Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-6"
            >
              The future of energy data and insights
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2e125b] mb-4">Trusted data</h3>
              <h4 className="text-lg font-medium text-[#2e125b] mb-4">Access the data others wish they had</h4>
              <p className="text-black leading-relaxed mb-6">
                Get the industry&apos;s deepest, broadest and most accurate data. Covering the whole energy transition supply chain.
              </p>
              <ul className="text-left space-y-2 text-black">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  NovaCore Platform
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Regulatory Analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Compliance Monitoring
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Risk Assessment Tools
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Supply Chain Analytics
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2e125b] mb-4">Market experts</h3>
              <h4 className="text-lg font-medium text-[#2e125b] mb-4">Understand the stories behind the data</h4>
              <p className="text-black leading-relaxed mb-6">
                Add 50+ market experts, data scientists and thought leaders to your team – with direct access to senior analysts to guide your decisions.
              </p>
              <ul className="text-left space-y-2 text-black">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Oil & Gas Expertise
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Power & Renewables
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Financial Services
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Regulatory Advisory
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-[#2e125b] rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-[#2e125b] mb-4">Proprietary methodology</h3>
              <h4 className="text-lg font-medium text-[#2e125b] mb-4">Value with pinpoint accuracy</h4>
              <p className="text-black leading-relaxed mb-6">
                Get the cross-commodity insights and valuation models you need to set your course in an increasingly complex world.
              </p>
              <ul className="text-left space-y-2 text-black">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  NovaCore Analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Compliance Scoring
          </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#2e125b] rounded-full mr-3"></div>
                  Risk Modeling
          </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - WoodMac Style */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-6">Explore our portfolio</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">Comprehensive regulatory compliance and energy solutions for a sustainable future</p>
          </motion.div>

          {/* Industry Images Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Oil & Gas Industry Operations"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e125b]/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Oil & Gas</h3>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Power Sector and Renewable Energy"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e125b]/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Power Sector</h3>
              </div>
            </div>
            
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
            <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Financial Technology and Compliance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2e125b]/80 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">Finance</h3>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-[#2e125b] mb-6">
                  <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#2e125b] mb-4">{service.title}</h3>
                <p className="text-black leading-relaxed mb-6">{service.description}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-[#2e125b] font-medium text-sm">Learn more →</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/services" className="inline-block bg-[#2e125b] text-white hover:bg-[#1a0466] font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300 shadow-lg">
              Explore All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section - WoodMac Style */}
      <section id="why-choose-us" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-6">Why Choose <strong>HAYLAR</strong>?</h2>
            <p className="text-lg text-black max-w-3xl mx-auto">Through strategic advisory, cutting-edge technology, and optimized solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-[#2e125b] mb-6">
                  <div className="w-16 h-16 bg-[#2e125b] rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#2e125b] mb-4">{item.title}</h3>
                <p className="text-black leading-relaxed">{item.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-[#2e125b] font-medium text-sm">Learn more →</span>
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
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-light mb-6">Ready to Transform Your Compliance?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Let <strong>HAYLAR</strong> help you navigate the future regulatory compliance with confidence. Partner with us to drive compliance transformation in Nigeria&apos;s Oil &amp; Gas and Finance sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#2e125b] hover:bg-gray-50 font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300 shadow-lg">
                Partner With Us
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-[#2e125b] font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300">
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
