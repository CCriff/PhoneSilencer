// utils/usePhoneSilentMode.ts
import { useState } from 'react'

export const usePhoneSilentMode = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [isPhoneInSilentMode, setIsPhoneInSilentMode] = useState(false)

  // Replace this with the actual implementation for getting and setting the device's silent mode
  // You can use packages like `react-native-system-setting` to interact with the device's settings

  return [isPhoneInSilentMode, setIsPhoneInSilentMode]
}
