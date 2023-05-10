// AddSilentZoneStyles.tsx
// Path: src\components\AddSilentZone\AddSilentZone.styles.tsx
import { StyleSheet } from 'react-native'

export const addSilentZoneStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4a4a4a'
  },
  input: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff'
  },
  picker: {
    borderWidth: 1,
    borderColor: '#d6d6d6',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    height: 50
  },
  pickerItem: {
    fontSize: 16,
    color: '#4a4a4a'
  },
  addButton: {
    backgroundColor: '#4a4a4a',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10
  },
  heartButton: {
    backgroundColor: 'mistyrose',
    padding: 10,
    borderRadius: 10,
    elevation: 5, // Android
    shadowColor: 'black', // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowOpacity: 0.5, // iOS
    shadowRadius: 2 // iOS
  },
  heartText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
})
