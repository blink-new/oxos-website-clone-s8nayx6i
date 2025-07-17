import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { CheckCircle, ArrowRight, Activity, Target, Zap } from 'lucide-react'

export function SportsMedicinePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sports Medicine
              <span className="text-primary block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced sports medicine technology for injury prevention, treatment, 
              and athletic performance optimization. Empower athletes to reach their peak potential 
              while minimizing injury risk.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Key Applications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sports Medicine Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for athletic performance and injury management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Performance Analysis */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analysis</h3>
                <p className="text-gray-600 mb-6">
                  Advanced biomechanical analysis and movement assessment to optimize athletic performance.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Motion capture analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Force plate measurements
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance metrics tracking
                  </li>
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Injury Prevention */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Injury Prevention</h3>
                <p className="text-gray-600 mb-6">
                  Proactive screening and assessment tools to identify injury risk factors before they become problems.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Risk factor assessment
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Movement screening
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Preventive protocols
                  </li>
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Recovery Optimization */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Recovery Optimization</h3>
                <p className="text-gray-600 mb-6">
                  Advanced rehabilitation and recovery monitoring to get athletes back to peak performance faster.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recovery tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rehabilitation protocols
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Return-to-play assessment
                  </li>
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Performance Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our sports medicine solutions deliver measurable improvements in athletic performance, 
                injury prevention, and recovery times.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhanced Performance</h3>
                    <p className="text-gray-600">Detailed biomechanical analysis helps athletes optimize their technique and performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduced Injury Risk</h3>
                    <p className="text-gray-600">Proactive screening identifies potential issues before they become serious injuries.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Faster Recovery</h3>
                    <p className="text-gray-600">Advanced monitoring and protocols accelerate the rehabilitation process.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Data-Driven Decisions</h3>
                    <p className="text-gray-600">Objective measurements support evidence-based training and treatment decisions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-gray-600">Injury Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35%</div>
                  <div className="text-sm text-gray-600">Performance Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-gray-600">Faster Recovery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-sm text-gray-600">Athlete Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Covered */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sports We Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized protocols and analysis for a wide range of sports and activities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Football', 'Basketball', 'Soccer', 'Tennis', 'Baseball', 'Golf',
              'Running', 'Swimming', 'Cycling', 'Hockey', 'Volleyball', 'Track & Field'
            ].map((sport) => (
              <Card key={sport} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{sport}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Elevate Athletic Performance
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how our sports medicine solutions can help athletes reach their full potential 
            while staying injury-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Download Sports Guide <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}