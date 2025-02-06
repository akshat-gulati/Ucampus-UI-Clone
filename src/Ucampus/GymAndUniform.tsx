import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GymAndUniform = () => {
  return (
    <View style={styles.container}>
      <View style={{width:90}}>
        <Text style={{ fontSize: 20 }}>Gym</Text>
        <Text style={{ color: "grey", fontSize:11 }}>Get Membership</Text>
      </View>
      <Image style={{ height: 70, width: 70 }} source={require('../Assets/gym.gif')} />
    </View>
  )
}

export default GymAndUniform

const styles = StyleSheet.create({
  container: {
    marginVertical:10,
    padding: 5,
    backgroundColor: "white",
    flexDirection: "row",
    gap: 5,
    height: 90,
    width: 180,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 9,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 13,
    alignItems:"center"
  }
})