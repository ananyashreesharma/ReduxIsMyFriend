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
    <section id="problem" className="py-24 relative border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-neutral-400 font-mono text-sm tracking-wider uppercase">how we got here</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">why does UI feel like a mess sometimes?</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            So we had controllers. Then we wanted more stuff. So we added more controllers. And then… yeah. Chaos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-xl border-l-4 border-neutral-500">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <AlertTriangle className="text-neutral-400 w-5 h-5" />
                the spaghetti situation
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                UI talks to a controller, controller talks to the DB, and when things get big you get loops. Like, A calls B, B calls A… and your app just gives up.
              </p>
              <div className="text-xs text-neutral-500 font-mono">
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
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 font-bold text-neutral-500">
                    {i + 1}
                  </div>
                  <p className="text-neutral-300 text-sm pt-1">{text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={addChaos}
              className={`w-full py-3 rounded-lg transition-all font-mono text-sm ${
                showSolveBtn && chaosMode
                  ? 'bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border border-amber-500/50'
                  : 'bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 border border-pink-500/50'
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
            <div className="absolute inset-0 bg-neutral-900/50" />
            <div ref={containerRef} id="chaos-visualization" className="relative w-full h-full">
              {!showOrderRestored && (
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center chaos-node"
                  id="initial-chaos-node"
                >
                  <div className="w-20 h-20 bg-neutral-800 rounded-lg flex items-center justify-center mx-auto mb-2 border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                    <Layout className="text-pink-400" />
                  </div>
                  <span className="text-xs text-pink-400">chill little app</span>
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
                      stroke="rgba(236,72,153,0.5)"
                      strokeWidth="1"
                    />
                  )
                })}
              </svg>

              {chaosNodes.map((node) => {
                const nodeStyles =
                  node.type === 'View'
                    ? 'border-pink-500/70 shadow-[0_0_12px_rgba(236,72,153,0.25)]'
                    : node.type === 'Controller'
                      ? 'border-cyan-500/70 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                      : node.type === 'Service'
                        ? 'border-yellow-500/70 shadow-[0_0_12px_rgba(234,179,8,0.25)]'
                        : 'border-purple-500/70 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                const dotClass =
                  node.type === 'View'
                    ? 'bg-pink-500'
                    : node.type === 'Controller'
                      ? 'bg-cyan-500'
                      : node.type === 'Service'
                        ? 'bg-yellow-500'
                        : 'bg-purple-500'
                const textClass =
                  node.type === 'View'
                    ? 'text-pink-400'
                    : node.type === 'Controller'
                      ? 'text-cyan-400'
                      : node.type === 'Service'
                        ? 'text-yellow-400'
                        : 'text-purple-400'
                return (
                  <div
                    key={node.id}
                    id={node.id}
                    className={`absolute flex flex-col items-center justify-center p-2 bg-neutral-800 rounded border-2 ${nodeStyles} text-xs w-20 h-16 chaos-node z-10`}
                    style={{
                      top: `${node.top}%`,
                      left: `${node.left}%`,
                    }}
                  >
                    <div className={`w-2 h-2 rounded-full mb-1 ${dotClass}`} />
                    <span className={`text-[10px] ${textClass} truncate w-full text-center`}>{node.type}</span>
                  </div>
                )
              })}

              {showOrderRestored && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-emerald-500 rounded-full flex items-center justify-center opacity-0 z-20 animate-[fadeIn_1s_forwards]">
                  <span className="text-emerald-400 font-bold bg-neutral-900 px-4 py-1 rounded">one way only, we’re fine</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
