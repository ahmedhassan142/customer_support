import { FiTarget, FiEye, FiHeart, FiShield, FiGlobe, FiUsers, FiTrendingUp, FiAward, FiMessageCircle, FiTool, FiClock, FiZap } from 'react-icons/fi';

export default function About() {
  const values = [
    { icon: FiHeart, title: 'Customer First', description: 'We treat your customers like our own. Every interaction matters.' },
    { icon: FiShield, title: 'Reliability', description: 'Fast responses during US business hours with Pakistan timezone advantage.' },
    { icon: FiGlobe, title: 'Transparency', description: 'Clear reporting and full visibility in your tools. No black boxes.' },
    { icon: FiTrendingUp, title: 'Growth Mindset', description: 'Your success is our success. We grow together.' },
  ];

  const achievements = [
    { number: '50+', label: 'Active Clients', icon: FiUsers },
    { number: '90%', label: 'Satisfaction Rate', icon: FiAward },
    { number: '24/7', label: 'AI Coverage', icon: FiClock },
    { number: '10k+', label: 'Tickets Resolved', icon: FiTarget },
  ];

  const features = [
    { icon: FiMessageCircle, title: 'AI Chatbot', description: '24/7 intelligent handling of routine queries with empathy and smart escalation.' },
    { icon: FiTool, title: 'Tool Integration', description: 'Works inside your existing tools (Gorgias, Tidio, Zendesk, Intercom). Full control stays with you.' },
    { icon: FiZap, title: 'Enterprise Experience', description: '5+ years handling complex U.S. cases including billing disputes and escalations for major brands.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              Your Trusted Partner in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Ecommerce Customer Success</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              We provide professional, AI-powered customer support for mid-level Shopify and WooCommerce stores, 
              helping you scale without the operational headache or high costs of big agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Our Story */}
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                From Enterprise Experience to Personal Service
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Founded by a former <span className="font-semibold text-blue-600 dark:text-blue-400">ibex. Premier Customer Support Specialist</span> with 5+ years of hands-on experience handling complex U.S. customer cases — including billing disputes, escalations, and retention for major brands like Republic Services and Walmart.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                We combine enterprise-level expertise with personal, reliable service and smart AI tools. No big agency overhead, no offshore call center runaround — just dedicated, professional support that your customers deserve.
              </p>
            </div>

            {/* Mission */}
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                Deliver Fast, Empathetic, Professional Support
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                To deliver fast, empathetic, and professional support that turns customer interactions into loyalty — at a fraction of traditional agency prices.
              </p>
              <div className="relative mt-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                    <FiEye className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To become the go-to support partner for growing DTC ecommerce brands that want high-quality service without the overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">How We Work</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
              Seamless Integration, Maximum Control
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We integrate directly into your existing tools so you keep full control and visibility
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional how we work description */}
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Our AI chatbot handles routine queries 24/7 with empathy, while our team personally manages escalations, 
              back-office tasks, and complex issues. All conversations are secure and data stays with you.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Core Values</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">By the Numbers</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              The results we deliver for our clients
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">{item.number}</div>
                  <div className="text-sm text-blue-100">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}