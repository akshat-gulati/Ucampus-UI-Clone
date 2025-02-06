import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const Highlight = () => {
    const foodItems = [
        { id: '1', name: 'Pizza', image: 'https://freesvg.org/img/1548611293.png' },
        { id: '2', name: 'Burger', image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png' },
        { id: '3', name: 'Sushi', image: 'https://cdn.pixabay.com/photo/2023/08/12/02/56/sushi-8184633_1280.png' },
        { id: '4', name: 'Pasta', image: 'https://res.cloudinary.com/kraft-heinz-whats-cooking-ca/image/upload/f_auto/q_auto/c_limit,w_1024/f_auto/q_auto/Creative_Content_Panel_mobile_glrrct?_a=BAVAfVDW0' },
        { id: '5', name: 'Salad', image: 'https://www.freson.com/wp-content/uploads/2023/06/Top-Recipe-apple-cucumber-salad.png' },
        { id: '6', name: 'Ice Cream', image: 'https://static.vecteezy.com/system/resources/previews/044/570/761/non_2x/assortment-of-colorful-ice-cream-scoops-in-waffle-cones-with-fresh-fruits-on-a-transparent-background-png.png' },
        { id: '7', name: 'Cold Drink', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3QMGniZyuhkcZWlNZYttC_uplmtL6wD_rA&stbn0.gstatic.com/images?q=tbn:ANd9GcSaTZNpjTH4gIuevU1f7MWL9uFVYmawbdZMKg&s' },
        { id: '8', name: 'Tacos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrg9XmU7y0x5d2vmuMJ_kc7LWC2zXltw87yQ&s' },
        { id: '9', name: 'Pancakes', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzzmEFMmtAdJ1jXM31Beu6C2PmHnJRBMXrBw&s' },
        { id: '10', name: 'Sandwich', image: 'https://static.vecteezy.com/system/resources/thumbnails/041/277/336/small_2x/ai-generated-sandwich-with-ham-cheese-tomatoes-and-lettuce-isolated-on-transparent-background-png.png' },
    ];
    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <View style={{gap:10}}>
                    <Text style={{borderWidth: 2, borderColor: "#409038", backgroundColor: "#D3FDD0", borderRadius: 50, padding: 5, width:130}}>Newly Launched</Text>

                    <Text style={{fontSize: 17}}>Venky's</Text>
                    <Text style={{color:"grey"}}>Venky's - CU Punjab Rajpura</Text>
                    <Text style={{backgroundColor:"red", borderRadius:13, paddingVertical:6, width: 100, color:"white", textAlign:"center", }}>Full menu</Text>
                </View>
                <View>
                    <Image style={{height: 110, width: 110, objectFit:'cover'}} source={require('../Assets/Store.gif')} />
                </View>
            </View>
            <FlatList
            showsHorizontalScrollIndicator = {false}
                horizontal
                data={foodItems}
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

export default Highlight

const styles = StyleSheet.create({
    container: {

        margin: 10,
        borderWidth: 2,
        borderColor: "#6EC389",
        borderRadius: 10,
        height: 265,
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 10

    },
    topContent: { 
        flexDirection: "row", 
        justifyContent:"space-between" },

    item: {
        // flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        backgroundColor: "white",
        margin: 10,
        width: 50,
        height: 50,
        objectFit:'cover'
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 10
    },
})