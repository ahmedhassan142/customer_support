import { FiTarget, FiEye, FiHeart, FiShield, FiGlobe, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';

export default function About() {
  const values = [
    { icon: FiHeart, title: 'Customer First', description: 'Every interaction matters. We treat your customers like our own.' },
    { icon: FiShield, title: 'Reliability', description: "We're here when you need us, 24/7, 365 days a year." },
    { icon: FiGlobe, title: 'Transparency', description: 'Clear reporting and open communication at every step.' },
    { icon: FiTrendingUp, title: 'Growth Mindset', description: 'Your success is our success. We grow together.' },
  ];

  const achievements = [
    { number: '50+', label: 'Active Clients', icon: FiUsers },
    { number: '98%', label: 'Satisfaction Rate', icon: FiAward },
    { number: '24/7', label: 'Support Coverage', icon: FiHeart },
    { number: '10k+', label: 'Tickets Resolved', icon: FiTarget },
  ];

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              Your Partner in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Customer Success</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              We specialize in providing professional customer support to mid-level ecommerce stores,
              helping them scale without the operational burden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 mb-4">
                Empowering Ecommerce Growth Through Exceptional Support
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                We believe that great customer support is the backbone of any successful ecommerce business.
                Our mission is to help growing stores provide enterprise-level support without the enterprise-level costs.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                With years of experience supporting Shopify and WooCommerce stores, we understand the unique
                challenges of online retail and are committed to helping you build lasting customer relationships.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900 dark:to-indigo-900 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                  <FiEye className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  To become the most trusted customer support partner for ecommerce businesses worldwide,
                  helping them turn customer interactions into loyal relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Achievements</span>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mt-2">By the Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{item.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}