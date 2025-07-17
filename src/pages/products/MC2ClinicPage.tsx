import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { CheckCircle, Download, Play, ArrowRight } from 'lucide-react'

export function MC2ClinicPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                MC2
                <span className="text-primary block">Clinic</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional-grade medical technology designed specifically for clinical environments. 
                Enhance patient care with precision diagnostics and treatment planning capabilities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                  Schedule Demo
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-12 flex items-center justify-center">
              <div className="text-8xl font-bold text-primary">MC2</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced capabilities designed for modern clinical practice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Precision Diagnostics</h3>
                <p className="text-gray-600">
                  Advanced imaging and analysis capabilities for accurate diagnosis and treatment planning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">EMR Integration</h3>
                <p className="text-gray-600">
                  Seamless integration with major electronic medical record systems for streamlined workflows.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Analytics</h3>
                <p className="text-gray-600">
                  Comprehensive analytics dashboard for tracking patient outcomes and clinical metrics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cloud Connectivity</h3>
                <p className="text-gray-600">
                  Secure cloud-based storage and remote access capabilities for enhanced flexibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Multi-user Support</h3>
                <p className="text-gray-600">
                  Support for multiple healthcare professionals with role-based access controls.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock technical support and maintenance for uninterrupted operation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">System Requirements</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Windows 10/11 or macOS 10.15+</li>
                    <li>• 16GB RAM minimum, 32GB recommended</li>
                    <li>• 500GB available storage</li>
                    <li>• Dedicated graphics card recommended</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Connectivity</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Ethernet and Wi-Fi support</li>
                    <li>• USB 3.0 and USB-C ports</li>
                    <li>• DICOM compatibility</li>
                    <li>• HL7 FHIR integration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• HIPAA compliant</li>
                    <li>• End-to-end encryption</li>
                    <li>• Multi-factor authentication</li>
                    <li>• Audit trail logging</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Clinical Applications</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Orthopedic Surgery</h3>
                    <p className="text-gray-600">Pre-operative planning and post-operative assessment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Sports Medicine</h3>
                    <p className="text-gray-600">Injury assessment and rehabilitation monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Physical Therapy</h3>
                    <p className="text-gray-600">Movement analysis and progress tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Research</h3>
                    <p className="text-gray-600">Clinical research and data collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to get started and maximize your investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive user manuals, installation guides, and technical documentation.
                </p>
                <Button variant="outline" className="w-full">
                  Download Resources
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Training Videos</h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step video tutorials and best practices for optimal system utilization.
                </p>
                <Button variant="outline" className="w-full">
                  Watch Training
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Certification</h3>
                <p className="text-gray-600 mb-4">
                  Professional certification programs for healthcare providers and technicians.
                </p>
                <Button variant="outline" className="w-full">
                  Get Certified
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience MC2 Clinic?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demonstration to see how MC2 Clinic can transform your clinical practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Request Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}