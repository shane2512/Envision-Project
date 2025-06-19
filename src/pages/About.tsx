import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Users, Leaf, Clock, Star, Heart, Award, Target, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "All drivers are verified LICET students with valid licenses and background checks",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Student Community",
      description: "Connect with fellow students, make new friends, and build lasting relationships",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Eco-Friendly",
      description: "Reduce carbon footprint by sharing rides and contributing to a greener campus",
      color: "from-green-400 to-teal-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Time Efficient",
      description: "Save time with direct routes and avoid the hassle of public transportation",
      color: "from-orange-500 to-red-600"
    }
  ]

  const stats = [
    { number: "500+", label: "Active Students", icon: Users, color: "from-blue-500 to-purple-600" },
    { number: "1000+", label: "Rides Completed", icon: Star, color: "from-yellow-500 to-orange-600" },
    { number: "₹50,000", label: "Money Saved", icon: Heart, color: "from-pink-500 to-red-600" },
    { number: "2 tons", label: "CO2 Reduced", icon: Leaf, color: "from-green-500 to-emerald-600" }
  ]

  const team = [
    { name: "Aarav Sharma", role: "Project Lead", expertise: "Full-Stack Development" },
    { name: "Priya Patel", role: "Frontend Developer", expertise: "UI/UX Design" },
    { name: "Rahul Kumar", role: "Backend Developer", expertise: "System Architecture" },
    { name: "Anita Singh", role: "UI/UX Designer", expertise: "User Experience" },
    { name: "Vikram Reddy", role: "Quality Assurance", expertise: "Testing & Automation" },
    { name: "Sneha Gupta", role: "Database Administrator", expertise: "Data Management" },
    { name: "Arjun Nair", role: "System Analyst", expertise: "Business Logic" }
  ]

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Mission-Driven",
      description: "Creating sustainable transportation solutions for students"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Community-Focused",
      description: "Building connections that last beyond graduation"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Innovation-Led",
      description: "Using technology to solve real-world problems"
    }
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl"
          >
            <Users className="h-10 w-10 text-white" />
          </motion.div>
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
          className="glass-card rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl"
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
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We believe that by working together, we can make campus transportation more 
                accessible, affordable, and environmentally friendly for everyone.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      {value.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{value.title}</h4>
                    <p className="text-white/60 text-xs">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="glass-card rounded-2xl p-8 floating-animation shadow-xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Community First</h3>
                  <p className="text-white/60">Building connections that last beyond graduation</p>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-white/60 text-sm">Students</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">4.8★</div>
                      <div className="text-white/60 text-sm">Rating</div>
                    </div>
                  </div>
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
                className="glass-card rounded-2xl p-6 text-center card-hover shadow-xl"
              >
                <div className={`bg-gradient-to-r ${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}>
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
          className="glass-card rounded-3xl p-8 lg:p-12 mb-16 shadow-2xl"
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
                className="text-center group"
              >
                <div className={`bg-gradient-to-r ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 font-medium">{stat.label}</div>
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
                className="glass-card rounded-2xl p-6 text-center card-hover shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-semibold text-lg shadow-lg">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-2">{member.role}</p>
                <p className="text-white/60 text-xs">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card rounded-3xl p-8 lg:p-12 text-center mb-16 shadow-2xl"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Award className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Have questions, suggestions, or want to contribute to our project? 
            We'd love to hear from you and help make campus transportation even better!
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