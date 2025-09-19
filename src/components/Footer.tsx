import Link from 'next/link';
import { MapPin, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2e125b] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-light text-white mb-4"><strong>HAYLAR</strong> Energy Services Ltd</h3>
            <p className="text-white mb-6 max-w-md">
              Leading provider of regulatory compliance technology, risk management and procurement services for Nigeria&apos;s Oil &amp; Gas, Power and Finance sectors.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#2e125b] rounded-full flex items-center justify-center hover:bg-[#1a0466] transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white hover:text-white/80 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-white/80 transition-colors">About</Link></li>
              <li><Link href="/services" className="text-white hover:text-white/80 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-white hover:text-white/80 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-2 text-white">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Abuja, Nigeria</span>
              </div>
              <Link href="mailto:info@haylarenergy.com" className="flex items-center space-x-2 hover:text-white/80 transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@haylarenergy.com</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white">
          <p>&copy; 2025 <strong>HAYLAR</strong> Energy Services Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
