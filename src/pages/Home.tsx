import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Clock, Users, Star, MapPin, Car, Zap, Heart, Leaf } from 'lucide-react'
import Navbar from '../components/Navbar'

const Home = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Secure",
      description: "Verified student drivers with background checks and secure payment system",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Real-time Tracking",
      description: "Track your ride in real-time with live GPS updates and ETA notifications",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Community",
      description: "Connect with fellow LICET students and build lasting friendships",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly",
      description: "Reduce carbon footprint by sharing rides and contributing to sustainability",
      color: "from-green-400 to-teal-600"
    }
  ]

  const stats = [
    { number: "500+", label: "Active Students", icon: Users },
    { number: "1000+", label: "Rides Completed", icon: Car },
    { number: "4.8", label: "Average Rating", icon: Star },
    { number: "₹50", label: "Average Savings", icon: Heart }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "CSE Student",
      content: "LICET Carpool has made my daily commute so much easier and affordable. Great community!",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      role: "ECE Student", 
      content: "Safe, reliable, and eco-friendly. I've made so many new friends through this platform.",
      rating: 5
    },
    {
      name: "Anita Patel",
      role: "IT Student",
      content: "The real-time tracking feature gives me peace of mind. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6"
              >
                <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                Now serving 500+ students daily
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Smart
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Rides
                </span>
                <br />
                for Students
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                Connect with fellow LICET students for safe, affordable, and eco-friendly rides. 
                Your journey to campus just got smarter with real-time tracking and verified drivers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/book-ride" className="btn-primary group text-lg px-8 py-4">
                  Book a Ride Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="btn-secondary text-lg px-8 py-4">
                  Learn More
                </Link>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white shadow-lg"></div>
                  ))}
                </div>
                <div className="text-white/80">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold text-lg">4.8</span>
                  </div>
                  <p className="text-sm">500+ happy students</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="glass-card rounded-3xl p-8 floating-animation shadow-2xl">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                      <Car className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Your ride is arriving</h3>
                      <p className="text-white/60">Driver: Rahul Kumar</p>
                      <p className="text-green-400 text-sm font-medium">ETA: 3 minutes</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
                      <span className="text-white/90 font-medium">LICET Campus Gate</span>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-green-400 to-red-400 ml-2"></div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-400 rounded-full shadow-lg"></div>
                      <span className="text-white/90 font-medium">T. Nagar Metro</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white/60 text-sm">Total fare</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-bold text-2xl">₹45</span>
                          <span className="text-green-400 text-sm">20% saved</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-white font-medium">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full pulse-ring"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full"></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-500/20 rounded-full floating-animation"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose LICET Carpool?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Experience the future of student transportation with our innovative features designed for safety, convenience, and community building.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 card-hover group"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Students Say
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real experiences from our community of LICET students
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-12 shadow-2xl"
          >
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Car className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join hundreds of LICET students who are already saving money, making friends, and contributing to a greener campus
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login" className="btn-primary text-lg px-8 py-4">
                Get Started Today
              </Link>
              <Link to="/book-ride" className="btn-secondary text-lg px-8 py-4">
                Book Your First Ride
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home