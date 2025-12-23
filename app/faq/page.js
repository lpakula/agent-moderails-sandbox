'use client'

import { useState } from 'react'
import { faqs } from './data'

export default function FAQ() {
  const [expandedItems, setExpandedItems] = useState([])

  const toggleItem = (id) => {
    setExpandedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 px-6 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
            Frequently Asked Questions
          </h1>
          
          <div className="mb-16 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Find answers to common questions about shipping, returns, payments, and more.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq) => {
              const isExpanded = expandedItems.includes(faq.id)
              
              return (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      isExpanded ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-5 pt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

