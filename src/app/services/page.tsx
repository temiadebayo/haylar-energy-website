'use client';

import { motion } from 'framer-motion';
import { BarChart3, Shield, FileText, Building2, TrendingUp, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageHeader from '@/components/PageHeader';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "NovaCore: Real-Time Compliance Technology",
      subtitle: "For Regulators",
      description: "Our integrated modular compliance ecosystem unifies diverse compliance modules for regulators, operators and industry stakeholders into a single unified system.",
      features: [
      ],
      bgColor: "from-[#2e125b] to-[#1a0466]"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Regulatory Risk Compliance & Advisory",
      subtitle: "For Operators",
      description: "We identify compliance risks early and design strategies that strengthen integrity, reduce exposure and position operators for long-term resilience.",
      features: [
      ],
      bgColor: "from-[#2e125b] to-[#1a0466]"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Financial Reg-Tech Solutions",
      subtitle: "For Financial Institutions",
      description: "Regulatory technology solutions that simplify compliance, strengthen trust and operational resilience for Nigeria's financial ecosystem.",
      features: [
      ],
      bgColor: "from-[#2e125b] to-[#1a0466]"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Procurement & Supply Chain Integrity",
      subtitle: "Technology-Enabled Solutions",
      description: "We ensure all procurement processes meet industry regulations, mitigating risks and ensuring seamless operations through technology-enabled tools.",
      features: [
      ],
      bgColor: "from-[#2e125b] to-[#1a0466]"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Governance & Risk Management",
      subtitle: "Future-Proofing Operations",
      description: "Digital frameworks that help operators mitigate risks, demonstrate accountability, and remain competitive in an increasingly regulated global market.",
      features: [
      ],
      bgColor: "from-[#2e125b] to-[#1a0466]"
    }
  ];


  const industrySectors = [
    {
      name: "Oil & Gas",
      description: "Comprehensive compliance solutions for upstream and midstream operations",
      icon: <Zap className="w-8 h-8" />,
      services: ["Asset Management", "Project Planning", "Regulatory Compliance", "Risk Assessment"]
    },
    {
      name: "Power Sector",
      description: "Energy compliance and management solutions for power generation and distribution",
      icon: <Shield className="w-8 h-8" />,
      services: ["Energy Compliance", "Grid Management", "Regulatory Reporting", "Safety Standards"]
    },
    {
      name: "Finance",
      description: "Reg-Tech solutions for banks, fintech companies, and financial institutions",
      icon: <TrendingUp className="w-8 h-8" />,
      services: ["AML Compliance", "Fraud Monitoring", "Regulatory Reporting", "Risk Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Page Header */}
      <PageHeader 
        title="Our Services"
        breadcrumbs={[
          { label: "HAYLAR Energy", href: "/" },
          { label: "Services", href: "/services" }
        ]}
        description="Comprehensive regulatory compliance and energy solutions designed to transform your business operations and drive sustainable growth."
      />

      {/* NovaCore Platform Highlight - WoodMac Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-4"><strong>NovaCore</strong> Platform</h2>
              <p className="text-lg text-black mb-8">Our flagship integrated compliance management system</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* NovaCore Platform Image */}
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="NovaCore compliance management dashboard and analytics"
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-3xl font-semibold text-[#2e125b] mb-6">Revolutionizing Compliance Management</h3>
              <p className="text-lg text-black mb-6 leading-relaxed">
                <strong>NovaCore</strong> is our cutting-edge platform that aggregates operator data submissions to provide a real-time, interactive compliance dashboard. It enhances oversight and decision-making through advanced technology and intelligent automation.
              </p>
              <p className="text-lg text-black mb-6 leading-relaxed">
                Built specifically for the Nigerian energy sector, <strong>NovaCore</strong> ensures seamless adherence to regulatory standards while providing strategic insights that drive operational excellence.
              </p>
              <a 
                href="https://www.novacoreafrica.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#2e125b] text-white hover:bg-[#1a0466] font-medium py-3 px-6 rounded-sm transition-all duration-300 shadow-lg mb-8"
              >
                Visit NovaCore Platform →
              </a>
              
              {/* Platform Image */}
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="NovaCore Platform Interface"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e125b]/40 to-transparent flex items-end p-4">
                  <span className="text-white text-sm font-medium">Real-time Analytics Dashboard</span>
                </div>
              </div>
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#2e125b] p-8 rounded-2xl text-white"
            >
              <div className="text-center">
                <BarChart3 className="w-24 h-24 mx-auto mb-6 text-white" />
                <h4 className="text-2xl font-semibold mb-4">NovaCore Platform Benefits</h4>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Real-time compliance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Automated reporting systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Predictive risk analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5" />
                    <span>Regulatory intelligence</span>
                  </li>
                </ul>
                <a 
                  href="https://www.novacoreafrica.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-white text-[#2e125b] hover:bg-gray-50 font-medium py-3 px-6 rounded-sm transition-all duration-300 shadow-lg mt-6"
                >
                  Learn More About NovaCore →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Main Services - WoodMac Style */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-4">Comprehensive Service Portfolio</h2>
            <p className="text-lg text-black">Tailored solutions for every aspect of regulatory compliance and energy management</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${service.bgColor} p-8 text-white`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-lg opacity-90">{service.subtitle}</p>
                </div>
                <div className="p-8">
                  <p className="text-black mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#2e125b] flex-shrink-0" />
                        <span className="text-black">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors - WoodMac Style */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* Industry Image */}
            <div className="relative h-48 rounded-lg overflow-hidden shadow-lg mb-8 mx-auto max-w-4xl">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Energy sector infrastructure and industrial facilities"
                fill
                className="object-cover"
              />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-light text-[#2e125b] mb-4">Industry Expertise</h2>
            <p className="text-lg text-black">Serving key sectors with specialized knowledge and tailored solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {industrySectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="text-[#2e125b] mb-6">{sector.icon}</div>
                <h3 className="text-2xl font-semibold text-[#2e125b] mb-4">{sector.name}</h3>
                <p className="text-black mb-6 leading-relaxed">{sector.description}</p>
                <div className="space-y-2">
                  {sector.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-[#2e125b]" />
                      <span className="text-black">{service}</span>
                    </div>
                  ))}
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
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let <strong>HAYLAR</strong> Energy help you navigate regulatory compliance with confidence and drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#2e125b] hover:bg-gray-50 font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300 shadow-lg">
                Get Started Today
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-[#2e125b] font-medium py-4 px-8 rounded-sm text-lg transition-all duration-300">
                Learn More About Us
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
