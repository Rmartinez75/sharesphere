import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Modal } from 'react-native-paper'

const AddFriendModal = ({modalVisible}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType='slide'
      presentationStyle='pageSheet'
    >
      <View>
        <Text>AddFriendModal</Text>
      </View>
    </Modal>
  )
}

export default AddFriendModal

const styles = StyleSheet.create({})
