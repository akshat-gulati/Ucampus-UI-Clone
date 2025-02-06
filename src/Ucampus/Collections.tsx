import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'



const Collections = () => {
    const collectionData1 = [
        { id: '1', title: 'Chinese', image: 'https://cdn.shopify.com/s/files/1/0042/3834/4321/files/DDM-V-cooked_d34b4261-1a4c-459a-911f-918b9deeb2a7_1024x1024.png?v=1712736448' },
        { id: '2', title: 'Breakfast', image: 'https://static.vecteezy.com/system/resources/previews/025/066/833/non_2x/breakfast-with-ai-generated-free-png.png' },
        { id: '3', title: 'Lunch', image: 'https://cdn-icons-png.flaticon.com/512/5417/5417227.png' },
        { id: '4', title: 'Ice Cream', image: 'https://static.vecteezy.com/system/resources/previews/044/570/761/non_2x/assortment-of-colorful-ice-cream-scoops-in-waffle-cones-with-fresh-fruits-on-a-transparent-background-png.png' },
        { id: '5', title: 'Dinner', image: 'https://cdn-icons-png.flaticon.com/512/4639/4639426.png' },
        { id: '6', title: 'Snacks', image: 'https://assets.wedeliverlocal.co.uk/cdn/images/seopagesimages/snacks.png?w=650' }]

    const collectionData2 = [
        { id: '7', title: 'Desserts', image: 'https://popmenucloud.com/cdn-cgi/image/width%3D600%2Cheight%3D600%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/wszcjbgo/0e6f90f4-518b-442b-8406-185024d12995.png' },
        { id: '8', title: 'Beverages', image: 'https://tvkbeverages.com/wp-content/uploads/2024/05/11-768x768.png' },
        { id: '9', title: 'Salads', image: 'https://www.freson.com/wp-content/uploads/2023/06/Top-Recipe-apple-cucumber-salad.png' },
        { id: '10', title: 'Soups', image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/01/480x396/gallery-1452093797-rosemary-chicken-noodle-soup-3.png?resize=640:*' },
        { id: '11', title: 'Appetizers', image: 'https://png.pngtree.com/png-clipart/20230927/original/pngtree-appetizer-finger-food-png-image_13150030.png' },
        { id: '12', title: 'Main Course', image: 'https://cdn-icons-png.flaticon.com/512/4507/4507635.png' },
    ];

    return (
        <View>
            <View style={styles.titleComponent}>
                <Text style={styles.text}>Collections</Text>
                <View style={{ height: 1, width: 275, backgroundColor: 'black' }} />
            </View>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={collectionData1}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.text}>{item.title}</Text>

                        </View>

                    )}
                />
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={collectionData2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.text}>{item.title}</Text>

                        </View>

                    )}
                />

            </View>
        </View>
    )
}

export default Collections

const styles = StyleSheet.create({
    container: {

    },
    titleComponent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10
    },
    item: {
        // flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        // backgroundColor: "white",
        margin: 10,
        width: 50,
        height: 50,
        objectFit: 'cover'
    },
    text: {
        fontSize: 18,
        paddingHorizontal: 10
    },
})