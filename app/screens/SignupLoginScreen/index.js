import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Image,
    TouchableHighlight,
    ActivityIndicator,
    StatusBar,
    ScrollView
} from 'react-native';

import styles from './Styles'


export default class SignupLoginScreen extends Component {
    render() {
        return (

            <ScrollView>
<View style={styles.MainContainer}>
                <StatusBar backgroundColor="#000" barStyle="light-content"></StatusBar>




                <View style={{ marginTop: 100 }}>

                    <Text style={styles.text}>
                        Vincat StyleSeat
            </Text>
                </View>

                <View style={styles.viewsCont}>
                    <Icon name="calendar-blank" size={40} color="#000"  style={{marginRight:10}}/>

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
                    <Icon name="cellphone" size={40} color="#000"  style={{marginRight:10}} />

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
                    <Icon name="book" size={40} color="#000"  style={{marginRight:10}} />

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
                    <Icon name="thumb-up" size={40} color="#000" style={{marginRight:10}}/>

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
                       
<TouchableHighlight onPress={() => navigation.navigate('SignupLogin')} >
<Text style={{ color: 'white', fontSize: 10, }}>


Signup
</Text>

</TouchableHighlight>
                    </View>

                    <View style={styles.btnCont} >
                       
<TouchableHighlight onPress={() => navigation.navigate('SignupLogin')} >
<Text style={{ color: 'white', fontSize: 10, }}>


Login
</Text>

</TouchableHighlight>
                    </View>

</View>

<View>

    <TouchableHighlight>

    <Text>

Skip
</Text>
    </TouchableHighlight>

    
</View>





            </View>

            </ScrollView>
            
        );


    }
}



