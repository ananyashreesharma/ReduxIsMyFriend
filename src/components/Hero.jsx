import { MousePointer2, Database, Layout, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollTo = (id) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800/50 border border-neutral-700 mb-8 animate-float">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs font-medium text-neutral-300">yeah it’s interactive, play with it</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          making Redux <br />
          <span className="gradient-text">my close friend</span>
        </h1>

        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Forget the boilerplate drama. One-way flow + declarative UI = your state stops being a mess and starts making sense.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollTo('problem')}
            className="px-8 py-4 bg-neutral-700 hover:bg-neutral-600 rounded-xl font-bold text-white shadow-lg transform hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            let’s go
          </button>
          <button
            onClick={scrollTo('deep-dive')}
            className="px-8 py-4 glass rounded-xl font-bold text-neutral-200 hover:bg-neutral-800 transition-all flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
          >
            the deep stuff <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-20 relative max-w-3xl mx-auto h-64 glass-card rounded-2xl p-8 flex items-center justify-center">
          <div className="flex items-center justify-between w-full relative">
            <div className="flex flex-col items-center gap-4 z-10 relative">
              <div className="w-16 h-16 rounded-2xl bg-neutral-800 border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                <MousePointer2 className="text-cyan-400 w-8 h-8" />
              </div>
              <span className="text-sm font-mono text-cyan-400">Action</span>
            </div>

            <div className="flex-1 h-[2px] bg-neutral-700 relative overflow-hidden mx-4">
              <div className="absolute inset-0 bg-cyan-400/80 w-1/3" style={{ animation: 'slideRight 2s linear infinite' }} />
            </div>

            <div className="flex flex-col items-center gap-4 z-10 relative">
              <div className="w-20 h-20 rounded-full bg-neutral-800 border-2 border-purple-500 flex items-center justify-center relative shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <Database className="text-purple-400 w-8 h-8" />
                <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-black border-2 border-neutral-900">
                  +1
                </div>
              </div>
              <span className="text-sm font-mono text-purple-400">Store</span>
            </div>

            <div className="flex-1 h-[2px] bg-neutral-700 relative overflow-hidden mx-4">
              <div className="absolute inset-0 bg-purple-400/80 w-1/3" style={{ animation: 'slideRight 2s linear infinite 1s' }} />
            </div>

            <div className="flex flex-col items-center gap-4 z-10 relative">
              <div className="w-16 h-16 rounded-2xl bg-neutral-800 border-2 border-pink-500 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                <Layout className="text-pink-400 w-8 h-8" />
              </div>
              <span className="text-sm font-mono text-pink-400">UI</span>
            </div>
          </div>

          <svg className="absolute bottom-4 left-0 w-full h-24 pointer-events-none" viewBox="0 0 600 100" preserveAspectRatio="none">
            <path d="M 520 20 Q 300 100 80 20" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="8 4" opacity="0.8" />
            <circle r="4" fill="#ec4899">
              <animateMotion dur="2s" repeatCount="indefinite" path="M 520 20 Q 300 100 80 20" rotate="auto" />
            </circle>
          </svg>
        </div>
      </div>
    </header>
  )
}
