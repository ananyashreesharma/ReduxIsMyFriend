import { Link } from 'react-router-dom'
import { Filter, ArrowLeft, Check, X } from 'lucide-react'

export default function PureFunctionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-medium mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded"
          >
            <ArrowLeft className="w-4 h-4" /> back to ReduxFlow
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-purple-500/10 border border-purple-500/30">
              <Filter className="w-7 h-7 text-purple-400" />
            </div>
            <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">deep dive</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Pure Functions
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Reducers gotta stay pure. Same inputs = same output, every time. No API calls, no <code className="font-mono text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">Date.now()</code>, no random. Just in and out.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        {/* Why it matters */}
        <section className="glass-card rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">why it matters</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            In Redux, reducers are where state actually changes. Keep them pure and every transition is predictable and testable. Replay the same actions, get the same result. That’s how time-travel and debugging actually work.
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Same args in → same thing out. Every. Time.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Zero side effects. No fetch, no DOM, no touching stuff outside the function.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Don’t mutate <code className="font-mono bg-slate-800 px-1 rounded">state</code> or <code className="font-mono bg-slate-800 px-1 rounded">action</code>. Return new state.</span>
            </li>
          </ul>
        </section>

        {/* Good vs Bad */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">the good vs the nah</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 border-l-4 border-emerald-500">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-emerald-400">good</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">(state, action) → newState, no surprises</p>
              <pre className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto border border-slate-800">
{`function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return { ...state, count: state.count + 1 };
  }
  return state;
}`}
              </pre>
            </div>
            <div className="glass-card rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-4">
                <X className="w-5 h-5 text-red-400" />
                <h3 className="font-bold text-red-400">nah</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">Side effects, mutating stuff, or anything random</p>
              <pre className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto border border-slate-800">
{`function reducer(state, action) {
  state.value = Math.random();  // mutation + random
  fetch('/api/save');           // side effect
  return state;
}`}
              </pre>
            </div>
          </div>
        </section>

        {/* Rule of thumb */}
        <section className="glass-card rounded-2xl p-8 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">rule of thumb</h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            If you couldn’t swap the reducer call for its return value and have everything work the same, it’s not pure. Good reducers are stupid easy to test: state + action in, check what comes out.
          </p>
          <div className="bg-slate-950 rounded-xl p-4 font-mono text-sm text-slate-300 border border-slate-800">
            <span className="text-purple-400">// pure:</span> same (state, action) → same newState<br />
            <span className="text-red-400">// impure:</span> state.value = action.payload; return state;
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
          >
            <ArrowLeft className="w-4 h-4" /> home
          </Link>
          <Link
            to="/immutability"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 font-medium transition-colors"
          >
            next: immutability →
          </Link>
        </div>
      </div>
    </div>
  )
}
