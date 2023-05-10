// BottomMenuBar.tsx
// Path: src\components\Menus\BottomMenuBar\BottomMenuBar.tsx
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

import { bottomMenuBarStyles } from './BottomMenuBar.styles'

interface BottomMenuBarProps {
  mode: 'ring' | 'silent' | 'vibrate'
  onModeChange: (mode: 'ring' | 'silent' | 'vibrate') => void
  navigateToManageSilentZones: () => void
  onAddLocation: () => void
}

const BottomMenuBar: React.FC<BottomMenuBarProps> = ({
  mode,
  onModeChange,
  navigateToManageSilentZones,
  onAddLocation
}) => {
  return (
    <View style={bottomMenuBarStyles.container}>
      <TouchableOpacity
        onPress={navigateToManageSilentZones}
        style={bottomMenuBarStyles.heartButton}
      >
        {/* Add your custom icon or text for the settings button here */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onModeChange(mode)} style={bottomMenuBarStyles.heartButton}>
        {/* Add your custom icon or text for the mode button here */}
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddLocation} style={bottomMenuBarStyles.heartButton}>
        {/* Add your custom icon or text for the add location button here */}
      </TouchableOpacity>
    </View>
  )
}

export default BottomMenuBar
