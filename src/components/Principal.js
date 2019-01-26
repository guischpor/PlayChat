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
    MaterialCommunityIcons,
    Ionicons
} from '@expo/vector-icons';
import {
    Actions,
} from 'react-native-router-flux';
import {connect} from 'react-redux';

import { modificaEmail} from '../actions/AutenticacaoActions';

const {width: WIDTH} = Dimensions.get('window');

class Principal extends React.Component {
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
                    <Text style={styles.txtTitle}>PRINCIPAL</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
    }
)
export default connect (
    mapStateToProps, {
        modificaEmail
    }
) (Principal);

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
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
});