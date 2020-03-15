import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar
} from 'react-native';

import SplashScreen from './app/screens/SplashScreen/index'


export default class App extends Component {
    render() {
        return (
            <View >
              <SplashScreen/>


            </View>
        );


    }
}



