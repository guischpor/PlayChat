import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ListView,
  Image
} from "react-native";
import { connect } from "react-redux";
import { Font } from "expo";
import { contatoUsuarioFetch } from "../actions/AppActions";
import _ from "lodash";

const { width: WIDTH } = Dimensions.get("window");

class Contatos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  componentWillMount() {
    this.props.contatoUsuarioFetch();
    this.criaFonteDeDados(this.props.contatos);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.contatos);
  }

  criaFonteDeDados(contatos) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.fonteDeDados = ds.cloneWithRows(contatos);
  }

  async componentDidMount() {
    await Font.loadAsync({
      Azonix: require("../fonts/Azonix.otf"),
      "Lato-Bold": require("../fonts/Lato-Bold.ttf"),
      "Lato-Light": require("../fonts/Lato-Light.ttf"),
      "Lato-Medium": require("../fonts/Lato-Medium.ttf"),
      "Lato-Regular": require("../fonts/Lato-Regular.ttf")
    });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    if (this.state.fontLoaded != true) {
      return <View />;
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.fonteDeDados}
        renderRow={data => (
          <View>
            <Image
              source={require("../images/avatarNeutro.png")}
              style={{ height: 60, width: 60, borderRadius: 160 }}
            />
            <Text>{data.nome}</Text>
            <Text>{data.email}</Text>
          </View>
        )}
      />
    );
  }
}

mapStateToProps = state => {
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
    return { ...val, uid };
  });
  return { contatos };
};
export default connect(
  mapStateToProps,
  { contatoUsuarioFetch }
)(Contatos);

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
