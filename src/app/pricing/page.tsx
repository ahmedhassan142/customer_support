import Link from 'next/link';
import { FiCheck, FiArrowRight, FiMessageCircle, FiMail, FiPhone, FiUsers, FiZap, FiTrendingUp, FiShield, FiClock } from 'react-icons/fi';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '799',
      period: 'month',
      description: 'Perfect for growing stores with moderate support needs',
      features: [
        'Up to 500 tickets/month',
        'Email & Chat Support',
        'Response time < 4 hours',
        'WhatsApp Integration',
        'Basic Reporting',
        'Email Templates',
        'Knowledge Base Access',
      ],
      featured: false,
      cta: 'Get Started',
      icon: FiMessageCircle,
    },
    {
      name: 'Standard',
      price: '1500',
      period: 'month',
      description: 'Ideal for established stores with high support volume',
      features: [
        'Up to 2,000 tickets/month',
        'Email, Chat & WhatsApp Support',
        'Response time < 2 hours',
        '24/7 Coverage',
        'Advanced Analytics',
        'Custom Templates',
        'Dedicated Support Agent',
        'Order Management Integration',
        'Monthly Strategy Call',
      ],
      featured: true,
      cta: 'Start Free Trial',
      icon: FiZap,
    },
    {
      name: 'Enterprise',
      price: '3000',
      period: '',
      description: 'For high-volume stores requiring dedicated support teams',
      features: [
        'Unlimited tickets',
        'All Channels (Email, Chat, WhatsApp, Phone)',
        'Priority Response < 30 min',
        '24/7 Dedicated Support Team',
        'Custom Analytics & Reports',
        'API Access',
        'Account Manager',
        'Custom Integration Support',
        'Quarterly Business Review',
        'SLA Guarantees',
      ],
      featured: false,
      cta: 'Contact Sales',
      icon: FiUsers,
    },
  ];

  const addOns = [
    { name: 'Phone Support', price: '+$199', description: 'Voice support for complex issues', icon: FiPhone },
    { name: 'Social Media Management', price: '+$149', description: 'Instagram, Facebook, Twitter support', icon: FiMessageCircle },
    { name: '24/7 Priority Support', price: '+$299', description: 'Instant response guaranteed', icon: FiClock },
    { name: 'Advanced Analytics', price: '+$99', description: 'Detailed insights and reports', icon: FiTrendingUp },
  ];

  const faqs = [
    {
      question: 'Can I change plans later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated for the current billing period.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees for any plan. We offer free onboarding to help you get started with our support platform.',
    },
    {
      question: 'What happens if I exceed my ticket limit?',
      answer: 'We\'ll notify you when you\'re approaching your limit. You can either upgrade your plan or pay for overage tickets at $1.50 per ticket.',
    },
    {
      question: 'Do you offer custom plans?',
      answer: 'Yes, we offer custom plans for enterprise clients with specific requirements. Contact our sales team to discuss your needs.',
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required to start.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No long-term contracts required.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include a 14-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl transition-all duration-300 ${
                    plan.featured
                      ? 'bg-white dark:bg-gray-800 shadow-2xl border-2 border-blue-500 scale-105 md:scale-105'
                      : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                      </span>
                      {plan.period && (
                        <span className="text-gray-500 dark:text-gray-400"> /{plan.period}</span>
                      )}
                    </div>
                    
                    <Link
                      href="/contact"
                      className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        plan.featured
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {plan.cta}
                      <FiArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  
                  <div className="border-t border-gray-100 dark:border-gray-700 p-8">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <FiCheck className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Add-ons</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Customize Your Plan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enhance your support with additional services tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{addon.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{addon.description}</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">{addon.price}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Compare Plans
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See what each plan offers and choose the right fit for your business
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-4 px-4 text-gray-900 dark:text-white font-semibold">Features</th>
                  <th className="text-center py-4 px-4 text-gray-900 dark:text-white font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-gray-900 dark:text-white font-semibold bg-blue-50 dark:bg-blue-950/20">Professional</th>
                  <th className="text-center py-4 px-4 text-gray-900 dark:text-white font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Monthly Tickets', starter: '500', pro: '2,000', enterprise: 'Unlimited' },
                  { feature: 'Email Support', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Live Chat', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'WhatsApp', starter: '✓', pro: '✓', enterprise: '✓' },
                  { feature: 'Phone Support', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'Response Time', starter: '< 4 hours', pro: '< 2 hours', enterprise: '< 30 min' },
                  { feature: '24/7 Coverage', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Dedicated Agent', starter: '—', pro: '✓', enterprise: '✓' },
                  { feature: 'Custom Integration', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'API Access', starter: '—', pro: '—', enterprise: '✓' },
                  { feature: 'SLA Guarantees', starter: '—', pro: '—', enterprise: '✓' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400">{row.starter}</td>
                    <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400 bg-blue-50 dark:bg-blue-950/20">{row.pro}</td>
                    <td className="py-3 px-4 text-center text-gray-600 dark:text-gray-400">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">FAQs</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your 7-day free trial today. No credit card required.
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
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Contact Sales
              <FiMessageCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}