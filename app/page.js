import Link from 'next/link'
import { products } from './products/data'

export default function Home() {

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Example Text Section */}
      <section className="py-6 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-950 py-24 px-6 sm:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/50 px-4 py-2 text-sm font-medium text-orange-700 dark:text-orange-300 mb-6">
              ✨ New Collection Available
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 dark:from-gray-100 to-orange-600 dark:to-orange-400">
              Discover Quality Products
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our curated collection of premium products designed for modern living. 
              Quality craftsmanship meets contemporary style.
            </p>
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <a
                href="#products"
                className="rounded-full bg-orange-600 dark:bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-all hover:scale-105"
              >
                Shop Now
              </a>
              <a
                href="/learn-more"
                className="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 border-y border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                🚚
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Free Shipping</h3>
              <p className="text-gray-600 dark:text-gray-400">On orders over $100</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                🔄
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Easy Returns</h3>
              <p className="text-gray-600 dark:text-gray-400">30-day return policy</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400 mb-4 text-xl">
                💬
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-400">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-20 px-6 sm:py-28 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
              Featured Products
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Handpicked favorites from our latest collection
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View Details
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400 mb-2">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{product.price}</p>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 dark:from-orange-700 dark:to-amber-700 py-20 px-6 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
        <div className="relative mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to upgrade your lifestyle?
          </h2>
          <p className="mt-6 text-xl leading-8 text-orange-100 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for quality products 
            and exceptional service. Start shopping today.
          </p>
          <div className="mt-12 flex items-center justify-center gap-x-6">
            <a
              href="#products"
              className="rounded-full bg-white dark:bg-gray-100 px-8 py-4 text-base font-semibold text-orange-600 dark:text-orange-700 shadow-lg hover:bg-gray-50 dark:hover:bg-white transition-all hover:scale-105"
            >
              Browse Collection
            </a>
            <a
              href="/contact"
              className="text-base font-semibold leading-6 text-white dark:text-gray-100 hover:text-orange-100 dark:hover:text-white transition-colors"
            >
              Contact Us →
            </a>
          </div>
          
          {/* Social Proof */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-white">10k+</div>
              <div className="mt-2 text-sm text-orange-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">500+</div>
              <div className="mt-2 text-sm text-orange-200">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">4.9★</div>
              <div className="mt-2 text-sm text-orange-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
