// TopMenuBar.styles.tsx
// Path: src\components\Menus\TopMenuBar\TopMenuBar.styles.tsx
import { StyleSheet } from 'react-native'

export const topMenuBarStyles = StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    Weight: 'bold',
    borderBottomWidth: 2,
    borderColor: 'lightgray',
    backgroundColor: 'mistyrose',
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 5, // Android
    shadowColor: 'black', // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowOpacity: 0.5, // iOS
    shadowRadius: 2, // iOS
    width: '100%'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0'
  },
  iconButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140
  },
  safeArea: {
    backgroundColor: 'transparent'
  }
})
