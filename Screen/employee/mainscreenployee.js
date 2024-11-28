import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import AppliedOfferingEmployee from './appliedofferingployee';
import EmployeePage from './employeepage';
import ProfileEmployee from './profilemployee';

const Tab = createBottomTabNavigator();

const MainScreenEmployee = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Applied') {
            iconName = focused ? 'briefcase' : 'briefcase-outline';
          } else if (route.name === 'Employee') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Applied" component={AppliedOfferingEmployee} />
      <Tab.Screen name="Employee" component={EmployeePage} />
      <Tab.Screen name="Profile" component={ProfileEmployee} />
    </Tab.Navigator>
  );
};

export default MainScreenEmployee;
