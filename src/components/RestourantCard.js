import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

// {
//     "id": 6175,
//     "uid": "ea278f6b-8234-42fa-ba77-9b8d0e533a3a",
//     "name": "Big Eats",
//     "type": "Ramen",
//     "description": "Culver’s Restaurant was founded by the Culver family in 1984, which eventually branched out to more than 300 franchised restaurants all over the US. Culver’s is well-known for its ButterBurger, which made the restaurant extremely famous. They also have other items which include salads, sandwiches, desserts, etc.",
//     "review": "They are way understaffed, where the cashier needs to stop taking orders to help pack to-go orders. The line ends up piling up and people are neglected.  Seen this happen multiple times during lunch hours.",
//     "logo": "https://loremflickr.com/500/500/restaurant",
//     "phone_number": "(792) 894-7024 x8918",
//     "address": "Suite 963 250 Mona Port, McKenzieshire, KY 59600",


//   }

const RestaurantCard = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Big Eats</Text>
            </View>

            <Text style={styles.typeText}>Ramen</Text>

            <Image
                style={styles.logo}
                source={{ uri: 'https://loremflickr.com/500/500/restaurant' }}
            />

            <Text style={styles.descText}>Culver’s Restaurant was founded by the Culver family in 1984, which eventually branched out to more than 300 franchised restaurants all over the US. Culver’s is well-known for its ButterBurger, which made the restaurant extremely famous. They also have other items which include salads, sandwiches, desserts, etc.</Text>

            <Text style={styles.review}>They are way understaffed, where the cashier needs to stop taking orders to help pack to-go orders. The line ends up piling up and people are neglected.  Seen this happen multiple times during lunch hours.</Text>

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
        borderWidth: 3,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
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