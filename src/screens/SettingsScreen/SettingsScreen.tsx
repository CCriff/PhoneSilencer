import React, { useState } from 'react'
import { Switch, Text, View } from 'react-native'

import { settingsScreenStyles } from './SettingsScreen.styles'

type AppSettingKey = 'notificationsEnabled' | 'vibrateOnSilence'

const SettingsScreen = () => {
  const [appSettings, setAppSettings] = useState({
    notificationsEnabled: true,
    vibrateOnSilence: true
  })

  const toggleSetting = (setting: AppSettingKey) => {
    setAppSettings((prevState) => ({
      ...prevState,
      [setting]: !prevState[setting]
    }))
  }

  return (
    <View style={settingsScreenStyles.container}>
      <View style={settingsScreenStyles.sectionContainer}>
        <Text style={settingsScreenStyles.sectionTitle}>App Settings</Text>
        <View style={settingsScreenStyles.settingContainer}>
          <Text style={settingsScreenStyles.settingLabel}>Enable Notifications:</Text>
          <Switch
            value={appSettings.notificationsEnabled}
            onValueChange={() => toggleSetting('notificationsEnabled')}
          />
        </View>
        <View style={settingsScreenStyles.settingContainer}>
          <Text style={settingsScreenStyles.settingLabel}>Vibrate on Silence:</Text>
          <Switch
            value={appSettings.vibrateOnSilence}
            onValueChange={() => toggleSetting('vibrateOnSilence')}
          />
        </View>
      </View>
      <View style={settingsScreenStyles.sectionContainer}>
        <Text style={settingsScreenStyles.sectionTitle}>Silent Zone Settings</Text>
        {/* Add Silent Zone specific settings here */}
      </View>
      <View style={settingsScreenStyles.sectionContainer}>
        <Text style={settingsScreenStyles.sectionTitle}>General Settings</Text>
        {/* Add General settings here */}
      </View>
    </View>
  )
}

export default SettingsScreen
