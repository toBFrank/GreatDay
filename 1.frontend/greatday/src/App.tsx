import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Recommendations from './pages/Recommendations'
import Itinerary from './pages/Itinerary'

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/itinerary">Itinerary</Link>
      </nav>

      <header className="header">
        <h1>GreatDay</h1>
        <p>Don't know what to do today? We got you.</p>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
