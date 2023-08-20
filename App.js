/*eslint-disable*/

import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Details from './src/components/Details';
import Search from './src/components/Search';
import Splash from './src/components/Splash';
function App(){
  const Tab=createNativeStackNavigator()
  return (
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen component={Splash} name='splash' options={{headerShown:false}}></Tab.Screen>
  <Tab.Screen component={Home} name='Home'  options={{
    headerTitle:'',
    tabBarIcon:({focused})=>(
      <View style={{height:10,width:10,bottom:10}}>
      <Image source={require('./assets/icons/home.png')}style={{height:30,width:30}} tintColor={focused?'red':'black'}></Image>
      <Text tintColor={focused?"red":"black"}>Search</Text>
    </View>
    ),
    headerStatusBarHeight:10,
    headerRight:()=>(
     <View style={{height:10,width:60,display:'flex',alignItems:"center",justifyContent:"center"}}>
      <Image source={require('./assets/icons/profile.jpg')} style={{height:40,width:40,borderRadius:100}}></Image>
      
    </View> ),
    headerLeft:()=>(
      <View style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
       <Image source={require('./assets/icons/jobsearch.png')} style={{height:40,width:40}}></Image>
       <Text style={{color:'black',left:10,fontFamily:'Rowdies-Regular',fontSize:20}}>Home</Text>
      </View>
    ),
    
  }}></Tab.Screen>
  <Tab.Screen options={{
    headerShown:true,
    headerTitle:'Details'
  }} component={Details} name='Details'  ></Tab.Screen>
  <Tab.Screen component={Search} name='Search'options={{
    title:'Search Results',
    headerShown:true
  }}></Tab.Screen>
</Tab.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;
