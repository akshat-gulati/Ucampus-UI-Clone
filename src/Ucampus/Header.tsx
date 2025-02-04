import { Animated, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <View style={styles.upperHeader}>
                <View style={styles.leftUpperHeader}>
                    <View style={styles.leftUpperHeaderTop}>
                        <Image source={require("../Assets/location.png")} style={styles.upperHeaderImage} />
                        <Text style={{ fontSize: 20, color: "white" }}>Campus Punjab</Text>
                        <Image source={require("../Assets/chevron.down.png")} style={styles.upperHeaderImage} />
                    </View>
                    <View style={styles.upperHeaderBottom}>
                        <Text style={{ color: "white", fontSize: 17 }}>Chitkara University, Punjab</Text>
                    </View>
                </View>
                <View style={styles.rightUpperHeader}>
                    <View>
                        <Image style={styles.umoneyImage} source={require("../Assets/indianrupeesign.circle.fill.png")} />
                    </View>
                    <View>
                        <Text style={{ color: "white" }}>Umoney</Text>
                        <Text style={{ color: "white", alignSelf: "center" }}>₹111</Text>
                    </View>
                </View>
            </View>
            <View style={{ position: "relative" }}>
                <View style={styles.bendStyler} />
                <View style={styles.lowerHeader}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                        <Image style={{ tintColor: '#7F7F7F', objectFit: 'cover', height: 27, width: 27 }} source={require("../Assets/magnifyingglass.png")} />
                        <Text style={{ color: "#9A9A9A" }}>Good Food...</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 5,
        gap: 15,
        margin: 5


    },
    header: {

    },
    upperHeader: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftUpperHeader: {

    },
    leftUpperHeaderTop: {
        flexDirection: "row",
        gap: 7

    },
    upperHeaderImage: {
        width: 17, height: 17, objectFit: "cover", tintColor: "white"
    },
    upperHeaderBottom: {

    },
    rightUpperHeader: {
        paddingHorizontal: 13,
        borderWidth: 2,
        borderColor: "pink",
        borderRadius: 50,
        // backgroundColor:"red",
        flexDirection: "row",
        alignItems: "center"


    },

    lowerHeader: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 50,
        justifyContent: 'center',
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 9,
        shadowRadius: 4,
        elevation: 5,
    },
    umoneyImage: {
        width: 23, 
        height: 23, 
        objectFit: "cover", 
        tintColor: "white",
        marginRight: 10,
    },

    bendStyler: { 
        backgroundColor: "white", 
        height: 40, 
        width: "106%", 
        left: -9, 
        bottom: -9, 
        position: 'absolute', 
        borderTopStartRadius: 30, 
        borderTopEndRadius: 30 
    }
})