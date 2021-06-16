import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import Axios from 'axios';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import deviceStorage from '../../helper/DeviceStorage';
import { jwtHelper } from '../../helper/jwt';

export default function LoginScreen({ navigation }) {

  const jwt = jwtHelper();
  const token = "DeGuzmanStuffAnywhere_Mobile_Token";
  const [username, setUsername] = useState("ebdegu01");
  const [password, setPassword] = useState("Underground123!");
  const [submitted, setSubmitted] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);

  const onHandleUsernameChange = (input) => {
    const username = input
    setUsername(username);
  }

  const onHandlePassowordChange = (input) => {
    const password = input
    setPassword(password);
  }

  const onPressLogin = () => {
    Axios.post('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/login', {
      username: username,
      password: password
    })
      .then((response) => {
        deviceStorage.saveKey(token, response.data.token);
        console.log(AsyncStorage.getItem(token))
        console.log(jwt)
        if (jwt) {
          Alert.alert(`${username}:  you have logged in `)
          navigation.navigate('Home')
        } else {
          Alert.alert(`Invalid Credentials`)
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const signOut = () => {
    AsyncStorage.removeItem(token);
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
          onChangeText={onHandleUsernameChange}
          value={username}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={onHandlePassowordChange}
          value={password}
          placeholder="Enter Password"
        />
        <Pressable
          style={[styles.modalButton, styles.buttonClose]}
          onPress={onPressLogin}
        >
          <Text style={styles.textStyle}>Submit</Text>
        </Pressable>
        <Pressable
          style={[styles.modalButton, styles.buttonClose]}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.textStyle}>Register</Text>
        </Pressable>
        {
          !jwt ? <View style={styles.loginButton}>
            <Button color="black" title="Home Screen" onPress={() => navigation.navigate('Home')} />
          </View> : null
        }

        {/* <Pressable
          style={[styles.modalButton, styles.buttonClose]}
          onPress={() => this.setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Close </Text>
        </Pressable> */}
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
    fontSize: 25,
    // width: 400,
    borderRadius: 10
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  addCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 5,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 100,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  addModalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 5,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 100,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 300,
    width: 300,
    fontSize: 20
  },
  descriptionSize: {
    fontSize: 10
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  modalButton: {
    // width: 200,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    fontSize: 20
  },
  dateInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 15,
    width: 300,
    borderRadius: 10
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "black",
    // width: 300
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 30
  },
  pickerstyles: {
    width: 300,
    textAlign: 'center',
    // margin: 10,
    backgroundColor: 'white',
    fontSize: 30
  },
  pickerView: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 350,
    textAlign: 'center',
    fontSize: 50,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1
  }
});

