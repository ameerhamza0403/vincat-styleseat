import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar,ScrollView,
    TextInput,
    Picker
} from 'react-native';

import {Card} from 'react-native-shadow-cards';

import styles from './Styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';





export default class HomeScreen extends Component {
    render() {
     

        let whatData = [{
            value: 'Type 1',
          }, {
            value: 'Type 2',
          }, {
            value: 'Type 3',
          }];
        return (
            
            
            <ScrollView>
             
            
            <View style={styles.MainContainer}>
            <StatusBar backgroundColor="#9C26B0" barStyle="light-content"></StatusBar>
        
        
        
                <View  style={{alignItems:'center',flexDirection:'row',width:'100%',height:50,backgroundColor:'#9C26B0'}}>

<TouchableWithoutFeedback>

<Icon
            name ={'menu'} color={'white'} size={40}/>
</TouchableWithoutFeedback>

<View style={{ alignItems:'center',
justifyContent:'center',flex:.9}}>


<Text style={[styles.heading,{color:'white',marginLeft:0}]}>
Vincat Style Seat
</Text>
</View>
                </View>
               





<View style={styles.viewsContainer}>
<View style={{ alignItems:'center',
justifyContent:'center',}}>


<Text style={styles.heading}>
Discover Services and Book Appointments
</Text>
</View>

<View style={{width:'100%'}}>
<View style={styles.headingContainer}>
<Text style={styles.desText}>
Where
</Text>
</View>

<View style={styles.inputContainer}>
<TextInput
placeholder="Location"
placeholderColor="#c4c3cb"
style={styles.loginFormTextInput}
onChangeText={TextInputValue =>
this.setState({TextInput_Email: TextInputValue})
}
/>
</View>


</View>


<View style={{width:'100%'}}>
<View style={styles.headingContainer}>
<Text style={styles.desText}>
When
</Text>
</View>

<View style={styles.inputContainer}>
<TextInput
placeholder="Time"
placeholderColor="#c4c3cb"
style={styles.loginFormTextInput}
onChangeText={TextInputValue =>
this.setState({TextInput_Email: TextInputValue})
}
/>
</View>


</View>

<View style={{width:'100%'}}>
<View style={styles.headingContainer}>
<Text style={styles.desText}>
What
</Text>
</View>

<View style={{height:43,width:'100%',alignItems:'center'}}>

<Picker
               // selectedValue={this.state.UserType}
               // onValueChange={this.updateUser}
                style={{width:'90%'}}>
                <Picker.Item label="Select Category..." value="empty" />
                <Picker.Item label="Type 1" value="type1" />
                <Picker.Item label="Type 2" value="type2" />
              </Picker>
</View>


</View>
<View style={{alignItems:'center',justifyContent:'center'}}>

<View style={styles.btnBack
      
    } >
       
<TouchableHighlight  >

<Text style={{ color: 'white', fontSize: 12, }}>

Search
</Text>

</TouchableHighlight>
    </View>
</View>
<View style={{marginTop:20,marginLeft:20}}>

<View>

<Text style={styles.heading}>
Step into your Swager
</Text>
</View>


</View>


 
</View>

<View style={{flexDirection:'row',marginTop:10}}>

<View
style={{
flex: 1,

justifyContent: 'center',
alignItems: 'center',
marginTop: 0,
}}>
<TouchableHighlight onPress={() => this.props.navigation.navigate('Search')} >
<Card style={{width: 130, height: 180}}>
<View
style={{
flexDirection: 'column',
justifyContent: 'center',
flex: 1,
flexDirection: 'column',
alignItems: 'center',
}}>
<Image
style={{height: 120, width: 120,borderRadius:150}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View style={{backgroundColor:'#9C26B0' ,width:'100%',alignItems:'center',height:25,marginTop:15}}>
    <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>
        Haircut
    </Text>
</View>


</View>
</Card>
</TouchableHighlight>
</View>


<View
style={{
flex: 1,

justifyContent: 'center',
alignItems: 'center',
marginTop: 0,
}}>
<TouchableHighlight>
<Card style={{width: 130, height: 180}}>
<View
style={{
flexDirection: 'column',
justifyContent: 'center',
flex: 1,
flexDirection: 'column',
alignItems: 'center',
}}>
<Image
style={{height: 120, width: 120,borderRadius:150}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View style={{backgroundColor:'#9C26B0' ,width:'100%',alignItems:'center',height:25,marginTop:15}}>
    <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>
        Haircut
    </Text>
</View>


</View>
</Card>
</TouchableHighlight>
</View>




<View
style={{
flex: 1,

justifyContent: 'center',
alignItems: 'center',
marginTop: 0,
}}>
<TouchableHighlight>
<Card style={{width: 130, height: 180}}>
<View
style={{
flexDirection: 'column',
justifyContent: 'center',
flex: 1,
flexDirection: 'column',
alignItems: 'center',
}}>
<Image
style={{height: 120, width: 120,borderRadius:150}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View style={{backgroundColor:'#9C26B0' ,width:'100%',alignItems:'center',height:25,marginTop:15}}>
    <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>
        Haircut
    </Text>
</View>


</View>
</Card>
</TouchableHighlight>
</View>



</View>


<View style={{flexDirection:'row',marginTop:10}}>

<View
style={{
flex: 1,

justifyContent: 'center',
alignItems: 'center',
marginTop: 0,
}}>
<TouchableHighlight>
<Card style={{width: 130, height: 180}}>
<View
style={{
flexDirection: 'column',
justifyContent: 'center',
flex: 1,
flexDirection: 'column',
alignItems: 'center',
}}>
<Image
style={{height: 120, width: 120,borderRadius:150}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View style={{backgroundColor:'#9C26B0' ,width:'100%',alignItems:'center',height:25,marginTop:15}}>
    <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>
        Haircut
    </Text>
</View>


</View>
</Card>
</TouchableHighlight>
</View>


<View
style={{
flex: 1,

justifyContent: 'center',
alignItems: 'center',
marginTop: 0,
}}>
<TouchableHighlight>
<Card style={{width: 130, height: 180}}>
<View
style={{
flexDirection: 'column',
justifyContent: 'center',
flex: 1,
flexDirection: 'column',
alignItems: 'center',
}}>
<Image
style={{height: 120, width: 120,borderRadius:150}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View style={{backgroundColor:'#9C26B0' ,width:'100%',alignItems:'center',height:25,marginTop:15}}>
    <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>
        Haircut
    </Text>
</View>


</View>
</Card>
</TouchableHighlight>
</View>




<View
style={{
flex: 1,

justifyContent: 'center',
alignItems: 'center',
marginTop: 0,
}}>
<TouchableHighlight>
<Card style={{width: 130, height: 180}}>
<View
style={{
flexDirection: 'column',
justifyContent: 'center',
flex: 1,
flexDirection: 'column',
alignItems: 'center',
}}>
<Image
style={{height: 120, width: 120,borderRadius:150}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View style={{backgroundColor:'#9C26B0' ,width:'100%',alignItems:'center',height:25,marginTop:15}}>
    <Text style={{fontWeight:'bold',color:'white',fontSize:16}}>
        Haircut
    </Text>
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






