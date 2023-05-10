// useLocation.ts hook
// Path: src\hooks\useLocation.ts
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'

interface LocationData {
  latitude: number
  longitude: number
}

const useLocation = (): LocationData | null => {
  const [location, setLocation] = useState<LocationData | null>(null)

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync()

        if (status !== 'granted') {
          console.error('Permission to access location was denied')
          return
        }

        const locationResult = await Location.getCurrentPositionAsync({})
        setLocation({
          latitude: locationResult.coords.latitude,
          longitude: locationResult.coords.longitude
        })
      } catch (error) {
        console.error('Error fetching location:', error)
      }
    }

    getCurrentLocation()
  }, [])

  return location
}

export default useLocation
