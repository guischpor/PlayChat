import React from 'react';
import BoasVindas from './BoasVindas';
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import ForgotPass from './ForgotPass';
import Principal from './Principal';
import AdicionarContato from './AdicionarContato';

import {
    Router,
    Scene,
    Actions,
} from 'react-native-router-flux';


const scenes = Actions.create(
    <Scene
        key='root'
    >
        <Scene
            key='boasvindas'
            component={BoasVindas}
            hideNavBar={true}
        />
        <Scene
            key='login'
            component={FormLogin}
            hideNavBar={true}
            //initial
        />
        <Scene
            key='register'
            component={FormCadastro}
            hideNavBar={true}
        />
        <Scene
            key='forgotpass'
            component={ForgotPass}
            hideNavBar={true}
        />
        <Scene
            key='principal'
            component={Principal}
            hideNavBar={true}
            initial
        />
        <Scene
            key='addcontato'
            component={AdicionarContato}
            hideNavBar={true}
        />
    </Scene>
);

export default class Route extends React.Component {
    render() {
        return (
            <Router
                scenes={scenes}
            />
        );
    }
}

