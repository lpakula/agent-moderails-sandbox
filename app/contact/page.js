'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="relative bg-gradient-to-br from-brown-50 via-white to-brown-50 dark:from-gray-900 dark:via-gray-800 dark:to-brown-950 py-20 px-6 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-brown-100 dark:bg-brown-900/50 px-4 py-2 text-sm font-medium text-brown-700 dark:text-brown-300 mb-6">
              Get In Touch
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 dark:from-gray-100 to-brown-600 dark:to-brown-400">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question, feedback, or just want to say hello? Fill out the form below and
              we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 sm:p-12">
            {status === 'success' && (
              <div className="mb-8 rounded-lg bg-brown-50 dark:bg-brown-900/30 border border-brown-200 dark:border-brown-800 p-4">
                <p className="text-sm font-medium text-brown-700 dark:text-brown-300">
                  Thank you for your message! We&apos;ll be in touch soon.
                </p>
              </div>
            )}

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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brown-500 dark:focus:ring-brown-400 focus:border-transparent transition-colors"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brown-500 dark:focus:ring-brown-400 focus:border-transparent transition-colors"
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
                  placeholder="What is this about?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brown-500 dark:focus:ring-brown-400 focus:border-transparent transition-colors"
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
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brown-500 dark:focus:ring-brown-400 focus:border-transparent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto rounded-full bg-brown-600 dark:bg-brown-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-brown-700 dark:hover:bg-brown-600 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brown-100 dark:bg-brown-900/50 text-brown-600 dark:text-brown-400 mb-3 text-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">hello@store.com</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brown-100 dark:bg-brown-900/50 text-brown-600 dark:text-brown-400 mb-3 text-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brown-100 dark:bg-brown-900/50 text-brown-600 dark:text-brown-400 mb-3 text-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Office</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">123 Main St, City</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
