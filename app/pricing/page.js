import { pricingTiers } from './data'

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Section */}
      <section className="py-20 px-6 sm:py-28">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade at any time.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-2xl border ${
                  tier.highlighted
                    ? 'border-orange-500 dark:border-orange-400 shadow-xl scale-105'
                    : 'border-gray-200 dark:border-gray-700'
                } bg-white dark:bg-gray-800 p-8 hover:shadow-lg transition-shadow`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-orange-600 dark:bg-orange-500 px-4 py-1 text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {tier.description}
                  </p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">
                      {tier.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">
                      {tier.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-orange-600 dark:text-orange-400 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <button
                    className={`w-full rounded-full py-3 px-6 text-base font-semibold transition-all hover:scale-105 ${
                      tier.highlighted
                        ? 'bg-orange-600 dark:bg-orange-500 text-white hover:bg-orange-700 dark:hover:bg-orange-600 shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Contact our sales team for custom pricing or enterprise solutions.
          </p>
          <a
            href="#"
            className="inline-block mt-6 text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-700 dark:hover:text-orange-300 transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </section>
    </main>
  )
}
