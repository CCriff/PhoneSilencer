import { StyleSheet } from 'react-native'

export const silentZoneDetailsStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  switchLabel: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  address: {
    fontSize: 16,
    marginBottom: 10
  },
  mode: {
    fontSize: 16,
    marginBottom: 10
  },
  radius: {
    fontSize: 16,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  editButton: {
    backgroundColor: 'dodgerblue',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  deleteButton: {
    backgroundColor: 'crimson',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
})
