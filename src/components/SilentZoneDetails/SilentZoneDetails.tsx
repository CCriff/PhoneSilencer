import React, { useState } from 'react'
import { Button, Switch, Text, TouchableOpacity, View } from 'react-native'

import { useSilentZoneContext } from '../../types/Contexts/SilentZoneContext'
import { SilentZoneInterface } from '../../types/Interfaces/SilentZoneInterface'

import { silentZoneDetailsStyles } from './SilentZoneDetails.styles'

interface SilentZoneDetailsProps {
  silentZone: SilentZoneInterface
}

const SilentZoneDetails: React.FC<SilentZoneDetailsProps> = ({ silentZone }) => {
  const { editSilentZone, deleteSilentZone } = useSilentZoneContext()
  const [name, setName] = useState(silentZone.name)
  const [address, setAddress] = useState(silentZone.address)
  const [radius, setRadius] = useState(silentZone.radius.toString())
  const [isActive, setIsActive] = useState(silentZone.isActive)

  const handleUpdate = async () => {
    await editSilentZone({
      ...silentZone,
      name,
      address,
      radius: parseFloat(radius),
      isActive
    })
  }

  return (
    <View style={silentZoneDetailsStyles.container}>
      <Text style={silentZoneDetailsStyles.title}>{silentZone.name}</Text>
      <Text style={silentZoneDetailsStyles.address}>{silentZone.address}</Text>
      <Text style={silentZoneDetailsStyles.mode}>{silentZone.silentModeType}</Text>
      <Text style={silentZoneDetailsStyles.radius}>Radius: {silentZone.radius} meters</Text>
      <View style={silentZoneDetailsStyles.buttonContainer}>
        <TouchableOpacity
          onPress={() => editSilentZone(silentZone)}
          style={silentZoneDetailsStyles.editButton}
        >
          <Text style={silentZoneDetailsStyles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteSilentZone(silentZone.id)}
          style={silentZoneDetailsStyles.deleteButton}
        >
          <Text style={silentZoneDetailsStyles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <View style={silentZoneDetailsStyles.switchContainer}>
          <Text style={silentZoneDetailsStyles.switchLabel}>Active</Text>
          <Switch value={isActive} onValueChange={setIsActive} />
        </View>
        <Button title="Update Silent Zone" onPress={handleUpdate} />
      </View>
    </View>
  )
}

export default SilentZoneDetails
