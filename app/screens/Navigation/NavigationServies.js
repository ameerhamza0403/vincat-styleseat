
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainMenuScreen from '../MainMenuScreen/index.js'
import LoginSignupScreen from '../SignupLoginScreen/index.js'
import LoginScreen from '../LoginScreen/index'
import SignupScreen from  '../SignupScreen/index.js'
import HomeScreen from '../HomeScreen/index.js'
import SearchScreen from '../SearchScreen/index.js'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';



const DrawerNavigator = createDrawerNavigator();
const Drawer = () => (
    <DrawerNavigator.Navigator initialRouteName="HomeScreen">
        <DrawerNavigator.Screen name="HomeScreen" component={HomeScreen}/>
    </DrawerNavigator.Navigator>
);
  
const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={{
        headerShown: false
      }}
      >
        
        {/* <Stack.Screen
          name='Drawer'
          component={Drawer}
        
          
        /> */}

        <Stack.Screen
         name='Home'
          component={MainMenuScreen}
        
          
        />

        <Stack.Screen
          name='LoginSignup'
          component={LoginSignupScreen}
                  />

<Stack.Screen
          name='Login'
          component={LoginScreen}
                  />

<Stack.Screen
          name='Signup'
          component={SignupScreen}
                  />

<Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
                  />
                  
<Stack.Screen
          name='Search'
          component={SearchScreen}
                  />
           
      </Stack.Navigator>

      
    </NavigationContainer>
  )
}

export default MainStackNavigator