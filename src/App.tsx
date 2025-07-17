import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="text-2xl font-bold text-primary">OXOS</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                  MC2 <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MC2 Clinic</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MC2 LE</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MC2 Go</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MC2 Lab</a>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Solutions</a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                  Use Cases <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Orthopedics</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sports Medicine</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bioskills</a>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">About Us</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Careers</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">News</a>
                </div>
              </div>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Schedule a Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">MC2</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Solutions</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Use Cases</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Company</a>
                <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</a>
                <div className="pt-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Schedule a Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced Medical
              <span className="text-primary block">Technology Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolutionizing healthcare with cutting-edge MC2 technology for orthopedics, 
              sports medicine, and medical training applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              MC2 Product Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical technology solutions designed for various healthcare applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* MC2 Clinic */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary">MC2</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">MC2 Clinic</h3>
                <p className="text-gray-600 mb-4">
                  Professional-grade medical technology for clinical environments and patient care.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* MC2 LE */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-green-600">LE</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">MC2 LE</h3>
                <p className="text-gray-600 mb-4">
                  Limited edition specialized equipment for advanced medical procedures.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* MC2 Go */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-purple-600">GO</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">MC2 Go</h3>
                <p className="text-gray-600 mb-4">
                  Portable medical technology solutions for on-the-go healthcare delivery.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* MC2 Lab */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-4xl font-bold text-orange-600">LAB</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">MC2 Lab</h3>
                <p className="text-gray-600 mb-4">
                  Laboratory-grade equipment for research and advanced medical analysis.
                </p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Medical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized applications across multiple medical disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Orthopedics */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="h-8 w-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orthopedics</h3>
              <p className="text-gray-600 mb-6">
                Advanced orthopedic solutions for bone and joint treatments, surgical planning, and patient rehabilitation.
              </p>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Explore Solutions
              </Button>
            </div>

            {/* Sports Medicine */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <div className="h-8 w-8 bg-accent rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sports Medicine</h3>
              <p className="text-gray-600 mb-6">
                Specialized equipment for sports injury prevention, treatment, and athletic performance optimization.
              </p>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Explore Solutions
              </Button>
            </div>

            {/* Bioskills */}
            <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="h-8 w-8 bg-green-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bioskills</h3>
              <p className="text-gray-600 mb-6">
                Medical training and simulation tools for developing essential healthcare skills and procedures.
              </p>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Medical Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how Oxos MC2 technology can enhance your healthcare delivery and patient outcomes.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
            Schedule a Demo Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold text-white mb-4">OXOS</div>
              <p className="text-gray-400 mb-6">
                Leading medical technology solutions for healthcare professionals worldwide.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 mb-2">
                <Phone className="h-4 w-4" />
                <span>(866) 785-7833</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@oxos.com</span>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">MC2 Clinic</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MC2 LE</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MC2 Go</a></li>
                <li><a href="#" className="hover:text-white transition-colors">MC2 Lab</a></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Orthopedics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sports Medicine</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bioskills</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Oxos Medical. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App