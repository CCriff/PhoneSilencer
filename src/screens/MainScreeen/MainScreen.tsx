// MainScreen.tsx
// Path: src\screens\MainScreeen\MainScreen.tsx
import { useNavigation } from '@react-navigation/native'
import * as Location from 'expo-location'
import { LocationObject } from 'expo-location'
import React, { useEffect, useState } from 'react'
import { Alert, Text, View } from 'react-native'

import Map from '../../components/Map/Map'
import BottomMenuBar from '../../components/Menus/BottomMenuBar/BottomMenuBar'
import { TopMenuBar } from '../../components/Menus/TopMenuBar/TopMenuBar'
import AppEnabledService from '../../services/AppEnabledService'
import { getAddressFromLocation } from '../../services/LocationService'
import { useSilentZoneContext } from '../../types/Contexts/SilentZoneContext'
import { SilentZoneInterface } from '../../types/Interfaces/SilentZoneInterface'
import { getRandomColor } from '../../utils/colorUtils'

import { mainScreenStyles } from './MainScreen.styles'

const MainScreen = () => {
  const [appEnabled, setAppEnabled] = useState<boolean>(
    AppEnabledService.getInstance().getAppEnabled()
  )
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [userLocation, setUserLocation] = useState<LocationObject['coords'] | null>(null)
  const [currentAddress, setCurrentAddress] = useState<string>('')
  const [mode, setMode] = useState<'ring' | 'silent' | 'vibrate'>('ring')
  const onModeChange = (newMode: 'ring' | 'silent' | 'vibrate') => {
    setMode(newMode)
  }
  const navigation = useNavigation()
  const { silentZones, addSilentZone } = useSilentZoneContext()

  const navigateToManageSilentZones = () => {
    // @ts-ignore
    navigation.navigate('ManageSilentZones', {
      silentZones
    })
  }
  const onPinPress = async (latitude: number, longitude: number) => {
    // Show an alert to confirm if the user wants to create a new Silent Zone
    Alert.alert(
      'Create Silent Zone',
      'Do you want to create a new Silent Zone here?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Add',
          onPress: async () => {
            // Get the address from the tapped location
            const address = await getAddressFromLocation(latitude, longitude)

            // Create a new Silent Zone
            const silentZone: SilentZoneInterface = {
              id: `${silentZones.length + 1}`,
              name: `Silent Zone ${silentZones.length + 1}`,
              address,
              radius: 100,
              silentModeType: 'silent',
              isActive: true,
              coordinates: {
                latitude,
                longitude
              },
              pinColor: getRandomColor() // Assign a unique color to the pin
            }

            addSilentZone(silentZone)
            Alert.alert(
              'Silent Zone created successfully!',
              'You can manage your Silent Zones in the Manage Silent Zones screen.',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('OK Pressed'),
                  style: 'cancel'
                }
              ]
            )
          }
        }
      ],
      { cancelable: false }
    )
  }

  useEffect(() => {
    ;(async () => {
      try {
        // Request permissions for location
        const { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied')
          return
        }

        // Get current location
        const location = await Location.getCurrentPositionAsync({})
        setUserLocation(location.coords)

        // Update current address
        const address = await getAddressFromLocation(
          location.coords.latitude,
          location.coords.longitude
        )
        setCurrentAddress(address)
        Alert.alert(
          'Silent Zone created successfully!',
          'You can manage your Silent Zones in the Manage Silent Zones screen.',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
              style: 'cancel'
            }
          ]
        )
      } catch (error) {
        console.error('Error fetching location:', error)
      }
    })()
  }, [])

  const addCurrentLocationAsSilentZone = () => {
    if (userLocation && currentAddress) {
      Alert.alert(
        'Add New Silent Zone',
        'Do you want to add the current location as a new Silent Zone?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'Add',
            onPress: () => {
              const silentZone: SilentZoneInterface = {
                id: `${silentZones.length + 1}`,
                name: `Silent Zone ${silentZones.length + 1}`,
                address: currentAddress,
                radius: 100,
                silentModeType: 'silent',
                isActive: true,
                coordinates: {
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude
                },
                pinColor: getRandomColor() // Assign a unique color to the pin
              }

              addSilentZone(silentZone)
              Alert.alert(
                'Silent Zone created successfully!',
                'You can manage your Silent Zones in the Manage Silent Zones screen.',
                [
                  {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                    style: 'cancel'
                  }
                ]
              )
            }
          }
        ],
        { cancelable: true }
      )
    } else {
      alert('This location has already been added.')
    }
  }

  return (
    <View style={mainScreenStyles.container}>
      <TopMenuBar appEnabled={appEnabled} setAppEnabled={setAppEnabled} />
      <Text style={mainScreenStyles.locationLabel}>Current Location:</Text>
      <Text style={mainScreenStyles.locationText}>
        {currentAddress || 'Waiting for location...'}
      </Text>
      <Map userLocation={userLocation} errorMsg={errorMsg} onPinPress={onPinPress} />
      <BottomMenuBar
        mode={mode}
        onModeChange={onModeChange}
        navigateToManageSilentZones={navigateToManageSilentZones}
        onAddLocation={addCurrentLocationAsSilentZone}
      />
    </View>
  )
}

export default MainScreen
