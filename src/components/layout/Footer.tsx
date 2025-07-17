import { Link } from 'react-router-dom'
import { Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
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
              <li><Link to="/products/mc2-clinic" className="hover:text-white transition-colors">MC2 Clinic</Link></li>
              <li><Link to="/products/mc2-le" className="hover:text-white transition-colors">MC2 LE</Link></li>
              <li><Link to="/products/mc2-go" className="hover:text-white transition-colors">MC2 Go</Link></li>
              <li><Link to="/products/mc2-lab" className="hover:text-white transition-colors">MC2 Lab</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/use-cases/orthopedics" className="hover:text-white transition-colors">Orthopedics</Link></li>
              <li><Link to="/use-cases/sports-medicine" className="hover:text-white transition-colors">Sports Medicine</Link></li>
              <li><Link to="/use-cases/bioskills" className="hover:text-white transition-colors">Bioskills</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">News</a></li>
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
  )
}