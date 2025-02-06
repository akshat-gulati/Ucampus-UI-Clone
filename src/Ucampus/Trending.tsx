import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trending = () => {
    const restaurants = [
        {
            id: 1,
            name: "Venky's",
            image: "https://play-lh.googleusercontent.com/jAQD-KjnIBZclH6-CDzqyzGkhr6X-TDOBlPfRkEFu9ghTlnwQ_aZCV1Led2eMHilibA=w600-h300-pc0xffffff-pd"
        },
        {
            id: 2,
            name: "South Circle",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfD7M4uAMXxDIHBjawrRpr1DJ3jnT9dHqcw&s"
        },
        {
            id: 3,
            name: "Sip Stop",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0b6BuZeEG1EU5GshnBn6rwqk3JAuZHUJVg&s"
        },
        {
            id: 4,
            name: "Grab N Go",
            image: "https://dcassetcdn.com/design_img/54913/32188/32188_986732_54913_image.png"
        },
        {
            id: 5,
            name: "Panjaab 13",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-mTM81G1wtHy2n59eQv8v-V7tMOZmbRcwcw&s"
        },
        {
            id: 6,
            name: "Baskin Robbin",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png"
        }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.titleComponent}>
                <Text style={styles.text}>Trending Outlets</Text>
                <View style={{ height: 1, width: 225, backgroundColor: 'black' }} />
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={restaurants}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.text}>{item.name}</Text>

                    </View>

                )}
            />
        </View>
    )
}

export default Trending

const styles = StyleSheet.create({
    container: {
        marginTop:30,

    },
    titleComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom:20
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 10
    },
    item:{
        borderWidth:1,
        marginHorizontal:10,
        alignItems:'center',
        backgroundColor:'white',
        padding:5,
        borderRadius: 15

    },
    title:{

    },
    image:{
        objectFit:'fill',
        height: 100,
        width:100,

    }



})