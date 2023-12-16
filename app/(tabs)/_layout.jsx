import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs screenOptions={{headerShown: false}}>
        <Tabs.Screen 
          name='favorites' 
          options={{title:'FAVORITES'}}
        />
        <Tabs.Screen 
          name='home'
          options={{title:'HOME'}} 
        />
        <Tabs.Screen 
          name='new' 
          options={{title:'ADD NEW'}}
        />
    </Tabs>
  )
}

export default _layout
