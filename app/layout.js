import './globals.css'
import ThemeToggle from './components/ThemeToggle'

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
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Store</h1>
            <ThemeToggle />
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}

