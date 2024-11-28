import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import welcomescreen from './welcomescreen';
import signup from './SignUp'; // Pastikan path-nya benar
import signin from './LoginScreen'; // Pastikan path-nya benar
import employeepage from './EmployeePage'; // Pastikan path-nya benar


// Membuat Stack Navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcomescreen">
        <Stack.Screen
          name="welcomescreen"
          component={welcomescreen}
          options={{ title: 'Welcome Screen' }}
        />
        <Stack.Screen
          name="signin"
          component={signin}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="signup"
          component={signup}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="employeepage"
          component={employeepage}
          options={{ title: 'Employee Page' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
