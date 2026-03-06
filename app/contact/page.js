'use client'

import { useState } from 'react'

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'hello@store.com',
    detail: 'We reply within 24 hours',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Phone',
    value: '+1 (555) 123-4567',
    detail: 'Mon–Fri, 9 AM – 6 PM EST',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Office',
    value: '123 Commerce St, Suite 400',
    detail: 'New York, NY 10001',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="py-20 px-6 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question about our products, need help with an order, or just want to say
            hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16 px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                {item.label}
              </h3>
              <p className="text-base font-medium text-gray-900 dark:text-white">{item.value}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-20 px-6 sm:pb-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell us more about your inquiry..."
                className="w-full px-4 py-3 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 text-base font-semibold text-white bg-orange-600 dark:bg-orange-500 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Send Message
            </button>

            {status === 'success' && (
              <div className="rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-4 text-center">
                <p className="text-sm font-medium text-green-800 dark:text-green-300">
                  Thank you for your message! We&apos;ll get back to you soon.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}
