import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { SolutionsPage } from './pages/SolutionsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { MC2ClinicPage } from './pages/products/MC2ClinicPage'
import { MC2LEPage } from './pages/products/MC2LEPage'
import { OrthopedicsPage } from './pages/use-cases/OrthopedicsPage'
import { SportsMedicinePage } from './pages/use-cases/SportsMedicinePage'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products/mc2-clinic" element={<MC2ClinicPage />} />
            <Route path="/products/mc2-le" element={<MC2LEPage />} />
            <Route path="/products/mc2-go" element={<MC2ClinicPage />} />
            <Route path="/products/mc2-lab" element={<MC2ClinicPage />} />
            <Route path="/use-cases/orthopedics" element={<OrthopedicsPage />} />
            <Route path="/use-cases/sports-medicine" element={<SportsMedicinePage />} />
            <Route path="/use-cases/bioskills" element={<OrthopedicsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App