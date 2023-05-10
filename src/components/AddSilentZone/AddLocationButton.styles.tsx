// AddLocationButtonStyles.tsx
// Path: src\components\AddSilentZone\AddLocationButton.styles.tsx
import { StyleSheet } from 'react-native'

export const AddLocationButtonStyles = StyleSheet.create({
  addButton: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 4,
    marginRight: 5
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#007AFF',
    borderRadius: 4
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
