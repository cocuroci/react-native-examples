import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux'
import BoasVindas from './components/BoasVindas';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import Principal from './components/Principal';
import AdicionarContatos from './components/AdicionarContatos';

export default () => (
    <Router>
        <Stack navBarButtonColor='white' navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: 'white' }}>
            <Scene key='login' component={FormLogin} hideNavBar />
            <Scene key='cadastro' component={FormCadastro} hideNavBar />
            <Scene key='boasVindas' component={BoasVindas} panHandlers={null} hideNavBar />
            <Scene key='principal' component={Principal} panHandlers={null}  hideNavBar  />
            <Scene key='adicionarContatos' component={AdicionarContatos} title='Adicionar Contatos' hideNavBar={false} />
        </Stack>
    </Router>
);
