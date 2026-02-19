import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PureFunctionsPage from './pages/PureFunctionsPage'
import ImmutabilityPage from './pages/ImmutabilityPage'
import SingleSourceOfTruthPage from './pages/SingleSourceOfTruthPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="pure-functions" element={<PureFunctionsPage />} />
        <Route path="immutability" element={<ImmutabilityPage />} />
        <Route path="single-source-of-truth" element={<SingleSourceOfTruthPage />} />
      </Route>
    </Routes>
  )
}

export default App
