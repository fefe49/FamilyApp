//Import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FelixScreen1 from "./src/screens/FelixScreen1";
import FelixScreen2 from "./src/screens/FelixScreen2";
import NilsScreen1 from "./src/screens/NilsScreen1";
import NilsScreen2 from "./src/screens/NilsScreen2";
import Task from "./src/components/Task";
import React from "react";


//NAVIGATORS
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Felix'>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name='FelixScreen1' component={FelixScreen1} options={{ title: 'Record 3x3'}}/>
              <Stack.Screen name='FelixScreen2' component={FelixScreen2} options={{ title: 'Record 4x4'}}/>
            </Stack.Navigator>
            )}
        </Tab.Screen>
        <Tab.Screen name='Nils'>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name='NilsScreen1'component={NilsScreen1} options={{ title: 'Option :'}}/>
              <Stack.Screen name='NilsScreen2'component={NilsScreen2} options={{ title: 'To Do List'}}/>
            </Stack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 30,
  },
  writeTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});


