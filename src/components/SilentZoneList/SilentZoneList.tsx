// src\components\SilentZoneList\SilentZoneList.tsx
import React, { useCallback } from 'react'
import {
  Animated,
  FlatList,
  ListRenderItem,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

import { SilentZoneInterface } from '../../types/Interfaces/SilentZoneInterface'
import SilentZoneItem from '../SilentZoneItem/SilentZoneItem'

import { silentZoneListStyles } from './SilentZoneList.styles'

interface SilentZoneListProps {
  silentZones: SilentZoneInterface[]
  onDelete: (silentZoneId: string) => void
  onSave: (silentZone: SilentZoneInterface) => void
}

const SilentZoneList: React.FC<SilentZoneListProps> = ({ silentZones, onDelete, onSave }) => {
  const renderItem: ListRenderItem<SilentZoneInterface> = useCallback(
    ({ item, index }) => {
      const translateY = new Animated.Value(100)
      const opacity = new Animated.Value(0)

      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true
      }).start()

      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        delay: index * 100,
        useNativeDriver: true
      }).start()

      return (
        <Animated.View
          key={item.id}
          style={[silentZoneListStyles.itemContainer, { transform: [{ translateY }], opacity }]}
        >
          <Text style={silentZoneListStyles.itemText}>{item.name}</Text>
          <Text style={silentZoneListStyles.itemText}>{item.address}</Text>
          <Text style={silentZoneListStyles.itemText}>{item.radius}m</Text>
          <Text style={silentZoneListStyles.itemText}>{item.silentModeType}</Text>
          <Text style={silentZoneListStyles.itemText}>{item.isActive ? 'Yes' : 'No'}</Text>
          <View style={silentZoneListStyles.container}>
            <TouchableOpacity style={silentZoneListStyles.editButton} onPress={() => onSave(item)}>
              <Text style={silentZoneListStyles.editButtonText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={silentZoneListStyles.deleteButton}
              onPress={() => onDelete(item.id)}
            >
              <Text style={silentZoneListStyles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )
    },
    [onDelete, onSave]
  )

  return (
    <ScrollView style={silentZoneListStyles.scrollView}>
      {silentZones.map((silentZone) => (
        <SilentZoneItem
          key={silentZone.id}
          silentZone={silentZone}
          onDelete={() => onDelete(silentZone.id)}
          onSave={onSave}
        />
      ))}
    </ScrollView>
  )
}

export default SilentZoneList
