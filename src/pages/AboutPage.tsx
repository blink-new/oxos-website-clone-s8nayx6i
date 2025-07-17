import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Users, Award, Globe, Target, Heart, Lightbulb } from 'lucide-react'

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-primary block">Oxos Medical</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              For over two decades, we've been at the forefront of medical technology innovation, 
              transforming healthcare delivery and improving patient outcomes worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To revolutionize healthcare through innovative medical technology solutions that enhance 
                clinical outcomes, improve patient experiences, and empower healthcare professionals 
                with the tools they need to deliver exceptional care.
              </p>
              <p className="text-gray-600">
                We believe that advanced technology should be accessible, intuitive, and seamlessly 
                integrated into healthcare workflows to maximize its impact on patient care.
              </p>
            </div>
            
            <div>
              <div className="h-16 w-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the global leader in medical technology innovation, creating a future where 
                healthcare is more precise, efficient, and accessible for everyone, everywhere.
              </p>
              <p className="text-gray-600">
                We envision a world where our technology enables healthcare providers to deliver 
                personalized, data-driven care that improves lives and transforms communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two decades of innovation and growth in the medical technology industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600 mb-2">Healthcare Facilities</div>
                <div className="text-sm text-gray-500">Worldwide partnerships</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600 mb-2">Countries Served</div>
                <div className="text-sm text-gray-500">Global presence</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-gray-600 mb-2">Procedures Supported</div>
                <div className="text-sm text-gray-500">Patient treatments</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600 mb-2">Years of Innovation</div>
                <div className="text-sm text-gray-500">Industry experience</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient-Centered</h3>
              <p className="text-gray-600">
                Every innovation we create is designed with the patient's well-being and experience at the forefront, 
                ensuring that technology serves humanity.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in product quality, service delivery, and customer support, 
                continuously striving for perfection in everything we do.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace cutting-edge technology and creative problem-solving to develop solutions that 
                push the boundaries of what's possible in healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation in medical technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-24 w-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Sarah Johnson</h3>
                <p className="text-primary mb-3">Chief Executive Officer</p>
                <p className="text-sm text-gray-600">
                  20+ years in medical technology leadership, former VP at leading healthcare companies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-24 w-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Michael Chen</h3>
                <p className="text-primary mb-3">Chief Technology Officer</p>
                <p className="text-sm text-gray-600">
                  Expert in medical device engineering with 15+ years developing innovative healthcare solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-24 w-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Emily Rodriguez</h3>
                <p className="text-primary mb-3">Chief Medical Officer</p>
                <p className="text-sm text-gray-600">
                  Practicing orthopedic surgeon and researcher, ensuring clinical relevance in all our products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform healthcare
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-lg font-semibold text-primary">2004</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mx-6"></div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">Company Founded</h3>
                <p className="text-gray-600">Oxos Medical established with a vision to revolutionize orthopedic care.</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-lg font-semibold text-primary">2008</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mx-6"></div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">First MC2 System Launch</h3>
                <p className="text-gray-600">Introduced our flagship MC2 technology to the medical community.</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-lg font-semibold text-primary">2015</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mx-6"></div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">Global Expansion</h3>
                <p className="text-gray-600">Expanded operations to serve healthcare facilities across 25 countries.</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-lg font-semibold text-primary">2020</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mx-6"></div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">MC2 Product Suite</h3>
                <p className="text-gray-600">Launched comprehensive MC2 product line including Clinic, LE, Go, and Lab variants.</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-lg font-semibold text-primary">2024</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mx-6"></div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">AI Integration</h3>
                <p className="text-gray-600">Integrated artificial intelligence capabilities across all product lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're a healthcare provider, researcher, or industry partner, 
            we invite you to be part of our mission to improve patient care worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
              Partner With Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
              View Career Opportunities
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}