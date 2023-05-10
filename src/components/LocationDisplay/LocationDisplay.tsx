// LocationDisplay.tsx
// Path: src\components\LocationDisplay\LocationDisplay.tsx
import { LocationObject } from 'expo-location'
import React from 'react'
import { ScrollView, Text } from 'react-native'

import { locationDisplayStyles } from './LocationDisplay.styles'

interface LocationDisplayProps {
  location: LocationObject | null
  errorMsg: string | null
}

const LocationDisplay: React.FC<LocationDisplayProps> = ({ location, errorMsg }) => {
  return (
    <ScrollView contentContainerStyle={locationDisplayStyles.scrollView}>
      <Text style={locationDisplayStyles.text}>
        {errorMsg ??
          (location ? JSON.stringify(location, null, 2) : 'Waiting for location data...')}
      </Text>
    </ScrollView>
  )
}

export default LocationDisplay
