import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator  } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { color } from 'react-native-reanimated';

import { Fontisto } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList,  RootTabParamList, TabOneParamList, TabTwoParamList} from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();
  
    return (
      <MainTab.Navigator
        initialRouteName="Chats"
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme].background,
          tabBarStyle:{
            backgroundColor: Colors[colorScheme].tint,
          },
          tabBarIndicatorStyle:{
            backgroundColor: Colors[colorScheme].background,
            height: 4,
          },
          tabBarLabelStyle:{
            fontWeight: 'bold',
          },
          tabBarShowIcon: true,
        }}>

        <MainTab.Screen
          name="Camera"
          component={TabOneScreen}
          options = {{
            tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
            tabBarLabel: () => null
          }}
        />
        <MainTab.Screen
          name="Chats"
          component={TabOneScreen}
        />
        <MainTab.Screen
          name="Status"
          component={TabTwoScreen}
        />
        <MainTab.Screen
          name="Calls"
          component={TabTwoScreen}
        />
      </MainTab.Navigator>
    );
  }


/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {name: string; color: string}) {
  return <Ionicons size={30} style={{ marginBottom: -3}}/>;
}

const TabOneStack = createNativeStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{headerTitle: 'Tab One Title'}}
      />
    </TabOneStack.Navigator>
  )
}

const TabTwoStack = createNativeStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{headerTitle: 'Tab To Title'}}
      />
    </TabTwoStack.Navigator>
  )
}