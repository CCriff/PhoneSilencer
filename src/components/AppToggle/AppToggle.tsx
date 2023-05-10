// AppToggle.tsx
// Path: src\components\AppToggle\AppToggle.tsx
import React from 'react'
import { Switch, Text, View } from 'react-native'

import { appToggleStyles } from './AppToggle.styles'

interface AppToggleProps {
  appEnabled: boolean
  setAppEnabled: (isEnabled: boolean) => void
  label?: string
}

const AppToggle: React.FC<AppToggleProps> = ({
  appEnabled,
  setAppEnabled,
  label = 'Enable App'
}) => {
  const toggleApp = (value: boolean) => {
    setAppEnabled(value)
  }

  return (
    <View style={appToggleStyles.toggleContainer}>
      <Text style={appToggleStyles.toggleText}>{label}: </Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={appEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleApp}
        value={appEnabled}
      />
    </View>
  )
}

export default AppToggle
