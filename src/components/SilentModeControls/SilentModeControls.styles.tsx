import { StyleSheet } from 'react-native'

export const silentModeControlsStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  statusPill: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 50
  },
  statusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  }
})
