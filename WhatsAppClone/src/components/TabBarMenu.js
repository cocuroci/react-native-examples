import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import { Actions } from 'react-native-router-flux';

const image = require('../images/adicionar_contato.png');

export default props => (
    <View style={{ paddingTop: 20, backgroundColor: '#115E54', elevation: 4, marginBottom: 6}}>
        <StatusBar barStyle='light-content' />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 20, marginRight: 20 }}>
            <View style={{ height: 50, justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20 }}>WhatsApp Clone</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => Actions.adicionarContatos() }
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginRight: 10}}>
                            <Image source={image} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, color: 'white' }}>Sair</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <TabBar {...props} style={{ backgroundColor: '#115E54'}} />
    </View>
);