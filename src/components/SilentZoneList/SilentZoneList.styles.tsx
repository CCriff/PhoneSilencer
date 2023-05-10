// src\components\SilentZoneList\SilentZoneList.styles.ts
import { StyleSheet } from 'react-native'

export const silentZoneListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    borderRadius: 15,
    margin: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginBottom: 15,
    textAlign: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
  itemText: {
    fontSize: 18,
    color: '#333333',
    fontWeight: '500'
  },
  editButton: {
    backgroundColor: '#5C6BC0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  editButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  deleteButton: {
    backgroundColor: '#EF5350',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  scrollView: {
    backgroundColor: 'mintcream',
    padding: 20,
    borderRadius: 15,
    margin: 10,
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22
  },
  card: {
    margin: 10
  }
})
