import { jobs } from './data'

export default function Careers() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 px-6 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
            Join Our Team
          </h1>
          
          <div className="mb-16 text-lg text-gray-600 dark:text-gray-300">
            <p>
              We're building something special and we'd love for you to be part of it. 
              Explore our open positions and find your next opportunity.
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-12">
            {jobs.map((job) => (
              <div 
                key={job.id} 
                className="border-b border-gray-200 dark:border-gray-800 pb-12 last:border-b-0"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.title}
                  </h2>
                  <div className="flex flex-wrap gap-3 text-sm">
                    <span className="text-orange-600 dark:text-orange-400 font-medium">
                      {job.department}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {job.type}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      📍 {job.location}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {job.description}
                </p>
                
                <a
                  href={`mailto:careers@store.com?subject=Application for ${job.title}`}
                  className="inline-block px-6 py-3 text-sm font-semibold text-white bg-orange-600 dark:bg-orange-500 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Don't see the right role?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="mailto:careers@store.com"
              className="inline-block px-6 py-3 text-sm font-semibold text-orange-600 dark:text-orange-400 border-2 border-orange-600 dark:border-orange-400 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

