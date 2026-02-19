import { useState, useRef } from 'react'
import { AlertTriangle, Layout } from 'lucide-react'

const NODE_TYPES = ['Controller', 'Service', 'DB', 'View']

export default function ProblemSection() {
  const [chaosNodes, setChaosNodes] = useState([])
  const [connections, setConnections] = useState([])
  const [chaosMode, setChaosMode] = useState(true)
  const [showOrderRestored, setShowOrderRestored] = useState(false)
  const [solveDisabled, setSolveDisabled] = useState(false)
  const containerRef = useRef(null)

  const addChaos = () => {
    if (!chaosMode) resetChaos()
    const type = NODE_TYPES[Math.floor(Math.random() * NODE_TYPES.length)]
    const top = 20 + Math.random() * 60
    const left = 20 + Math.random() * 60
    const id = `node-${Date.now()}`
    setChaosNodes((prev) => {
      const next = [...prev, { id, type, top, left }]
      if (next.length > 1) {
        const targetIndex = Math.floor(Math.random() * (next.length - 1))
        setConnections((c) => [...c, { from: id, to: next[targetIndex].id }])
      }
      return next
    })
  }

  const solveChaos = () => {
    setChaosNodes([])
    setConnections([])
    setChaosMode(false)
    setShowOrderRestored(true)
    setSolveDisabled(true)
  }

  const resetChaos = () => {
    setChaosNodes([])
    setConnections([])
    setChaosMode(true)
    setShowOrderRestored(false)
    setSolveDisabled(false)
  }

  const showSolveBtn = chaosNodes.length > 5

  const getNodeCenter = (node) => ({ x: node.left + 10, y: node.top + 8 })

  return (
    <section id="problem" className="py-24 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">how we got here</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">why does UI feel like a mess sometimes?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            So we had controllers. Then we wanted more stuff. So we added more controllers. And then… yeah. Chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="text-red-500 w-5 h-5" />
                the spaghetti situation
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                UI talks to a controller, controller talks to the DB, and when things get big you get loops. Like, A calls B, B calls A… and your app just gives up.
              </p>
              <div className="text-xs text-slate-500 font-mono">
                // user scrolls the feed while logged out<br />
                // controller A hits B, B hits A, you know the rest
              </div>
            </div>

            <div className="space-y-4">
              {[
                'Too many “sources of truth” and nothing stays in sync.',
                'Two-way binding? Good luck figuring out where that change came from.',
                'State is everywhere: components, DOM, random services. A vibe, but not a good one.',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 font-bold text-slate-500">
                    {i + 1}
                  </div>
                  <p className="text-slate-300 text-sm pt-1">{text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={addChaos}
              className={`w-full py-3 rounded-lg transition-all font-mono text-sm ${
                showSolveBtn && chaosMode
                  ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/50'
                  : 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/50'
              }`}
            >
              {showSolveBtn && chaosMode ? '+ more chaos go' : '+ add some chaos (seriously click it)'}
            </button>
            {showSolveBtn && (
              <button
                onClick={solveChaos}
                disabled={solveDisabled}
                className={`w-full py-3 rounded-lg transition-all font-mono text-sm ${
                  solveDisabled
                    ? 'bg-emerald-500/30 text-emerald-400 border border-emerald-500/50'
                    : 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                }`}
              >
                {solveDisabled ? 'we’re good now' : '✓ one-way flow, please'}
              </button>
            )}
          </div>

          <div className="relative h-[500px] glass-card rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/50" />
            <div ref={containerRef} id="chaos-visualization" className="relative w-full h-full">
              {!showOrderRestored && (
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center chaos-node"
                  id="initial-chaos-node"
                >
                  <div className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-2 border border-slate-500">
                    <Layout className="text-slate-300" />
                  </div>
                  <span className="text-xs text-slate-400">chill little app</span>
                </div>
              )}

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                {connections.map(({ from, to }) => {
                  const fromNode = chaosNodes.find((n) => n.id === from)
                  const toNode = chaosNodes.find((n) => n.id === to)
                  if (!fromNode || !toNode) return null
                  const p1 = getNodeCenter(fromNode)
                  const p2 = getNodeCenter(toNode)
                  return (
                    <line
                      key={`${from}-${to}`}
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke="rgba(239,68,68,0.6)"
                      strokeWidth="1"
                    />
                  )
                })}
              </svg>

              {chaosNodes.map((node) => (
                <div
                  key={node.id}
                  id={node.id}
                  className="absolute flex flex-col items-center justify-center p-2 bg-slate-800 rounded border border-slate-600 text-xs w-20 h-16 shadow-lg chaos-node z-10"
                  style={{
                    top: `${node.top}%`,
                    left: `${node.left}%`,
                  }}
                >
                  <div
                    className={`w-2 h-2 rounded-full mb-1 ${
                      node.type === 'View' ? 'bg-pink-500' : node.type === 'DB' ? 'bg-purple-500' : 'bg-blue-500'
                    }`}
                  />
                  <span className="text-[10px] text-slate-300 truncate w-full text-center">{node.type}</span>
                </div>
              ))}

              {showOrderRestored && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-emerald-500 rounded-full flex items-center justify-center opacity-0 z-20 animate-[fadeIn_1s_forwards]">
                  <span className="text-emerald-400 font-bold bg-slate-900 px-4 py-1 rounded">one way only, we’re fine</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
