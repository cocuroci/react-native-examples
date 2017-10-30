import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux'
import BoasVindas from './components/BoasVindas';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default () => (
    <Router>
        <Stack headerMode='none'>
            <Scene key='login' component={FormLogin} initial />
            <Scene key='cadastro' component={FormCadastro}  />
            <Scene key='boasVindas' component={BoasVindas} panHandlers={null}  />
        </Stack>
    </Router>
);
