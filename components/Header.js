export default function Header() {
    return (
      <header className="py-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-semibold flex items-center space-x-1">
          <img src="https://www.searchjetengine.com/assets/images/logo.svg" alt="SearchJet Engine" className="h-8"/>
        </div>
        <nav className="flex items-center space-x-6 text-gray-800 font-medium">
          <a href="#hero" className="hover:text-blue-600">Home</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#features" className="hover:text-blue-600">Live Demo</a>
          <a href="#signup" className="hover:text-blue-600">Contact</a>
          <a href="#signup" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition inline-flex items-center">
            <span>Get Started</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"/>
            </svg>
          </a>
        </nav>
      </header>
    )
  }
  