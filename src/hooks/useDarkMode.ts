import AsyncStorage from '@react-native-async-storage/async-storage'
import * as SecureStore from 'expo-secure-store'
import { useEffect, useState } from 'react'

export default function useDarkMode() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false)

  useEffect(() => {
    const loadDarkModeSetting = async () => {
      try {
        const darkMode = await SecureStore.getItemAsync('darkModeEnabled')
        if (darkMode !== null) {
          setDarkModeEnabled(JSON.parse(darkMode))
        }
      } catch (error) {
        console.error('Error loading darkModeEnabled setting:', error)
      }
    }

    loadDarkModeSetting()
  }, [])

  const handleDarkModeToggle = async (value: boolean) => {
    try {
      await SecureStore.setItemAsync('darkModeEnabled', JSON.stringify(value))
      setDarkModeEnabled(value)
    } catch (error) {
      console.error('Error saving darkModeEnabled setting:', error)
    }
  }

  const toggleDarkMode = async () => {
    const newDarkModeEnabled = !darkModeEnabled
    setDarkModeEnabled(newDarkModeEnabled)
    await AsyncStorage.setItem('darkMode', newDarkModeEnabled.toString())
  }

  return { toggleDarkMode, darkModeEnabled, setDarkModeEnabled: handleDarkModeToggle }
}
