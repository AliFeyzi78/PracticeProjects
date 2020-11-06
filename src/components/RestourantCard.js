import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';


const RestaurantCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{props.item.name}</Text>
            </View>

            <Text style={styles.typeText}>{props.item.type}</Text>

            <Image
                style={styles.logo}
                source={{ uri: props.item.logo }}
            />

            <Text style={styles.descText}>{props.item.description}</Text>

            <Text style={styles.review}>{props.item.review}</Text>

        </View>
    );
}

export { RestaurantCard };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e88301',
    },
    header: {
        backgroundColor: '#f3caf4',
        padding: 10,
        margin: 5,
        borderColor: '#252127',
        borderRadius: 15,
        borderWidth: 1,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        alignSelf: 'center'
    },
    typeText: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    logo: {
        height: Dimensions.get('window').height * 0.33,
        margin: 5,
        borderRadius: 5,
    },
    descText: {
        margin: 7,
        fontWeight: 'bold'
    },
    review: {
        fontStyle: 'italic',
        margin: 7,
    }
})