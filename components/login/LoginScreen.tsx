import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
        <View 
          //style={styles.titleContainer}
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
    padding: 10
  },
  title: {
    fontSize: 25,
    color: 'black',
    padding: 10,
    textAlign: 'center'
  }
});

