import { Pressable, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AntDesign } from '@expo/vector-icons';

const AddNewFriend = () => {
  const [openFriendModal, setOpenFriendModal] = useState(false)
  return (
    <View>
      <Text>Add New</Text>
    </View>
    // <Modal 
    //   visible={openFriendModal}
    //   animationType='slide'
    //   presentationStyle='pageSheet'
    //   // onRequestClose={()=>setOpenFriendModal(false)}
    // >
    //   <TouchableOpacity onPress={()=>setOpenFriendModal(false)}>
    //     <AntDesign 
    //       name="closecircle" 
    //       size={24} 
    //       color="black" 
          
    //     />
    //   </TouchableOpacity>
                    
    // </Modal>
  )
}

export default AddNewFriend

const styles = StyleSheet.create({})