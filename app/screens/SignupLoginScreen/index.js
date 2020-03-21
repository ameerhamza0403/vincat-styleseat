import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
    ScrollView,
    Dimensions
} from 'react-native';

import styles from './Styles'
import SignupLoginTabs from '../SignupLoginTabs/index'



export default function SignupLoginScreen ({navigation}) {

   
  return (

            <ScrollView>
<View style={[styles.MainContainer,{width:'100%',
        height:Dimensions.get('window').height,}]}>
               <StatusBar backgroundColor="#9C26B0" barStyle="light-content"></StatusBar>



<LinearGradient colors={['#9C26B0', '#AF2489',]} style={styles.gradientBack}>


                <View style={{ marginTop: 100 }}>

                    <Text style={styles.text}>
                        Vincat StyleSeat
            </Text>
                </View>

                <View style={styles.viewsCont}>
                    <Icon name="calendar-blank" size={40} color="#fff"  style={{marginRight:10}}/>

                    <View>

                        <Text style={styles.headingText}>
                            SKIP THE FRONT DESK

                        </Text>
                        <Text style={styles.desText}>
                            Book beauty appointments instantly
                        </Text>
                    </View>
                </View>

                
                <View style={styles.viewsCont}>
                    <Icon name="cellphone" size={40} color="#fff"  style={{marginRight:10}} />

                    <View>

                        <Text style={styles.headingText}>
                        PAY WITH YOUR PHONE

                        </Text>
                        <Text style={styles.desText}>
                        No awkward tip moment
                        </Text>
                    </View>
                </View>

                <View style={styles.viewsCont}>
                    <Icon name="book" size={40} color="#fff"  style={{marginRight:10}} />

                    <View>

                        <Text style={styles.headingText}>
                           BOOK YOUR FAVOURITES

                        </Text>
                        <Text style={styles.desText}>
                         Book with over 320k beauty professional
                        </Text>
                    </View>
                </View>

                <View style={styles.viewsCont}>
                    <Icon name="thumb-up" size={40} color="#fff" style={{marginRight:10}}/>

                    <View>

                        <Text style={styles.headingText}>
                            ALWAYS LOOK GOOD

                        </Text>
                        <Text style={styles.desText}>
                 Last minute appointments available
                        </Text>
                    </View>
                    
                </View>




<View style={{flexDirection:'row'}} >


<View style={styles.btnCont} >
                       
<TouchableHighlight onPress={() => navigation.navigate('Signup')}>
<Text style={{ color: '#000', fontSize: 10, }}>


Signup
</Text>

</TouchableHighlight>
                    </View>

                    <View style={styles.btnCont} >
                       
<TouchableHighlight  onPress={() => navigation.navigate('Login')}  >
<Text style={{ color: '#000', fontSize: 10, }}>


Login
</Text>

</TouchableHighlight>
                    </View>

</View>

<View>

    <TouchableHighlight>

    <Text style={{color:'#fff'}}>

Skip
</Text>
    </TouchableHighlight>

    
</View>


</LinearGradient>



            </View>

            </ScrollView>
            
        );


    

}

