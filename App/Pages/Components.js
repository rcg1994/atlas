import React from "react";
import { View, Text } from "react-native";
import { ATButton } from "react-native-atlas";
import { Header } from "../Components";
import { AppStyles } from "../Theme";

class Components extends React.Component {
  render() {
    return (
      <View style={AppStyles.screen}>
        <Header title="组件库" headerLeft={null} />
        <View style={AppStyles.body}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <ATButton
              title="组件：按钮"
              onPress={() => {
                this.props.navigation.navigate("LibraryButtons");
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Components;
