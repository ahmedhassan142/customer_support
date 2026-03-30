import Link from 'next/link';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              SupportPro
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional customer support services for growing ecommerce stores. We handle your customers so you can focus on growth.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About', 'Services', 'Contact','Pricing','Privacy-Policy'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">24/7 Live Chat Support</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Email & Ticket Management</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">WhatsApp & Social Support</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Order & Returns Processing</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <FiMail className="w-4 h-4" />
                <span>hello@supportpro.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiPhone className="w-4 h-4" />
                <span>+92 3130804352</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiClock className="w-4 h-4" />
                <span>Response: Within 24h</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="w-4 h-4" />
                <span>Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-900 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} SupportPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}