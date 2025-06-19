import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { Icon, LatLngExpression } from 'leaflet'
import { motion } from 'framer-motion'
import { Navigation, MapPin, Car, Clock } from 'lucide-react'
import 'leaflet/dist/leaflet.css'

// Fix for default markers in react-leaflet
delete (Icon.Default.prototype as any)._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

interface MapComponentProps {
  pickup?: LatLngExpression
  destination?: LatLngExpression
  currentLocation?: LatLngExpression
  showRoute?: boolean
  height?: string
  className?: string
}

const MapComponent: React.FC<MapComponentProps> = ({
  pickup = [12.9716, 80.2594], // LICET Campus coordinates
  destination = [13.0827, 80.2707], // T. Nagar coordinates
  currentLocation,
  showRoute = true,
  height = "400px",
  className = ""
}) => {
  const [routeCoordinates, setRouteCoordinates] = useState<LatLngExpression[]>([])

  // Custom icons
  const pickupIcon = new Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxIDEwQzIxIDEwIDIxIDEwIDIxIDEwQzIxIDEwIDIxIDEwIDIxIDEwWiIgZmlsbD0iIzEwQjk4MSIvPgo8cGF0aCBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOUM1IDEwLjc0IDUuNSAxMi4zNyA2LjYxIDEzLjc0TDEyIDIyTDE3LjM5IDEzLjc0QzE4LjUgMTIuMzcgMTkgMTAuNzQgMTkgOUMxOSA1LjEzIDE1Ljg3IDIgMTIgMlpNMTIgMTEuNUMxMC42MiAxMS41IDkuNSAxMC4zOCA5LjUgOUM5LjUgNy42MiAxMC42MiA2LjUgMTIgNi41QzEzLjM4IDYuNSAxNC41IDcuNjIgMTQuNSA5QzE0LjUgMTAuMzggMTMuMzggMTEuNSAxMiAxMS41WiIgZmlsbD0iIzEwQjk4MSIvPgo8L3N2Zz4K',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })

  const destinationIcon = new Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDOC4xMyAyIDUgNS4xMyA1IDlDNSAxMC43NCA1LjUgMTIuMzcgNi42MSAxMy43NEwxMiAyMkwxNy4zOSAxMy43NEMxOC41IDEyLjM3IDE5IDEwLjc0IDE5IDlDMTkgNS4xMyAxNS44NyAyIDEyIDJaTTEyIDExLjVDMTAuNjIgMTEuNSA5LjUgMTAuMzggOS41IDlDOS41IDcuNjIgMTAuNjIgNi41IDEyIDYuNUMxMy4zOCA2LjUgMTQuNSA3LjYyIDE0LjUgOUMxNC41IDEwLjM4IDEzLjM4IDExLjUgMTIgMTEuNVoiIGZpbGw9IiNFRjQ0NDQiLz4KPC9zdmc+',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  })

  const carIcon = new Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjkyIDYuMDFDMTguNzIgNS40MiAxOC4xNiA1IDE3LjUgNUg2LjVDNS44NCA1IDUuMjggNS40MiA1LjA4IDYuMDFMMyAxMlYyMEMzIDIwLjU1IDMuNDUgMjEgNCAyMUg1QzUuNTUgMjEgNiAyMC41NSA2IDIwVjE5SDE4VjIwQzE4IDIwLjU1IDE4LjQ1IDIxIDE5IDIxSDIwQzIwLjU1IDIxIDIxIDIwLjU1IDIxIDIwVjEyTDE4LjkyIDYuMDFaTTYuNSAxNkM1LjY3IDE2IDUgMTUuMzMgNSAxNC41UzUuNjcgMTMgNi41IDEzUzcuNSAxMy42NyA3LjUgMTQuNVM2LjgzIDE2IDYuNSAxNlpNMTcuNSAxNkMxNi42NyAxNiAxNiAxNS4zMyAxNiAxNC41UzE2LjY3IDEzIDE3LjUgMTNTMTkgMTMuNjcgMTkgMTQuNVMxOC4zMyAxNiAxNy41IDE2Wk01LjgxIDEyTDcuNSA3SDE2LjVMMTguMTkgMTJINS44MVoiIGZpbGw9IiMzQjgyRjYiLz4KPC9zdmc+',
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14]
  })

  useEffect(() => {
    // Simulate route calculation
    if (showRoute) {
      const route: LatLngExpression[] = [
        pickup,
        [12.9750, 80.2650],
        [12.9800, 80.2680],
        [13.0200, 80.2700],
        [13.0500, 80.2705],
        destination
      ]
      setRouteCoordinates(route)
    }
  }, [pickup, destination, showRoute])

  const center: LatLngExpression = [
    ((pickup as number[])[0] + (destination as number[])[0]) / 2,
    ((pickup as number[])[1] + (destination as number[])[1]) / 2
  ]

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
        <Marker position={pickup} icon={pickupIcon}>
          <Popup>
            <div className="text-center">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span className="font-semibold">Pickup Point</span>
              </div>
              <p className="text-sm text-gray-600">LICET Campus Gate</p>
            </div>
          </Popup>
        </Marker>

        {/* Destination Marker */}
        <Marker position={destination} icon={destinationIcon}>
          <Popup>
            <div className="text-center">
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
          <Marker position={currentLocation} icon={carIcon}>
            <Popup>
              <div className="text-center">
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
        {showRoute && routeCoordinates.length > 0 && (
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
            <div>
              <span>12.5 km</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MapComponent