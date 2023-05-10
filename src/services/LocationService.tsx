// Path: src\services\LocationService.tsx
// LocationService.tsx
import * as Location from 'expo-location'
import { LocationAccuracy, LocationObject, LocationOptions } from 'expo-location'
import * as TaskManager from 'expo-task-manager'

import { SilentZoneInterface } from '../types/Interfaces/SilentZoneInterface'

type GeofenceRegion = {
  identifier: string
  latitude: number
  longitude: number
  radius: number
}

export const defineGeofenceTask = (silentZones: SilentZoneInterface[]) => {
  TaskManager.defineTask('LOCATION_GEOFENCE', ({ data, error }) => {
    if (error) {
      console.error('Error in LOCATION_GEOFENCE task:', error.message)
      return
    }

    try {
      const { eventType, region } = data as {
        eventType: Location.GeofencingEventType
        region: GeofenceRegion
      }
      const silentZone = silentZones.find((zone) => zone.id === region.identifier)

      if (!silentZone) return

      if (eventType === Location.GeofencingEventType.Enter) {
        console.log("You've Entered Silent Zone:", silentZone)
      } else if (eventType === Location.GeofencingEventType.Exit) {
        console.log("You've Left Silent Zone:", silentZone)
      }
    } catch (error) {
      console.error('Error processing LOCATION_GEOFENCE task data:', error)
    }
  })
}

export const startGeofencingAsync = async (silentZones: SilentZoneInterface[]) => {
  try {
    const regions = silentZones.map((zone) => ({
      identifier: zone.id,
      latitude: zone.coordinates.latitude,
      longitude: zone.coordinates.longitude,
      radius: zone.radius
    }))

    await Location.startGeofencingAsync('LOCATION_GEOFENCE', regions)
  } catch (error) {
    console.error('Error starting geofencing:', error)
  }
}

export const getCurrentLocation = async (timeout = 10000): Promise<Location.LocationObject> => {
  const hasPermission = await getLocationPermission()

  if (!hasPermission) {
    throw new Error('Location permission not granted')
  }

  return await Promise.race([
    Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High
    }),
    new Promise<Location.LocationObject>((_, reject) =>
      setTimeout(() => reject(new Error('Location request timed out')), timeout)
    )
  ])
}

export const getLocationPermission = async (): Promise<boolean> => {
  try {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      console.log('Permission to access location was denied')
      return false
    }
    return true
  } catch (error) {
    console.error('Error requesting location permissions:', error)
    return false
  }
}

export const getAddressFromLocation = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  try {
    const [loc] = await Location.reverseGeocodeAsync({ latitude, longitude })
    return `${loc?.street}, ${loc?.city}, ${loc?.region}, ${loc?.postalCode}`
  } catch (error) {
    console.error('Error fetching address:', error)
    return 'Unknown address'
  }
}

export const startBackgroundLocationTracking = async (): Promise<void> => {
  const hasPermission = await getLocationPermission()

  if (!hasPermission) {
    throw new Error('Location permission not granted')
  }

  await Location.startLocationUpdatesAsync('backgroundLocationTask', {
    accuracy: Location.Accuracy.High,
    timeInterval: 1000, // Update interval in milliseconds, adjust as needed
    distanceInterval: 10, // Update distance in meters, adjust as needed
    showsBackgroundLocationIndicator: true
  })
}

export const stopBackgroundLocationTracking = async (): Promise<void> => {
  await Location.stopLocationUpdatesAsync('backgroundLocationTask')
}

export const watchLocation = async (
  onLocationUpdate: (location: LocationObject) => void,
  options?: LocationOptions // Add the options parameter
): Promise<() => void> => {
  const hasPermission = await getLocationPermission()

  if (!hasPermission) {
    throw new Error('Location permission not granted')
  }

  const subscriber = await Location.watchPositionAsync(
    {
      ...options, // Spread the options object
      accuracy: Location.Accuracy.High,
      timeInterval: 1000, // Update interval in milliseconds, adjust as needed
      distanceInterval: 10 // Update distance in meters, adjust as needed
    },
    onLocationUpdate
  )

  return subscriber.remove // Return a function to unsubscribe from the location updates
}
