import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { CheckCircle, Download, Play, ArrowRight, Star } from 'lucide-react'

export function MC2LEPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Limited Edition</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                MC2
                <span className="text-green-600 block">LE</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Limited Edition specialized equipment for advanced medical procedures. 
                Featuring cutting-edge technology and premium components for the most demanding clinical applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Request Access
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-12 flex items-center justify-center">
              <div className="text-8xl font-bold text-green-600">LE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Exclusive Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium capabilities available only in the Limited Edition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ultra-High Resolution</h3>
                <p className="text-gray-600">
                  4K imaging capabilities with enhanced detail and clarity for the most precise diagnostics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">AI-Powered Analysis</h3>
                <p className="text-gray-600">
                  Advanced artificial intelligence algorithms for automated analysis and pattern recognition.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Premium Materials</h3>
                <p className="text-gray-600">
                  Constructed with aerospace-grade materials for maximum durability and precision.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Exclusive Support</h3>
                <p className="text-gray-600">
                  Dedicated support team and priority access to updates and new features.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Custom Configuration</h3>
                <p className="text-gray-600">
                  Tailored configurations to meet specific clinical requirements and workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Extended Warranty</h3>
                <p className="text-gray-600">
                  Comprehensive 5-year warranty with on-site service and replacement guarantees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Limited Availability */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Limited Availability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Only 100 units available worldwide. Reserve yours today.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100</div>
                <div className="text-gray-600">Total Units Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">23</div>
                <div className="text-gray-600">Units Remaining</div>
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  Reserve Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Future of Medical Technology
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join an exclusive group of healthcare pioneers with access to our most advanced technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3">
              Apply for Access
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}