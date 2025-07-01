export default function Services() {
    const services = [
      { id: "01", title: "Instant Search", desc: "Predictive, real-time search suggestions that adapt to visitors." },
      { id: "02", title: "Smart Indexing", desc: "Unlock posts, products, and custom data with precision." },
      { id: "03", title: "Mobile Optimized", desc: "Fast and responsive search on any device." },
      { id: "04", title: "SEO-Friendly", desc: "Intelligently rank search queries for better engagement." },
      { id: "05", title: "eCommerce Ready", desc: "AI-powered filtering for WooCommerce product search." },
      { id: "06", title: "Smart Filtering", desc: "Find exactly what users need, even with search variations." },
    ]
    return (
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-wider text-gray-500">Services</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Unlock the Full Potential of Search</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Say goodbye to inefficient search functions. SearchJet provides AI-enhanced search results for better user experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((item, index) => (
            <div key={index}>
              <p className="text-sm text-gray-400 mb-1">{item.id}</p>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  