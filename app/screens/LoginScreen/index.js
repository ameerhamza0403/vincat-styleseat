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

import styles from './Styles'


export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <StatusBar backgroundColor="#24A0ED" barStyle="light-content"></StatusBar>




                <View>

                    <Text>
                        Login
            </Text>
                </View>







            </View>
        );


    }
}


