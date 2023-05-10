// components/EditSilentZone/EditSilentZone.tsx
import React, { useState } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { Button, IconButton, TextInput } from 'react-native-paper'

import { Coordinates, SilentZoneInterface } from '../../types/Interfaces/SilentZoneInterface'

import { editSilentZoneStyles } from './EditSilentZone.styles'

interface EditSilentZoneProps {
  visible: boolean
  onClose: () => void
  silentZone: SilentZoneInterface
  onSave: (silentZone: SilentZoneInterface) => void
}

const EditSilentZone: React.FC<EditSilentZoneProps> = ({
  visible,
  onClose,
  silentZone,
  onSave
}) => {
  const [name, setName] = useState(silentZone.name)
  const [address, setAddress] = useState(silentZone.address)
  const [radius, setRadius] = useState(silentZone.radius.toString())
  const [isActive, setIsActive] = useState(silentZone.isActive)
  const [silentModeType, setSilentModeType] = useState(silentZone.silentModeType)
  const handleSave = () => {
    onSave({
      ...silentZone,
      name,
      address,
      radius: parseFloat(radius),
      silentModeType
    })
    onClose()
  }

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={editSilentZoneStyles.container}>
        <View style={editSilentZoneStyles.header}>
          <TouchableOpacity onPress={onClose}>
            <IconButton icon="close" size={24} />
          </TouchableOpacity>
        </View>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          style={editSilentZoneStyles.input}
          mode="outlined"
          left={<TextInput.Icon icon="pencil" />}
        />
        <TextInput
          label="Silent Mode Type (vibrate/silent)"
          value={silentZone.silentModeType.toString()}
          onChangeText={setSilentModeType}
          style={editSilentZoneStyles.input}
          mode="outlined"
          left={<TextInput.Icon icon="phone" />}
        />
        <TextInput
          label="Address"
          value={address}
          onChangeText={setAddress}
          style={editSilentZoneStyles.input}
          mode="outlined"
          left={<TextInput.Icon icon="map-marker" />}
        />
        <TextInput
          label="Radius (meters)"
          value={radius}
          onChangeText={setRadius}
          keyboardType="numeric"
          style={editSilentZoneStyles.input}
          mode="outlined"
          left={<TextInput.Icon icon="circle" />}
        />
        <TextInput
          label="Active (true/false)"
          value={silentZone.isActive.valueOf().toString()}
          // onChangeText={setIsActive}
          style={editSilentZoneStyles.input}
          mode="outlined"
          left={<TextInput.Icon icon="bird" />}
        />
        <Button mode="contained" onPress={handleSave} style={editSilentZoneStyles.saveButton}>
          Save
        </Button>
      </View>
    </Modal>
  )
}

export default EditSilentZone
