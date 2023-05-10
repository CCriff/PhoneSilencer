// Path: src\components\AddSilentZone\AddLocationButton.tsx
import { LocationObject } from 'expo-location'
import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

import * as LocationService from '../../services/LocationService'
import { useSilentZoneContext } from '../../types/Contexts/SilentZoneContext'

import { AddLocationButtonStyles } from './AddLocationButton.styles'

interface AddLocationButtonProps {
  location: LocationObject
  addLocation: (newAddress: string) => void
}

const AddLocationButton: React.FC<AddLocationButtonProps> = ({ location, addLocation }) => {
  const { addSilentZone } = useSilentZoneContext()
  const [name, setName] = useState('')
  const [zoneCounter, setZoneCounter] = useState(1)

  const handlePress = async () => {
    try {
      const address = await LocationService.getAddressFromLocation(
        location.coords.latitude,
        location.coords.longitude
      )
      addLocation(address)

      const newSilentZone = {
        id: Date.now().toString(),
        name: name || `Silent Zone ${zoneCounter}`, // Add a name for the new silent zone
        address,
        radius: 100, // Set default radius (e.g., 100 meters), adjust as needed
        silentModeType: 'Silent', // Set default silent mode type
        isActive: true, // Set default active state
        coordinates: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude
        }
      }

      addSilentZone(newSilentZone)
      if (!name) {
        setZoneCounter(zoneCounter + 1)
      }
      setName('')
    } catch (error) {
      console.error('Error getting address from location:', error)
      alert('Unable to fetch address from location')
    }
  }

  return (
    <TouchableOpacity onPress={handlePress} style={AddLocationButtonStyles.container}>
      <Text style={AddLocationButtonStyles.text}>Use Current Location</Text>
    </TouchableOpacity>
  )
}

export default AddLocationButton
