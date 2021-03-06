import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  ActivityIndicator
} from "react-native";

import { Font } from "expo";
import {
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons
} from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario
} from "../actions/AutenticacaoActions";

const { width: WIDTH } = Dimensions.get("window");

class FormCadastro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
      showPass: true,
      press: false
    };
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

  showPass = () => {
    if (this.state.press == false) {
      this.setState({
        showPass: false,
        press: true
      });
    } else {
      this.setState({
        showPass: true,
        press: false
      });
    }
  };

  _cadastraUsuario() {
    const { nome, email, senha } = this.props;
    this.props.cadastraUsuario(nome, email, senha);
  }

  renderBtnCadastro() {
    if (this.props.loading_Cadastro) {
      return <ActivityIndicator size="large" color="#0b7dfa" />;
    }
    return (
      <TouchableHighlight
        underlayColor={"#0b7dfa"}
        activeOpacity={0.3}
        onPress={() => this._cadastraUsuario()}
        style={{ borderRadius: 8 }}
      >
        <Text style={styles.txtRegister}>CADASTRAR</Text>
      </TouchableHighlight>
    );
  }

  render() {
    if (this.state.fontLoaded != true) {
      return <View />;
    }

    return (
      <View style={styles.viewContainer}>
        <View style={styles.navBarStyle}>
          <TouchableHighlight
            underlayColor={"#161C5C"}
            activeOpacity={0.3}
            onPress={() => {
              Actions.pop();
            }}
          >
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color={"#fff"}
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                left: 5
              }}
            />
          </TouchableHighlight>
          <Text style={styles.txtTitle}>CADASTRO</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputStylesUser}>
            <MaterialIcons
              name="person"
              size={25}
              color={"#9DAAEA"}
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                justifyContent: "center",
                top: 14,
                left: 19
              }}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#9DAAEA"
              autoCapitalize="none"
              value={this.props.nome}
              onChangeText={nome => this.props.modificaNome(nome)}
              style={styles.txtInputUser}
            />
          </View>
          <View style={styles.inputStylesEmail}>
            <MaterialCommunityIcons
              name="email-outline"
              size={25}
              color={"#9DAAEA"}
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                justifyContent: "center",
                top: 14,
                left: 19
              }}
            />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#9DAAEA"
              autoCapitalize="none"
              value={this.props.email}
              onChangeText={email => this.props.modificaEmail(email)}
              style={styles.txtInputEmail}
            />
          </View>
          <View style={styles.inputStylesPass}>
            <FontAwesome
              name="lock"
              size={25}
              color={"#9DAAEA"}
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                justifyContent: "center",
                top: 14,
                left: 23
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={this.state.showPass}
              placeholderTextColor="#9DAAEA"
              style={styles.txtInputPass}
              value={this.props.senha}
              onChangeText={senha => this.props.modificaSenha(senha)}
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={styles.eyeBtn}
              onPress={this.showPass.bind(this)}
            >
              {this.state.press === false ? (
                <MaterialCommunityIcons
                  name="eye-off-outline"
                  size={25}
                  color={"rgb(150,150,150)"}
                  style={{ backgroundColor: "transparent" }}
                  color={"#9DAAEA"}
                />
              ) : (
                <MaterialCommunityIcons
                  name="eye-outline"
                  size={25}
                  color={"#0b7dfa"}
                  style={{ backgroundColor: "transparent" }}
                />
              )}
            </TouchableOpacity>
          </View>
          {this.props.erroCadastro == "" ? (
            <View>
              <Text>{""}</Text>
            </View>
          ) : (
            <View style={styles.errorView}>
              <Text style={styles.textErro}>{this.props.erroCadastro}</Text>
            </View>
          )}
        </View>

        <View style={styles.btnContainer}>{this.renderBtnCadastro()}</View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroCadastro: state.AutenticacaoReducer.erroCadastro,
  loading_Cadastro: state.AutenticacaoReducer.loading_Cadastro
});
export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaSenha,
    modificaNome,
    cadastraUsuario
  }
)(FormCadastro);

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#161C5C",
    alignItems: "center",
    justifyContent: "center"
  },
  navBarStyle: {
    backgroundColor: "#161C5C",
    padding: 10,
    height: 50,
    flexDirection: "row",
    width: WIDTH
    //elevation: 5
  },
  // txtContainer : {
  //     flex: 1,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     top: 20,
  // },
  txtTitle: {
    fontFamily: "Azonix",
    color: "#fff",
    fontSize: 19,
    top: 7,
    left: 130,
    textAlign: "center"
  },
  inputContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  inputStylesUser: {
    top: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    width: WIDTH - 70,
    marginBottom: 27,
    padding: 14,
    borderRadius: 8,
    flexDirection: "row"
  },
  inputStylesEmail: {
    top: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    width: WIDTH - 70,
    marginBottom: 27,
    padding: 14,
    borderRadius: 8,
    flexDirection: "row"
  },
  inputStylesPass: {
    top: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    width: WIDTH - 70,
    marginBottom: 27,
    padding: 14,
    borderRadius: 8,
    flexDirection: "row"
  },
  txtInputUser: {
    color: "#9DAAEA",
    fontFamily: "Lato-Regular",
    fontSize: 15,
    left: 48
  },
  txtInputEmail: {
    color: "#9DAAEA",
    fontFamily: "Lato-Regular",
    fontSize: 15,
    left: 48
  },
  txtInputPass: {
    color: "#9DAAEA",
    fontFamily: "Lato-Regular",
    fontSize: 15,
    left: 48
  },
  btnContainer: {
    flex: 1,
    top: 20
  },
  txtRegister: {
    textAlign: "center",
    backgroundColor: "#0b7dfa",
    borderRadius: 8,
    color: "#fff",
    fontSize: 18,
    padding: 14,
    width: WIDTH - 70,
    fontFamily: "Lato-Regular"
  },
  eyeBtn: {
    top: 14,
    right: 20,
    alignItems: "flex-end",
    position: "absolute"
  },
  errorView: {
    backgroundColor: "#ff0000",
    padding: 5,
    top: 30,
    borderRadius: 10,
    alignItems: "center"
  },
  textErro: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Lato-Regular"
  }
});
