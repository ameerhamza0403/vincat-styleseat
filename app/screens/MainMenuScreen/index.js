import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupLoginScreen from '../SignupLoginScreen/index'
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar,
    TouchableOpacity,
    ImageBackground,ScrollView,
    Dimensions
} from 'react-native';

import styles from './Styles'

export default function MainMenuScreen ({navigation})  {
  
   
        return (

          <ScrollView>

<View style={[styles.MainContainer,{width:'100%',
        height:Dimensions.get('window').height}]}>
                <StatusBar backgroundColor="#000" barStyle="light-content"></StatusBar>



                <ImageBackground
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                    source={require('../../../assets/images/appBackground.jpg')}>




                    <View style={{
                        backgroundColor: '#000',
                        marginTop: 30,
                        width: '70%',
                        height: 50,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }} >
                       
<TouchableHighlight onPress={() => navigation.navigate('LoginSignup')} >
<Text style={{ color: 'white', fontSize: 12, }}>

DISCOVER SERVICES
</Text>

</TouchableHighlight>
                    </View>

                    <View style={{
                        backgroundColor: '#000',
                        marginTop: 30,
                        width: '70%',
                        height: 50,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }} >
                       
<TouchableHighlight  >
<Text style={{ color: 'white', fontSize: 12, }}>


SET UP YOUR BUSINESS
</Text>

</TouchableHighlight>
                    </View>










                </ImageBackground>




            </View>

          </ScrollView>
                 );


    
}




