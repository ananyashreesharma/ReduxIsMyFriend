import { useState } from 'react'
import { RotateCcw, RotateCw, PlusCircle, MinusCircle, Braces } from 'lucide-react'

const initialState = { balance: 0, loading: false, transactions: [] }

export default function PlaygroundSection() {
  const [state, setState] = useState(initialState)
  const [history, setHistory] = useState([initialState])
  const [actionLog, setActionLog] = useState(['// log’s ready, dispatch something'])
  const [jsonFlash, setJsonFlash] = useState(false)

  const canUndo = history.length > 1
  const canRedo = false

  const dispatchAction = (type, amount) => {
    const nextState =
      type === 'DEPOSIT'
        ? { ...state, balance: state.balance + amount }
        : type === 'WITHDRAW'
          ? { ...state, balance: state.balance - amount }
          : state
    setState(nextState)
    setHistory((h) => [...h, nextState])
    setActionLog((prev) => [`> DISPATCH: { type: '${type}', payload: ${amount} }`, ...prev.filter((l) => !l.startsWith('//'))])
    setJsonFlash(true)
    setTimeout(() => setJsonFlash(false), 200)
  }

  const undo = () => {
    if (!canUndo) return
    const prevHistory = history.slice(0, -1)
    const prevState = prevHistory[prevHistory.length - 1]
    setHistory(prevHistory)
    setState(prevState)
    setActionLog((prev) => {
      const idx = prev.findIndex((l) => l.startsWith('>'))
      if (idx === -1) return prev
      const next = prev.filter((_, i) => i !== idx)
      return next.length ? next : ['// log’s ready, dispatch something']
    })
    setJsonFlash(true)
    setTimeout(() => setJsonFlash(false), 200)
  }

  return (
    <section id="playground" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-900 via-slate-900 to-transparent z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">live playground</h2>
            <p className="text-slate-400">Dispatch stuff and watch state update (the right way). Undo = time travel. You’re welcome.</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 bg-slate-800 p-2 rounded-lg border border-slate-700 shrink-0">
            <button
              onClick={undo}
              disabled={!canUndo}
              className="p-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 disabled:opacity-40 disabled:cursor-not-allowed"
              title="undo last move"
            >
              <RotateCcw className={`w-4 h-4 ${canUndo ? 'text-slate-400 hover:text-white' : 'text-slate-500'}`} />
            </button>
            <button
              disabled={!canRedo}
              className="p-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 disabled:opacity-40 disabled:cursor-not-allowed"
              title="redo (maybe later)"
            >
              <RotateCw className="w-4 h-4 text-slate-500" />
            </button>
            <div className="w-px h-6 bg-slate-700" />
            <span className="text-xs text-slate-500 px-2 font-mono">time travel</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-[#1e2227] p-0 flex flex-col min-h-[500px]">
            <div className="bg-[#282c34] px-4 py-2 flex items-center justify-between border-b border-black/20">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">reducer.js</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-auto text-slate-300">
              <div><span className="token-keyword">const</span> initialState = {'{'}</div>
              <div className="pl-4">balance: <span className="token-number">0</span>,</div>
              <div className="pl-4">loading: <span className="token-keyword">false</span></div>
              <div>{'}'};</div>
              <br />
              <div><span className="token-keyword">function</span> <span className="token-function">reducer</span>(state = initialState, action) {'{'}</div>
              <div className="pl-4"><span className="token-keyword">switch</span> (action.type) {'{'}</div>
              <div className="pl-8"><span className="token-keyword">case</span> <span className="token-string">'DEPOSIT'</span>:</div>
              <div className="pl-12"><span className="token-keyword">return</span> {'{'}</div>
              <div className="pl-16">...state,</div>
              <div className="pl-16">balance: state.balance + action.payload</div>
              <div className="pl-12">{'}'};</div>
              <div className="pl-8"><span className="token-keyword">case</span> <span className="token-string">'WITHDRAW'</span>:</div>
              <div className="pl-12"><span className="token-keyword">return</span> {'{'}</div>
              <div className="pl-16">...state,</div>
              <div className="pl-16">balance: state.balance - action.payload</div>
              <div className="pl-12">{'}'};</div>
              <div className="pl-8"><span className="token-keyword">default</span>:</div>
              <div className="pl-12"><span className="token-keyword">return</span> state;</div>
              <div className="pl-4">{'}'}</div>
              <div>{'}'}</div>
            </div>
          </div>

          <div className="bg-slate-900 flex flex-col border-l border-slate-700">
            <div className="flex-1 p-6 bg-slate-950/50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">current state</h3>
                <span className="text-xs bg-slate-800 text-green-400 px-2 py-1 rounded border border-slate-700">valid json</span>
              </div>

              <div
                className={`bg-[#0d1117] p-4 rounded-lg border border-slate-800 h-64 font-mono text-sm relative overflow-hidden transition-all duration-300 ${jsonFlash ? 'bg-slate-800' : ''}`}
                id="json-tree"
              >
                <div className="absolute right-4 top-4 text-slate-600 text-6xl opacity-20 pointer-events-none">
                  <Braces />
                </div>
                <span className="text-purple-400">{'{'}</span>
                <br />
                &nbsp;&nbsp;<span className="text-blue-400">&quot;balance&quot;</span>: <span className="text-yellow-400" id="display-balance">{state.balance}</span>,<br />
                &nbsp;&nbsp;<span className="text-blue-400">&quot;loading&quot;</span>: <span className="text-red-400">{state.loading.toString()}</span>,<br />
                &nbsp;&nbsp;<span className="text-blue-400">&quot;transactions&quot;</span>: <span className="text-slate-400">[ ]</span>
                <br />
                <span className="text-purple-400">{'}'}</span>
              </div>

              <div className="mt-6 flex items-center justify-center p-6 glass rounded-xl border border-dashed border-slate-700">
                <div className="text-center">
                  <div className="text-xs text-slate-500 uppercase mb-2">what you see</div>
                  <div className="text-4xl font-bold text-white transition-all" id="visual-balance">
                    ${state.balance.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-800 bg-slate-900">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">dispatch an action</h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => dispatchAction('DEPOSIT', 100)}
                  className="flex items-center justify-center gap-2 p-3 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg transition-all active:scale-95 group"
                >
                  <PlusCircle className="w-4 h-4 group-hover:rotate-90 transition-transform" /> Deposit $100
                </button>
                <button
                  onClick={() => dispatchAction('WITHDRAW', 50)}
                  className="flex items-center justify-center gap-2 p-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg transition-all active:scale-95 group"
                >
                  <MinusCircle className="w-4 h-4 group-hover:rotate-90 transition-transform" /> Withdraw $50
                </button>
              </div>

              <div className="mt-4 h-24 overflow-y-auto bg-black/40 rounded border border-slate-800 p-2 text-xs font-mono scroll-smooth" id="action-log">
                {actionLog.map((line, i) => (
                  <div key={i} className={line.startsWith('>') ? 'mb-1 text-cyan-400' : 'text-slate-600 italic'}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
