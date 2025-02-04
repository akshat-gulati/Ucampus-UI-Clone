import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useRef, useState } from 'react'

const UseLayoutEffect = () => {
    const [dimensons, setdimensons] = useState({})
    const viewRef = useRef<View>(null)


    useLayoutEffect(() => {
        if (viewRef.current) {
            viewRef.current.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
                setdimensons({ x, y, width, height, pageX, pageY })
            })

        }
    }, [])
console.log('====================================');
console.log(dimensons);
console.log('====================================');
    return (
        <View style={styles.container}>
            <View ref={viewRef} style={styles.box} />
            <Text>Box Dimensions: </Text>
            <Text>{JSON.stringify(dimensons, null, 2)}</Text>
        </View>
    )
}

export default UseLayoutEffect

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue'

    }
})