import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation, MapPin, Car, Clock, Zap, Users } from 'lucide-react'

interface MapComponentProps {
  pickup?: [number, number]
  destination?: [number, number]
  currentLocation?: [number, number]
  showRoute?: boolean
  height?: string
  className?: string
  driverLocation?: [number, number]
  waypoints?: [number, number][]
}

const MapComponent: React.FC<MapComponentProps> = ({
  pickup = [12.9716, 80.2594],
  destination = [13.0827, 80.2707],
  currentLocation,
  showRoute = true,
  height = "400px",
  className = "",
  driverLocation,
  waypoints = []
}) => {
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapComponents, setMapComponents] = useState<any>(null)

  useEffect(() => {
    let isMounted = true

    const loadMap = async () => {
      try {
        // Check if we're in the browser
        if (typeof window === 'undefined') return

        const [leaflet, reactLeaflet] = await Promise.all([
          import('leaflet'),
          import('react-leaflet')
        ])
        
        if (!isMounted) return

        // Fix for default markers
        const L = leaflet.default || leaflet
        if (L.Icon && L.Icon.Default) {
          delete (L.Icon.Default.prototype as any)._getIconUrl
          L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
          })
        }

        setMapComponents({
          L,
          MapContainer: reactLeaflet.MapContainer,
          TileLayer: reactLeaflet.TileLayer,
          Marker: reactLeaflet.Marker,
          Popup: reactLeaflet.Popup,
          Polyline: reactLeaflet.Polyline
        })
        setMapLoaded(true)
      } catch (error) {
        console.error('Failed to load map:', error)
        if (isMounted) {
          setMapLoaded(false)
        }
      }
    }

    loadMap()

    return () => {
      isMounted = false
    }
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

  const createCustomIcon = (iconType: 'pickup' | 'destination' | 'car' | 'driver' | 'waypoint') => {
    if (!mapComponents?.L) return null
    
    const iconConfigs = {
      pickup: {
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiMxMEI5ODEiLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJtMyAxMSAzLTMgMy0zIDMgMyAzIDMiLz4KPHN2Zz4KPC9zdmc+',
        iconSize: [40, 40] as [number, number],
        iconAnchor: [20, 40] as [number, number],
        popupAnchor: [0, -40] as [number, number]
      },
      destination: {
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNEQzI2MjYiLz4KPHN2ZyB4PSIxMiIgeT0iMTIiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJtMyAxMSAzLTMgMy0zIDMgMyAzIDMiLz4KPHN2Zz4KPC9zdmc+',
        iconSize: [40, 40] as [number, number],
        iconAnchor: [20, 40] as [number, number],
        popupAnchor: [0, -40] as [number, number]
      },
      car: {
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiMzQjgyRjYiLz4KPHN2ZyB4PSIxNiIgeT0iMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNNSAxMmgtMmEyIDIgMCAwIDAtMiAydjZhMiAyIDAgMCAwIDIgMmgxNmEyIDIgMCAwIDAgMi0ydi02YTIgMiAwIDAgMC0yLTJoLTJsLTMtNkg4bC0zIDZ6Ii8+CjxjaXJjbGUgY3g9IjciIGN5PSIxNyIgcj0iMiIvPgo8Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiByPSIyIi8+Cjwvc3ZnPgo8L3N2Zz4=',
        iconSize: [48, 48] as [number, number],
        iconAnchor: [24, 24] as [number, number],
        popupAnchor: [0, -24] as [number, number]
      },
      driver: {
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCA0NCA0NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjIiIGN5PSIyMiIgcj0iMjIiIGZpbGw9IiM4QjVDRjYiLz4KPHN2ZyB4PSIxNCIgeT0iMTQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMjAgMjF2LTJhNCA0IDAgMCAwLTQtNEg4YTQgNCAwIDAgMC00IDR2MiIvPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiLz4KPC9zdmc+Cjwvc3ZnPg==',
        iconSize: [44, 44] as [number, number],
        iconAnchor: [22, 22] as [number, number],
        popupAnchor: [0, -22] as [number, number]
      },
      waypoint: {
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9IiNGNTk3MzEiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+',
        iconSize: [24, 24] as [number, number],
        iconAnchor: [12, 12] as [number, number],
        popupAnchor: [0, -12] as [number, number]
      }
    }

    const config = iconConfigs[iconType]
    
    return new mapComponents.L.Icon({
      iconUrl: config.iconUrl,
      iconSize: config.iconSize,
      iconAnchor: config.iconAnchor,
      popupAnchor: config.popupAnchor,
      className: `custom-marker-${iconType}`
    })
  }

  if (!mapLoaded || !mapComponents) {
    return (
      <div className={`relative ${className} flex items-center justify-center bg-slate-800/50 rounded-xl`} style={{ height }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60">Loading interactive map...</p>
        </motion.div>
      </div>
    )
  }

  const { MapContainer, TileLayer, Marker, Popup, Polyline } = mapComponents

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
        
        <Marker position={pickup} icon={createCustomIcon('pickup')}>
          <Popup className="custom-popup">
            <div className="text-center p-3">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-800">Pickup Point</span>
              </div>
              <p className="text-gray-600 font-medium">LICET Campus Gate</p>
              <p className="text-sm text-gray-500 mt-1">Main entrance near security</p>
              <div className="mt-3 flex items-center justify-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-gray-600">Departure: 8:30 AM</span>
              </div>
            </div>
          </Popup>
        </Marker>

        <Marker position={destination} icon={createCustomIcon('destination')}>
          <Popup className="custom-popup">
            <div className="text-center p-3">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-800">Destination</span>
              </div>
              <p className="text-gray-600 font-medium">T. Nagar Metro Station</p>
              <p className="text-sm text-gray-500 mt-1">Platform entrance A</p>
              <div className="mt-3 flex items-center justify-center space-x-2 text-sm">
                <Clock className="h-4 w-4 text-blue-500" />
                <span className="text-gray-600">Arrival: 9:15 AM</span>
              </div>
            </div>
          </Popup>
        </Marker>

        {currentLocation && (
          <Marker position={currentLocation} icon={createCustomIcon('car')}>
            <Popup className="custom-popup">
              <div className="text-center p-3">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                    <Car className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-lg text-gray-800">Your Ride</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Driver:</span>
                    <span className="font-medium text-gray-800">Rahul Kumar</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Car:</span>
                    <span className="font-medium text-gray-800">Honda City</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">ETA:</span>
                    <span className="font-bold text-green-600">3 minutes</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600 font-medium">Live tracking</span>
                </div>
              </div>
            </Popup>
          </Marker>
        )}

        {driverLocation && (
          <Marker position={driverLocation} icon={createCustomIcon('driver')}>
            <Popup className="custom-popup">
              <div className="text-center p-3">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-lg text-gray-800">Driver Location</span>
                </div>
                <p className="text-gray-600 font-medium">Rahul Kumar</p>
                <p className="text-sm text-gray-500 mt-1">Verified LICET Student</p>
                <div className="mt-3 flex items-center justify-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">4.8 ★</span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">45 rides</span>
                </div>
              </div>
            </Popup>
          </Marker>
        )}

        {waypoints.map((waypoint, index) => (
          <Marker key={index} position={waypoint} icon={createCustomIcon('waypoint')}>
            <Popup className="custom-popup">
              <div className="text-center p-2">
                <span className="font-medium text-gray-800">Waypoint {index + 1}</span>
                <p className="text-sm text-gray-500">Route checkpoint</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {showRoute && Polyline && (
          <>
            <Polyline
              positions={routeCoordinates}
              color="#3B82F6"
              weight={6}
              opacity={0.8}
            />
            <Polyline
              positions={routeCoordinates}
              color="#60A5FA"
              weight={3}
              opacity={0.6}
              dashArray="10, 15"
              className="animate-pulse"
            />
          </>
        )}
      </MapContainer>

      <div className="absolute top-4 left-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-xl p-3 shadow-lg"
        >
          <div className="flex items-center space-x-2 text-white text-sm">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <Navigation className="h-4 w-4 text-blue-400" />
            <span>Live Tracking Active</span>
          </div>
        </motion.div>
      </div>

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

      <div className="absolute top-4 right-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl p-3 shadow-lg"
        >
          <div className="space-y-2 text-xs text-white">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>Pickup</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span>Drop-off</span>
            </div>
            {currentLocation && (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                <span>Live Car</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MapComponent