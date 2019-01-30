import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet
} from 'react-native';
import {connect} from 'react-redux';
import {Font} from 'expo';
import {contatoUsuarioFetch} from '../actions/AppActions';

const {width: WIDTH} = Dimensions.get('window');

class Contatos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        }
    }

    componentWillMount() {
        this.props.contatoUsuarioFetch();
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
            <View>
                <Text>Contatos</Text>
            </View>
        );
    }
}

export default connect (null, {contatoUsuarioFetch}) (Contatos);

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});