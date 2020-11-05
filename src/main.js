import axios from 'axios';
import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, } from 'react-native';


const Main = (props) => {

  const fetchData_Then = () => {
    console.log("starting fetch...")

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log(response);
      })
    console.log("end fetch....")
  }

  const fetchData_Await = async () => {
    console.log("starting fetch....");

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    console.log(response);
    console.log("end await fetch");
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Main</Text>
        <Button title="Fetch Data with Then" onPress={fetchData_Then} />
        <Button title="Fetch Data with Await" onPress={fetchData_Await} />
      </View>
    </SafeAreaView>
  );
}

export default Main;