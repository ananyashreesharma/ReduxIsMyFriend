import { Link } from 'react-router-dom'
import { Copy, ArrowLeft, Check, X } from 'lucide-react'

export default function ImmutabilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-medium mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded"
          >
            <ArrowLeft className="w-4 h-4" /> back to ReduxFlow
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30">
              <Copy className="w-7 h-7 text-cyan-400" />
            </div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">deep dive</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Immutability
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Don’t change state in place. Copy it, change the copy, return that. Then ref checks are instant, updates are predictable, and time-travel actually works.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        {/* Why immutability */}
        <section className="glass-card rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">why not just mutate?</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            When you return a new object instead of messing with the old one, Redux (and React) can tell what changed just by reference. Same ref = nothing changed. New ref = something changed. No deep compares, just fast.
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>prevState !== nextState? You got an update. That’s it.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Easier to think about: each state is a snapshot, not a moving target.</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Time-travel and undo? Trivial when you never mutate. You just have a stack of states.</span>
            </li>
          </ul>
        </section>

        {/* Don't vs Do */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">don’t touch the original, make new</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex items-center gap-2 mb-4">
                <X className="w-5 h-5 text-red-400" />
                <h3 className="font-bold text-red-400">don’t</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">Changing the existing state</p>
              <pre className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto border border-slate-800">
{`state.items.push(newItem);
state.count++;
state.user.name = 'Jane';
return state;  // same reference`}
              </pre>
            </div>
            <div className="glass-card rounded-xl p-6 border-l-4 border-emerald-500">
              <div className="flex items-center gap-2 mb-4">
                <Check className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-emerald-400">do</h3>
              </div>
              <p className="text-slate-400 text-sm mb-4">Return fresh objects/arrays</p>
              <pre className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto border border-slate-800">
{`return {
  ...state,
  items: [...state.items, newItem],
  count: state.count + 1,
  user: { ...state.user, name: 'Jane' }
};`}
              </pre>
            </div>
          </div>
        </section>

        {/* Common patterns */}
        <section className="glass-card rounded-2xl p-8 border border-cyan-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">patterns you’ll use all the time</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Arrays</h3>
              <pre className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto border border-slate-800">
{`// Add:    [...state.list, item]
// Remove: state.list.filter(id => id !== idToRemove)
// Update: state.list.map(x => x.id === id ? { ...x, ...updates } : x)`}
              </pre>
            </div>
            <div>
              <h3 className="font-semibold text-slate-200 mb-2">Objects</h3>
              <pre className="bg-slate-950 rounded-lg p-4 font-mono text-sm text-slate-300 overflow-x-auto border border-slate-800">
{`// Update: { ...state, key: newValue }
// Nested:  { ...state, user: { ...state.user, name: 'Jane' } }`}
              </pre>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/pure-functions"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            ← pure functions
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> home
          </Link>
          <Link
            to="/single-source-of-truth"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/50 font-medium transition-colors"
          >
            next: single source of truth →
          </Link>
        </div>
      </div>
    </div>
  )
}
