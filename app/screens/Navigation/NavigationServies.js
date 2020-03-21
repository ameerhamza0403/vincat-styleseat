
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'



import MainMenuScreen from '../MainMenuScreen/index.js'
import LoginSignupScreen from '../SignupLoginScreen/index.js'
import LoginScreen from '../LoginScreen/index'
import SignupScreen from  '../SignupScreen/index.js'



const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
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
      </Stack.Navigator>

      
    </NavigationContainer>
  )
}

export default MainStackNavigator