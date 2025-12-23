import './globals.css'
import Link from 'next/link'
import ThemeToggle from './components/ThemeToggle'
import Navigation from './components/Navigation'
import PeopleCarousel from './components/PeopleCarousel'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const theme = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.toggle('dark', theme === 'dark');
            })();
          `
        }} />
      </head>
      <body className="transition-colors duration-200">
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
              Store
            </Link>
            <Navigation />
            <ThemeToggle />
          </div>
        </header>
        {children}
        <PeopleCarousel />
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800 py-12 px-6">
          <div className="mx-auto max-w-7xl">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

