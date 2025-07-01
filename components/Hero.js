export default function Hero() {
    return (
      <section id="hero" className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-green-500">Supercharge</span><br />
            <span className="text-gray-900">Your WordPress<br />Search Experience</span>
            <span className="text-green-500">!</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Instant, powerful, and AI-enhanced search built for performance.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#signup" className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
              Get Started Now
            </a>
            <a href="#features" className="text-blue-800 font-semibold hover:underline transition inline-flex items-center">
              See It in Action →
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/public/rocket.png" alt="Rocket Illustration" className="w-64 md:w-80" />
        </div>
      </section>
    )
  }
  