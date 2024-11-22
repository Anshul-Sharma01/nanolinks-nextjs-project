import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-10 py-16 bg-gradient-to-r from-lime-400 to-green-500">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-snug">
            The Best URL Shortener <br /> for Effortless Sharing
          </h1>
          <p className="text-lg text-white mt-4">
            Simplify your links, boost your clicks, and manage everything in one
            place. Your journey to smarter sharing starts here.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link href="/generate">
              <button className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 hover:shadow-lg transition-all">
                Get Started
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-white text-green-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://source.unsplash.com/featured/?technology,link"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why Choose NanoLinks?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="https://source.unsplash.com/100x100/?easy"
              alt="Easy to Use"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold text-center mt-4">Easy to Use</h3>
            <p className="text-center text-gray-600 mt-2">
              Shorten your links in seconds with an intuitive interface designed
              for everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="https://source.unsplash.com/100x100/?analytics,graph"
              alt="Detailed Analytics"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold text-center mt-4">
              Detailed Analytics
            </h3>
            <p className="text-center text-gray-600 mt-2">
              Track your link performance with comprehensive analytics to boost
              your marketing efforts.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Image
              src="https://source.unsplash.com/100x100/"
              alt="Custom Links"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-xl font-bold text-center mt-4">Custom Links</h3>
            <p className="text-center text-gray-600 mt-2">
              Create branded links that build trust and stand out from the
              crowd.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-lime-500 py-12 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-4 text-lg">
          Join thousands of users who are simplifying their links with
          NanoLinks.
        </p>
        <div className="mt-6">
          <Link href="/generate">
            <button className="bg-white text-lime-700 px-8 py-3 rounded-lg shadow-md hover:bg-gray-100 transition-all">
              Start Shortening Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
