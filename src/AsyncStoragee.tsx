import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient';

const AsyncStoragee = () => {

const setData = async()=>{
    await AsyncStorage.setItem("name", "Akshat Bhai")
}
const getData = async()=>{
    const name = await AsyncStorage.getItem("name")
    console.warn(name);
    
}


  return (
         <View style={styles.container}>
                  <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                      <Text style={{ fontSize: 40 }}>Async Storage with React Native</Text>
                      <Button title='Set Data' onPress={setData} />
                      <Button title='Get Data' onPress={getData}/>
                  </LinearGradient>
              </View>
  )
}

export default AsyncStoragee

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
})