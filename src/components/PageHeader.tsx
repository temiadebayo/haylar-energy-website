'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;
  description?: string;
}

export default function PageHeader({ title, breadcrumbs, description }: PageHeaderProps) {
  return (
    <section className="relative bg-gradient-to-r from-[#2e125b] to-[#1a0466] py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Breadcrumb Navigation */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center space-x-2 text-white/80 text-sm">
              <li>
                <Link 
                  href="/" 
                  className="flex items-center hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#2e125b] rounded"
                  aria-label="Home"
                >
                  <Home className="w-4 h-4" />
                </Link>
              </li>
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.href} className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-2 text-white/60" />
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium" aria-current="page">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    <Link 
                      href={breadcrumb.href}
                      className="hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#2e125b] rounded"
                    >
                      {breadcrumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Page Title */}
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-4 leading-tight">
            {title}
          </h1>
          
          {/* Page Description */}
          {description && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
