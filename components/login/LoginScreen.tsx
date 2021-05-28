import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import Axios from 'axios';

export default function LoginScreen({ navigation }) {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleUsernameChange = (event) => {
    const passwordInfo = event.target;
    setPassword({ ...passwordInfo, password: password })
  }

  const handlePassowordChange = (event) => {
    const username = event.target;
    setUsername({ ...username, username: username });
  }

  const loginUser = () => {
    console.log('user is logging in');
    let data = {
      username: username,
      password: password
    };

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
        <View
          style={styles.titleContainer}
        >
          <Text style={styles.title}>DeguzmanStuffAnywhere</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
        // onChangeText={onChangeText}
        // value={text}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="Enter Password"
        // keyboardType="numeric"
        />
        <View style={styles.loginButton}>
          <Button color="black" title="Submit" onPress={loginUser} />
        </View>
        <View style={styles.loginButton}>
          <Button color="black" title="Home Screen" onPress={() => navigation.navigate('Home')} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    margin: 10,
    padding: 10
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 25
  },
  titleContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 20,
    margin: 10
  },
  title: {
    fontSize: 25,
    color: 'black',
    padding: 10,
    textAlign: 'center'
  }
});

