import MainStack from './app/screens/Navigation/NavigationServies.js'
import React, { Component } from 'react';
import {

  StyleSheet,
  View,
  Text,
  AsyncStorage,
  ScrollView,
  StatusBar,
  Dimensions
 
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';





import {
  WaveIndicator,
  SkypeIndicator,
  MaterialIndicator
} from 'react-native-indicators';

import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
   // this._loadData();
  }
  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
     // await AsyncStorage.setItem('SplashViewed', '1');
    }
  }
 render(){
  if (this.state.isLoading) {
    return <SplashScreen/>
   }
  else {

    return <MainStack /> 
    
   }
 }
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
});



function SplashScreen (props) {


  return (
      <ScrollView>
<View style={{width:'100%',
      height:Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,}}>
          <StatusBar backgroundColor="#000" barStyle="light-content"></StatusBar>

<LinearGradient colors={['#000428', '#004e92']} style={{ 
    flex: 1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
    }}>

  

<View >
          <Text style={{    color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 150,
        fontFamily: 'AmericanTypewriter-Light' }}> Vincat StyleSeat  </Text>
        </View>

    
          <View style={{ width:20,
       height:20,
       marginTop:50,
       
      
        alignItems: 'center',}}>
           < MaterialIndicator
                color="#fff"/>
          </View>
        
   
 
</LinearGradient>

   </View>
      </ScrollView>
     
    );

  }


