import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import {Font} from 'expo';
import {
    MaterialIcons,
    FontAwesome,
    MaterialCommunityIcons
} from '@expo/vector-icons';
import {
    Actions,
} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {
    modificaEmail,
    modificaSenha,
    autenticarUsuario
} from '../actions/AutenticacaoActions';


const {width: WIDTH} = Dimensions.get('window');

class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            showPass: true,
            press: false,
        }
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Azonix': require('../fonts/Azonix.otf'),
            'Lato-Bold': require('../fonts/Lato-Bold.ttf'),
            'Lato-Light': require('../fonts/Lato-Light.ttf'),
            'Lato-Medium': require('../fonts/Lato-Medium.ttf'),
            'Lato-Regular': require('../fonts/Lato-Regular.ttf'),
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
    }
    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    render() {
        if (this.state.fontLoaded != true) {
            return (
                <View />
            )
        }

    return (
        <View style={styles.viewContainer}>

            <View style={styles.txtContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtTitlePlay}>PLAY </Text>
                    <Text style={styles.txtTitleChat}>CHAT</Text>
                </View>
                <Text style={styles.txtTitleLets}>Let's Make Conversation</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputStylesUser}>
                    <MaterialCommunityIcons
                        name="email-outline"
                        size={25}
                        color={'#9DAAEA'}
                        style={{
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            justifyContent: 'center',
                            top: 14,
                            left: 19
                        }}
                    />
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#9DAAEA'
                        autoCapitalize='none'
                        value={this.props.email}
                        onChangeText={email => this.props.modificaEmail(email)}
                        style={styles.txtInputUser}
                    />
                </View>
                <View style={styles.inputStylesPass}>
                    <FontAwesome
                        name="lock"
                        size={25}
                        color={'#9DAAEA'}
                        style={{
                            backgroundColor: 'transparent',
                            position: 'absolute',
                            justifyContent: 'center',
                            top: 14,
                            left: 23
                        }}
                    />
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor='#9DAAEA'
                        style={styles.txtInputPass}
                        value={this.props.senha}
                        onChangeText={senha => this.props.modificaSenha(senha)}
                        autoCapitalize='none'
                    />
                    <TouchableOpacity
                            style={styles.eyeBtn}
                            onPress={this.showPass.bind(this)}
                        >
                            {this.state.press === false ?
                                <MaterialCommunityIcons
                                    name="eye-off-outline"
                                    size={25}
                                    color={'rgb(150,150,150)'}
                                    style={{backgroundColor: 'transparent'}}
                                    color={'#9DAAEA'}
                                />
                            :
                                <MaterialCommunityIcons
                                    name="eye-outline"
                                    size={25}
                                    color={'#0b7dfa'}
                                    style={{backgroundColor: 'transparent'}}
                                />
                            }
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{top: 20}}
                    onPress={() => {Actions.forgotpass();}}
                >
                    <Text style={styles.txtForgotPass}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btnContainer}>
                <TouchableHighlight
                    underlayColor={'#0b7dfa'}
                    activeOpacity={0.3}
                    onPress={() => this._autenticarUsuario()}
                    style={{borderRadius: 8,}}
                >
                    <Text style={styles.txtSingIn}>
                        SIGN IN
                    </Text>
                </TouchableHighlight>

                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        top: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onPress={() => {Actions.register();}}
                >
                    <Text style={styles.txtCriar}>Criar </Text>
                    <Text style={styles.txtConta}>nova </Text>
                    <Text style={styles.txtConta}>Conta</Text>
                </TouchableOpacity>

            </View>
        </View>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
)
export default connect (
    mapStateToProps, {
        modificaEmail,
        modificaSenha,
        autenticarUsuario
    }
) (FormLogin);


// function mapStateToProps(state) {
//     return {
//         email: state.AutenticacaoReducer.email,
//         senha: state.AutenticacaoReducer.senha
//     };
// }
// export default connect(mapStateToProps)(FormLogin);

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#161C5C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtContainer : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
    },
    txtTitlePlay: {
        fontFamily: 'Azonix',
        color: '#fff',
        fontSize: 48
    },
    txtTitleChat: {
        fontFamily: 'Azonix',
        color: '#0b7dfa',
        fontSize: 48
    },
    txtTitleLets: {
        fontFamily: 'Azonix',
        color: '#fff',
        fontSize: 19
    },
    inputContainer : {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStylesUser: {
        top: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: WIDTH -70,
        marginBottom: 27,
        padding: 14,
        borderRadius: 8,
        flexDirection: 'row',
    },
    inputStylesPass: {
        top: 10,
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: WIDTH -70,
        marginBottom: 27,
        padding: 14,
        borderRadius: 8,
        flexDirection: 'row',
    },
    txtInputUser:{
        color: '#9DAAEA',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        left: 48
    },
    txtInputPass:{
        color: '#9DAAEA',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        left: 48
    },
    txtForgotPass:{
        color: '#9DAAEA',
        fontFamily: 'Lato-Regular',
        fontSize: 15
    },
    btnContainer : {
        flex: 2,
        top: 15
    },
    txtSingIn: {
        textAlign:'center',
        backgroundColor: '#0b7dfa',
        borderRadius: 8,
        color: '#fff',
        fontSize: 18,
        padding: 14,
        width: WIDTH -70,
        fontFamily: 'Lato-Regular',
    },
    txtCriar: {
        color: '#fff',
        fontFamily: 'Lato-Regular',
        fontSize: 15
    },
    txtConta: {
        color: '#3D91EE',
        fontFamily: 'Lato-Bold',
        fontSize: 15
    },
    eyeBtn: {
        top: 14,
        right: 20,
        alignItems:'flex-end',
        position: 'absolute'
    },
});




