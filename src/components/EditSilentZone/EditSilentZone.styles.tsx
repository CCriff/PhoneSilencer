// components/EditSilentZone/EditSilentZone.styles.ts
import { StyleSheet } from 'react-native'

export const editSilentZoneStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 4
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: -10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'light'
  },
  input: {
    marginBottom: 16
  },
  saveButton: {
    marginTop: 50,
    paddingBottom: 20
  },
  picker: {
    height: 10,
    marginTop: 5,
    marginBottom: 50
  }
})
