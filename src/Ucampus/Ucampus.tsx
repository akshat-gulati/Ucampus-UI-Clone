import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import GymAndUniform from './GymAndUniform';
import Highlight from './Highlight';

const Ucampus = () => {
  const data2 = [
    {
      title1: 'Beverages',
      image1: null,
      title2: 'Chai',
      image2: null,
    },
    {
      title1: 'Snacks',
      image1: null,
      title2: 'Maggi',
      image2: null,
    },
    {
      title1: 'Breakfast',
      image1: null,
      title2: 'Sandwiches',
      image2: null,
    },
    {
      title1: 'Beverages',
      image1: null,
      title2: 'Chai',
      image2: null,
    },
    {
      title1: 'Snacks',
      image1: null,
      title2: 'Maggi',
      image2: null,
    },
    {
      title1: 'Breakfast',
      image1: null,
      title2: 'Sandwiches',
      image2: null,
    },
  ];

  const data = [
    {
      title: 'Juice Bar',
      image: null,
    },
    {
      title: 'Punjab 13',
      image: null,
    },
    {
      title: 'Sip-Stop',
      image: null,
    },
    {
      title: 'Juice Bar',
      image: null,
    },
    {
      title: 'Punjab 13',
      image: null,
    },
    {
      title: 'Sip-Stop',
      image: null,
    },
  ];

  
    return (
    <LinearGradient colors={['#E42125', '#FFFFFF', '#FFFFFF']}style={styles.linearGradient}>
      <SafeAreaView  style = {styles.container}>
        <Header/>
        <ScrollView style={{backgroundColor: "#F1F1F5"}}>
          <View style={{flexDirection: 'row', justifyContent: "space-around"}}>
          <GymAndUniform />
          <GymAndUniform />
          </View>
        <Highlight/>
        </ScrollView>
      </SafeAreaView>
      </LinearGradient>
    )
  }
  
  export default Ucampus
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      // padding: 5,
      // backgroundColor:"red"

    },
    header:{


    },
    linearGradient: {
      flex: 1,
      position:"relative"
    },


  })