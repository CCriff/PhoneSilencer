// BottomMenuBar.styles.tsx:
// Path: src\components\Menus\BottomMenuBar\BottomMenuBar.styles.tsx
import { StyleSheet } from 'react-native'

export const bottomMenuBarStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    Weight: 'bold',
    borderTopWidth: 2,
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
  icon: {
    paddingHorizontal: 10
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  toggleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10
  },
  centerButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  centerButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    elevation: 5, // Android
    shadowColor: 'black', // iOS
    shadowOffset: { width: 0, height: 2 }, // iOS
    shadowOpacity: 0.5, // iOS
    shadowRadius: 2, // iOS
    position: 'absolute',
    alignSelf: 'center'
  },
  centerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'mistyrose'
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
