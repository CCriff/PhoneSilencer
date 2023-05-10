// utils/Audio.ts
import { Audio, AudioMode, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av'
import { useEffect, useState } from 'react'

export async function playBeep(soundFile: ReturnType<typeof require>) {
  try {
    const { sound } = await Audio.Sound.createAsync(soundFile)
    await sound.playAsync()

    // Unload the sound when it finishes playing
    sound.setOnPlaybackStatusUpdate(async (status) => {
      if (!status.isLoaded || status.didJustFinish) {
        await sound.unloadAsync()
      }
    })
  } catch (error) {
    console.error('Error playing beep sound:', error)
  }
}

export async function setAudioMode(newAudioMode: AudioMode) {
  try {
    await Audio.setAudioModeAsync(newAudioMode)
  } catch (error) {
    console.log('Error setting audio mode:', error)
  }
}

export function usePhoneSilentMode(): [boolean, (value: boolean) => void] {
  const [isPhoneInSilentMode, setIsPhoneInSilentMode] = useState<boolean>(false)

  useEffect(() => {
    async function getAudioMode() {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          interruptionModeIOS: InterruptionModeIOS.DoNotMix,
          playsInSilentModeIOS: true,
          interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
          staysActiveInBackground: true
        })

        const settings = await Audio.getPermissionsAsync()
        setIsPhoneInSilentMode(settings.status === 'granted')
      } catch (error) {
        console.error('Error getting audio mode:', error)
        setIsPhoneInSilentMode(false)
      }
    }

    getAudioMode().then((r) => r)
  }, [])

  return [isPhoneInSilentMode, setIsPhoneInSilentMode]
}
