import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GymAndUniform = () => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={{fontSize: 20}}>Gym</Text>
            <Text style={{color:"grey"}}>Get Membership</Text>
        </View>

        <Image style={{height: 80, width: 80}} source={require('../Assets/gym.gif')} />




      
    </View>
  )
}

export default GymAndUniform

const styles = StyleSheet.create({
    container:{
        padding: 5,
        backgroundColor:"white",
        flexDirection:"row",
        gap: 5,
        height: 90,
        width: 200,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 9,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 13
    }
})