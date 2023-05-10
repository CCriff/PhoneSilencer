import { StyleSheet } from 'react-native'

export const mainScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  locationLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
  },
  locationText: {
    fontSize: 16,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  phoneStatusContainer: {
    alignItems: 'center'
  },
  phoneStatusTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  phoneStatus: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green'
  },
  locationContainer: {
    alignItems: 'center'
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  locationCoordinates: {
    fontSize: 16
  },
  enableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  enableText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  manageSilentZonesButton: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 8
  },
  manageSilentZonesButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  settingsButton: {
    backgroundColor: 'gray',
    padding: 16,
    borderRadius: 8
  },
  settingsButtonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  errorContainer: {
    alignItems: 'center'
  },
  map: {
    flex: 1
  }
})

export default mainScreenStyles
