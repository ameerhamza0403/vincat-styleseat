import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupLoginScreen from '../SignupLoginScreen/index'
import LinearGradient from 'react-native-linear-gradient';
import { Card } from 'react-native-shadow-cards';
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
import { Rating, AirbnbRating } from 'react-native-ratings'

import styles from './Style.js'

export default class  SearchScreen extends React.Component {

 

  render () {
  
   
        return (
          
          <ScrollView>
             <StatusBar backgroundColor="#9C26B0" barStyle="light-content" />

<View style={[styles.MainContainer,{width:'100%',
        height:Dimensions.get('window').height}]}>
          
          
          <View style={{flexDirection:'row',backgroundColor:'#9C26B0',width:'100%',height:50}}>
          <View style={{width:'80%',marginTop:0,height:40,marginLeft:3,marginBottom:0,flexDirection:'row',}}>
         <Icon name="shield-search" size={28} color="#fff"  style={{marginRight:3,marginTop:5}} />
          

           <TextInput
           placeholder='Makeup'
           placeholderTextColor='white'
           style={{width:'60%',height:40,color:'white',}}/>
         
<View style={{marginLeft:110,marginTop:8}}>
  
<Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>
  Search
</Text>
</View>

         </View>
         


          </View>

         <View style={{marginTop:10,width:'100%'}}>
         <View style={{ flexDirection: 'row', marginTop: 0 ,width:'100%'}}>


<View style={{


  width: '30%',
  marginLeft:10,
 
  height:37,

  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'flex-end',
  flexDirection:'row',
  borderWidth:1,
  borderColor: '#AF2489',
}}>
   <Icon name="calendar-month-outline" size={25} color="#AF2489"  style={{marginRight:3}} />

  <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#AF2489' }}>
  Any Time
</Text>



</View>


<View style={{


width: '30%',
marginLeft:145,

height:36,

alignItems: 'center',
justifyContent: 'center',
alignSelf:'flex-end',
flexDirection:'row',
borderWidth:1,
borderColor: '#AF2489',
}}>
  <Icon name="map-marker" size={25} color="#AF2489"  style={{marginRight:3}} />

<Text style={{ fontSize: 15, fontWeight: 'bold', color: '#AF2489' }}>
View Map
</Text>



</View>






</View>

         </View>

         <View style={{ width: '100%' }}>
        <View>
          <TouchableHighlight  style={{width:'100%'}} >




            <Card style={{ height:150,marginTop: 5,width:'100%' }}>

              <View style={{ flexDirection: 'row' }}>

                <View style={{ flexDirection: 'column', margin: 3 }}>



                  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Image  
                    source={require ('../../../assets/images/haircut.jpg')}
                      style={{ width: 80,borderRadius:50, height: 80, marginTop: 0 }}
                    />
                  </View>



                </View>
            

                <View style={{width:'100%',height:100 ,flexDirection: 'column', marginLeft: 10, marginTop: 25 }}>
                  <View >

                    <Text style={{marginTop:10, fontSize: 15, fontWeight: 'bold', color: '#57595d', width: '75%',}}>Kayla Bernthold</Text>


                    <Text style={{ fontSize: 13,color: '#57595d', width: '75%', }}>Studio Elements</Text>
                    <View style={{width:80,height:30,marginTop:5}}>
                    <AirbnbRating
                    
  count={5}
  defaultRating={2}
  showRating={false}
  size={10}

/>

                    </View>
                    <View style={{alignSelf:'center',marginTop:0}}>
  
  <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#AF2489' }}>
   Check Availability
  </Text>
  </View>

                  
                  
     

                  </View>

        
                



                </View>
       

              </View>
            </Card>




          </TouchableHighlight>


        </View>
      </View>

      
                      </View>

          </ScrollView>
                 );


    
}




}