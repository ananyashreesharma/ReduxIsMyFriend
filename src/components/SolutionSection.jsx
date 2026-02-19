import { useState } from 'react'
import { Layout, Send, GitMerge, Database } from 'lucide-react'

const DETAILS = {
  ui: {
    title: 'The View (UI)',
    color: 'pink',
    desc: 'Whatever’s on screen is just state, rendered. Buttons, inputs, that’s you giving users a way to do something. UI shows data and captures the clicks.',
    code: `<span class="token-keyword">function</span> <span class="token-function">Counter</span>({ value, onIncrement }) {
  <span class="token-keyword">return</span> (
    <<span class="token-variable">div</span>>
      <<span class="token-variable">h1</span>>{value}</<span class="token-variable">h1</span>>
      <<span class="token-variable">button</span> <span class="token-variable">onClick</span>={onIncrement}>+</<span class="token-variable">button</span>>
    </<span class="token-variable">div</span>>
  );
}`,
  },
  action: {
    title: 'The Action',
    color: 'cyan',
    desc: "Just a plain object that says what went down. Needs a type (and you can throw in a payload if you want). That’s it.",
    code: `<span class="token-keyword">const</span> depositAction = {
  type: <span class="token-string">'DEPOSIT'</span>,
  payload: <span class="token-number">10</span>
};

<span class="token-comment">// Dispatched via:</span>
dispatch(depositAction);`,
  },
  reducer: {
    title: 'The Reducer',
    color: 'yellow',
    desc: 'Takes current state + action, returns the new state. Pure. No API calls, no touching the outside world. Just in, compute, out.',
    code: `<span class="token-keyword">function</span> <span class="token-function">reducer</span>(state, action) {
  <span class="token-keyword">if</span> (action.type === <span class="token-string">'DEPOSIT'</span>) {
    <span class="token-keyword">return</span> { 
      ...state, 
      balance: state.balance + action.payload 
    };
  }
  <span class="token-keyword">return</span> state;
}`,
  },
  store: {
    title: 'The Store',
    color: 'purple',
    desc: "The one place that holds your whole app state. Single source of truth. Everyone reads from here, updates go through here.",
    code: `<span class="token-keyword">const</span> store = <span class="token-function">createStore</span>(reducer);

<span class="token-comment">// Get State</span>
console.log(store.getState());

<span class="token-comment">// Listen to changes</span>
store.subscribe(() => {
  console.log(<span class="token-string">"State changed!"</span>);
});`,
  },
}

