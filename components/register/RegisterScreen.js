import Axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPasssword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);


  const onHandleUsernameChange = (input) => {
    setUsername(input)
  }

  const onHandlePasswordChange = (input) => {
    setPasssword(input)
  }

  const onHandleNameChange = (input) => {
    setName(input)
  }

  const onHandleEmailChange = (input) => {
    setEmail(input)
  }

  const registerUser = () => {
    Axios.post('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/register', {
      username: username,
      password: password,
      name: name,
      email: email
    })
      .then((response) => {
        setSubmitted(true);
        if (submitted) {
          Alert.alert(
            `${username} has been registered! Wait for admin to enable account.`
          )
        }
        navigation.navigate('Login');
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image} >
        <View style={styles.boxwithShadow}>
          <View style={styles.titleContainer}>
            {/* {
              submitted ? 
            } */}
            <TextInput
              style={styles.input}
              placeholder="Enter Username"
              onChangeText={onHandleUsernameChange}
              value={username}
              keyboardAppearance='dark'
              autoFocus={true}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              onChangeText={onHandlePasswordChange}
              value={password}
              placeholder="Enter Password"
              keyboardAppearance='dark'
              autoFocus={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              onChangeText={onHandleNameChange}
              value={name}
              keyboardAppearance='dark'
              autoFocus={true}
            />
            <TextInput
              style={styles.input}
              onChangeText={onHandleEmailChange}
              value={email}
              placeholder="Enter Email"
              keyboardType="email-address"
              keyboardAppearance='dark'
              autoFocus={true}
            />
            <Pressable
              style={[styles.modalButton, styles.buttonClose]}
              onPress={registerUser}
            ><Text style={styles.textStyle}>Register</Text></Pressable>
          </View>
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
    fontSize: 25,
    // width: 400,
    borderRadius: 10
  },
  titleContainer: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 20,
    margin: 20,
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
    fontSize: 20,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center'
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
  },
  titleContainer: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 20,
    margin: 10
  },
  boxWithShadow: {
    borderColor: 'black',
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5
  },
});

export default RegisterScreen;