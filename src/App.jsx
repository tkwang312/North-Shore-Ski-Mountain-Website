import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Grouse, Contact, Cypress, Seymour } from './pages'

const App = () => {
  return (

    <main className="bg-slate-300/20">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/cypress" element={<Cypress />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/grouse" element={<Grouse />} />
                <Route path="/seymour" element={<Seymour />} />
            </Routes>

        </Router>
    </main>
  )
}

export default App