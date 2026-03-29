import { 
  FiMessageCircle, FiMail, FiSmartphone, FiPackage, FiStar, FiShoppingCart,
  FiCheck, FiArrowRight
} from 'react-icons/fi';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: FiMessageCircle,
      title: 'Live Chat Support',
      description: 'Real-time support for your website visitors. Answer product questions, handle objections, and convert more sales.',
      features: ['Instant responses', 'Product recommendations', 'Cart recovery assistance'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FiMail,
      title: 'Email Management',
      description: 'Professional handling of all email inquiries with guaranteed response times.',
      features: ['< 4 hour response', 'Ticket categorization', 'Auto-responders'],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: FiSmartphone,
      title: 'Social Support',
      description: 'Support your customers where they are. Full coverage across all messaging platforms.',
      features: ['Instagram DMs', 'Facebook Messenger', 'WhatsApp Business'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FiPackage,
      title: 'Order Management',
      description: 'Handle order tracking inquiries, process returns and exchanges efficiently.',
      features: ['Order tracking', 'Return processing', 'Refund management'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: FiStar,
      title: 'Complaint Resolution',
      description: 'Turn unhappy customers into loyal ones with professional complaint handling.',
      features: ['Conflict resolution', 'Customer retention', 'Feedback collection'],
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: FiShoppingCart,
      title: 'Pre-Sales Assistance',
      description: 'Help customers find the right products and reduce cart abandonment.',
      features: ['Product guidance', 'Sizing assistance', 'Abandoned cart follow-up'],
      color: 'from-rose-500 to-rose-600',
    },
  ];

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Support Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Tailored customer support solutions designed to help your ecommerce store scale
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
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

      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Flexible Plans for Every Business
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Starting from $499/month for dedicated support teams
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Custom Quote
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}