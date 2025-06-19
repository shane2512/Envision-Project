import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, MapPin, Clock, Star, Plus, Filter, Search, TrendingUp, Users, Heart, Navigation } from 'lucide-react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('rides')

  const recentRides = [
    {
      id: 1,
      from: 'LICET Campus',
      to: 'T. Nagar Metro',
      date: '2024-01-15',
      time: '08:30 AM',
      driver: 'Rahul Kumar',
      rating: 4.8,
      fare: 45,
      status: 'completed',
      duration: '25 mins'
    },
    {
      id: 2,
      from: 'Anna Nagar',
      to: 'LICET Campus',
      date: '2024-01-14',
      time: '07:45 AM',
      driver: 'Priya Sharma',
      rating: 4.9,
      fare: 50,
      status: 'completed',
      duration: '30 mins'
    },
    {
      id: 3,
      from: 'LICET Campus',
      to: 'Kodambakkam',
      date: '2024-01-13',
      time: '05:30 PM',
      driver: 'Arjun Patel',
      rating: 4.7,
      fare: 40,
      status: 'completed',
      duration: '35 mins'
    }
  ]

  const upcomingRides = [
    {
      id: 4,
      from: 'LICET Campus',
      to: 'Kodambakkam',
      date: '2024-01-16',
      time: '05:30 PM',
      driver: 'Arjun Patel',
      fare: 40,
      status: 'confirmed',
      eta: '2 hours'
    }
  ]

  const quickActions = [
    {
      title: 'Find a Ride',
      description: 'Search for available rides to your destination',
      icon: Search,
      color: 'from-green-500 to-emerald-600',
      link: '/book-ride'
    },
    {
      title: 'Offer a Ride',
      description: 'Share your ride and earn money',
      icon: Plus,
      color: 'from-blue-500 to-purple-600',
      link: '/offer-ride'
    },
    {
      title: 'Track Ride',
      description: 'Track your current ride in real-time',
      icon: Navigation,
      color: 'from-orange-500 to-red-600',
      link: '/track-ride'
    },
    {
      title: 'Ride History',
      description: 'View all your past rides and receipts',
      icon: Clock,
      color: 'from-purple-500 to-pink-600',
      link: '/history'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navbar isLoggedIn={true} />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
              S
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">
                Welcome back, Student!
              </h1>
              <p className="text-white/60">Ready for your next adventure?</p>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: 'Total Rides', value: '24', icon: Car, color: 'from-blue-500 to-purple-600' },
            { label: 'Money Saved', value: '₹1,200', icon: Heart, color: 'from-green-500 to-emerald-600' },
            { label: 'This Month', value: '8', icon: TrendingUp, color: 'from-orange-500 to-red-600' },
            { label: 'Rating', value: '4.9', icon: Star, color: 'from-yellow-500 to-orange-600' }
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-2xl p-6 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-xl shadow-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="glass-card rounded-2xl p-6 card-hover group cursor-pointer"
              >
                <div className={`bg-gradient-to-r ${action.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{action.title}</h3>
                <p className="text-white/60 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-6"
        >
          <div className="flex space-x-1 bg-white/10 p-1 rounded-xl w-fit">
            {[
              { key: 'rides', label: 'Recent Rides' },
              { key: 'upcoming', label: 'Upcoming' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.key
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Rides List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 mb-8"
        >
          {(activeTab === 'rides' ? recentRides : upcomingRides).map((ride, index) => (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span className="text-white font-medium">{ride.from}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="h-4 w-4 text-red-400" />
                      <span className="text-white font-medium">{ride.to}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{ride.date} • {ride.time}</span>
                      </span>
                      <span>Driver: {ride.driver}</span>
                      {ride.duration && <span>Duration: {ride.duration}</span>}
                      {ride.eta && <span className="text-green-400">ETA: {ride.eta}</span>}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  {ride.rating && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white font-medium">{ride.rating}</span>
                    </div>
                  )}
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">₹{ride.fare}</div>
                    <div className={`text-sm px-3 py-1 rounded-full font-medium ${
                      ride.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {ride.status}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-card rounded-2xl p-8 text-center mb-8"
        >
          <div className="bg-gradient-to-r from-yellow-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Star className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Eco Warrior Achievement Unlocked! 🌱
          </h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            You've saved 2.5 kg of CO2 emissions this month by carpooling. Keep up the great work in making our campus greener!
          </p>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">2.5kg</div>
              <div className="text-white/60 text-sm">CO2 Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">8</div>
              <div className="text-white/60 text-sm">Rides This Month</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">12</div>
              <div className="text-white/60 text-sm">New Friends</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard