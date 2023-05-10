// StackNavigator.tsx
// Path: src\navigation\StackNavigator.tsx
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import useDarkMode from '../hooks/useDarkMode'
import MainScreen from '../screens/MainScreeen/MainScreen'
import ManageSilentZonesScreen from '../screens/ManageSilentZonesScreen/ManageSilentZonesScreen'
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen'
import { SilentZoneInterface } from '../types/Interfaces/SilentZoneInterface'

type RootStackParamList = {
  Main: undefined
  Settings: undefined
  ManageSilentZones: {
    silentZones: SilentZoneInterface[]
    addSilentZone: (silentZone: SilentZoneInterface) => void
  }
}

const Stack = createStackNavigator<RootStackParamList>()

export default function StackNavigator() {
  const { darkModeEnabled } = useDarkMode()
  const theme = darkModeEnabled ? DarkTheme : DefaultTheme

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ title: 'Phone Silencer App' }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen
          name="ManageSilentZones"
          // @ts-ignore
          component={ManageSilentZonesScreen}
          options={{ title: 'Manage Silent Zones' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
