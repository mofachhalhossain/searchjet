export default function Features() {
    const features = [
      { emoji: "🚀", title: "Lightning-Fast Search", desc: "AI-powered, real-time search results for your visitors." },
      { emoji: "🗂️", title: "Smart Indexing", desc: "Optimized search across posts, products, and custom fields." },
      { emoji: "📊", title: "Advanced Analytics", desc: "Track user search behavior for optimization insights." },
      { emoji: "🛒", title: "eCommerce Ready", desc: "Seamless WooCommerce integration for product search." },
    ]
    return (
      <section id="features" className="bg-gradient-to-b from-blue-800 to-blue-600 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {features.map((item, index) => (
            <div key={index}>
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  