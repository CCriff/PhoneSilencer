// ManageSilentZonesScreen.tsx
// Path: src\screens\ManageSilentZonesScreen\ManageSilentZonesScreen.tsx
import React from 'react'
import { Alert, SafeAreaView } from 'react-native'

import AddSilentZone from '../../components/AddSilentZone/AddSilentZone'
import SilentZoneList from '../../components/SilentZoneList/SilentZoneList'
import { useSilentZoneContext } from '../../types/Contexts/SilentZoneContext'
import { SilentZoneInterface } from '../../types/Interfaces/SilentZoneInterface'

import { manageSilentZonesScreenStyles } from './ManageSilentZonesScreen.styles'

const ManageSilentZonesScreen: React.FC = () => {
  const { silentZones, addSilentZone, editSilentZone, deleteSilentZone } = useSilentZoneContext()

  const handleEdit = async (silentZone: SilentZoneInterface) => {
    await editSilentZone(silentZone)
  }

  const handleDelete = (silentZoneId: string) => {
    Alert.alert('Delete Silent Zone', 'Are you sure you want to delete this silent zone?', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Delete',
        onPress: () => deleteSilentZone(silentZoneId),
        style: 'destructive'
      }
    ])
  }

  return (
    <SafeAreaView style={manageSilentZonesScreenStyles.container}>
      <SilentZoneList silentZones={silentZones} onDelete={handleDelete} onSave={handleEdit} />
      <AddSilentZone />
    </SafeAreaView>
  )
}

export default ManageSilentZonesScreen
