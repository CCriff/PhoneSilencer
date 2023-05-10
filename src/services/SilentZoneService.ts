// SilentZoneService.ts
// Path: src\services\SilentZoneService.ts
import * as SecureStore from 'expo-secure-store'

import { SilentZoneInterface } from '../types/Interfaces/SilentZoneInterface'

export const SILENT_ZONES_STORAGE_KEY = 'silentZones'

export const getSilentZones = async () => {
  const storedSilentZones = await SecureStore.getItemAsync(SILENT_ZONES_STORAGE_KEY)

  if (storedSilentZones) {
    return JSON.parse(storedSilentZones)
  }

  return []
}

export const saveSilentZones = async (silentZones: SilentZoneInterface[]) => {
  try {
    await SecureStore.setItemAsync(SILENT_ZONES_STORAGE_KEY, JSON.stringify(silentZones))
  } catch (error) {
    console.error('Error saving silent zones:', error)
  }
}

export const editSilentZone = async (silentZone: SilentZoneInterface) => {
  try {
    const storedSilentZones = await SecureStore.getItemAsync(SILENT_ZONES_STORAGE_KEY)
    const parsedSilentZones: SilentZoneInterface[] = storedSilentZones
      ? JSON.parse(storedSilentZones)
      : []

    const updatedSilentZones = parsedSilentZones.map((zone) =>
      zone.id === silentZone.id ? silentZone : zone
    )

    await SecureStore.setItemAsync(SILENT_ZONES_STORAGE_KEY, JSON.stringify(updatedSilentZones))
  } catch (error) {
    console.error('Error editing silent zone:', error)
  }
}

export const deleteSilentZone = async (silentZoneId: string) => {
  try {
    const storedSilentZones = await SecureStore.getItemAsync(SILENT_ZONES_STORAGE_KEY)
    const parsedSilentZones: SilentZoneInterface[] = storedSilentZones
      ? JSON.parse(storedSilentZones)
      : []

    const updatedSilentZones = parsedSilentZones.filter((zone) => zone.id !== silentZoneId)

    await SecureStore.setItemAsync(SILENT_ZONES_STORAGE_KEY, JSON.stringify(updatedSilentZones))
  } catch (error) {
    console.error('Error deleting silent zone:', error)
  }
}
