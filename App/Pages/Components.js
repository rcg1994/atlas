import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { ATButton } from 'react-native-atlas'
import { Header } from '../Components'
import { AppStyles } from '../Theme'

class Components extends React.Component {
  componentWillMount () {
    console.log(this.props.app)
  }
  render () {
    return (
      <View style={AppStyles.screen}>
        <Header title="Navigation" headerLeft={null} />
        <View style={AppStyles.body}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <ATButton
              onPress={() => {
                this.props.navigation.navigate('LibraryButtons')
              }}
            >跳转</ATButton>
          </View>
        </View>
      </View>
    )
  }
}

export default connect(({ app }) => ({ app }))(Components)
