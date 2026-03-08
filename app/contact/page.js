export default function Contact() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 px-6 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                Have questions or want to get in touch? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="h-96 lg:h-full min-h-[400px]">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Space+Needle,Seattle+WA"
                ></iframe>
                {/* Note: In a real app, YOUR_API_KEY would be replaced with a real key */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
