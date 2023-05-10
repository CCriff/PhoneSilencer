// AudioModeController.tsx
// Path: src\components\AudioModeController\AudioModeController.tsx
import React from 'react'
import { Button, Text, View } from 'react-native'

import { playBeep, usePhoneSilentMode } from '../../utils/Audio'

export const AudioModeController: React.FC = () => {
  const [isPhoneInSilentMode, setIsPhoneInSilentMode] = usePhoneSilentMode()

  const toggleSilentMode = () => {
    playBeep(require('../../../assets/audio/notify.mp3')).then((r) => console.log(r))
    setIsPhoneInSilentMode(!isPhoneInSilentMode)
  }

  return (
    <View>
      <Text>Phone is currently in {isPhoneInSilentMode ? 'Silent ' : 'Normal '} mode</Text>
      <Button title="Toggle Silent Mode" onPress={toggleSilentMode} />
    </View>
  )
}
