'use client';

import { useState } from 'react';
import { FiSend, FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [status, setStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ submitted: false, success: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitted: true,
          success: true,
          message: 'Thank you! We will get back to you within 24 hours.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({
          submitted: true,
          success: false,
          message: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      setStatus({
        submitted: true,
        success: false,
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.submitted && (
        <div
          className={`flex items-start gap-3 p-4 rounded-xl ${
            status.success
              ? 'bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400'
              : 'bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400'
          }`}
        >
          {status.success ? <FiCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <FiAlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
          <span>{status.message}</span>
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          placeholder="+1 300 1234567"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          placeholder="Tell us about your ecommerce store and support needs..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <FiLoader className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <FiSend className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}