import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={() => props.onNewRequest()}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fd6205',
        margin: 10,
        padding: 5,
        borderRadius: 15,
        width: Dimensions.get('window').width * 0.75,
        alignSelf: 'center',
    },
    text: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 20,
    }
});


export { Button };