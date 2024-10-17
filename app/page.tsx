"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";
import Link from "next/link";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { TailSpin } from "react-loader-spinner";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const { isSignedIn } = useUser(); // useUser hook to check sign-in status

  useEffect(() => {
    // Run redirect only when the user is signed in
    if (isSignedIn) {
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }
  }, [isSignedIn, router]);

  return (
    <>
      <SignedOut>
        <div className="relative min-h-screen">
          {/* Fixed Navbar */}
          <div className="bg-white top-0 left-0 w-full z-50">
            <Navbar isSignedIn={false} />
          </div>

          {/* Fixed Sidebar */}
          <div className="fixed top-0 left-0 w-[250px] z-40 h-full">
            <Sidebar isSignedIn={false} />
          </div>

          {/* Main content with padding to account for the fixed sidebar */}
          <div className="md:ml-[280px] pt-[70px] bg-gray-100 min-h-screen py-10 px-5">
            <div className="container mx-auto">
              {/* Header Section */}
              <header className="text-center mb-12">
                <motion.h1
                  className="text-5xl font-extrabold text-gray-800 tracking-wide"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Transform Your Images with AI Magic
                </motion.h1>
                <motion.p
                  className="mt-4 text-lg text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Unlock the power of AI-based image editing. Fast, simple, and
                  efficient.
                </motion.p>
              </header>

              {/* Features Section */}
              <motion.section
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {/* Feature 1 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-200 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <h2 className="text-2xl font-semibold text-blue-800">
                    Extract Object
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Easily extract objects from your images by providing a
                    simple prompt.
                  </p>
                </motion.div>

                {/* Feature 2 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <h2 className="text-2xl font-semibold text-blue-800">
                    Recolor
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Change the color of any object in your images seamlessly.
                  </p>
                </motion.div>

                {/* Feature 3 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <h2 className="text-2xl font-semibold text-blue-800">
                    Replace
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Replace objects within your image to create a new look.
                  </p>
                </motion.div>

                {/* Feature 4 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <h2 className="text-2xl font-semibold text-blue-800">
                    Background Replace
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Swap the background of your image with ease and precision.
                  </p>
                </motion.div>

                {/* Feature 5 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <h2 className="text-2xl font-semibold text-blue-800">
                    Remove Object
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Effortlessly remove unwanted objects from your images.
                  </p>
                </motion.div>

                {/* Feature 6 */}
                <motion.div
                  className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
                  whileHover={{ scale: 1.1 }}
                >
                  <h2 className="text-2xl font-semibold text-blue-800">
                    Background Remove
                  </h2>
                  <p className="mt-3 text-gray-600">
                    Instantly remove the background and isolate the subject of
                    your images.
                  </p>
                </motion.div>
              </motion.section>

              {/* CTA Section */}
              <motion.section
                className="text-center mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <p className="text-2xl text-gray-700">
                  Start transforming your images with AI-powered tools today!
                </p>
                <button className="bg-blue-800 text-white py-4 px-8 mt-8 rounded-full shadow-lg text-lg transform transition hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400">
                  <Link href="/sign-in">Get Started</Link>
                </button>
              </motion.section>
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="min-w-full min-h-screen flex items-center justify-center">
            <TailSpin height="70" width="70" color="blue" ariaLabel="loading" />
        </div>
      </SignedIn>
    </>
  );
}
