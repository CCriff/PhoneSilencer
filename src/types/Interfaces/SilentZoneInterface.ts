// SilentZoneInterface.ts
// Path: src\types\Interfaces\SilentZoneInterface.ts
interface Coordinates {
  latitude: number
  longitude: number
  altitude?: number | null
  accuracy?: number | null
  altitudeAccuracy?: number | null
  heading?: number | null
  speed?: number | null
}

interface SilentZoneInterface {
  id: string
  name: string
  address: string
  radius: number
  silentModeType: string
  isActive: boolean
  coordinates: Coordinates
  pinColor: string
}

export { SilentZoneInterface, Coordinates }
