import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import TabBarMenu from "./TabBarMenu";
import Contatos from "./Contatos";
import Conversas from "./Conversas";

export default class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: "1", title: "CONVERSAS" },
        { key: "2", title: "CONTATOS" }
      ]
    };
  }

  _renderTabBar = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    "1": Conversas,
    "2": Contatos
  });

  render() {
    return (
      <TabView
        renderTabBar={this._renderTabBar}
        navigationState={this.state}
        renderScene={this._renderScene}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get("window").width }}
      />
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1
  }
});
