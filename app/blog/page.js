import { posts } from './data'

export default function Blog() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 px-6 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
            Blog
          </h1>
          
          <div className="mb-16 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Stay updated with the latest news, insights, and stories from our team.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 rounded-full">
                      {post.category}
                    </span>
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      By {post.author}
                    </span>
                    <a
                      href="#"
                      className="text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-500 transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

