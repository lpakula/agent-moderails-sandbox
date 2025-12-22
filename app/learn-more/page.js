export default function LearnMore() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 px-6 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Our Store
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Discover the story behind our curated collection of premium products 
              and what makes us different.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We believe that quality products should be accessible to everyone. Our mission 
              is to curate a collection of premium items that combine exceptional craftsmanship 
              with modern design principles.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Every product in our store is carefully selected based on strict quality standards. 
              We partner with trusted manufacturers and artisans who share our commitment to 
              excellence and sustainability.
            </p>
            <p className="text-lg text-gray-600">
              From electronics to fashion, each category represents our dedication to bringing 
              you products that enhance your daily life while standing the test of time.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Every product undergoes rigorous quality checks to ensure it meets 
                our high standards before reaching you.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Fast Shipping
              </h3>
              <p className="text-gray-600">
                We understand you want your products quickly. Enjoy fast and reliable 
                shipping on all orders.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customer Support
              </h3>
              <p className="text-gray-600">
                Our dedicated support team is here to help with any questions or 
                concerns you might have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 py-16 px-6 sm:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Shopping?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Explore our full collection of premium products and find something perfect for you.
          </p>
          <div className="mt-10">
            <a
              href="/"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-colors inline-block"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

