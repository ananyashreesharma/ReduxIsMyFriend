import { Link } from 'react-router-dom'
import { Layers, ArrowLeft, Database } from 'lucide-react'

export default function SingleSourceOfTruthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-medium mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 rounded"
          >
            <ArrowLeft className="w-4 h-4" /> back to ReduxFlow
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-pink-500/10 border border-pink-500/30">
              <Layers className="w-7 h-7 text-pink-400" />
            </div>
            <span className="text-pink-400 font-mono text-sm tracking-wider uppercase">deep dive</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Single Source of Truth
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            All your app state in one tree, in one store. Read from here, update through here. Debugging and reasoning get way easier.
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-16">
        {/* One store */}
        <section className="glass-card rounded-2xl p-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">one store, one tree</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Instead of state living everywhere (components, local state, random services), Redux puts it all in one JS object. You choose the shape: by feature, by domain, whatever. Think <code className="font-mono text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">user</code>, <code className="font-mono text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">posts</code>, <code className="font-mono text-slate-300 bg-slate-800 px-1.5 py-0.5 rounded">ui</code>.
          </p>
          <div className="bg-slate-950 rounded-xl p-6 font-mono text-sm border border-slate-800 overflow-x-auto">
            <div className="text-slate-500 mb-2">// one store, one shape</div>
            <pre className="text-slate-300">
{`{
  user: { id, name, email },
  posts: { ids: [], byId: {} },
  ui:   { theme: 'dark', sidebarOpen: true }
}`}
            </pre>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">why one source of truth hits different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4">
                <Database className="w-5 h-5 text-pink-400" />
              </div>
              <h3 className="font-bold text-white mb-2">predictable reads</h3>
              <p className="text-slate-400 text-sm">Everyone reads from the store. No “who owns this state?” The store does. Simple.</p>
            </div>
            <div className="glass-card rounded-xl p-6 border border-slate-700/50">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="font-bold text-white mb-2">debugging on easy mode</h3>
              <p className="text-slate-400 text-sm">Log the store, send it to DevTools. One snapshot = your whole app at that moment.</p>
            </div>
          </div>
        </section>

        {/* One object tree visual */}
        <section className="glass-card rounded-2xl p-8 border border-pink-500/20">
          <h2 className="text-2xl font-bold text-white mb-6">one object tree</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Redux doesn’t care how you structure it: deep, flat, byId + ids, nested UI state. One store, one root state object. That’s the only rule.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-slate-950 rounded-xl border border-slate-800">
            <span className="w-3 h-3 rounded-full bg-pink-500" />
            <span className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="w-3 h-3 rounded-full bg-cyan-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-slate-400 font-mono text-sm ml-2">= one store</span>
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/immutability"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            ← immutability
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> home
          </Link>
        </div>
      </div>
    </div>
  )
}
