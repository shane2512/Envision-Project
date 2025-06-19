import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation, MapPin, Car, Clock, Zap } from 'lucide-react'

// Dynamic import for Leaflet to avoid SSR issues
const MapComponent: React.FC<{
  pickup?: [number, number]
  destination?: [number, number]
  currentLocation?: [number, number]
  showRoute?: boolean
  height?: string
  className?: string
}> = ({
  pickup = [12.9716, 80.2594], // LICET Campus coordinates
  destination = [13.0827, 80.2707], // T. Nagar coordinates
  currentLocation,
  showRoute = true,
  height = "400px",
  className = ""
}) => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [MapContainer, setMapContainer] = useState<any>(null)
  const [TileLayer, setTileLayer] = useState<any>(null)
  const [Marker, setMarker] = useState<any>(null)
  const [Popup, setPopup] = useState<any>(null)
  const [Polyline, setPolyline] = useState<any>(null)
  const [L, setL] = useState<any>(null)

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const loadMap = async () => {
      try {
        const leaflet = await import('leaflet')
        const reactLeaflet = await import('react-leaflet')
        
        // Fix for default markers
        delete (leaflet.Icon.Default.prototype as any)._getIconUrl
        leaflet.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        })

        setL(leaflet)
        setMapContainer(reactLeaflet.MapContainer)
        setTileLayer(reactLeaflet.TileLayer)
        setMarker(reactLeaflet.Marker)
        setPopup(reactLeaflet.Popup)
        setPolyline(reactLeaflet.Polyline)
        setMapLoaded(true)
      } catch (error) {
        console.error('Failed to load map:', error)
      }
    }

    loadMap()
  }, [])

  const routeCoordinates: [number, number][] = [
    pickup,
    [12.9750, 80.2650],
    [12.9800, 80.2680],
    [13.0200, 80.2700],
    [13.0500, 80.2705],
    destination
  ]

  const center: [number, number] = [
    (pickup[0] + destination[0]) / 2,
    (pickup[1] + destination[1]) / 2
  ]

  // Create custom icons
  const createIcon = (color: string, iconType: 'pickup' | 'destination' | 'car') => {
    if (!L) return null
    
    const iconSvg = iconType === 'pickup' 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="${color}"><path d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.61 13.74L12 22L17.39 13.74C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/></svg>`
      : iconType === 'destination'
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="${color}"><path d="M12 2C8.13 2 5 5.13 5 9C5 10.74 5.5 12.37 6.61 13.74L12 22L17.39 13.74C18.5 12.37 19 10.74 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="${color}"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13S7.5 13.67 7.5 14.5S6.83 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13S19 13.67 19 14.5S18.33 16 17.5 16ZM5.81 12L7.5 7H16.5L18.19 12H5.81Z"/></svg>`

    return new L.Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(iconSvg)}`,
      iconSize: iconType === 'car' ? [28, 28] : [32, 32],
      iconAnchor: iconType === 'car' ? [14, 14] : [16, 32],
      popupAnchor: iconType === 'car' ? [0, -14] : [0, -32]
    })
  }

  if (!mapLoaded || !MapContainer) {
    return (
      <div className={`relative ${className} flex items-center justify-center bg-slate-800/50 rounded-xl`} style={{ height }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading map...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <MapContainer
        center={center}
        zoom={12}
        style={{ height: '100%', width: '100%', borderRadius: '16px' }}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Pickup Marker */}
        <Marker position={pickup} icon={createIcon('#10B981', 'pickup')}>
          <Popup>
            <div className="text-center p-2">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="font-semibold">Pickup Point</span>
              </div>
              <p className="text-sm text-gray-600">LICET Campus Gate</p>
            </div>
          </Popup>
        </Marker>

        {/* Destination Marker */}
        <Marker position={destination} icon={createIcon('#EF4444', 'destination')}>
          <Popup>
            <div className="text-center p-2">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-red-500" />
                <span className="font-semibold">Destination</span>
              </div>
              <p className="text-sm text-gray-600">T. Nagar Metro Station</p>
            </div>
          </Popup>
        </Marker>

        {/* Current Location (Car) */}
        {currentLocation && (
          <Marker position={currentLocation} icon={createIcon('#3B82F6', 'car')}>
            <Popup>
              <div className="text-center p-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Car className="h-4 w-4 text-blue-500" />
                  <span className="font-semibold">Your Ride</span>
                </div>
                <p className="text-sm text-gray-600">Driver: Rahul Kumar</p>
                <p className="text-sm text-gray-600">ETA: 3 minutes</p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Route Polyline */}
        {showRoute && Polyline && (
          <Polyline
            positions={routeCoordinates}
            color="#3B82F6"
            weight={4}
            opacity={0.8}
            dashArray="10, 10"
          />
        )}
      </MapContainer>

      {/* Map Overlay Info */}
      <div className="absolute top-4 left-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-xl p-3 shadow-lg"
        >
          <div className="flex items-center space-x-2 text-white text-sm">
            <Navigation className="h-4 w-4 text-blue-400" />
            <span>Live Tracking</span>
          </div>
        </motion.div>
      </div>

      {/* Route Info */}
      <div className="absolute bottom-4 right-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-xl p-3 shadow-lg"
        >
          <div className="flex items-center space-x-4 text-white text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4 text-green-400" />
              <span>25 mins</span>
            </div>
            <div className="text-white/60">•</div>
            <div className="flex items-center space-x-1">
              <Zap className="h-4 w-4 text-blue-400" />
              <span>12.5 km</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MapComponent