export default function SolutionSection() {
  const [detail, setDetail] = useState(null)
  const panelBorderClass =
    detail === 'ui'
      ? 'border-pink-500'
      : detail === 'action'
        ? 'border-cyan-500'
        : detail === 'reducer'
          ? 'border-yellow-500'
          : detail === 'store'
            ? 'border-purple-500'
            : 'border-cyan-500'
  const titleColorClass =
    detail === 'ui'
      ? 'text-pink-400'
      : detail === 'action'
        ? 'text-cyan-400'
        : detail === 'reducer'
          ? 'text-yellow-400'
          : detail === 'store'
            ? 'text-purple-400'
            : 'text-white'

  return (
    <section id="solution" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-mono text-sm tracking-wider uppercase">the fix</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">one direction. one source. that’s it.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Redux puts everything in one store and makes data flow one way. So you’re not guessing where stuff came from anymore.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 glass-card rounded-3xl p-8 relative min-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white tracking-widest">the loop</h3>
                  <p className="text-slate-500 text-xs font-mono">one way only</p>
                </div>
              </div>

              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-32 group cursor-pointer" onClick={() => setDetail('ui')}>
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-2xl border-2 border-pink-500 flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all group-hover:scale-110 z-20 relative">
                  <Layout className="w-10 h-10 text-pink-400" />
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-bold text-pink-400">View (UI)</h4>
                  <p className="text-xs text-slate-400">where the clicks happen</p>
                </div>
              </div>

              <div className="absolute top-1/2 right-0 translate-x-4 -translate-y-1/2 w-32 group cursor-pointer" onClick={() => setDetail('action')}>
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-full border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all group-hover:scale-110 z-20 relative">
                  <Send className="w-10 h-10 text-cyan-400 ml-1" />
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-bold text-cyan-400">Action</h4>
                  <p className="text-xs text-slate-400">says what happened</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-32 group cursor-pointer" onClick={() => setDetail('reducer')}>
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-lg transform rotate-45 border-2 border-yellow-500 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all group-hover:scale-110 z-20 relative">
                  <GitMerge className="w-10 h-10 text-yellow-400 -rotate-45" />
                </div>
                <div className="text-center mt-8">
                  <h4 className="font-bold text-yellow-400">Reducer</h4>
                  <p className="text-xs text-slate-400">figures out the new state</p>
                </div>
              </div>

              <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 w-32 group cursor-pointer" onClick={() => setDetail('store')}>
                <div className="w-24 h-24 mx-auto bg-slate-800 rounded-2xl border-2 border-purple-500 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all group-hover:scale-110 z-20 relative">
                  <Database className="w-10 h-10 text-purple-400" />
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-bold text-purple-400">Store</h4>
                  <p className="text-xs text-slate-400">holds the whole tree</p>
                </div>
              </div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" viewBox="0 0 400 400">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#64748b" />
                  </marker>
                </defs>
                <path d="M 240 40 Q 360 40 360 160" fill="none" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <circle r="6" fill="#22d3ee">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 240 40 Q 360 40 360 160" />
                </circle>
                <path d="M 360 240 Q 360 360 240 360" fill="none" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <circle r="6" fill="#eab308">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 360 240 Q 360 360 240 360" begin="1s" />
                </circle>
                <path d="M 160 360 Q 40 360 40 240" fill="none" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <circle r="6" fill="#a855f7">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 160 360 Q 40 360 40 240" begin="2s" />
                </circle>
                <path d="M 40 160 Q 40 40 160 40" fill="none" stroke="#334155" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <circle r="6" fill="#ec4899">
                  <animateMotion dur="3s" repeatCount="indefinite" path="M 40 160 Q 40 40 160 40" begin="0s" />
                </circle>
              </svg>
            </div>
          </div>

          <div className={`glass-card rounded-2xl p-6 flex flex-col h-full border-t-4 ${panelBorderClass}`} id="detail-panel">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-400 text-xs font-bold mb-4">play with it</div>
              <h3 className={`text-2xl font-bold mb-2 ${titleColorClass}`} id="detail-title">
                {detail ? DETAILS[detail].title : 'pick a node'}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed" id="detail-desc">
                {detail ? DETAILS[detail].desc : 'Click something in the diagram or use the buttons. You’ll see the code for each part.'}
              </p>
            </div>

            {/* Quick-select chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(['ui', 'action', 'reducer', 'store']).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setDetail(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    detail === key
                      ? key === 'ui'
                        ? 'bg-pink-500/20 text-pink-400 border border-pink-500/50'
                        : key === 'action'
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                          : key === 'reducer'
                            ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50'
                            : 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                      : 'bg-slate-800/80 text-slate-400 border border-slate-700 hover:border-slate-600 hover:text-slate-300'
                  }`}
                >
                  {DETAILS[key].title.replace('The ', '').replace(' (UI)', '')}
                </button>
              ))}
            </div>

            <div className="flex-1 min-h-[200px] bg-slate-950 rounded-xl p-4 font-mono text-sm overflow-auto border border-slate-800 relative group">
              <div className="absolute top-2 right-2 text-xs text-slate-600 group-hover:text-slate-400 transition-colors">code preview</div>
              {detail ? (
                <pre id="detail-code" className="text-slate-300 pt-6" dangerouslySetInnerHTML={{ __html: DETAILS[detail].code }} />
              ) : (
                <pre className="text-slate-500 pt-6">
                  <span className="token-comment">// click a node or hit the buttons above</span>
                  <br />
                  <span className="token-comment">// flow: View → Action → Reducer → Store → View</span>
                  <br />
                  <br />
                  <span className="text-slate-600">View</span>     <span className="text-slate-500"> user does a thing, we dispatch</span>
                  <br />
                  <span className="text-slate-600">Action</span>    <span className="text-slate-500"> just {`{ type, payload }`}</span>
                  <br />
                  <span className="text-slate-600">Reducer</span>   <span className="text-slate-500"> (state, action) =&gt; newState</span>
                  <br />
                  <span className="text-slate-600">Store</span>    <span className="text-slate-500"> the one place that has it all</span>
                </pre>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span>{detail ? `${DETAILS[detail].title}` : 'choose one to see code'}</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> live
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
