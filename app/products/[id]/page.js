import Link from 'next/link'
import { products } from '../data'

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
          >
            ← Back to Shop
          </Link>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 sticky top-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-8">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-semibold mb-4">
                {product.category}
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-4 mb-8">
                <p className="text-5xl font-bold text-gray-900 dark:text-white">{product.price}</p>
                <p className="text-gray-500 dark:text-gray-400 line-through text-xl">$399</p>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">4.9 (245 reviews)</span>
                </div>
              </div>

              <div className="prose prose-gray mb-10">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-10">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Premium quality materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">Free shipping on orders over $100</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">30-day money-back guarantee</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-indigo-600 dark:text-indigo-400 text-xl">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">1-year warranty included</span>
                  </li>
                </ul>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <button className="flex-1 bg-indigo-600 dark:bg-indigo-500 text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all hover:scale-105 shadow-lg">
                  Add to Cart
                </button>
                <button className="p-4 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:border-indigo-600 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-gray-700 dark:text-gray-300">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                        {relatedProduct.category}
                      </p>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">{relatedProduct.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

