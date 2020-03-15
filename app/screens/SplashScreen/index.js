import React, {Component} from 'react';
import { Button, View, Text,StatusBar,Image,ScrollView} from 'react-native';

import styles from './Styles'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';




export default class SplashScreen extends Component {
    render (){

    return (
        <ScrollView>
 <View style={styles.SplashContaner}>
          <StatusBar
            backgroundColor="#000"
            barStyle="light-content"></StatusBar>
         
  
          <View style={styles.textCon}>
            <Text style={styles.text}> Vincat StyleSeat  </Text>
          </View>
  
      
            <View style={styles.BottomContainer}>
             < MaterialIndicator
                  color="#000000"/>
            </View>
          
        </View>
        </ScrollView>
       
      );
  
    }
}