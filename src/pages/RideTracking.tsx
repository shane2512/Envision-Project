import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navigation, MapPin, Clock, Phone, MessageCircle, Star, Car, Shield, Zap } from 'lucide-react'
import Navbar from '../components/Navbar'
import MapComponent from '../components/MapComponent'

const RideTracking = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([12.9750, 80.2650])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Simulate car movement
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setCurrentLocation(prev => [
        prev[0] + (Math.random() - 0.5) * 0.001,
        prev[1] + (Math.random() - 0.5) * 0.001
      ])
    }, 3000)

    return () => clearInterval(moveInterval)
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
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <div className="glass-card rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">Live Location</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">Live</span>
                </div>
              </div>
              <MapComponent
                pickup={[12.9716, 80.2594]}
                destination={[13.0827, 80.2707]}
                currentLocation={currentLocation}
                showRoute={true}
                height="500px"
                className="rounded-xl overflow-hidden"
              />
            </div>
          </motion.div>

          {/* Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Live Status Card */}
            <div className="glass-card rounded-2xl p-6 shadow-2xl">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg pulse-ring">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{rideDetails.status}</h2>
                <p className="text-green-400 text-lg font-semibold">ETA: {rideDetails.eta}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Navigation className="h-4 w-4 mr-2 text-blue-400" />
                    Route Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <div>
                        <p className="text-white text-sm font-medium">{rideDetails.route.from}</p>
                        <p className="text-white/60 text-xs">Pickup Point</p>
                      </div>
                    </div>
                    <div className="w-px h-6 bg-gradient-to-b from-green-400 to-red-400 ml-1.5"></div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div>
                        <p className="text-white text-sm font-medium">{rideDetails.route.to}</p>
                        <p className="text-white/60 text-xs">Destination</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-white/60 text-sm">
                    <span className="flex items-center space-x-1">
                      <Zap className="h-3 w-3" />
                      <span>{rideDetails.route.distance}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{rideDetails.route.estimatedTime}</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Car className="h-4 w-4 mr-2 text-purple-400" />
                    Driver Details
                  </h4>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {rideDetails.driver.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{rideDetails.driver.name}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-white/80 text-xs">{rideDetails.driver.rating}</span>
                        <Shield className="h-3 w-3 text-green-400 ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs">
                    <p className="text-white/60">
                      <span className="text-white">Car:</span> {rideDetails.driver.car}
                    </p>
                    <p className="text-white/60">
                      <span className="text-white">Plate:</span> {rideDetails.driver.plateNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="glass-card rounded-xl p-4 card-hover flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-white font-medium text-sm">Call</span>
              </button>
              <button className="glass-card rounded-xl p-4 card-hover flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4 text-blue-400" />
                <span className="text-white font-medium text-sm">Message</span>
              </button>
            </div>

            {/* Tracking Timeline */}
            <div className="glass-card rounded-2xl p-6 shadow-xl">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Clock className="h-4 w-4 mr-2 text-orange-400" />
                Ride Timeline
              </h3>
              <div className="space-y-3">
                {trackingSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      step.completed ? 'bg-green-400' : 'bg-white/20'
                    }`}></div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className={`${
                        step.completed ? 'text-white' : 'text-white/60'
                      } font-medium text-sm`}>
                        {step.status}
                      </span>
                      <span className="text-white/60 text-xs">{step.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ride Summary */}
            <div className="glass-card rounded-2xl p-6 shadow-xl">
              <h3 className="text-white font-semibold mb-4">Ride Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 text-xs">Ride ID</p>
                  <p className="text-white font-medium text-sm">{rideDetails.id}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">Passengers</p>
                  <p className="text-white font-medium text-sm">{rideDetails.passengers} people</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">Total Fare</p>
                  <p className="text-white font-medium text-sm">₹{rideDetails.fare}</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs">Current Time</p>
                  <p className="text-white font-medium text-sm">{currentTime.toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default RideTracking