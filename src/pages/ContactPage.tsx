import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    inquiry: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact
              <span className="text-primary block">Our Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ready to transform your healthcare practice? Get in touch with our experts 
              to learn how Oxos medical technology can benefit your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our team</p>
                <p className="text-primary font-semibold">(866) 785-7833</p>
                <p className="text-sm text-gray-500 mt-2">Monday - Friday, 8AM - 6PM EST</p>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us your questions</p>
                <p className="text-primary font-semibold">info@oxos.com</p>
                <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Headquarters</h3>
                <p className="text-gray-600 mb-4">Visit our main office</p>
                <p className="text-gray-700">
                  123 Medical Technology Drive<br />
                  Boston, MA 02101<br />
                  United States
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours. 
                For urgent inquiries, please call us directly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM EST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Send className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-gray-600">Email inquiries: Within 24 hours</p>
                    <p className="text-gray-600">Phone calls: Immediate during business hours</p>
                    <p className="text-gray-600">Demo requests: Within 2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inquiry">Type of Inquiry *</Label>
                    <Select onValueChange={(value) => handleInputChange('inquiry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Schedule a Demo</SelectItem>
                        <SelectItem value="sales">Sales Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="general">General Information</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Global Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have offices and support centers around the world to serve you better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* North America */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">North America HQ</h3>
                <div className="space-y-2 text-gray-600">
                  <p>123 Medical Technology Drive</p>
                  <p>Boston, MA 02101</p>
                  <p>United States</p>
                  <p className="text-primary font-semibold mt-4">(866) 785-7833</p>
                </div>
              </CardContent>
            </Card>

            {/* Europe */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">European Office</h3>
                <div className="space-y-2 text-gray-600">
                  <p>45 Healthcare Innovation Center</p>
                  <p>London SW1A 1AA</p>
                  <p>United Kingdom</p>
                  <p className="text-primary font-semibold mt-4">+44 20 7946 0958</p>
                </div>
              </CardContent>
            </Card>

            {/* Asia Pacific */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Asia Pacific</h3>
                <div className="space-y-2 text-gray-600">
                  <p>88 Medical Technology Plaza</p>
                  <p>Singapore 018956</p>
                  <p>Singapore</p>
                  <p className="text-primary font-semibold mt-4">+65 6123 4567</p>
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how Oxos medical technology 
            can transform your healthcare practice.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
            Schedule Your Demo
          </Button>
        </div>
      </section>
    </div>
  )
}