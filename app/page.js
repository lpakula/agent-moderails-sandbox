export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: '$299',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Classic Leather Jacket',
      price: '$459',
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Minimalist Watch',
      price: '$199',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Designer Sunglasses',
      price: '$179',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Smart Fitness Tracker',
      price: '$249',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Canvas Backpack',
      price: '$89',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Running Sneakers',
      price: '$129',
      category: 'Footwear',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Slim Laptop',
      price: '$1299',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop'
    },
    {
      id: 9,
      name: 'Denim Jeans',
      price: '$89',
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop'
    },
    {
      id: 10,
      name: 'Wireless Earbuds',
      price: '$159',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop'
    },
    {
      id: 11,
      name: 'Cotton Hoodie',
      price: '$79',
      category: 'Clothing',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop'
    },
    {
      id: 12,
      name: 'Leather Wallet',
      price: '$59',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop'
    },
    {
      id: 13,
      name: 'Polaroid Camera',
      price: '$149',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop'
    },
    {
      id: 14,
      name: 'Baseball Cap',
      price: '$35',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop'
    },
    {
      id: 15,
      name: 'Smartphone',
      price: '$899',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20 px-6 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Discover Quality Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Explore our curated collection of premium products designed for modern living. 
              Quality craftsmanship meets contemporary style.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#products"
                className="rounded-md bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
              >
                Shop Now
              </a>
              <a
                href="/learn-more"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="products" className="py-16 px-6 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Handpicked favorites from our latest collection
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square w-full overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 py-16 px-6 sm:py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to upgrade your lifestyle?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for quality products 
            and exceptional service. Start shopping today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#products"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Browse Collection
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
