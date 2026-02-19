import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import BackToTop from './BackToTop'

export default function Layout() {
  return (
    <div className="bg-grid-pattern min-h-screen relative">
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
