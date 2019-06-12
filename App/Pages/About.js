import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { ATButton } from 'react-native-atlas'
import { Header } from '../Components'
import { AppStyles } from '../Theme'

class About extends React.Component {
  render () {
    return (
      <View style={AppStyles.screen}>
        <Header title="Redux & Dva" headerLeft={null} />
        <View style={AppStyles.body}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text>loading: {String(this.props.app.loading)}</Text>
            <ATButton
              style={{ marginTop: 20 }}
              onPress={() => {
                this.props.dispatch({
                  type: 'app/updateState',
                  payload: { loading: false }
                })
              }}
            >action to false</ATButton>
            <ATButton
              style={{ marginTop: 20 }}
              onPress={() => {
                this.props.dispatch({
                  type: 'app/updateState',
                  payload: { loading: true }
                })
              }}
            >action to true</ATButton>
            <ATButton
              style={{ marginTop: 20 }}
              onPress={() => {
                this.props.dispatch({
                  type: 'app/loadingAsync'
                })
              }}
            >aync action to true</ATButton>
          </View>
        </View>
      </View>
    )
  }
}

export default connect(({ app }) => ({ app }))(About)
