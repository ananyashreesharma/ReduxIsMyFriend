import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const scrollTo = (id) => () => {
    if (isHome) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  const links = [
    { id: 'problem', label: 'the problem' },
    { id: 'solution', label: 'mental model' },
    { id: 'playground', label: 'playground' },
    { id: 'deep-dive', label: 'deep dive' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded-lg"
            aria-label="ReduxFlow home"
          >
            <span className="font-bold text-xl tracking-tight">
              Redux<span className="text-neutral-300">Flow</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(({ id, label }) =>
              isHome ? (
                <button
                  key={id}
                  onClick={scrollTo(id)}
                  className="text-sm font-medium text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded"
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={id}
                  to={`/#${id}`}
                  className="text-sm font-medium text-neutral-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900 rounded"
                >
                  {label}
                </Link>
              )
            )}
            {isHome ? (
              <button
                onClick={scrollTo('solution')}
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2 rounded-lg text-sm font-medium border border-neutral-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                start learning
              </button>
            ) : (
              <Link
                to="/#solution"
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 px-4 py-2 rounded-lg text-sm font-medium border border-neutral-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
              >
                start learning
              </Link>
            )}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800 animate-[fadeIn_0.2s_ease-out]">
            <div className="flex flex-col gap-1">
              {links.map(({ id, label }) =>
                isHome ? (
                  <button
                    key={id}
                    onClick={scrollTo(id)}
                    className="text-left px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
                  >
                    {label}
                  </button>
                ) : (
                  <Link
                    key={id}
                    to={`/#${id}`}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/50 rounded-lg transition-colors"
                  >
                    {label}
                  </Link>
                )
              )}
              <Link
                to="/#solution"
                onClick={() => setMobileOpen(false)}
                className="mx-4 mt-2 py-3 bg-neutral-800 text-neutral-200 rounded-lg text-sm font-medium border border-neutral-600 text-center"
              >
                start learning
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
