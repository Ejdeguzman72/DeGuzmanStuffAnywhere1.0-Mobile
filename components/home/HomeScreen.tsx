import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView, Alert, Pressable } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { jwtHelper } from '../../helper/jwt';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';

export default function HomeScreen({ navigation }) {

  const jwt = jwtHelper();

  const logoutUser = () => {
    AsyncStorage.removeItem('DeGuzmanStuffAnywhere_Mobile_Token')
    console.log('You have logged out');
    Alert.alert(`Logging out`)
    navigation.navigate('Login')
  }
  return (
    <ScrollView style={styles.container} >
      <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
      <Pressable
          style={[styles.modalButton, styles.buttonClose]}
          onPress={logoutUser}
        >
          <Text style={styles.textStyle}>Logout</Text>
        </Pressable>
        {
          jwt ?
            <View style={styles.card}>
              <Card style={styles.boxWithShadow}>
                <Card.Title title="Books" subtitle="Family Book Recommendations" />
                <Card.Content>
                  <Button
                    color='rgb(40,44,53)' title="Books" onPress={() => navigation.navigate('Books')}
                  />
                </Card.Content>
                <Card.Cover source={require('../../assets/home-screen-pics/books.jpeg')} style={styles.cardCoverImg} />

              </Card>
            </View> : null
        }

        <Divider />

        {
          jwt ?
            <View style={styles.card}>
              <Card style={styles.boxWithShadow}>
                <Card.Title title="Contacts" subtitle="Family Contact Information" />
                <Card.Content>
                  <Button
                    color='rgb(40,44,53)' title="Contacts" onPress={() => navigation.navigate('Contact Info')}
                  />
                </Card.Content>
                <Card.Cover source={require('../../assets/home-screen-pics/landline.jpeg')} style={styles.cardCoverImg} />

              </Card>
            </View> : null
        }

        <Divider />

        {
          jwt ? 
          <View style={styles.card}>
            <Card style={styles.boxWithShadow}>
              <Card.Title title="Finance" subtitle="Family Finances" />
              <Card.Content>
                <Button
                  color='rgb(40,44,53)' title="Finance Information" onPress={() => navigation.navigate('Finance')}
                />
              </Card.Content>
              <Card.Cover source={require('../../assets/home-screen-pics/finance.jpg')} style={styles.cardCoverImg} />

            </Card>
          </View> : null
        }

        <Divider />

        {
          jwt ? 
          <View style={styles.card}>
            <Card style={styles.boxWithShadow}>
              <Card.Title title="Music" subtitle="Music Recommendations" />
              <Card.Content>
                <Button
                  color='rgb(40,44,53)' title="Music" onPress={() => navigation.navigate('Music')}
                />
              </Card.Content>
              <Card.Cover source={require('../../assets/home-screen-pics/music.jpg')} style={styles.cardCoverImg} />

            </Card>
          </View> : null
        }

        <Divider />

        {
          jwt ? 
          <View style={styles.card}>
            <Card style={styles.boxWithShadow}>
              <Card.Title title="Recipes" subtitle="Family Recipes" />
              <Card.Content>
                <Button
                  color='rgb(40,44,53)' title="Recipes" onPress={() => navigation.navigate('Recipes')}
                />
              </Card.Content>
              <Card.Cover source={require('../../assets/home-screen-pics/kitchen.jpg')} style={styles.cardCoverImg} />

            </Card>
          </View> : null
        }

        <Divider />

        {
          jwt ? 
        <View style={styles.card}>
          <Card style={styles.boxWithShadow}>
            <Card.Title title="Restaurants" subtitle="Family Restaurant Recommendations" />
            <Card.Content>
              <Button
                color='rgb(40,44,53)' title="Restaurants" onPress={() => navigation.navigate('Restaurants')}
              />
            </Card.Content>
            <Card.Cover source={require('../../assets/home-screen-pics/images.jpeg')} style={styles.cardCoverImg} />

          </Card>
        </View> : null
        }

        <Divider />

      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  text: {
    color: "black"
  },
  card: {
    padding: 20
  },
  boxWithShadow: {
    borderColor: 'black',
    borderWidth: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  cardCoverImg: {
    margin: 10
  },
  button: {
    borderRadius: 25
  },
  loginButton: {
    margin: 10,
    padding: 10
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
  modalButton: {
    width: 100,
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
    borderRadius: 60,
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