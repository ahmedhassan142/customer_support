import { FiLock, FiEye, FiShield, FiMail, FiUserCheck, FiTrash2, FiGlobe, FiClock } from 'react-icons/fi';
import Link from 'next/link';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: FiEye,
      title: 'Information We Collect',
      content: [
        'Personal identification information (Name, email address, phone number)',
        'Business information (Company name, store URL, revenue details)',
        'Communication data (Support tickets, chat transcripts, email correspondence)',
        'Technical data (IP address, browser type, device information)',
        'Usage data (How you interact with our services and website)',
      ],
    },
    {
      icon: FiShield,
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our customer support services',
        'To process and respond to your inquiries and support requests',
        'To improve and optimize our services and website experience',
        'To communicate with you about updates, promotions, and service announcements',
        'To ensure compliance with our terms of service and legal obligations',
        'To detect and prevent fraud, security incidents, and prohibited activities',
      ],
    },
    {
      icon: FiLock,
      title: 'Data Protection & Security',
      content: [
        'We implement industry-standard encryption (SSL/TLS) for all data transmission',
        'Access to personal data is restricted to authorized personnel only',
        'Regular security audits and vulnerability assessments are conducted',
        'Data is stored in secure, ISO-certified data centers',
        'We use firewalls, intrusion detection systems, and other security measures',
      ],
    },
    {
      icon: FiUserCheck,
      title: 'Data Sharing & Disclosure',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'Service providers who assist in operating our platform (hosting, analytics, email services)',
        'Legal authorities when required by law or to protect our rights',
        'Business transfers in case of merger, acquisition, or asset sale',
        'With your explicit consent for specific purposes',
      ],
    },
    {
      icon: FiMail,
      title: 'Your Rights',
      content: [
        'Right to access: Request a copy of your personal data we hold',
        'Right to rectification: Correct inaccurate or incomplete information',
        'Right to erasure: Request deletion of your data (subject to legal obligations)',
        'Right to restrict processing: Limit how we use your information',
        'Right to data portability: Receive your data in a structured format',
        'Right to object: Opt-out of marketing communications',
      ],
    },
    {
      icon: FiTrash2,
      title: 'Data Retention',
      content: [
        'We retain personal data for as long as necessary to provide services',
        'Support ticket data is retained for up to 3 years for quality and training purposes',
        'Inactive accounts are anonymized after 12 months of inactivity',
        'Legal and financial records are retained as required by applicable laws',
        'You may request early deletion of your data by contacting us',
      ],
    },
    {
      icon: FiGlobe,
      title: 'International Data Transfers',
      content: [
        'Your information may be transferred to and processed in countries outside your residence',
        'We ensure appropriate safeguards are in place for international transfers',
        'Standard contractual clauses are implemented for data protection compliance',
        'All transfers comply with applicable data protection regulations',
      ],
    },
    {
      icon: FiClock,
      title: 'Policy Updates',
      content: [
        'We may update this Privacy Policy periodically to reflect changes in practices',
        'Significant changes will be notified via email or website notice',
        'The "Last Updated" date at the bottom indicates when changes were made',
        'Continued use of our services constitutes acceptance of updated terms',
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-6">
            <FiLock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Your Privacy Matters</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Last Updated Banner */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <span className="font-medium">Last Updated:</span> March 29, 2026
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-2xl p-8 mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At <span className="font-semibold text-blue-600 dark:text-blue-400">SupportPro</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our customer support services and visit our website.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="scroll-mt-24" id={`section-${index}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>
                  <div className="ml-14">
                    <ul className="space-y-3">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6">
              <div className="space-y-3">
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <FiMail className="w-5 h-5 text-blue-600" />
                  <span>Email: <a href="mailto:privacy@supportpro.com" className="text-blue-600 hover:underline">privacy@supportpro.com</a></span>
                </p>
                <p className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <FiShield className="w-5 h-5 text-blue-600" />
                  <span>Data Protection Officer: <a href="mailto:dpo@supportpro.com" className="text-blue-600 hover:underline">dpo@supportpro.com</a></span>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  We typically respond to privacy-related inquiries within 5 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}