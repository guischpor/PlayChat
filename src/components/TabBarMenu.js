import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {Font} from 'expo';
import {
    MaterialIcons,
} from '@expo/vector-icons';
import { TabBar } from 'react-native-tab-view';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {habilitaInclusaoContato} from '../actions/AppActions';

class TabBarMenu extends React.Component {
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
            <View style={{elevation: 5, marginBottom: 6,}}>
                <View style={styles.viewTabBar}>
                    <View style={{left: 15, flexDirection: 'row'}}>
                        <Text style={styles.txtTitlePlay}>PLAY </Text>
                        <Text style={styles.txtTitleChat}>CHAT</Text>
                    </View>
                    <View style={{left: 160}}>
                        <TouchableOpacity
                            onPress={() => {Actions.addcontato(); this.props.habilitaInclusaoContato()} }
                        >
                            <MaterialIcons
                                name="person-add"
                                size={25}
                                color={'#fff'}
                                style={{backgroundColor: 'transparent'}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{left: 190}}>
                        <TouchableOpacity>
                            <Text style={styles.txtSair}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TabBar
                    {...this.props}
                    style={styles.tabBar}
                    indicatorStyle={{ backgroundColor: '#0b7dfa', height: 5,}}
                    labelStyle={{ color: '#fff', fontFamily: 'Lato-Regular', fontSize: 18 }}
                />
            </View>
        );
    }
}

export default connect (null, {habilitaInclusaoContato}) (TabBarMenu);

const styles = StyleSheet.create ({
    viewTabBar: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#161C5C',
        alignItems: 'center'
    },
    txtTitlePlay: {
        fontFamily: 'Azonix',
        color: '#fff',
        fontSize: 24
    },
    txtTitleChat: {
        fontFamily: 'Azonix',
        color: '#0b7dfa',
        fontSize: 24
    },
    txtSair: {
        fontFamily: 'Lato-Regular',
        color: '#fff',
        fontSize: 18
    },
    tabBar: {
        backgroundColor: '#161C5C',
        elevation: 0,
    }
})