import { StyleSheet } from 'react-native'

export const phoneStatusStyles = StyleSheet.create({
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
    fontSize: 20
  }
})
