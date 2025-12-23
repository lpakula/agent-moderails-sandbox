'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('') // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email && email.includes('@')) {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus(''), 3000)
    } else {
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  const companyLinks = [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press', href: '#' },
  ]

  const supportLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Shipping', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-semibold text-white bg-orange-600 dark:bg-orange-500 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 dark:focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Subscribe
              </button>
              {status === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400">
                  Thank you for subscribing!
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Please enter a valid email address.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

