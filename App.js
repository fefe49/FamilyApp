//Import
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FelixScreen1 from "./src/screens/FelixScreen1";

const FelixScreen2 = () =>{
  return (
    <View>
      <Text>FelixScreen2</Text>
    </View>
  )
}

const NilsScreen1 = () =>{
  return (
    <View>
      <Text>NilsScreen1</Text>
    </View>
  )
}

const NilsScreen2 = () =>{
  return (
    <View>
      <Text>NilsScreen2</Text>
    </View>
  )
} 

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
              <Stack.Screen name='FelixScreen1' component={FelixScreen1} options={{ title: 'Félix 1'}}/>
              <Stack.Screen name='FelixScreen2' component={FelixScreen2} options={{ title: 'Felix 2'}}/>
            </Stack.Navigator>
            )}
        </Tab.Screen>
        <Tab.Screen name='Nils'>
          {() => (
            <Stack.Navigator>
              <Stack.Screen name='NilsScreen1'component={NilsScreen1} options={{ title: 'Nils 1'}}/>
              <Stack.Screen name='NilsScreen2'component={NilsScreen2} options={{ title: 'Nils 2'}}/>
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
});
