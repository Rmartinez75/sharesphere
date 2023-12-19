
import React, { useState } from 'react'
import { 
  StyleSheet, 
  Text, 
  Pressable, 
  View, FlatList, 
  Modal, 
  TouchableOpacity 
} from 'react-native'
import { Stack } from 'expo-router'
import AddNewList from './AddNewList'
import AddNewFriend from './AddNewFriend'
import AddNewCalendar from './AddNewCalendar'
import AddNewPoll from './AddNewPoll'
import { ADD_NEW_DATA } from '../../data/data'
import { AntDesign } from '@expo/vector-icons';

const AddNew = () => {
  const [openFriendModal, setOpenFriendModal] = useState(false)
  const [openListModal, setOpenListModal] = useState(false)
  const [openCalendarModal, setOpenCalendarModal] = useState(false)
  const [openPollModal, setOpenPollModal] = useState(false)

  function closeModal(){
    setOpenFriendModal(false)
  }

  return (
    <>   
      <Stack.Screen options={{headerShown: true, title:'Home'}} />
      <FlatList 
        data={ADD_NEW_DATA}
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
                  if(itemData.item.buttonName === 'ADD NEW FRIEND'){
                    setOpenFriendModal(true)
                  } else if(itemData.item.buttonName === 'ADD NEW LIST'){
                      setOpenListModal(true)
                  } else if(itemData.item.buttonName === 'ADD NEW CALENDAR'){
                      setOpenCalendarModal(true)
                  } else if(itemData.item.buttonName === 'ADD NEW POLL'){
                      setOpenPollModal(true)
                  }
                }}
              >                
                <View style={styles.innerContainer}>
                    <Text>{itemData.item.buttonName}</Text>
                </View>
              </Pressable>
              <Modal 
                visible={openFriendModal}
                animationType='slide'
                presentationStyle='pageSheet'
              >
                <TouchableOpacity onPress={closeModal}>
                <AntDesign 
                  name="closecircle" 
                  size={24} 
                  color="black"                       
                />
                </TouchableOpacity>
                <AddNewFriend />
              </Modal>
              <Modal 
                visible={openListModal}
                animationType='slide'
                presentationStyle='pageSheet'
              >
                <AddNewList />
              </Modal>
              <Modal 
                visible={openCalendarModal}
                animationType='slide'
                presentationStyle='pageSheet'
              >
                <AddNewCalendar />
              </Modal>
              <Modal 
                visible={openPollModal}
                animationType='slide'
                presentationStyle='pageSheet'
              >
                <AddNewPoll />
              </Modal>
            </View>
          )
        }}
      />
    </> 
  )
}

export default AddNew

const styles = StyleSheet.create({
  buttonContainer:{
    flex: 1,
    marginVertical: 32,
    marginHorizontal: 20,
    height: 65,
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
