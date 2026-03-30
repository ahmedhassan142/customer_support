import { 
  FiMessageCircle, FiMail, FiSmartphone, FiPackage, FiStar, FiShoppingCart,
  FiCheck, FiArrowRight, FiZap, FiTool, FiClock, FiTrendingUp, FiShield, FiUsers
} from 'react-icons/fi';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: FiMessageCircle,
      title: 'AI-Powered Live Chat',
      description: '24/7 intelligent chatbot handling routine queries with empathy. Smart escalation to human agents for complex issues.',
      features: ['Instant responses 24/7', 'Smart ticket routing', 'AI + human hybrid support'],
      color: 'from-blue-500 to-blue-600',
      highlight: 'AI Powered',
    },
    {
      icon: FiMail,
      title: 'Email & Ticket Management',
      description: 'Professional handling of all email inquiries with guaranteed response times and personalized templates.',
      features: ['< 2-4 hour response', 'Ticket categorization', 'Custom email templates', 'Auto-responders'],
      color: 'from-indigo-500 to-indigo-600',
      highlight: 'Fast Response',
    },
    {
      icon: FiSmartphone,
      title: 'Omnichannel Support',
      description: 'Support your customers wherever they are. Full coverage across all messaging and social platforms.',
      features: ['Instagram DMs', 'Facebook Messenger', 'WhatsApp Business', 'Live Chat Widget'],
      color: 'from-purple-500 to-purple-600',
      highlight: 'All Channels',
    },
    {
      icon: FiPackage,
      title: 'Order & Returns Management',
      description: 'Complete order lifecycle support from tracking inquiries to returns and refunds processing.',
      features: ['Order tracking', 'Return processing', 'Refund management', 'Exchange coordination'],
      color: 'from-emerald-500 to-emerald-600',
      highlight: 'Full Lifecycle',
    },
    {
      icon: FiStar,
      title: 'Complaint Resolution & Retention',
      description: 'Turn unhappy customers into loyal advocates with professional escalation handling.',
      features: ['Conflict resolution', 'Customer retention', 'Billing dispute handling', 'Feedback collection'],
      color: 'from-amber-500 to-amber-600',
      highlight: 'Retention Focus',
    },
    {
      icon: FiShoppingCart,
      title: 'Pre-Sales & Cart Recovery',
      description: 'Convert more visitors into customers with proactive assistance and abandoned cart follow-up.',
      features: ['Product guidance', 'Sizing assistance', 'Abandoned cart recovery', 'Upsell opportunities'],
      color: 'from-rose-500 to-rose-600',
      highlight: 'Revenue Focus',
    },
    {
      icon: FiTool,
      title: 'Tool Integration',
      description: 'We work inside your existing tools. Full visibility and control stays with you.',
      features: ['Gorgias', 'Tidio', 'Zendesk', 'Intercom', 'Shopify', 'WooCommerce'],
      color: 'from-cyan-500 to-cyan-600',
      highlight: 'Seamless',
    },
    {
      icon: FiZap,
      title: 'Back-Office Support',
      description: 'Handle administrative tasks so your team can focus on growth.',
      features: ['Order processing', 'CRM updates', 'Data entry', 'Inventory management'],
      color: 'from-orange-500 to-orange-600',
      highlight: 'Scalable',
    },
    {
      icon: FiShield,
      title: 'Enterprise-Level Experience',
      description: '5+ years handling complex U.S. cases for major brands like Republic Services and Walmart.',
      features: ['Billing disputes', 'Account escalations', 'High-touch customers', 'SLA compliance'],
      color: 'from-violet-500 to-violet-600',
      highlight: 'Premium',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              AI-Powered{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Support Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Enterprise-level support with AI efficiency — at a fraction of traditional agency prices
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 relative"
                >
                  {/* Highlight Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white`}>
                      {service.highlight}
                    </span>
                  </div>
                  
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 mt-2`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-2 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <FiCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Pricing Plans</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Choose the Right Plan for Your Business
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Flexible plans designed for growing ecommerce stores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Starter</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$799</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Perfect for growing stores with moderate support volume</p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-800 p-8 bg-gray-50 dark:bg-gray-800/50">
                <ul className="space-y-3">
                  {[
                    'Up to 500 tickets/month',
                    'Email + Live Chat Support',
                    'AI Chatbot (24/7 routine queries)',
                    'Order tracking & basic returns',
                    'Response time < 4 hours',
                    'WhatsApp integration',
                    'Basic weekly report',
                    'Post-interaction CSAT survey',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <FiCheck className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Standard Plan - Most Popular */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-blue-500 transform hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="p-8 pt-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Standard</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$1,500</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Ideal for established stores with higher support volume</p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-800 p-8 bg-gray-50 dark:bg-gray-800/50">
                <ul className="space-y-3">
                  {[
                    'Up to 2,000 tickets/month',
                    'Everything in Starter +',
                    'Back-office tasks (order processing, CRM updates)',
                    'Complex escalations & billing disputes',
                    'Dedicated support agent',
                    'Response time < 2 hours',
                    '24/7 AI coverage with smart escalation',
                    'Advanced email & chat templates',
                    'Monthly performance report + strategy call',
                    'Full integration with your tools',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <FiCheck className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">$3,000</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">For high-volume stores requiring dedicated support</p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="border-t border-gray-100 dark:border-gray-800 p-8 bg-gray-50 dark:bg-gray-800/50">
                <ul className="space-y-3">
                  {[
                    'Unlimited tickets',
                    'Everything in Standard +',
                    'Full back-office & inventory management',
                    'Priority response (< 30 minutes)',
                    'Dedicated account manager',
                    'Advanced analytics & custom reports',
                    'Social media support (all platforms)',
                    'Complaint resolution & retention focus',
                    'Quarterly business review',
                    'Custom integrations & API access',
                    'SLA guarantees',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <FiCheck className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Scale Your Support?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get enterprise-level support at agency prices. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
              <FiArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              View All Plans
              <FiTrendingUp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}