import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupLoginScreen from '../SignupLoginScreen/index'
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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

export default class  SignupScreen extends React.Component {

  render () {
  
   
        return (

          <ScrollView>

<View style={[styles.MainContainer,{width:'100%',
        height:Dimensions.get('window').height}]}>
          <StatusBar backgroundColor="#9C26B0" barStyle="light-content"></StatusBar>



          <LinearGradient colors={['#9C26B0', '#AF2489',]} style={styles.gradientBack}>
          <View style={{marginTop:100}}>

<Text style={{ color: 'white', fontSize: 25, }}>

Setup your account
</Text>
</View>

<View style={{marginTop:10 ,}}>


</View>

<View style={{marginTop:40,width:'80%',alignContent:'center'}}>

<View style={styles.btnBack
                      
                    } >
     <Icon 
     style={{marginRight:10}}
            name ={'facebook-box'} color={'white'} size={40}/>
                       
                       
<TouchableHighlight  >


<Text style={{ width:130,color: 'white', fontSize: 12, }}>

Continue with Facebook
</Text>

</TouchableHighlight>
                    </View>
                    <View style={styles.btnBack
                      
                    } >
     <Icon 
     style={{marginRight:10}}
            name ={'gmail'} color={'white'} size={40}/>
                       
                       
<TouchableHighlight  >


<Text style={{ width:130,color: 'white', fontSize: 12, }}>

Continue with Facebook
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
                       
<TouchableHighlight onPress={() => navigation.navigate('LoginSignup')} >
 
<Text style={{ color: 'white', fontSize: 12, }}>

Continue
</Text>

</TouchableHighlight>
                    </View>

                    <Text style={{ marginTop:30,color: 'white', fontSize: 10}}>

By signing up , i am agree with TERMS & CONDITIONS
</Text>
                    </View>







</View>
           






                    </LinearGradient>




            </View>

          </ScrollView>
                 );


    
}




}