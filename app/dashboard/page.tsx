'use client'

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-wide">Transform Your Images with AI Magic</h1>
          <p className="mt-4 text-lg text-gray-600">Unlock the power of AI-based image editing. Fast, simple, and efficient.</p>
        </header>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-800">Extract Object</h2>
            <p className="mt-3 text-gray-600">
              Easily extract objects from your images by providing a simple prompt.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-800">Recolor</h2>
            <p className="mt-3 text-gray-600">
              Change the color of any object in your images seamlessly.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-800">Replace</h2>
            <p className="mt-3 text-gray-600">
              Replace objects within your image to create a new look.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-800">Background Replace</h2>
            <p className="mt-3 text-gray-600">
              Swap the background of your image with ease and precision.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-800">Remove Object</h2>
            <p className="mt-3 text-gray-600">
              Effortlessly remove unwanted objects from your images.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out">
            <h2 className="text-2xl font-semibold text-blue-800">Background Remove</h2>
            <p className="mt-3 text-gray-600">
              Instantly remove the background and isolate the subject of your images.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-16">
          <p className="text-2xl text-gray-700">Start transforming your images with AI-powered tools today!</p>
           <Link href='dashboard/extract'><button className="bg-blue-800 text-white py-4 px-8 mt-8 rounded-full shadow-lg text-lg transform transition hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400">
           Get Started
          </button></Link>
        </section>
      </div>
    </div>
  );
}
