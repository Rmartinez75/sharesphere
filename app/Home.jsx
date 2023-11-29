
import React from 'react'
import { StyleSheet, Text, Pressable, View, FlatList } from 'react-native'
import { router } from 'expo-router'

import FavoritesCard from './components/FavoritesCard'
import { DATA } from './data/data'

const Home = () => {
  return ( 
    <>   
      <FlatList 
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return(
            <View style={styles.buttonContainer}>
              <Pressable 
                android_ripple={{color: '#ccc'}} 
                style={({ pressed }) => [
                      styles.button,
                      pressed ? styles.buttonPressed : null,
                  ]}
                onPress={() => {
                  if(itemData.item.buttonName === 'FRIENDS'){
                    router.push('/screens/FriendsScreen')
                  } else if(itemData.item.buttonName === 'LISTS'){
                      router.push('/screens/ListScreen')
                  } else if(itemData.item.buttonName === 'CALENDARS'){
                      router.push('/screens/CalendarScreen')
                  } else if(itemData.item.buttonName === 'POLLS'){
                      router.push('/screens/PollsScreen')
                  }
                }}
              >
                  <View style={styles.innerContainer}>
                      <Text>{itemData.item.buttonName}</Text>
                  </View>
              </Pressable>
            </View>
          )
        }}
      />
      <FavoritesCard />
    </> 
  )
}

styles = StyleSheet.create({
  buttonContainer:{
    flex: 1,
    marginVertical: 25,
    marginHorizontal: 20,
    height: 50,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible'

  },
  button:{
    flex: 1,
  },
  buttonPressed:{
    opacity: 0.2
  },
  innerContainer:{
    flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }
})

export default Home;
