export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">got the basics down?</h2>
        <p className="text-neutral-400 mb-8">If you ever want to go full nerd and build your own state lib from scratch, you’ll get it now.</p>
        <div className="flex flex-wrap justify-center gap-6 text-neutral-500">
          <a href="https://twitter.com/reduxjs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
            Twitter
          </a>
          <a href="https://github.com/reduxjs/redux" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
            GitHub
          </a>
          <a href="https://redux.js.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
            Docs
          </a>
          <button type="button" onClick={scrollTop} className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded px-1">
            back to top
          </button>
        </div>
        <div className="mt-10 pt-8 border-t border-neutral-800/60">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-500 text-sm">
            efforts by anannyashree <span className="text-red-400/90" aria-hidden="true">♥</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
