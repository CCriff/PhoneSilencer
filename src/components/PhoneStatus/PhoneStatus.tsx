// PhoneStatus.tsx
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import { playBeep, usePhoneSilentMode } from '../../utils/Audio'

interface PhoneStatusProps {}

const PhoneStatus: React.FC<PhoneStatusProps> = () => {
  const [isPhoneInSilentMode, setIsPhoneInSilentMode] = usePhoneSilentMode()

  const handleTogglePhoneSilentMode = async () => {
    await playBeep(require('../../assets/audio/notify.mp3'))
    setIsPhoneInSilentMode(!isPhoneInSilentMode)
  }

  const iconName = isPhoneInSilentMode ? 'ios-volume-mute' : 'ios-volume-high'
  const color = isPhoneInSilentMode ? 'red' : 'green'
  const text = isPhoneInSilentMode ? 'Silent' : 'Ring'

  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20 }}
      onPress={handleTogglePhoneSilentMode}
    >
      <Ionicons name={iconName} size={25} color={color} />
      <Text style={{ color, fontSize: 16, marginLeft: 10 }}>{text}</Text>
    </TouchableOpacity>
  )
}

export default PhoneStatus
