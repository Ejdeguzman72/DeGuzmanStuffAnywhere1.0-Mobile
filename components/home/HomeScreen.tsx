import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, ScrollView, Alert, Pressable } from 'react-native';
import { Card, Paragraph, Title, Divider } from 'react-native-paper';
import { jwtHelper } from '../../helper/jwt';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {

  const jwt = jwtHelper();

  const logoutUser = () => {
    AsyncStorage.removeItem('DeGuzmanStuffAnywhere_Mobile_Token')
    console.log('You have logged out');
    Alert.alert(`Logging out`)
    navigation.navigate('Login')
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} >
        <ImageBackground source={require('../../assets/app-background.jpg')} style={styles.image}>
          <View>
            {/* <View style={styles.titleContainer}>
              <View>
                <Text style={styles.title}>DeGuzmanStuffAnywhere</Text>
              </View>
              <View>
                {
                  jwt ?
                    <Pressable
                      style={styles.modalButton}
                      onPress={logoutUser}
                    >
                      <Text
                        style={styles.textStyle}
                      >
                        Logout
                      </Text>
                    </Pressable> : null
                }
              </View>
            </View> */}
          </View>
          {
            jwt ?
              <View style={styles.card}>
                <Card style={styles.boxWithShadow}>
                  <Card.Title title="Book Recommendations" subtitle="Family Book Recommendations" />
                  <Card.Content>
                    <Button
                      color='rgb(40,44,53)' title="Books" onPress={() => navigation.navigate('Book Recommendations')}
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
                      color='rgb(40,44,53)' title="Contacts" onPress={() => navigation.navigate('Contact Book')}
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
                      color='rgb(40,44,53)' title="Finance Information" onPress={() => navigation.navigate('Finance Info')}
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
                      color='rgb(40,44,53)' title="Music" onPress={() => navigation.navigate('Music Recommendations')}
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
                      color='rgb(40,44,53)' title="Recipes" onPress={() => navigation.navigate('Recipe Book')}
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
                      color='rgb(40,44,53)' title="Restaurants" onPress={() => navigation.navigate('Favorite Restaurants')}
                    />
                  </Card.Content>
                  <Card.Cover source={require('../../assets/home-screen-pics/images.jpeg')} style={styles.cardCoverImg} />

                </Card>
              </View> : null
          }

          <Divider />

        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  homeScreenTitle: {
    borderColor: 'black',
    borderWidth: 5
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
    shadowRadius: 10,
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
    borderRadius: 50,
    margin: 10,
    // width: 350,
    height: 70,
    flexDirection: 'row',
    fontSize: 20,
    borderColor: 'black',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: 'black',
    // padding: 10,
    // textAlign: 'center'
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
  modalButtonView: {
    alignItems: 'center'
  },
  modalButton: {
    // position: 'absolute',
    backgroundColor: 'rgb(40,44,53)',
    borderRadius: 50,
    // height: 80,
    margin: 10
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
    // fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    padding: 10
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