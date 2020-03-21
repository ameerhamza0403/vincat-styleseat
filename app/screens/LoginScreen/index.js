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
    Dimensions,
    TextInput
} from 'react-native';

import styles from './Styles'

export default class LoginScreen extends React.Component  {
  
   render() {
        return (

          <ScrollView>

<View style={[styles.MainContainer,{width:'100%',
        height:Dimensions.get('window').height}]}>
          <StatusBar backgroundColor="#9C26B0" barStyle="light-content"></StatusBar>



          <LinearGradient colors={['#9C26B0', '#AF2489',]} style={styles.gradientBack}>
          <View style={{marginTop:100}}>

<Text style={{ color: 'white', fontSize: 25, }}>

Login your Account
</Text>
</View>

<View style={{marginTop:10 ,}}>


</View>

<View style={{marginTop:40,width:'80%',alignContent:'center'}}>

<View style={styles.btnBack
                      
                    } >
                      <Image
                      style={styles.btnIcon}
  source={require ('../../../assets/images/facebook.png')}
  />
                       
<TouchableHighlight  >


<Text style={{ color: 'white', fontSize: 12, }}>

Continue with Facebook
</Text>

</TouchableHighlight>
                    </View>

                    <View style={styles.btnBack
                      
                    } >
                      <Image
                      style={styles.btnIcon}
  source={require ('../../../assets/images/gmail.png')}
  />
                       
<TouchableHighlight >


<Text style={{ color: 'white', fontSize: 12, }}>

Continue with Gmail
</Text>

</TouchableHighlight>
                    </View>
                    <View style={{alignItems:'center',marginTop:20}}>
                      <Text style={{color:'white'}}>
                        Or 
                      </Text>
<View style={{width:'100%',alignItems:'center',marginTop:20}}>

  
<TextInput
  placeholder="Email"
  placeholderColor="#c4c3cb"
  style={styles.loginFormTextInput}
  onChangeText={TextInputValue =>
    this.setState({TextInput_Email: TextInputValue})
  }
/>

<TextInput
  placeholder="Password"
  placeholderColor="#c4c3cb"
  style={styles.loginFormTextInput}
  onChangeText={TextInputValue =>
    this.setState({TextInput_Email: TextInputValue})
  }
/>
</View>

<View style={styles.btnBack
                      
                    } >
                       
<TouchableHighlight onPress={() => this.props.navigation.navigate('HomeScreen')} >
 
<Text style={{ color: 'white', fontSize: 12, }}>

Login Now
</Text>

</TouchableHighlight>
                    </View>

                    <Text style={{ marginTop:30,color: 'white', fontSize: 10}}>

Forget Password? Click here.
</Text>
                    </View>







</View>
           






                    </LinearGradient>




            </View>

          </ScrollView>
                 );


    
}




}