import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { playBeep, usePhoneSilentMode } from '../../utils/Audio'

import { silentModeControlsStyles } from './SilentModeControls.styles'

const SilentModeControls: React.FC = () => {
  const [phoneStatus, setPhoneStatus] = useState<'normal' | 'silenced' | 'vibrate'>('normal')
  const [isPhoneInSilentMode, setIsPhoneInSilentMode] = usePhoneSilentMode()

  const handleTogglePhoneSilentMode = async () => {
    await playBeep(require('../../../assets/audio/notify.mp3'))
    setIsPhoneInSilentMode(!isPhoneInSilentMode)
    setPhoneStatus(isPhoneInSilentMode ? 'silenced' : 'normal' || 'vibrate')
  }

  return (
    <View style={silentModeControlsStyles.container}>
      <TouchableOpacity
        style={[
          silentModeControlsStyles.statusPill,
          {
            backgroundColor:
              phoneStatus === 'silenced'
                ? '#FF0000' // red
                : phoneStatus === 'normal'
                ? 'turquoise' // green
                : phoneStatus === 'vibrate'
                ? '#FFA500' // orange
                : '#00FF00' // green
          }
        ]}
        onPress={handleTogglePhoneSilentMode}
      >
        <Text style={silentModeControlsStyles.statusText}>Phone Status: </Text>
        <Ionicons
          // @ts-ignore
          name={
            phoneStatus === 'silenced'
              ? 'ios-volume-mute'
              : phoneStatus === 'normal'
              ? 'ios-volume-high'
              : phoneStatus === 'vibrate'
              ? 'ios-vibrate'
              : 'ios-volume-high'
          }
          size={30}
          color="white"
          style={{ marginRight: 5 }}
        />
        <Text style={silentModeControlsStyles.statusText}>
          {phoneStatus === 'silenced'
            ? 'Silenced'
            : phoneStatus === 'normal'
            ? 'Normal'
            : phoneStatus === 'vibrate'
            ? 'Vibrate'
            : 'Normal'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SilentModeControls
