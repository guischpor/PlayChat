import React from 'react';
import Welcome from './Welcome';
import FormLogin from './FormLogin';
import FormCadastro from './FormCadastro';
import ForgotPass from './ForgotPass';

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
            Key='welcome'
            component={Welcome}
            hideNavBar={true}
            initial
        />
        <Scene
            key='login'
            component={FormLogin}
            hideNavBar={true}
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
    </Scene>
);

export default class Route extends React.Component {
    render() {
        return (
            <Router
                scenes={scenes}
            />
            //<FormLogin/>
        );
    }
}

