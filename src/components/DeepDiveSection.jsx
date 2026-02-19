import { Link } from 'react-router-dom'
import { Filter, Copy, Layers, ArrowRight } from 'lucide-react'

export default function DeepDiveSection() {
  const cards = [
    {
      icon: Filter,
      to: '/pure-functions',
      borderHover: 'hover:border-purple-500/50',
      iconBg: 'rgba(168,85,247,0.1)',
      iconColor: '#a78bfa',
      title: 'Pure Functions',
      desc: 'Same input in, same output out. No API calls, no Date.now(), no mess. Reducers stay pure.',
      snippet: (
        <>
          <span className="text-green-400">Good:</span> (state, action) =&gt; newState<br />
          <span className="text-red-400">Bad:</span> state.value = Math.random()
        </>
      ),
    },
    {
      icon: Copy,
      to: '/immutability',
      borderHover: 'hover:border-cyan-500/50',
      iconBg: 'rgba(34,211,238,0.1)',
      iconColor: '#22d3ee',
      title: 'Immutability',
      desc: 'Don’t touch the original. Copy it, change the copy, return that. Makes “did anything change?” a simple ref check.',
      snippet: (
        <>
          <span className="text-red-400">Don&apos;t:</span> state.push(item)<br />
          <span className="text-green-400">Do:</span> [...state, item]
        </>
      ),
    },
    {
      icon: Layers,
      to: '/single-source-of-truth',
      borderHover: 'hover:border-pink-500/50',
      iconBg: 'rgba(236,72,153,0.1)',
      iconColor: '#f472b6',
      title: 'Single Source of Truth',
      desc: 'All your app state lives in one tree, in one store. One place to look when things get weird.',
      snippet: (
        <div className="flex items-center justify-center gap-2 h-16">
          <span className="w-2 h-2 bg-pink-500 rounded-full" />
          <span className="w-2 h-2 bg-purple-500 rounded-full" />
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="ml-2">One Object Tree</span>
        </div>
      ),
    },
  ]

  return (
    <section id="deep-dive" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map(({ icon: Icon, to, borderHover, iconBg, iconColor, title, desc, snippet }) => (
            <Link
              key={title}
              to={to}
              className={`glass-card p-8 rounded-2xl group transition-colors block ${borderHover} focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: iconBg }}
              >
                <Icon className="w-6 h-6" style={{ color: iconColor }} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{desc}</p>
              <div className="bg-slate-900 p-3 rounded text-xs font-mono text-slate-300 border border-slate-800 mb-4">
                {typeof snippet === 'string' ? snippet : snippet}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all">
                full page <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
