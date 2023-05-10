// Map.tsx
// Path: src\components\Map\Map.tsx
import { LocationObjectCoords } from 'expo-location'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import MapView, { Circle, Marker } from 'react-native-maps'

import mainScreenStyles from '../../screens/MainScreeen/MainScreen.styles'
import { useSilentZoneContext } from '../../types/Contexts/SilentZoneContext'

interface MapProps {
  userLocation: LocationObjectCoords | null
  errorMsg: string | null
  onPinPress: (latitude: number, longitude: number) => void // Add onPinPress to the props
}

const Map: React.FC<MapProps> = ({ userLocation, errorMsg, onPinPress }) => {
  const { silentZones } = useSilentZoneContext()
  const [showAddress, setShowAddress] = useState(false) // Add state to control the address visibility

  const handlePinPress = (event: any) => {
    setShowAddress(!showAddress)
    onPinPress(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude)
  }

  if (errorMsg) {
    return (
      <View style={mainScreenStyles.errorContainer}>
        <Text>{errorMsg}</Text>
      </View>
    )
  }

  return (
    <MapView
      style={mainScreenStyles.map}
      initialRegion={{
        latitude: userLocation?.latitude ?? 0,
        longitude: userLocation?.longitude ?? 0,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008
      }}
      showsUserLocation={true}
      followsUserLocation={true}
      onLongPress={(event) =>
        onPinPress(event.nativeEvent.coordinate.latitude, event.nativeEvent.coordinate.longitude)
      }
    >
      {silentZones.map((silentZone, index) => (
        <Marker
          pinColor={`#${(((1 << 24) * (index + 1)) / silentZones.length).toString(16)}`} // Generate different colors for each SilentZone
          key={silentZone.id}
          coordinate={{
            latitude: silentZone.coordinates.latitude,
            longitude: silentZone.coordinates.longitude
          }}
          title={silentZone.name + ` - ${silentZone.address}`}
          description={silentZone.isActive ? 'Active' : 'Inactive'}
          onPress={handlePinPress} // Handle press event on the pin marker
        />
      ))}
    </MapView>
  )
}

export default Map
