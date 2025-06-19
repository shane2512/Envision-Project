import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navigation, MapPin, Clock, Phone, MessageCircle, Star, Car, Shield } from 'lucide-react'
import Navbar from '../components/Navbar'

const RideTracking = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const rideDetails = {
    id: 'RIDE-001',
    driver: {
      name: 'Rahul Kumar',
      rating: 4.8,
      phone: '+91 98765 43210',
      car: 'Honda City - White',
      plateNumber: 'TN 01 AB 1234'
    },
    route: {
      from: 'LICET Campus Gate',
      to: 'T. Nagar Metro Station',
      distance: '12.5 km',
      estimatedTime: '25 mins'
    },
    status: 'On the way',
    eta: '3 minutes',
    fare: 45,
    passengers: 2
  }

  const trackingSteps = [
    { status: 'Ride Booked', time: '08:15 AM', completed: true },
    { status: 'Driver Confirmed', time: '08:16 AM', completed: true },
    { status: 'Driver En Route', time: '08:25 AM', completed: true },
    { status: 'Driver Arrived', time: 'ETA 3 mins', completed: false },
    { status: 'Trip Started', time: 'Pending', completed: false },
    { status: 'Trip Completed', time: 'Pending', completed: false }
  ]

  return (
    <div className="min-h-screen">
      <Navbar isLoggedIn={true} />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
            Track Your Ride
          </h1>
          <p className="text-white/60">Real-time updates for your journey</p>
        </motion.div>

        {/* Live Status Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card rounded-3xl p-8 mb-8 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg pulse-ring">
              <Car className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{rideDetails.status}</h2>
            <p className="text-green-400 text-lg font-semibold">ETA: {rideDetails.eta}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Navigation className="h-5 w-5 mr-2 text-blue-400" />
                Route Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium">{rideDetails.route.from}</p>
                    <p className="text-white/60 text-sm">Pickup Point</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-green-400 to-red-400 ml-2"></div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  <div>
                    <p className="text-white font-medium">{rideDetails.route.to}</p>
                    <p className="text-white/60 text-sm">Destination</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-white/60 text-sm">
                <span>{rideDetails.route.distance}</span>
                <span>{rideDetails.route.estimatedTime}</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Car className="h-5 w-5 mr-2 text-purple-400" />
                Driver Details
              </h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {rideDetails.driver.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-medium">{rideDetails.driver.name}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white/80">{rideDetails.driver.rating}</span>
                    <Shield className="h-4 w-4 text-green-400 ml-2" />
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-white/60">
                  <span className="text-white">Car:</span> {rideDetails.driver.car}
                </p>
                <p className="text-white/60">
                  <span className="text-white">Plate:</span> {rideDetails.driver.plateNumber}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 mb-8"
        >
          <button className="glass-card rounded-2xl p-4 card-hover flex items-center justify-center space-x-3">
            <Phone className="h-5 w-5 text-green-400" />
            <span className="text-white font-medium">Call Driver</span>
          </button>
          <button className="glass-card rounded-2xl p-4 card-hover flex items-center justify-center space-x-3">
            <MessageCircle className="h-5 w-5 text-blue-400" />
            <span className="text-white font-medium">Message</span>
          </button>
        </motion.div>

        {/* Tracking Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card rounded-2xl p-6 mb-8 shadow-xl"
        >
          <h3 className="text-white font-semibold mb-6 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-orange-400" />
            Ride Timeline
          </h3>
          <div className="space-y-4">
            {trackingSteps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-4 h-4 rounded-full ${
                  step.completed ? 'bg-green-400' : 'bg-white/20'
                }`}></div>
                <div className="flex-1 flex items-center justify-between">
                  <span className={`${
                    step.completed ? 'text-white' : 'text-white/60'
                  } font-medium`}>
                    {step.status}
                  </span>
                  <span className="text-white/60 text-sm">{step.time}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Ride Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-white font-semibold mb-4">Ride Summary</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-white/60 text-sm">Ride ID</p>
              <p className="text-white font-medium">{rideDetails.id}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Passengers</p>
              <p className="text-white font-medium">{rideDetails.passengers} people</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Total Fare</p>
              <p className="text-white font-medium">₹{rideDetails.fare}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm">Current Time</p>
              <p className="text-white font-medium">{currentTime.toLocaleTimeString()}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RideTracking