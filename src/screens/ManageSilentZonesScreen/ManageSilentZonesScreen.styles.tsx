import { StyleSheet } from 'react-native'

export const manageSilentZonesScreenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'mistyrose'
  },
  darkBackground: {
    backgroundColor: '#1c1c1e'
  },
  container: {
    flex: 1,
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'darkslategray'
  },
  zoneItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4
  },
  zoneText: {
    fontSize: 18,
    color: 'darkslategray'
  },
  editButton: {
    fontSize: 16,
    color: 'steelblue'
  },
  deleteButton: {
    fontSize: 16,
    color: 'crimson'
  },
  addButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  addButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: 'steelblue',
    borderRadius: 5
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
})
