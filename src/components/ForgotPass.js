import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import {Font} from 'expo';
import {
    MaterialIcons,
    FontAwesome,
    MaterialCommunityIcons,
    Ionicons
} from '@expo/vector-icons';
import {
    Actions,
} from 'react-native-router-flux';


const {width: WIDTH} = Dimensions.get('window');

export default class ForgotPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
            email: '',
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

    render() {
        if (this.state.fontLoaded != true) {
            return (
                <View />
            )
        }

    return (
        <View style={styles.viewContainer}>
            <View style={styles.navBarStyle}>
                <TouchableHighlight
                    underlayColor={'#161C5C'}
                    activeOpacity={0.3}
                    onPress= {() => {
                        Actions.pop()
                    }}
                >
                    <Ionicons
                        name="ios-arrow-back"
                        size={30}
                        color={'#fff'}
                        style={{
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            left: 5
                        }}
                    />
                </TouchableHighlight>
                <Text style={styles.txtTitle}>FORGOT PASSWORD</Text>
            </View>
            <View style={styles.viewFrase}>
                <Text style={styles.txtFrase}>
                    Nós só precisamos do seu email, as instruções serão enviadas para o seu email.
                </Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputStylesEmail}>
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
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email: email})}
                        style={styles.txtInputEmail}
                    />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <TouchableHighlight
                    underlayColor={'#0b7dfa'}
                    activeOpacity={0.3}
                    onPress={() => false}
                    style={{borderRadius: 8,}}
                >
                    <Text style={styles.txtPassword}>
                        RESET PASSWORD
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#161C5C',
    },
    navBarStyle: {
        backgroundColor: '#161C5C',
        padding: 10,
        height: 50,
        flexDirection: 'row',
        width: WIDTH,
        //elevation: 5
    },
    txtTitle: {
        fontFamily: 'Azonix',
        color: '#fff',
        fontSize: 19,
        top: 7,
        left: 90,
        flex: 2
    },
    viewFrase: {
        alignItems: 'center',
        top: 20
    },
    txtFrase: {
        color: '#fff',
        fontFamily: 'Lato-Bold',
        textAlign: 'center',
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
    },
    inputContainer : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStylesEmail: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        width: WIDTH -70,
        marginBottom: 27,
        padding: 14,
        borderRadius: 8,
        flexDirection: 'row',
    },
    txtInputEmail: {
        color: '#9DAAEA',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        left: 48
    },
    btnContainer : {
        flex: 1,
        top: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtPassword: {
        textAlign:'center',
        backgroundColor: '#0b7dfa',
        borderRadius: 8,
        color: '#fff',
        fontSize: 18,
        padding: 14,
        width: WIDTH -70,
        fontFamily: 'Lato-Regular',
    },
});