import React from "react";
import { View, Text, Easing, Animated } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { TabPages, AppPages } from './NavPages'
import Colors from "../Theme/Colors";

const TabNavigatorConfig = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarLabel: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      const labelConf = {
        Home: "主页",
        Components: "组件库",
        About: "关于"
      };
      return (
        <Text
          style={{
            color: tintColor,
            fontSize: 12,
            marginBottom: 2,
            textAlign: "center",
            fontWeight: "200"
          }}
        >
          {labelConf[routeName]}
        </Text>
      );
    }
  }),
  tabBarOptions: {
    activeTintColor: Colors.primary,
    inactiveTintColor: "#333",
    style: {
      backgroundColor: Colors.tabBackground,
      borderTopColor: Colors.borderLight
    }
  },
  animationEnabled: false,
  swipeEnabled: false,
  lazy: false
};

const AppNavigatorConfig = {
  headerMode: "none",
  transitionConfig: () => ({
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, -width]
      });
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
      });

      return { opacity, transform: [{ translateX }] };
    }
  })
};

const AppNavigator = createStackNavigator({
  Root: {
    screen: createBottomTabNavigator(TabPages, TabNavigatorConfig)
  },
  ...AppPages
}, AppNavigatorConfig);

export default createAppContainer(AppNavigator);
