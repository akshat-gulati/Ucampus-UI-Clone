import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import UseLayoutEffect from './UseLayoutEffect'
import UseMemo from './UseMemo'

// useLayoutEffect
//useRef
//useMemo
//useCallback

const Hooks = () => {
  return (
    <View style={styles.container}>
      {/* <UseLayoutEffect /> */}
      <UseMemo />

    </View>
  )
}

export default Hooks

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

})