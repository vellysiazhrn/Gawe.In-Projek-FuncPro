import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screen/welcomescreen/welcomescreen'; // Perbaiki huruf besar-kecil sesuai penamaan file
import SignUp from './Screen/signup/signup';
import SignIn from './Screen/signin/signin';
import EmployeePage from './Screen/employee/employeepage';
import MainScreenEmployee from './Screen/employee/mainscreenployee'; // Sesuaikan nama dan path file ini

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="employeepage" component={EmployeePage} />
        <Stack.Screen 
          name="MainScreenEmployee" 
          component={MainScreenEmployee} 
          options={{ headerShown: false }} // Menyembunyikan header pada navigasi tab
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}