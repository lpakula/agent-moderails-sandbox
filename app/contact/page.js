export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-950 py-20 px-6 sm:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 dark:from-gray-100 to-orange-600 dark:to-orange-400">
            Get in Touch
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? We&apos;d love to hear from you.
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-16 px-6 sm:py-24 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-orange-400/20 outline-none transition-colors"
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
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-orange-400/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Telephone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-orange-400/20 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:focus:ring-orange-400/20 outline-none transition-colors resize-vertical"
                  />
                </div>
                <button
                  type="button"
                  className="rounded-full bg-green-600 dark:bg-green-600 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-700 dark:hover:bg-green-500 transition-all hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Our Location
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 h-[400px] lg:h-full lg:min-h-[480px]">
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019112578849!2d-122.41941548468135!3d37.77492977975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d903d219%3A0x5765c4509498cfb!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                📧
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">hello@store.example</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                📞
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                📍
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Address</h3>
              <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
