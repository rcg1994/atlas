import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { ATText, ATTouchable } from 'react-native-atlas'
import { Images } from '../Resources'
import { AppStyles, Colors } from '../Theme'

const Text = ({ children, ...props }) => (
  <ATText color={Colors.primary} size={16} {...props}>
    {children}
  </ATText>
)
class Home extends React.Component {
  render () {
    return (
      <View style={AppStyles.screen}>
        <View style={AppStyles.flexCenter}>
          <Image source={Images.atlas} style={Styles.logo} />
          <Text>欢迎使用</Text>
          <Text>Atlas 旨在帮助开发者快速构建 RN 项目</Text>
          <Text style={Styles.mt20}>邀请您</Text>
          <Text>体验我们的组件库</Text>
          <ATTouchable style={Styles.link} onPress={() => {}}>
            <Text weight="bold" size={18}>
              react-native-atlas
            </Text>
          </ATTouchable>
        </View>
      </View>
    )
  }
}

const Styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200
  },
  mt20: {
    marginTop: 20
  },
  link: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10
  }
})

export default Home
