import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuantityHome from './QuantityHome'
import LinearGradient from 'react-native-linear-gradient'

const App = () => {
  return (
    <View>
      <QuantityHome/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: 'center',
        alignItems:'center',
        // alignContent:"center"
    },
    linearGradient:{

    }
})