import Link from 'next/link';
import { FiArrowRight, FiClock, FiZap, FiTrendingUp, FiMessageCircle, FiHeadphones, FiShoppingBag } from 'react-icons/fi';

export default function Home() {
  const features = [
    {
      icon: FiClock,
      title: '24/7 Coverage',
      description: 'Round-the-clock support across all channels. Never miss a customer query.',
    },
    {
      icon: FiZap,
      title: 'Fast Response',
      description: 'Average response time under 2 minutes for live chat and WhatsApp.',
    },
    {
      icon: FiTrendingUp,
      title: 'Order Tracking',
      description: 'Full integration with Shopify and WooCommerce for instant order visibility.',
    },
  ];

  const stats = [
    { value: '24/7', label: 'Support Coverage', description: 'Round the clock availability' },
    { value: '< 2min', label: 'Response Time', description: 'Average first response' },
    { value: '90%', label: 'Satisfaction', description: 'Customer satisfaction rate' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Trusted by 50+ Ecommerce Stores</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
              Professional Customer Support
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">For Growing Stores</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We handle your customer queries, complaints, and order tracking 24/7.
              Focus on growing your business while we build customer loyalty.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-200 dark:hover:shadow-blue-900 transition-all duration-300 hover:scale-105"
              >
                Start Free Trial
                <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                View Services
                <FiHeadphones className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              We Help You Scale Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional support that grows with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Improve Your Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 50+ ecommerce stores that trust us with their customer support
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Today
            <FiShoppingBag className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}