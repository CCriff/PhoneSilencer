// TopMenuBar.tsx
// Path: src\components\Menus\TopMenuBar\TopMenuBar.tsx
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, SafeAreaView, Switch, Text, View } from 'react-native'

import SilentModeControls from '../../SilentModeControls/SilentModeControls'

import { topMenuBarStyles } from './TopMenuBar.styles'

interface TopMenuBarProps {
  appEnabled: boolean
  setAppEnabled: React.Dispatch<React.SetStateAction<boolean>>
}

export const TopMenuBar: React.FC<TopMenuBarProps> = ({ appEnabled, setAppEnabled }) => {
  const navigation = useNavigation()

  const handleSettingsPress = () => {
    // @ts-ignore
    navigation.navigate('Settings')
  }

  return (
    <SafeAreaView style={topMenuBarStyles.safeArea}>
      <View style={topMenuBarStyles.menuBar}>
        <SilentModeControls />
        <View style={topMenuBarStyles.iconButtons}>
          <Button title="Settings" onPress={handleSettingsPress} color="green" />
          <Button title="Info" onPress={() => {}} color="green" />
        </View>
        <View style={topMenuBarStyles.switchContainer}>
          <Text style={topMenuBarStyles.menuText}>Enable App:</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={appEnabled ? '#f5dd4b' : '#FF0000'}
            ios_backgroundColor="#3e3e3e"
            value={appEnabled}
            onValueChange={(value) => setAppEnabled(value)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
