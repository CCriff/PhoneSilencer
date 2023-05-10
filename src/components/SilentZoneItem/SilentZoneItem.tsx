// components/SilentZoneItem/SilentZoneItem.tsx
import React, { useState } from 'react'
import { View } from 'react-native'
import { Card, IconButton, Paragraph, Title } from 'react-native-paper'

import { SilentZoneInterface } from '../../types/Interfaces/SilentZoneInterface'
import EditSilentZone from '../EditSilentZone/EditSilentZone'

import SilentZoneItemStyles from './SilentZoneItem.styles'

interface SilentZoneItemProps {
  silentZone: SilentZoneInterface
  onDelete: () => void
  onSave: (silentZone: SilentZoneInterface) => void
}

const SilentZoneItem: React.FC<SilentZoneItemProps> = ({ silentZone, onDelete, onSave }) => {
  const [editModalVisible, setEditModalVisible] = useState(false)

  const handleEdit = () => {
    setEditModalVisible(true)
  }

  const handleCloseEditModal = () => {
    setEditModalVisible(false)
  }

  const handleSaveEditedSilentZone = (editedSilentZone: SilentZoneInterface) => {
    onSave(editedSilentZone)
  }

  return (
    <>
      <Card style={SilentZoneItemStyles.card}>
        <Card.Content style={SilentZoneItemStyles.cardContent}>
          <View style={SilentZoneItemStyles.textContainer}>
            <Title style={SilentZoneItemStyles.name}>
              {silentZone.name} - {silentZone.silentModeType}
            </Title>
          </View>
          <View style={SilentZoneItemStyles.textContainer}>
            <Title style={SilentZoneItemStyles.name}>
              {silentZone.address} - {silentZone.radius}m
            </Title>
          </View>
          <View style={SilentZoneItemStyles.textContainer}>
            <Title style={SilentZoneItemStyles.name}>
              {silentZone.isActive ? 'Active' : 'Inactive'}
            </Title>
          </View>
        </Card.Content>
        <Card.Actions style={SilentZoneItemStyles.actions}>
          <IconButton icon="pencil" onPress={handleEdit} iconColor="blue" size={30} />
          <IconButton icon="delete" onPress={onDelete} iconColor="red" size={30} />
        </Card.Actions>
      </Card>
      <EditSilentZone
        visible={editModalVisible}
        onClose={handleCloseEditModal}
        silentZone={silentZone}
        onSave={handleSaveEditedSilentZone}
      />
    </>
  )
}

export default SilentZoneItem
