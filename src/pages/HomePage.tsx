import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ArrowRight, CheckCircle, Users, Award, Globe } from 'lucide-react'

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Healthcare Facilities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-gray-600">Procedures Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
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
                <Link to="/products/mc2-clinic">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
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
                <Link to="/products/mc2-le">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
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
                <Link to="/products/mc2-go">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
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
                <Link to="/products/mc2-lab">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="py-20 bg-white">
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
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="h-8 w-8 bg-primary rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Orthopedics</h3>
              <p className="text-gray-600 mb-6">
                Advanced orthopedic solutions for bone and joint treatments, surgical planning, and patient rehabilitation.
              </p>
              <Link to="/use-cases/orthopedics">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Sports Medicine */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <div className="h-8 w-8 bg-accent rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sports Medicine</h3>
              <p className="text-gray-600 mb-6">
                Specialized equipment for sports injury prevention, treatment, and athletic performance optimization.
              </p>
              <Link to="/use-cases/sports-medicine">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Bioskills */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-md transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="h-8 w-8 bg-green-500 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bioskills</h3>
              <p className="text-gray-600 mb-6">
                Medical training and simulation tools for developing essential healthcare skills and procedures.
              </p>
              <Link to="/use-cases/bioskills">
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Explore Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Oxos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Oxos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading the future of medical technology with innovation, reliability, and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Leading</h3>
              <p className="text-gray-600">
                Award-winning technology trusted by healthcare professionals worldwide for over two decades.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Dedicated support team and comprehensive training programs to ensure optimal utilization.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-600">
                Serving healthcare facilities across 50+ countries with localized support and service.
              </p>
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
    </div>
  )
}