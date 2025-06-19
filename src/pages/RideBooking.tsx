import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Star, Filter, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

const RideBooking = () => {
  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    date: '',
    time: ''
  })

  const availableRides = [
    {
      id: 1,
      driver: 'Rahul Kumar',
      rating: 4.8,
      reviews: 45,
      from: 'LICET Campus',
      to: 'T. Nagar',
      departureTime: '08:30 AM',
      arrivalTime: '09:15 AM',
      availableSeats: 3,
      fare: 45,
      carModel: 'Honda City',
      verified: true
    },
    {
      id: 2,
      driver: 'Priya Sharma',
      rating: 4.9,
      reviews: 67,
      from: 'LICET Campus',
      to: 'Anna Nagar',
      departureTime: '07:45 AM',
      arrivalTime: '08:30 AM',
      availableSeats: 2,
      fare: 50,
      carModel: 'Maruti Swift',
      verified: true
    },
    {
      id: 3,
      driver: 'Arjun Patel',
      rating: 4.7,
      reviews: 32,
      from: 'LICET Campus',
      to: 'Kodambakkam',
      departureTime: '05:30 PM',
      arrivalTime: '06:20 PM',
      availableSeats: 4,
      fare: 40,
      carModel: 'Hyundai i20',
      verified: true
    }
  ]

  const locations = [
    'LICET Campus',
    'T. Nagar',
    'Anna Nagar',
    'Kodambakkam',
    'Nungambakkam',
    'Chengalpattu'
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
  }

  const handleBookRide = (rideId: number) => {
    // Handle booking logic
    console.log('Booking ride:', rideId)
  }

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
            Find Your Perfect Ride
          </h1>
          <p className="text-white/60">Connect with fellow students for safe and affordable rides</p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-effect rounded-2xl p-6 mb-8"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">From</label>
              <select
                value={searchForm.from}
                onChange={(e) => setSearchForm({...searchForm, from: e.target.value})}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select pickup</option>
                {locations.map((location) => (
                  <option key={location} value={location} className="text-gray-900">
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">To</label>
              <select
                value={searchForm.to}
                onChange={(e) => setSearchForm({...searchForm, to: e.target.value})}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select destination</option>
                {locations.map((location) => (
                  <option key={location} value={location} className="text-gray-900">
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Date</label>
              <input
                type="date"
                value={searchForm.date}
                onChange={(e) => setSearchForm({...searchForm, date: e.target.value})}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Time</label>
              <input
                type="time"
                value={searchForm.time}
                onChange={(e) => setSearchForm({...searchForm, time: e.target.value})}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Search Rides
              </button>
            </div>
          </form>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="text-xl font-semibold text-white">Available Rides</h2>
          <button className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </motion.div>

        {/* Rides List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          {availableRides.map((ride, index) => (
            <motion.div
              key={ride.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 card-hover"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {ride.driver.charAt(0)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-white font-semibold">{ride.driver}</h3>
                      {ride.verified && (
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-white/60 text-sm mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span>{ride.rating}</span>
                        <span>({ride.reviews} reviews)</span>
                      </div>
                      <span>{ride.carModel}</span>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-green-400" />
                        <span className="text-white text-sm">{ride.from}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-white/40" />
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-red-400" />
                        <span className="text-white text-sm">{ride.to}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 mt-2 text-white/60 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{ride.departureTime} - {ride.arrivalTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{ride.availableSeats} seats available</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">₹{ride.fare}</div>
                    <div className="text-white/60 text-sm">per person</div>
                  </div>
                  
                  <button
                    onClick={() => handleBookRide(ride.id)}
                    className="btn-primary"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Offer Ride Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 glass-effect rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Don't see a ride that fits your schedule?
          </h3>
          <p className="text-white/60 mb-6">
            Offer your own ride and help fellow students while earning money
          </p>
          <button className="btn-primary">
            Offer a Ride
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default RideBooking