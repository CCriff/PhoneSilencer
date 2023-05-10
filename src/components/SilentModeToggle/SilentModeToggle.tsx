// SilentModeToggle.tsx
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { silentModeToggleStyles } from './SilentModeToggle.styles'

interface SilentModeToggleProps {
  mode: 'ring' | 'silent' | 'vibrate'
  onModeChange: (newMode: 'ring' | 'silent' | 'vibrate') => void
}

const SilentModeToggle: React.FC<SilentModeToggleProps> = ({ mode, onModeChange }) => {
  return (
    <View style={silentModeToggleStyles.toggleContainer}>
      <TouchableOpacity onPress={() => onModeChange('ring')}>
        <FontAwesome name="volume-up" size={24} color={mode === 'ring' ? 'blue' : 'green'} />
        <Text style={silentModeToggleStyles.toggleText}>Ring</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onModeChange('silent')}>
        <FontAwesome name="volume-off" size={24} color={mode === 'silent' ? 'blue' : 'green'} />
        <Text style={silentModeToggleStyles.toggleText}>Silent</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onModeChange('vibrate')}>
        <FontAwesome name="volume-down" size={24} color={mode === 'vibrate' ? 'blue' : 'green'} />
        <Text style={silentModeToggleStyles.toggleText}>Vibrate</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SilentModeToggle
