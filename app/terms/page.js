export default function Terms() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 px-6 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-8">
            Terms of Service
          </h1>
          
          <div className="space-y-8 text-lg text-gray-600 dark:text-gray-300">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Introduction
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                User Agreement
              </h2>
              <p className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore</li>
                <li>Ut enim ad minim veniam quis nostrud exercitation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Account Terms
              </h2>
              <p className="mb-4">
                Nulla facilisi. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Vestibulum ante ipsum primis in faucibus orci luctus</li>
                <li>Curabitur non nulla sit amet nisl tempus convallis</li>
                <li>Mauris blandit aliquet elit eget tincidunt nibh pulvinar</li>
                <li>Pellentesque in ipsum id orci porta dapibus</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Payment Terms
              </h2>
              <p>
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Refunds and Returns
              </h2>
              <p>
                Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Nulla quis lorem ut libero malesuada feugiat.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Vivamus magna justo lacinia eget consectetur sed</li>
                <li>Curabitur aliquet quam id dui posuere blandit</li>
                <li>Quisque velit nisi pretium ut lacinia in elementum id enim</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Intellectual Property
              </h2>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>
              <p className="mb-4">
                Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla porttitor accumsan tincidunt.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Donec sollicitudin molestie malesuada proin eget tortor</li>
                <li>Vestibulum ac diam sit amet quam vehicula elementum</li>
                <li>Curabitur arcu erat accumsan id imperdiet et porttitor</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Governing Law
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Changes to These Terms
              </h2>
              <p>
                Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada. Pellentesque in ipsum id orci porta dapibus.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>
              <p>
                Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. For questions about these Terms of Service, please contact us at legal@store.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}




