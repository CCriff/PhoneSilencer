import { NativeModules } from 'react-native'

const { PhoneStatusModule } = NativeModules

export async function getPhoneStatusAndroid(): Promise<string> {
  try {
    const phoneStatus = await PhoneStatusModule.getPhoneStatus()
    return phoneStatus
  } catch (error) {
    console.warn('Error getting phone status (Android):', error)
    return 'ring'
  }
}

export async function getPhoneStatusIOS(): Promise<string> {
  try {
    const phoneStatus = await PhoneStatusModule.getPhoneStatus()
    return phoneStatus
  } catch (error) {
    console.warn('Error getting phone status (iOS):', error)
    return 'ring'
  }
}
