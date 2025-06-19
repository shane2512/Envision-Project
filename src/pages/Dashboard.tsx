import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Car, MapPin, Clock, Star, Plus, Filter, Search } from 'lucide-react'
import Navbar from '../components/Navbar'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('rides')

  const recentRides = [
    {
      id: 1,
      from: 'LICET Campus',
      to: 'T. Nagar',
      date: '2024-01-15',
      time: '08:30 AM',
      driver: 'Rahul Kumar',
      rating: 4.8,
      fare: 45,
      status: 'completed'
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
      status: 'completed'
    }
  ]

  const upcomingRides = [
    {
      id: 3,
      from: 'LICET Campus',
      to: 'Kodambakkam',
      date: '2024-01-16',
      time: '05:30 PM',
      driver: 'Arjun Patel',
      fare: 40,
      status: 'confirmed'
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
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Welcome back, Student!
          </h1>
          <p className="text-white/60">Manage your rides and explore new destinations</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: 'Total Rides', value: '24', icon: Car },
            { label: 'Money Saved', value: '₹1,200', icon: Star },
            { label: 'This Month', value: '8', icon: Clock },
            { label: 'Rating', value: '4.9', icon: Star }
          ].map((stat, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div className="glass-effect rounded-2xl p-6 card-hover cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 p-4 rounded-xl">
                <Search className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Find a Ride</h3>
                <p className="text-white/60">Search for available rides to your destination</p>
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-2xl p-6 card-hover cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-4 rounded-xl">
                <Plus className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Offer a Ride</h3>
                <p className="text-white/60">Share your ride and earn money</p>
              </div>
            </div>
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
            {['rides', 'upcoming'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-white text-gray-900'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab === 'rides' ? 'Recent Rides' : 'Upcoming'}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Rides List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          {(activeTab === 'rides' ? recentRides : upcomingRides).map((ride) => (
            <div key={ride.id} className="glass-effect rounded-2xl p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                    <Car className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-green-400" />
                      <span className="text-white font-medium">{ride.from}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-red-400" />
                      <span className="text-white font-medium">{ride.to}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-white/60 text-sm">
                      <span>{ride.date}</span>
                      <span>{ride.time}</span>
                      <span>Driver: {ride.driver}</span>
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
                    <div className={`text-sm px-3 py-1 rounded-full ${
                      ride.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {ride.status}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard