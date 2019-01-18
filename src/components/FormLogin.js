import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

export default class FormLogin extends React.Component {
    render() {
    return (
        <View style={styles.container}>
            <View>
                <Text>PLAY CHAT</Text>
                <Text>Let's Make Conversation</Text>
            </View>

            <View>
                <TextInput
                    placeholder='Username'
                    style={{
                        backgroundColor: ''
                    }}
                />
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <Text>Have not registered yet?.</Text>

                <TouchableOpacity>
                    <Text>Register now.</Text>
                </TouchableOpacity>
            </View>

            <View>
            <TouchableHighlight
                underlayColor={'#0b7dfa'}
                activeOpacity={0.3}
                onPress={() => false}
                style={{
                    borderRadius: 12,
                }}
            >
                <Text style={styles.txtSingIn}>
                    Sign In
                </Text>
            </TouchableHighlight>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f22cf',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtSingIn: {
        textAlign:'center',
        backgroundColor: '#0b7dfa',
        borderRadius: 12,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        padding: 10,
        width: 350,
    },
});
