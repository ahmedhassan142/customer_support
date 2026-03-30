'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMail, FiMessageCircle, FiBriefcase, FiCreditCard, FiUser, FiArrowRight } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home', icon: FiUser },
    { href: '/about', label: 'About', icon: FiBriefcase },
    { href: '/services', label: 'Services', icon: FiMessageCircle },
    { href: '/pricing', label: 'Pricing', icon: FiCreditCard },
    { href: '/contact', label: 'Contact', icon: FiMail },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-md shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] border-b border-gray-100/80 dark:border-gray-800/80'
            : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
          {/* Logo - Updated to match the provided image */}
<Link
  href="/"
  className="group flex items-center gap-3 transition-all duration-300"
>
  {/* Blue Circle with White Checkmark */}
  <div className="relative w-10 h-10 flex-shrink-0">
    <div className="w-10 h-10 bg-[#1E88E5] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 ring-4 ring-white dark:ring-gray-900">
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path 
          d="M20 6L9 17L4 12" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>

  {/* Text: SupportFlow */}
  <div className="flex flex-col -space-y-1">
    <span className="text-[28px] md:text-[32px] font-bold tracking-[-0.02em] text-gray-900 dark:text-white">
      Support
      <span className="text-[#1E88E5]">Flow</span>
    </span>
    <span className="text-[10px] md:text-xs font-medium tracking-[1.5px] text-gray-500 dark:text-gray-400 -mt-1">
      CUSTOMER SUPPORT SOLUTIONS
    </span>
  </div>
</Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium text-sm lg:text-base"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 bg-blue-50 dark:bg-blue-950/30 rounded-lg scale-0 group-hover:scale-100 transition-all duration-300"></span>
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-6 transition-all duration-300"></span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 z-50 relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX size={22} className="text-gray-700 dark:text-gray-300" />
              ) : (
                <FiMenu size={22} className="text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-gray-900 transition-all duration-400 md:hidden ${
          isMenuOpen
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col h-full overflow-y-auto py-6 px-5">
          {/* Logo in mobile menu */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SF</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              SupportFlow
            </span>
          </div>

          {/* Navigation Links */}
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-3 py-4 px-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium border-b border-gray-50 dark:border-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/20 rounded-lg"
              >
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                <span>{link.label}</span>
                <FiArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            );
          })}

          {/* Get Started Button */}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Get Started
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          {/* Footer Info */}
          <div className="mt-auto pt-8 pb-4 text-center">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Enterprise-level support at agency prices
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <span className="text-xs text-gray-400">24/7 Support</span>
              <span className="text-xs text-gray-400">AI-Powered</span>
              <span className="text-xs text-gray-400">Enterprise Experience</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}