export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team.',
}

export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 px-6 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-16">
            Have a question or want to work together? We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get in touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">hello@store.example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Phone</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">Office</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">123 Main Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Office hours</h2>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <p>Monday – Friday: 9am – 6pm PT</p>
                  <p>Saturday: 10am – 2pm PT</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      autoComplete="given-name"
                      placeholder="Jane"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      autoComplete="family-name"
                      placeholder="Smith"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    placeholder="jane@example.com"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors"
                  >
                    <option value="">Select a topic…</option>
                    <option value="general">General inquiry</option>
                    <option value="support">Product support</option>
                    <option value="sales">Sales</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help…"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className="h-4 w-4 rounded border-gray-300 dark:border-gray-700 text-orange-600 focus:ring-orange-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600 dark:text-gray-400">
                    I agree to the{' '}
                    <a href="/privacy" className="text-orange-600 dark:text-orange-400 hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-lg bg-orange-600 hover:bg-orange-700 active:bg-orange-800 px-8 py-3 text-sm font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
