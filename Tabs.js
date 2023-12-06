import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';

import HomeScreen from './Screens/home';
import MVGScreen from './Screens/mvgScreen';
import StoryScreen from './Screens/storyScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarStyle:{height:60, paddingBottom: 8,position: 'absolute'},
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mission-Vision-Goal"
        component={MVGScreen}
        options={{
          tabBarStyle:{height:60, paddingBottom: 8,position: 'absolute'},
          tabBarLabel: "MVG",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Story"
        component={StoryScreen}
        options={{
          tabBarStyle:{height:60, paddingBottom: 8,position: 'absolute'},
          tabBarLabel: "Story",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
