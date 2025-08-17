'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Zap, Leaf, Shield, Star, Users, Globe, Lightbulb, Settings, BarChart3, FileText, Building2, TrendingUp, CheckCircle, Award, Clock, Target } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const carouselSlides = [
    {
      id: 1,
      title: "Regulatory Compliance Technology",
      subtitle: "Transforming Compliance into Strategic Advantage",
      description: "Leading provider of regulatory compliance technology, risk management and procurement services for Nigeria's Oil & Gas, Power and Finance sectors.",
      bgColor: "from-brand-primary to-orange-700",
      cta: "Explore Our Solutions"
    },
    {
      id: 2,
      title: "NovaCore Platform",
      subtitle: "Real-Time Compliance Technology",
      description: "Our flagship platform aggregates operator data submissions to provide real-time, interactive compliance dashboard, enhancing oversight and decision-making.",
      bgColor: "from-brand-secondary to-purple-800",
      cta: "Learn More"
    },
    {
      id: 3,
      title: "Energy Industry Expertise",
      subtitle: "Oil & Gas | Power | Finance",
      description: "Adopting an interdisciplinary approach with data-driven, technology-enabled solutions to boost compliance initiatives and operational efficiency.",
      bgColor: "from-brand-primary to-orange-800",
      cta: "Get Started"
    }
  ];

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Regulatory Compliance Technology",
      description: "NovaCore platform with real-time compliance dashboards, automated reporting systems, and predictive analytics for proactive compliance management."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Management & Advisory",
      description: "Comprehensive risk mitigation strategies, compliance gap identification, and corporate governance frameworks for operational integrity."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Project Management Consulting",
      description: "End-to-end project management for upstream and midstream oil and gas developments with 20+ years of industry expertise."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Executive Thought Leadership",
      description: "Strategic content development, conference speeches, and executive communications for energy sector leaders."
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Procurement & Supply Chain",
      description: "Technology-enabled procurement tools with regulatory compliance, real-time tracking, and supply chain optimization."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Financial Reg-Tech Solutions",
      description: "Customized compliance automation and risk management solutions for banks, fintech companies, and financial institutions."
    }
  ];

  const values = [
    { icon: <Zap className="w-6 h-6" />, title: "Innovation", description: "Cutting-edge technology and forward-thinking solutions" },
    { icon: <Shield className="w-6 h-6" />, title: "Integrity", description: "Built on foundation of trust, responsibility and excellence" },
    { icon: <Target className="w-6 h-6" />, title: "Excellence", description: "Highest quality standards in all operations and services" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Compliance", description: "Seamless adherence to industry standards and regulations" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Efficiency", description: "Technology-driven solutions for operational optimization" }
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
      title: "Specialized Expertise",
      description: "Deep regulatory experience from power, oil & gas and finance sectors to develop compliance-driven solutions."
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
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <Image
                  src="/haylar_logo.png"
                  alt="HAYLAR Energy Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
                
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="text-brand-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-brand-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-brand-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#why-choose-us" className="text-brand-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Why Choose Us</a>
                <a href="#contact" className="text-brand-secondary hover:text-brand-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {carouselSlides[currentSlide].title}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 text-gray-200">
                {carouselSlides[currentSlide].subtitle}
              </p>
              <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
                {carouselSlides[currentSlide].description}
              </p>
              <button className="bg-brand-primary hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                {carouselSlides[currentSlide].cta}
              </button>
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
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-brand-secondary mb-4"
            >
              About HAYLAR Energy Services Ltd
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A leading provider of regulatory compliance technology, risk management and procurement services for Nigeria's Oil & Gas, Power and Finance sectors.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-brand-secondary mb-4">Who We Are</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                HAYLAR Energy is a leading provider of regulatory compliance technology, risk management and procurement services for the Nigerian Oil & Gas, power and finance sectors. Adopting an interdisciplinary approach, we provide data-driven, technology-enabled solutions to boost compliance initiatives, ensuring seamless adherence to respective industry standards and regulations.
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
                  <p className="text-gray-600">NovaCore integrated compliance management system</p>
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
                <h4 className="text-lg font-semibold text-brand-secondary mb-2">Vision</h4>
                <p className="text-gray-600">"To be the leading Regulatory Compliance technology and procurement solutions provider in Nigeria and Africa, setting new industry standards for regulatory oversight, efficiency and business integrity"</p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 p-6 rounded-lg border border-purple-100">
                <h4 className="text-lg font-semibold text-brand-secondary mb-2">Mission</h4>
                <p className="text-gray-600">"To empower organizations with future-forward optimization by continuously pushing the boundaries of efficiency"</p>
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
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Our Core Values</h2>
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
                <h3 className="text-xl font-semibold text-brand-secondary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive regulatory compliance and energy solutions for a sustainable future</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100"
              >
                <div className="text-brand-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-brand-secondary mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Why Choose HAYLAR?</h2>
            <p className="text-xl text-gray-600">Through strategic advisory, cutting-edge technology, and optimized solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-brand-primary mb-6">{item.icon}</div>
                <h3 className="text-xl font-semibold text-brand-secondary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Compliance?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Let HAYLAR help you navigate the future regulatory compliance with confidence. Partner with us to drive compliance transformation in Nigeria's Oil & Gas and Finance sectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Partner With Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-brand-secondary font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-brand-primary mb-4">HAYLAR Energy Services Ltd</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Leading provider of regulatory compliance technology, risk management and procurement services for Nigeria's Oil & Gas, Power and Finance sectors.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Regulatory Compliance</li>
                <li>Risk Management</li>
                <li>Project Management</li>
                <li>Procurement Services</li>
                <li>Thought Leadership</li>
                <li>Reg-Tech Solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>Abuja, Nigeria</p>
                <p>haylarenergysl@gmail.com</p>
                <p>+234-909 224 9845</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HAYLAR Energy Services Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
