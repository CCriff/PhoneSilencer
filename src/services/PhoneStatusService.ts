import { Platform } from 'react-native'

import { getPhoneStatusAndroid, getPhoneStatusIOS } from './NativePhoneStatusService'

export async function getCurrentPhoneStatus(): Promise<string> {
  let phoneStatus = 'ring'

  try {
    if (Platform.OS === 'android') {
      phoneStatus = await getPhoneStatusAndroid()
    } else if (Platform.OS === 'ios') {
      phoneStatus = await getPhoneStatusIOS()
    }
  } catch (error) {
    console.warn('Error getting phone status:', error)
  }

  return phoneStatus
}
