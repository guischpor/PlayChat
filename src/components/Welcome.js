import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    Dimensions
} from 'react-native';

import {Font} from 'expo';
import {
    Actions,
} from 'react-native-router-flux';


const {width: WIDTH} = Dimensions.get('window');

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
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
            <View style={styles.txtTitleResgistration}>
                <Text style={styles.txtTitle}>WELCOME</Text>
            </View>
            <View style={styles.txtContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.txtTitlePlay}>PLAY </Text>
                    <Text style={styles.txtTitleChat}>CHAT</Text>
                </View>
                <Text style={styles.txtTitleLets}>Let's Make Conversation</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableHighlight
                    underlayColor={'#0b7dfa'}
                    activeOpacity={0.3}
                    onPress={() => {Actions.login();}}
                    style={{borderRadius: 8}}
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

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#161C5C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtTitleResgistration: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    txtTitle: {
        fontFamily: 'Azonix',
        color: '#fff',
        fontSize: 19,
        top: 20,
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
    btnContainer : {
        flex: 2,
        top: 30
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
});