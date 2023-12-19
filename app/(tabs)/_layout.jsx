import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen 
          name='favorites' 
          options={{
            title:'FAVORITES',
            tabBarIcon:({color, size})=>(<MaterialIcons name="favorite" size={24} color="black" />)
          }}
          
        />
        <Tabs.Screen 
          name='home'
          options={{
            title:'HOME',
            tabBarIcon:({color, size})=>(<AntDesign name="home" size={24} color="black" />)
          }} 
        />
        <Tabs.Screen 
          name='new' 
          options={{
            title:'ADD NEW',
            tabBarIcon:({color, size})=>(<Entypo name="new-message" size={24} color="black" />)
          }}
        />
    </Tabs>
  )
}

export default _layout
