import { Check } from 'lucide-react'

export default function RTKSection() {
  const points = [
    'Store setup in like two lines (configureStore)',
    'Immer does the immutability so you can write normal-looking code',
    'Reducers + actions in one slice (createSlice), no hunting around',
  ]

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-bold mb-4">the good stuff</div>
            <h2 className="text-4xl font-bold mb-6">redux toolkit is where it’s at</h2>
            <p className="text-slate-400 text-lg mb-8">
              Yeah, the boilerplate thing? Solved. RTK is the official take: opinionated, comes with everything. Redux without the headache.
            </p>

            <ul className="space-y-4 mb-8">
              {points.map((text) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-slate-300">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://redux-toolkit.js.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              check the RTK docs
            </a>
          </div>

          <div className="flex-1 w-full">
            <div className="glass-card rounded-xl overflow-hidden border border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.15)]">
              <div className="bg-slate-900/80 px-4 py-2 flex items-center justify-between border-b border-white/5">
                <span className="text-xs text-slate-400 font-mono">counterSlice.js</span>
                <span className="text-[10px] text-purple-400 bg-purple-500/10 px-2 py-1 rounded">RTK STYLE</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto text-slate-300">
                <pre className="whitespace-pre">
{`import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      // looks like we're mutating but Immer handles it
      // so you get clean code without the copy pasta
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
