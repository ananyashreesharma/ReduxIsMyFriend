import { Heart } from 'lucide-react'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">got the basics down?</h2>
        <p className="text-slate-400 mb-8">If you ever want to go full nerd and build your own state lib from scratch, you’ll get it now.</p>
        <div className="flex flex-wrap justify-center gap-6 text-slate-500">
          <a href="https://twitter.com/reduxjs" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded px-1">
            Twitter
          </a>
          <a href="https://github.com/reduxjs/redux" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded px-1">
            GitHub
          </a>
          <a href="https://redux.js.org" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded px-1">
            Docs
          </a>
          <button type="button" onClick={scrollTop} className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded px-1">
            back to top
          </button>
        </div>
        <p className="mt-10 text-slate-600 text-sm flex items-center justify-center gap-1.5">
          efforts by anannyashree
          <Heart className="w-4 h-4 text-pink-500/80 fill-pink-500/30" aria-hidden />
        </p>
      </div>
    </footer>
  )
}
