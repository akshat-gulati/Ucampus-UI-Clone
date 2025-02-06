import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Header from './Header';
import GymAndUniform from './GymAndUniform';
import Highlight from './Highlight';
import Collections from './Collections';
import Trending from './Trending';
import Outlets from './Outlets';

const Ucampus = () => {
  return (
    <LinearGradient colors={['#E42125', '#FFFFFF', '#FFFFFF']} style={styles.linearGradient}>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={{ backgroundColor: "#F1F1F5" }}>
          <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
            <GymAndUniform />
            <GymAndUniform />
          </View>
          <Highlight />
          <Collections />
          <Trending />
          <Outlets/>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default Ucampus

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50

  },
  header: {


  },
  linearGradient: {
    flex: 1,
    position: "relative",
  },


})