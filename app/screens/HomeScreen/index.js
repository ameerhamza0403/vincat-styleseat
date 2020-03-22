import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar,ScrollView,
    TextInput
} from 'react-native';

import {Card} from 'react-native-shadow-cards';

import styles from './Styles'



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
                <StatusBar backgroundColor="#24A0ED" barStyle="light-content"></StatusBar>




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
placeholder="Email"
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
placeholder="Email"
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

<View style={[styles.loginFormTextInput,{height:70,width:'95%'}]}>

<Dropdown


data={whatData}
/>
</View>


</View>
<View style={{alignItems:'center',justifyContent:'center'}}>

<View style={styles.btnBack
      
    } >
       
<TouchableHighlight onPress={() => this.props.navigation.navigate('HomeScreen')} >

<Text style={{ color: 'black', fontSize: 12, }}>

Search
</Text>

</TouchableHighlight>
    </View>
</View>
<View style={{marginTop:30,marginLeft:20}}>

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
style={{height: 120, width: 120}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View>
    <Text style={{fontWeight:'bold',fontSize:16}}>
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
style={{height: 120, width: 120}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View>
    <Text style={{fontWeight:'bold',fontSize:16}}>
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
style={{height: 120, width: 120}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View>
    <Text style={{fontWeight:'bold',fontSize:16}}>
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
style={{height: 120, width: 120}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View>
    <Text style={{fontWeight:'bold',fontSize:16}}>
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
style={{height: 120, width: 120}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View>
    <Text style={{fontWeight:'bold',fontSize:16}}>
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
style={{height: 120, width: 120}}
source={require ('../../../assets/images/haircut.jpg')}></Image>
<View>
    <Text style={{fontWeight:'bold',fontSize:16}}>
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






