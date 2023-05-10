// useGeofencing.ts
// Path: src\hooks\useGeofencing.ts
import { useEffect } from 'react'

import { defineGeofenceTask, startGeofencingAsync } from '../services/LocationService'
import { SilentZoneInterface } from '../types/Interfaces/SilentZoneInterface'

const useGeofencing = (silentZones: SilentZoneInterface[]) => {
  useEffect(() => {
    if (silentZones.length > 0) {
      defineGeofenceTask(silentZones)
      startGeofencingAsync(silentZones).then((r) => console.log('Geofencing started:', r))
    } else {
      console.log('No silent zones defined, geofencing not started')
    }
  }, [silentZones])
}

export default useGeofencing
