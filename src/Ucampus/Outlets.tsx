import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Outlets = () => {
    const restaurants = [
        {
            id: 1,
            name: "The Gourmet Kitchen",
            image: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/jyrqprsrxzsnprfk8drs",
            rating: 4.5,
            visited: 1200
        },
        {
            id: 2,
            name: "Future Point",
            image: "https://example.com/images/sushi_paradise.jpg",
            rating: 4.7,
            visited: 950
        },
        {
            id: 3,
            name: "Barista",
            image: "https://example.com/images/pasta_haven.jpg",
            rating: 4.3,
            visited: 800
        },
        {
            id: 4,
            name: "South Circle",
            image: "https://example.com/images/burger_bliss.jpg",
            rating: 4.6,
            visited: 1100
        },
        {
            id: 5,
            name: "BR",
            image: "https://example.com/images/taco_fiesta.jpg",
            rating: 4.4,
            visited: 700
        },
        {
            id: 6,
            name: "Venkys",
            image: "https://example.com/images/vegan_delights.jpg",
            rating: 4.8,
            visited: 650
        },
        {
            id: 7,
            name: "Bev Cafe",
            image: "https://example.com/images/steakhouse_supreme.jpg",
            rating: 4.5,
            visited: 900
        },
        {
            id: 8,
            name: "Panjaab 13",
            image: "https://example.com/images/seafood_sensation.jpg",
            rating: 4.7,
            visited: 850
        },
        {
            id: 9,
            name: "Dominos",
            image: "https://example.com/images/pizza_palace.jpg",
            rating: 4.2,
            visited: 1000
        },
        {
            id: 10,
            name: "La Pinoz",
            image: "https://example.com/images/curry_corner.jpg",
            rating: 4.6,
            visited: 750
        }
    ];
    return (
        <View style={styles.container}>
            <View style={styles.titleComponent}>
                <Text style={styles.text}>Outlets</Text>
                <View style={{ height: 1, width: 290, backgroundColor: 'black' }} />
            </View>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={restaurants}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (

                        <View style={styles.item}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                            </View>

                            <View style={styles.rightContent}>
                                <Text style={{fontSize:20}}>{item.name}</Text>
                                <View style={{ gap: 10 }}>
                                    <Text style={{fontSize:17, color:'grey'}}>Rating: {item.rating}</Text>
                                    <Text style={{fontSize:17, color:'grey'}}>{item.visited} People Ordered</Text>
                                </View>
                            </View>

                        </View>

                    )}
                />

            </View>

        </View>
    )
}

export default Outlets

const styles = StyleSheet.create({
    container: {
        marginTop:30

    },
    titleComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 10
    },
    item: {
        flexDirection: 'row',
        borderWidth:1,
        borderRadius:15,
        marginHorizontal:10,
        marginVertical:10,
        padding:10

    },
    image: {
        objectFit: 'fill',
        height: 100,
        width: 100,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:15

    },
    title: {

    },
    rightContent:{
        gap:10,
        marginLeft:20,
        justifyContent:'center'
    }


})