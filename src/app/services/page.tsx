'use client';

import { motion } from 'framer-motion';
import { BarChart3, Shield, Settings, FileText, Building2, TrendingUp, CheckCircle, ArrowRight, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "NovaCore: Real-Time Compliance Technology",
      subtitle: "For Regulators",
      description: "Our integrated modular compliance ecosystem unifies diverse compliance modules for regulators, operators and industry stakeholders into a single unified system.",
      features: [
        "Integration with existing platforms",
        "Automated compliance reporting",
        "Regulatory data intelligence",
        "Governance & risk management",
        "Real-time sector-wide insights"
      ],
      bgColor: "from-brand-primary to-orange-600"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Regulatory Risk Compliance & Advisory",
      subtitle: "For Operators",
      description: "We identify compliance risks early and design strategies that strengthen integrity, reduce exposure and position operators for long-term resilience.",
      features: [
        "Compliance as a culture",
        "Seamless reporting & monitoring",
        "Procurement & supply chain integrity",
        "Digital governance & risk management",
        "Incubating innovation"
      ],
      bgColor: "from-brand-secondary to-purple-600"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Project Management Consulting - Oil & Gas",
      subtitle: "End-to-End Support",
      description: "End-to-end project management support for upstream and midstream oil and gas developments with 10+ years of industry expertise.",
      features: [
        "Asset evaluation and development",
        "Asset management services",
        "Asset financing and technical services",
        "Geology & geophysics services",
        "Engineering services"
      ],
      bgColor: "from-brand-primary to-orange-600"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Financial Reg-Tech Solutions",
      subtitle: "For Financial Institutions",
      description: "Regulatory technology solutions that simplify compliance, strengthen trust and operational resilience for Nigeria's financial ecosystem.",
      features: [
        "NovaCore: Unified compliance for finance",
        "Automated AML & fraud risk monitoring",
        "Regulatory reporting automation",
        "Tiered solutions for every institution",
        "Data-driven insights for risk & growth"
      ],
      bgColor: "from-brand-secondary to-purple-600"
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Procurement & Supply Chain Integrity",
      subtitle: "Technology-Enabled Solutions",
      description: "We ensure all procurement processes meet industry regulations, mitigating risks and ensuring seamless operations through technology-enabled tools.",
      features: [
        "Regulatory-compliant procurement",
        "Technology-enabled procurement tools",
        "Supply chain optimization",
        "Real-time tracking & monitoring",
        "Automated procurement workflows"
      ],
      bgColor: "from-brand-primary to-orange-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Governance & Risk Management",
      subtitle: "Future-Proofing Operations",
      description: "Digital frameworks that help operators mitigate risks, demonstrate accountability, and remain competitive in an increasingly regulated global market.",
      features: [
        "Future-proofing operations",
        "Risk mitigation strategies",
        "Accountability frameworks",
        "Global market competitiveness",
        "Digital transformation support"
      ],
      bgColor: "from-brand-secondary to-purple-600"
    }
  ];

  const novacoreFeatures = [
    {
      title: "Real-Time Dashboard",
      description: "Interactive compliance dashboard with live data updates and comprehensive oversight capabilities.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Automated Reporting",
      description: "Streamlined reporting systems that ensure timely and accurate regulatory submissions.",
      icon: <FileText className="w-8 h-8" />
    },
    {
      title: "Predictive Analytics",
      description: "AI-powered insights to predict compliance risks and enable proactive decision-making.",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Regulatory Intelligence",
      description: "Data-driven insights to track industry trends and inform policy adjustments.",
      icon: <Target className="w-8 h-8" />
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
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive regulatory compliance and energy solutions designed to transform your business operations and drive sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NovaCore Platform Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-brand-secondary mb-4">NovaCore Platform</h2>
              <p className="text-xl text-gray-600 mb-8">Our flagship integrated compliance management system</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-brand-secondary mb-6">Revolutionizing Compliance Management</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                NovaCore is our cutting-edge platform that aggregates operator data submissions to provide a real-time, interactive compliance dashboard. It enhances oversight and decision-making through advanced technology and intelligent automation.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Built specifically for the Nigerian energy sector, NovaCore ensures seamless adherence to regulatory standards while providing strategic insights that drive operational excellence.
              </p>
              <div className="space-y-4">
                {novacoreFeatures.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="text-brand-primary mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold text-brand-secondary mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-brand-primary to-brand-secondary p-8 rounded-2xl text-white"
            >
              <div className="text-center">
                <BarChart3 className="w-24 h-24 mx-auto mb-6 text-white" />
                <h4 className="text-2xl font-bold mb-4">Platform Benefits</h4>
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Comprehensive Service Portfolio</h2>
            <p className="text-xl text-gray-600">Tailored solutions for every aspect of regulatory compliance and energy management</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${service.bgColor} p-8 text-white`}>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-lg opacity-90">{service.subtitle}</p>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-brand-secondary mb-4">Industry Expertise</h2>
            <p className="text-xl text-gray-600">Serving key sectors with specialized knowledge and tailored solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {industrySectors.map((sector, index) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <div className="text-brand-primary mb-6">{sector.icon}</div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">{sector.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{sector.description}</p>
                <div className="space-y-2">
                  {sector.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center space-x-2">
                      <ArrowRight className="w-4 h-4 text-brand-primary" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
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
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Let HAYLAR Energy help you navigate regulatory compliance with confidence and drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-brand-secondary hover:bg-gray-100 font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Today
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-brand-secondary font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
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
