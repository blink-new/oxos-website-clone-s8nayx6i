import { Button } from '../../components/ui/button'
import { Card, CardContent } from '../../components/ui/card'
import { CheckCircle, ArrowRight, Stethoscope, Activity, Target } from 'lucide-react'

export function OrthopedicsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Orthopedic
              <span className="text-primary block">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced orthopedic technology solutions for bone and joint treatments, 
              surgical planning, and patient rehabilitation. Enhance precision and outcomes 
              in orthopedic care.
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
              Orthopedic Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of orthopedic care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Joint Replacement */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Stethoscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Joint Replacement</h3>
                <p className="text-gray-600 mb-6">
                  Pre-operative planning and post-operative assessment for hip, knee, and shoulder replacements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    3D surgical planning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Implant sizing and positioning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Recovery monitoring
                  </li>
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Fracture Management */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fracture Management</h3>
                <p className="text-gray-600 mb-6">
                  Advanced imaging and analysis for fracture diagnosis, treatment planning, and healing assessment.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fracture classification
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Reduction planning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Healing progression
                  </li>
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Spinal Care */}
            <Card className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Spinal Care</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive spinal assessment and treatment planning for various spinal conditions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Spinal alignment analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Surgical planning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Outcome tracking
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

      {/* Clinical Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Clinical Benefits
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our orthopedic solutions deliver measurable improvements in patient outcomes, 
                surgical precision, and clinical efficiency.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Improved Surgical Precision</h3>
                    <p className="text-gray-600">Advanced planning tools reduce surgical time and improve implant positioning accuracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Enhanced Patient Outcomes</h3>
                    <p className="text-gray-600">Better pre-operative planning leads to improved patient satisfaction and faster recovery times.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Reduced Complications</h3>
                    <p className="text-gray-600">Comprehensive analysis helps identify potential issues before they become complications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Streamlined Workflow</h3>
                    <p className="text-gray-600">Integrated systems reduce administrative burden and improve clinical efficiency.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-sm text-gray-600">Reduction in Surgery Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-gray-600">Faster Recovery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-gray-600">Patient Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm text-gray-600">Fewer Complications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world results from healthcare providers using our orthopedic solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Metro General Hospital
                </h3>
                <p className="text-gray-600 mb-6">
                  "Since implementing Oxos MC2 Clinic, our orthopedic department has seen a 30% 
                  reduction in surgical complications and significantly improved patient satisfaction scores."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Michael Thompson</p>
                    <p className="text-sm text-gray-600">Chief of Orthopedics</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sports Medicine Center
                </h3>
                <p className="text-gray-600 mb-6">
                  "The precision and efficiency gains from MC2 technology have transformed our practice. 
                  We're able to provide better care while seeing more patients."
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Sarah Martinez</p>
                    <p className="text-sm text-gray-600">Sports Medicine Specialist</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transform Your Orthopedic Practice
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how our orthopedic solutions can improve patient outcomes and 
            streamline your clinical workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              Download Brochure <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}