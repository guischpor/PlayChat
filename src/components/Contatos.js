import React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ListView
} from 'react-native';
import {connect} from 'react-redux';
import {Font} from 'expo';
import {contatoUsuarioFetch} from '../actions/AppActions';
import _ from 'lodash';

const {width: WIDTH} = Dimensions.get('window');

class Contatos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false,
        }
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state={fonteDeDados: ds.cloneWithRows([
            'Registro1',
            'Registro2',
            'Registro3',
            'Registro4',
        ])}
    }

    componentWillMount() {
        this.props.contatoUsuarioFetch();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.contatos)
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
            <ListView
                dataSource={this.state.fonteDeDados}
                renderRow={data => <View><Text>{data}</Text></View>}
            />
        );
    }
}

mapStateToProps = state => {
    const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
        return {...val, uid}
    })
    return {contatos}
}
export default connect (mapStateToProps, {contatoUsuarioFetch}) (Contatos);

const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
});