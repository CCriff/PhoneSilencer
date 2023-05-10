import { StyleSheet } from 'react-native'

export const settingsScreenStyles = StyleSheet.create({
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
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingBottom: 10
  },
  settingTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  settingText: {
    fontSize: 18,
    color: 'darkslategray'
  },
  settingLink: {
    fontSize: 16,
    color: 'steelblue'
  },
  sectionContainer: {
    marginBottom: 32
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  settingLabel: {
    fontSize: 18
  }
})
