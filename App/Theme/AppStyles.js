import { StyleSheet } from 'react-native'
import Colors from './Colors'

const AppStyles = StyleSheet.create({
  screen: {
    flex: 1
  },
  body: {
    flex: 1,
    backgroundColor: Colors.appBackground
  },
  flexCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default AppStyles
