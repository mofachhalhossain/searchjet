export default function Newslatter() {
    return (
      <section id="signup" className="py-16 px-6 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6 text-gray-600">Join our early access list to be the first to try SearchJet Engine for WordPress.</p>
        <form action="#" method="POST" className="space-y-4">
          <input type="email" name="email" placeholder="Your Email Address" required
            className="w-full px-4 py-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
          <button type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
            Join Waitlist
          </button>
        </form>
      </section>
    )
  }
  