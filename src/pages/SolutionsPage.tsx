import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { ArrowRight, CheckCircle, Stethoscope, Activity, Brain, Heart, Eye, Zap } from 'lucide-react'

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Medical Technology
              <span className="text-primary block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive healthcare solutions designed to improve patient outcomes, 
              enhance clinical workflows, and advance medical research across all specialties.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Explore All Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Medical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized applications across multiple medical disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Orthopedics */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Orthopedics</h3>
                <p className="text-gray-600 mb-6">
                  Advanced orthopedic solutions for bone and joint treatments, surgical planning, and patient rehabilitation.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Joint replacement planning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fracture analysis and treatment
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rehabilitation monitoring
                  </li>
                </ul>
                <Link to="/use-cases/orthopedics">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Sports Medicine */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sports Medicine</h3>
                <p className="text-gray-600 mb-6">
                  Specialized equipment for sports injury prevention, treatment, and athletic performance optimization.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Injury prevention protocols
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recovery optimization
                  </li>
                </ul>
                <Link to="/use-cases/sports-medicine">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Bioskills */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Bioskills Training</h3>
                <p className="text-gray-600 mb-6">
                  Medical training and simulation tools for developing essential healthcare skills and procedures.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Surgical simulation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Skills assessment
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Competency tracking
                  </li>
                </ul>
                <Link to="/use-cases/bioskills">
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Specialties */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Medical Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expanding our reach across diverse healthcare disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cardiology */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cardiology</h3>
              <p className="text-gray-600 text-sm">
                Advanced cardiac monitoring and diagnostic solutions for comprehensive heart care.
              </p>
            </div>

            {/* Ophthalmology */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ophthalmology</h3>
              <p className="text-gray-600 text-sm">
                Precision eye care technology for vision assessment and treatment planning.
              </p>
            </div>

            {/* Neurology */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Neurology</h3>
              <p className="text-gray-600 text-sm">
                Neurological assessment tools for brain and nervous system evaluation.
              </p>
            </div>

            {/* Emergency Medicine */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Emergency Medicine</h3>
              <p className="text-gray-600 text-sm">
                Rapid diagnostic and treatment solutions for critical care environments.
              </p>
            </div>

            {/* Physical Therapy */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Therapy</h3>
              <p className="text-gray-600 text-sm">
                Rehabilitation technology for movement analysis and recovery tracking.
              </p>
            </div>

            {/* General Practice */}
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">General Practice</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive primary care solutions for everyday medical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Seamless Integration with Your Workflow
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our solutions are designed to integrate seamlessly with existing healthcare systems, 
                minimizing disruption while maximizing efficiency and patient care quality.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">EMR Integration</h3>
                    <p className="text-gray-600">Direct integration with major electronic medical record systems</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cloud Connectivity</h3>
                    <p className="text-gray-600">Secure cloud-based data storage and remote access capabilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Analytics</h3>
                    <p className="text-gray-600">Advanced analytics and reporting for data-driven decisions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-gray-600">Implementation Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Technical Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm text-gray-600">Average Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">System Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Implement Our Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our experts help you choose the right medical technology solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Schedule Consultation
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                Contact Sales Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}