import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              OXOS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                MC2 <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/products/mc2-clinic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MC2 Clinic</Link>
                <Link to="/products/mc2-le" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MC2 LE</Link>
                <Link to="/products/mc2-go" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MC2 Go</Link>
                <Link to="/products/mc2-lab" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">MC2 Lab</Link>
              </div>
            </div>
            <Link 
              to="/solutions" 
              className={`transition-colors ${isActive('/solutions') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
            >
              Solutions
            </Link>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                Use Cases <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/use-cases/orthopedics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Orthopedics</Link>
                <Link to="/use-cases/sports-medicine" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Sports Medicine</Link>
                <Link to="/use-cases/bioskills" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Bioskills</Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
            >
              Contact
            </Link>
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
              <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-primary">MC2 Products</Link>
              <Link to="/solutions" className="block px-3 py-2 text-gray-700 hover:text-primary">Solutions</Link>
              <Link to="/use-cases" className="block px-3 py-2 text-gray-700 hover:text-primary">Use Cases</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</Link>
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
  )
}