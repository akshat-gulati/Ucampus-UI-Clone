import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hooks from './Hooks/Hooks'
import Gradient from './Gradient'
import AsyncStoragee from './AsyncStoragee'
import Navigation from './Navigation'
import Ucampus from './Ucampus/Ucampus'

const App = () => {
  return (
    <Ucampus/>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
  }

})