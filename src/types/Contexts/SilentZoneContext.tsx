// SilentZoneContext.tsx
// Path: src\types\Contexts\SilentZoneContext.tsx
import * as Location from 'expo-location'
import { getDistance } from 'geolib'
import React, { createContext, useContext, useEffect, useState } from 'react'

import {
  deleteSilentZone,
  editSilentZone,
  getSilentZones,
  saveSilentZones
} from '../../services/SilentZoneService'
import { SilentZoneInterface } from '../Interfaces/SilentZoneInterface'

interface SilentZonesContextProps {
  silentZones: SilentZoneInterface[]
  addSilentZone: (silentZone: SilentZoneInterface) => void
  editSilentZone: (silentZone: SilentZoneInterface) => Promise<void>
  deleteSilentZone: (silentZoneId: string) => Promise<void>
}

interface SilentZoneProviderProps {
  children: React.ReactNode
}

const SilentZoneContext = createContext<SilentZonesContextProps>({
  silentZones: [],
  addSilentZone: () => {},
  editSilentZone: async () => {},
  deleteSilentZone: async () => {}
})

export const isLocationInSilentZone = (
  location: Location.LocationObject,
  silentZones: SilentZoneInterface[]
): boolean => {
  for (const silentZone of silentZones) {
    const distance = getDistance(
      {
        latitude: silentZone.coordinates.latitude,
        longitude: silentZone.coordinates.longitude
      },
      {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    )

    if (distance <= silentZone.radius) {
      return true
    }
  }

  return false
}

export const useSilentZoneContext = () => useContext(SilentZoneContext)

const SilentZoneProvider: React.FC<SilentZoneProviderProps> = ({ children }) => {
  const [silentZones, setSilentZones] = useState<SilentZoneInterface[]>([])

  useEffect(() => {
    const fetchSilentZones = async () => {
      const loadedSilentZones = await getSilentZones()
      setSilentZones(loadedSilentZones)
    }

    fetchSilentZones()
  }, [])

  const addSilentZone = async (silentZone: SilentZoneInterface) => {
    const newSilentZones = [...silentZones, silentZone]
    setSilentZones(newSilentZones)
    await saveSilentZones(newSilentZones)
  }

  const handleEditSilentZone = async (silentZone: SilentZoneInterface) => {
    await editSilentZone(silentZone)
    const updatedSilentZones = silentZones.map((zone) =>
      zone.id === silentZone.id ? silentZone : zone
    )
    setSilentZones(updatedSilentZones)
  }

  const handleDeleteSilentZone = async (silentZoneId: string) => {
    await deleteSilentZone(silentZoneId)
    const updatedSilentZones = silentZones.filter((zone) => zone.id !== silentZoneId)
    setSilentZones(updatedSilentZones)
  }

  return (
    <SilentZoneContext.Provider
      value={{
        silentZones,
        addSilentZone,
        editSilentZone: handleEditSilentZone,
        deleteSilentZone: handleDeleteSilentZone
      }}
    >
      {children}
    </SilentZoneContext.Provider>
  )
}

export default SilentZoneProvider
