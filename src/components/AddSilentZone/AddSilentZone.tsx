// AddSilentZone.tsx
// Path: src\components\AddSilentZone\AddSilentZone.tsx
import { Picker } from '@react-native-picker/picker'
import { LocationObject } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import Geocoder from 'react-native-geocoding'

import * as LocationService from '../../services/LocationService'
import { useSilentZoneContext } from '../../types/Contexts/SilentZoneContext'
import { SilentZoneInterface } from '../../types/Interfaces/SilentZoneInterface'

import AddLocationButton from './AddLocationButton'
import { addSilentZoneStyles } from './AddSilentZone.styles'

interface AddSilentZoneProps {}

const AddSilentZone: React.FC<AddSilentZoneProps> = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [radius, setRadius] = useState('100')
  const [silentModeType, setSilentModeType] = useState('Silent')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [zoneCounter, setZoneCounter] = useState(1)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const { addSilentZone } = useSilentZoneContext() // Import the addSilentZone function from SilentZoneContext

  const createLocationObject = (latitude: number, longitude: number): LocationObject => {
    return {
      coords: {
        latitude,
        longitude,
        altitude: null,
        accuracy: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null
      },
      timestamp: Date.now()
    }
  }
  const fetchUserLocation = async () => {
    try {
      const location = await LocationService.getCurrentLocation() // Update method call
      setLatitude(location.coords.latitude.toString())
      setLongitude(location.coords.longitude.toString())
    } catch (error) {
      setLocationError(
        'Unable to fetch location. Please ensure location services are enabled and try again.' +
          error
      )
    }
  }

  useEffect(() => {
    fetchUserLocation().then((r) => r)
  }, [])

  useEffect(() => {
    if (latitude && longitude) {
      Geocoder.init(process.env.GOOGLE_MAPS_API_KEY ?? '')
      Geocoder.from({ lat: parseFloat(latitude), lng: parseFloat(longitude) }).then((response) => {
        setAddress(response.results[0].formatted_address)
      })
    }
  }, [latitude, longitude])

  const handleSubmit = () => {
    const silentZone: SilentZoneInterface = {
      id: Date.now().toString(),
      name: name || `Silent Zone ${zoneCounter}`,
      address,
      radius: parseInt(radius, 10),
      silentModeType,
      isActive: true,
      coordinates: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude)
      }
    }

    addSilentZone(silentZone)
    if (!name) {
      setZoneCounter(zoneCounter + 1)
    }
    setName('')
  }

  const renderForm = () => (
    <View style={addSilentZoneStyles.container}>
      <Text style={addSilentZoneStyles.title}>Add Silent Zone</Text>
      <Text style={addSilentZoneStyles.errorText}>{locationError}</Text>

      <TextInput
        style={addSilentZoneStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={addSilentZoneStyles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <AddLocationButton
        location={createLocationObject(parseFloat(latitude), parseFloat(longitude))}
        addLocation={(newAddress: string) => setAddress(newAddress)}
      />
      <TextInput
        style={addSilentZoneStyles.input}
        placeholder="Radius (in meters)"
        value={radius}
        onChangeText={setRadius}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={silentModeType}
        style={addSilentZoneStyles.picker}
        onValueChange={(itemValue) => setSilentModeType(itemValue)}
      >
        <Picker.Item label="Silent" value="Silent" />
        <Picker.Item label="Vibrate" value="Vibrate" />
      </Picker>
      <TouchableOpacity onPress={handleSubmit} style={addSilentZoneStyles.addButton}>
        <Text style={addSilentZoneStyles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowForm(!showForm)}
        style={addSilentZoneStyles.addButton}
      >
        <Text style={addSilentZoneStyles.buttonText}>
          {showForm ? 'Hide Add Silent Zone' : 'Add a Silent Zone'}
        </Text>
      </TouchableOpacity>
      {showForm && renderForm()}
    </>
  )
}

export default AddSilentZone
