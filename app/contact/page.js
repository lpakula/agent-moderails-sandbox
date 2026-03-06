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
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-950 py-20 px-6 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 dark:from-gray-100 to-orange-600 dark:to-orange-400">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6 border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                @
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">hello@store.com</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                #
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                ~
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
              <p className="text-gray-600 dark:text-gray-400">123 Store St, New York, NY</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                *
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Hours</h3>
              <p className="text-gray-600 dark:text-gray-400">Mon–Fri, 9am–6pm EST</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 sm:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 text-center">
            Send Us a Message
          </h2>

          {status === 'success' && (
            <div className="mb-8 rounded-lg bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-4 text-center">
              <p className="text-sm font-medium text-green-700 dark:text-green-300">
                Thank you for your message! We'll get back to you shortly.
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors"
                  placeholder="Your name"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors"
                  placeholder="you@example.com"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors"
                placeholder="What is this about?"
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
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors resize-none"
                placeholder="Tell us how we can help..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orange-600 dark:bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
