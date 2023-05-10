// App.tsx
// Path: src\App.tsx
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import useGeofencing from './hooks/useGeofencing'
import StackNavigator from './navigation/StackNavigator'
import SilentZonesProvider, { useSilentZoneContext } from './types/Contexts/SilentZoneContext'

import styles from './App.styles'

export default function App() {
  const { silentZones } = useSilentZoneContext()
  // useGeofencing(silentZones)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider>
          <SilentZonesProvider>
            <StackNavigator />
          </SilentZonesProvider>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
