import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, Leaf, Clock, Star, Heart } from 'lucide-react'
import Navbar from '../components/Navbar'

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "All drivers are verified LICET students with valid licenses and background checks"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Community",
      description: "Connect with fellow students, make new friends, and build lasting relationships"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly",
      description: "Reduce carbon footprint by sharing rides and contributing to a greener campus"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Efficient",
      description: "Save time with direct routes and avoid the hassle of public transportation"
    }
  ]

  const stats = [
    { number: "500+", label: "Active Students", icon: Users },
    { number: "1000+", label: "Rides Completed", icon: Star },
    { number: "₹50,000", label: "Money Saved", icon: Heart },
    { number: "2 tons", label: "CO2 Reduced", icon: Leaf }
  ]

  const team = [
    { name: "Team Member 1", role: "Project Lead" },
    { name: "Team Member 2", role: "Frontend Developer" },
    { name: "Team Member 3", role: "Backend Developer" },
    { name: "Team Member 4", role: "UI/UX Designer" },
    { name: "Team Member 5", role: "Quality Assurance" },
    { name: "Team Member 6", role: "Database Administrator" },
    { name: "Team Member 7", role: "System Analyst" }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About LICET Carpool
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            A revolutionary student carpooling network designed to provide safe, affordable, 
            and eco-friendly transportation solutions for LICET students.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-effect rounded-3xl p-8 lg:p-12 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                To create a sustainable and efficient transportation ecosystem for LICET students, 
                connecting those who need rides with those who can provide them, while fostering 
                a sense of community and environmental responsibility.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                We believe that by working together, we can make campus transportation more 
                accessible, affordable, and environmentally friendly for everyone.
              </p>
            </div>
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8 floating-animation">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Community First</h3>
                  <p className="text-white/60">Building connections that last beyond graduation</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center card-hover"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-effect rounded-3xl p-8 lg:p-12 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-6">
            Meet Our Team
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            This project was developed by a dedicated team of seven members who are passionate 
            about creating innovative solutions for student transportation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold text-lg">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-white/60 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-effect rounded-3xl p-8 lg:p-12 text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Have questions, suggestions, or want to contribute to our project? 
            We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@licetcarpool.com"
              className="btn-primary"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="btn-secondary"
            >
              Join Our Community
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About