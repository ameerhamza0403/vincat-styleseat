import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupLogin from '../SignupLoginScreen/index'
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
    ImageBackground
} from 'react-native';

import styles from './Styles'


function MainMenuScreen ({navigation}) {
   
        return (
            <View style={styles.MainContainer}>
                <StatusBar backgroundColor="#000" barStyle="light-content"></StatusBar>



                <ImageBackground
                    style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
                    source={require('../../../assets/images/appBackground.jpg')}>




                    <View style={{
                        backgroundColor: '#000',
                        marginTop: 30,
                        width: '70%',
                        height: 50,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 20
                    }} >
                       
<TouchableHighlight onPress={() => navigation.navigate('SignupLogin')} >
<Text style={{ color: 'white', fontSize: 17, }}>


SET UP YOUR BUSINESS
</Text>

</TouchableHighlight>
                    </View>










                </ImageBackground>




            </View>
        );


    
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="Home" component={MainMenuScreen} 
        
    
        />
        
        <Stack.Screen name="SignupLogin" component={SignupLogin} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
