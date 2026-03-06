'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-950 py-16 px-6 sm:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? We&apos;d love to hear from you.
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="py-16 px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="rounded-2xl bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/50 text-3xl mb-4">
                    ✓
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700 dark:text-green-400">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', subject: '', message: '' })
                    }}
                    className="mt-6 text-sm font-medium text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 underline transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors"
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
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-orange-600 dark:bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map + Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Our Location
                </h2>
                <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977735271756!2d-122.39997368468156!3d37.79098797975571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085806285ddb1a3%3A0xad0d8e41b5e7ce54!2sEmbarcadero%20Center!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our office location"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-3 text-lg">
                    📍
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Address</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    123 Market Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-3 text-lg">
                    📧
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    hello@store.com<br />
                    support@store.com
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-3 text-lg">
                    📞
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567<br />
                    Mon–Fri, 9am–6pm PST
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-3 text-lg">
                    💬
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Live Chat</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Available 24/7<br />
                    Avg. response: 2 min
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
