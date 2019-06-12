import React from 'react'
import { View, Text } from 'react-native'
import { Header } from '../../Components'
import AppStyles from '../../Theme/AppStyles'

class LibraryButtons extends React.Component {
  render () {
    return (
      <View style={AppStyles.screen}>
        <Header title="示例页面" />
        <View style={AppStyles.body}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>示例页面</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default LibraryButtons
