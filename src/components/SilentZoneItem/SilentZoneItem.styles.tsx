// Path: src\components\SilentZoneItem\SilentZoneItem.styles.tsx
import { StyleSheet } from 'react-native'

const SilentZoneItemStyles = StyleSheet.create({
  card: {
    borderRadius: 4,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  title: {
    fontWeight: 'bold'
  },
  paragraph: {
    textAlign: 'left'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 5,
    textAlign: 'left',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 'auto'
  },
  silentModeType: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 5,
    textAlign: 'left',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 'auto'
  }
})

export default SilentZoneItemStyles
