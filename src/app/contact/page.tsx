import ContactForm from '../Components/ContactForm';
import { FiMail, FiMessageCircle, FiPhone, FiMapPin, FiClock, FiStar } from 'react-icons/fi';

export default function Contact() {
  const contactMethods = [
    { icon: FiMail, title: 'Email', detail: 'hello@supportpro.com', sub: 'Response within 24 hours', href: 'mailto:hello@supportpro.com' },
    { icon: FiMessageCircle, title: 'Live Chat', detail: 'Available 24/7', sub: 'Instant response', href: '#' },
    { icon: FiPhone, title: 'WhatsApp', detail: '+92 313 0804352', sub: 'Fastest response time', href: 'https://wa.me/923001234567' },
    { icon: FiMapPin, title: 'Office', detail: 'Karachi, Pakistan', sub: 'Remote support for global clients', href: null },
  ];

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
              Let's Talk About Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Support Needs</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Fill out the form below and we'll get back to you within 24 hours.
              No obligations, just a friendly conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{method.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{method.detail}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{method.sub}</p>
                      </div>
                    </div>
                  );
                  
                  if (method.href) {
                    return (
                      <a key={index} href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {content}
                      </a>
                    );
                  }
                  return <div key={index}>{content}</div>;
                })}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl text-center border border-blue-100 dark:border-blue-900">
                <div className="flex justify-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Trusted by 50+ Ecommerce Stores</p>
                <div className="flex items-center justify-center gap-2 mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <FiClock className="w-4 h-4" />
                  <span>Average response time: 2 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}