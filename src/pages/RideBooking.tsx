import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Star, Filter, ArrowRight, Car, Shield, Zap, Navigation } from 'lucide-react'
import Navbar from '../components/Navbar'
import MapComponent from '../components/MapComponent'

const RideBooking = () => {
  const [searchForm, setSearchForm] = useState({
    from: '',
    to: '',
    date: '',
    time: ''
  })

  const [selectedRide, setSelectedRide] = useState<number | null>(null)
  const [showMap, setShowMap] = useState(false)

  const availableRides = [
    {
      id: 1,
      driver: 'Rahul Kumar',
      rating: 4.8,
      reviews: 45,
      from: 'LICET Campus',
      to: 'T. Nagar Metro',
      departureTime: '08:30 AM',
      arrivalTime: '09:15 AM',
      availableSeats: 3,
      fare: 45,
      carModel: 'Honda City',
      carColor: 'White',
      verified: true,
      features: ['AC', 'Music', 'WiFi'],
      distance: '12.5 km',
      duration: '25 mins',
      pickup: [12.9716, 80.2594] as [number, number],
      destination: [13.0827, 80.2707] as [number, number]
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
      carColor: 'Red',
      verified: true,
      features: ['AC', 'Music'],
      distance: '15.2 km',
      duration: '30 mins',
      pickup: [12.9716, 80.2594] as [number, number],
      destination: [13.0878, 80.2785] as [number, number]
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
      carColor: 'Blue',
      verified: true,
      features: ['AC', 'Music', 'Phone Charger'],
      distance: '10.8 km',
      duration: '35 mins',
      pickup: [12.9716, 80.2594] as [number, number],
      destination: [13.0522, 80.2437] as [number, number]
    }
  ]

  const locations = [
    'LICET Campus',
    'T. Nagar Metro',
    'Anna Nagar',
    'Kodambakkam',
    'Nungambakkam',
    'Chengalpattu',
    'Tambaram',
    'Velachery'
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic
  }

  const handleBookRide = (rideId: number) => {
    setSelectedRide(rideId)
    // Handle booking logic
    console.log('Booking ride:', rideId)
  }

  const selectedRideData = availableRides.find(ride => ride.id === selectedRide)

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
          className="glass-card rounded-2xl p-6 mb-8 shadow-2xl"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">From</label>
              <select
                value={searchForm.from}
                onChange={(e) => setSearchForm({...searchForm, from: e.target.value})}
                className="input-field"
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
                className="input-field"
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
                className="input-field"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Time</label>
              <input
                type="time"
                value={searchForm.time}
                onChange={(e) => setSearchForm({...searchForm, time: e.target.value})}
                className="input-field"
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rides List */}
          <div className="lg:col-span-2">
            {/* Filters and Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-between mb-6"
            >
              <div>
                <h2 className="text-xl font-semibold text-white">Available Rides</h2>
                <p className="text-white/60 text-sm">{availableRides.length} rides found</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowMap(!showMap)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    showMap ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white bg-white/10'
                  }`}
                >
                  <Navigation className="h-4 w-4" />
                  <span>Map View</span>
                </button>
                <button className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors btn-ghost">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </button>
              </div>
            </motion.div>

            {/* Rides List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              {availableRides.map((ride, index) => (
                <motion.div
                  key={ride.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass-card rounded-2xl p-6 card-hover transition-all cursor-pointer ${
                    selectedRide === ride.id ? 'ring-2 ring-blue-500 bg-blue-500/10' : ''
                  }`}
                  onClick={() => setSelectedRide(ride.id)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold shadow-lg">
                        {ride.driver.charAt(0)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-white font-semibold">{ride.driver}</h3>
                          {ride.verified && (
                            <div className="flex items-center space-x-1 bg-green-500/20 px-2 py-1 rounded-full">
                              <Shield className="w-3 h-3 text-green-400" />
                              <span className="text-green-400 text-xs font-medium">Verified</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-white/60 text-sm mb-3">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-white">{ride.rating}</span>
                            <span>({ride.reviews})</span>
                          </div>
                          <span>{ride.carModel} • {ride.carColor}</span>
                        </div>
                        
                        <div className="flex items-center space-x-6 mb-3">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-green-400" />
                            <span className="text-white text-sm font-medium">{ride.from}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 text-white/40" />
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-red-400" />
                            <span className="text-white text-sm font-medium">{ride.to}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-white/60 text-sm mb-3">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{ride.departureTime} - {ride.arrivalTime}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{ride.availableSeats} seats</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Zap className="h-4 w-4" />
                            <span>{ride.distance} • {ride.duration}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          {ride.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">₹{ride.fare}</div>
                        <div className="text-white/60 text-sm">per person</div>
                        <div className="text-green-400 text-sm font-medium">Save ₹{Math.round(ride.fare * 0.3)}</div>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleBookRide(ride.id)
                        }}
                        className={`btn-primary px-6 py-2 ${
                          selectedRide === ride.id ? 'bg-green-600 hover:bg-green-700' : ''
                        }`}
                      >
                        {selectedRide === ride.id ? 'Selected' : 'Book Now'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Map/Details Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="sticky top-24"
            >
              {showMap && selectedRideData ? (
                <div className="glass-card rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">Route Preview</h3>
                    <div className="text-white/60 text-sm">{selectedRideData.distance}</div>
                  </div>
                  <MapComponent
                    pickup={selectedRideData.pickup}
                    destination={selectedRideData.destination}
                    showRoute={true}
                    height="300px"
                    className="rounded-xl overflow-hidden mb-4"
                  />
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Driver</span>
                      <span className="text-white font-medium">{selectedRideData.driver}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Duration</span>
                      <span className="text-white font-medium">{selectedRideData.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Fare</span>
                      <span className="text-white font-medium">₹{selectedRideData.fare}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="glass-card rounded-2xl p-6 shadow-2xl">
                  <h3 className="text-white font-semibold mb-4">Quick Tips</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <Shield className="h-3 w-3 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Verified Drivers</p>
                        <p className="text-white/60 text-xs">All drivers are verified LICET students</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <Star className="h-3 w-3 text-green-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Rated Rides</p>
                        <p className="text-white/60 text-xs">Check ratings before booking</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-0.5">
                        <Navigation className="h-3 w-3 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">Live Tracking</p>
                        <p className="text-white/60 text-xs">Track your ride in real-time</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Offer Ride Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 glass-card rounded-2xl p-8 text-center shadow-2xl"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Car className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Don't see a ride that fits your schedule?
          </h3>
          <p className="text-white/60 mb-6 max-w-2xl mx-auto">
            Offer your own ride and help fellow students while earning money. It's easy, safe, and rewarding!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Offer a Ride
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RideBooking