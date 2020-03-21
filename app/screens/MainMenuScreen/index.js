import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupLoginScreen from '../SignupLoginScreen/index'
import LinearGradient from 'react-native-linear-gradient';

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

export default class MainMenuScreen extends React.Component {
  
   render(){
        return (

          <ScrollView>

<View style={[styles.MainContainer,{width:'100%',
        height:Dimensions.get('window').height}]}>
          <StatusBar backgroundColor="#9C26B0" barStyle="light-content"></StatusBar>



          <LinearGradient colors={['#9C26B0', '#AF2489',]} style={styles.gradientBack}>
          <View style={{marginTop:150}}>

<Text style={{ color: 'white', fontSize: 25, }}>

Welcome
</Text>
</View>

<View style={{marginTop:30 ,}}>

<Text style={{ color: 'white', fontSize: 15, alignContent:'center',justifyContent:'center'}}>

Discover & Book Beauty  & Barber Appointments
</Text>
</View>

<View style={{marginTop:150,width:'80%',alignContent:'center'}}>

<View style={styles.btnBack
                      
                    } >
                       
<TouchableHighlight onPress={() => this.props.navigation.navigate('LoginSignup')} >
<Text style={{ color: 'white', fontSize: 12, }}>

DISCOVER SERVICES
</Text>

</TouchableHighlight>
                    </View>

                    <View style={
                    styles.btnBack} >
                       
<TouchableHighlight  >
<Text style={{ color: 'white', fontSize: 12, }}>


SET UP YOUR BUSINESS
</Text>

</TouchableHighlight>
                    </View>







</View>
           






                    </LinearGradient>




            </View>

          </ScrollView>
                 );


    
}
}




