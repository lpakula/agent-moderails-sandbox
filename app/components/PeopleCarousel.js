'use client'

import { useState, useEffect } from 'react'
import { people } from '../data/people'

export default function PeopleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalSlides = people.length
  const itemsPerPage = 3 // desktop shows 3, mobile shows 1

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Rotate every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex, isPaused])

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Recommended People
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Connect with talented professionals in our community
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {people.map((person) => (
                <div 
                  key={person.id}
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-orange-100 dark:border-orange-900"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {person.name}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 font-medium">
                      {person.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors hidden md:block"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors hidden md:block"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {people.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-orange-600 dark:bg-orange-400 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

